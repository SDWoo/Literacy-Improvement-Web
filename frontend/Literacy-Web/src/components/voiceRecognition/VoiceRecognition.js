import React, { useState, useCallback } from "react";
import { Button, TextField } from "@material-ui/core";
import "./VoiceRecognition.css";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import ReactAudioPlayer from "react-audio-player";
import { useSpeechRecognition } from "react-speech-kit";

export default function VoiceRecognition({ onClickVoiceRecognition }) {
  const [stream, setStream] = useState();
  const [media, setMedia] = useState();
  const [onRec, setOnRec] = useState(true);
  const [isCheckRec, setIsCheckRec] = useState(true);
  const [source, setSource] = useState();
  const [analyser, setAnalyser] = useState();
  const [audioUrl, setAudioUrl] = useState();
  const [reAudioUrl, setReAudioUrl] = useState();

  // 음성인식 API 사용
  const [value, setValue] = useState("");
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      // 음성인식 결과가 value 상태값으로 할당됩니다.
      setValue(result);
    },
  });

  let voiceFile;

  const onRecAudio = () => {
    // 음원정보를 담은 노드를 생성하거나 음원을 실행또는 디코딩 시키는 일을 한다
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    // 자바스크립트를 통해 음원의 진행상태에 직접접근에 사용된다.
    const analyser = audioCtx.createScriptProcessor(0, 1, 1);
    setAnalyser(analyser);

    function makeSound(stream) {
      // 내 컴퓨터의 마이크나 다른 소스를 통해 발생한 오디오 스트림의 정보를 보여준다.
      const source = audioCtx.createMediaStreamSource(stream);
      setSource(source);
      source.connect(analyser);
      analyser.connect(audioCtx.destination);
    }
    // 마이크 사용 권한 획득
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      setStream(stream);
      setMedia(mediaRecorder);
      makeSound(stream);

      analyser.onaudioprocess = function (e) {
        // 3분(180초) 지나면 자동으로 음성 저장 및 녹음 중지
        if (e.playbackTime > 180) {
          stream.getAudioTracks().forEach(function (track) {
            track.stop();
          });
          mediaRecorder.stop();
          // 메서드가 호출 된 노드 연결 해제
          analyser.disconnect();
          audioCtx.createMediaStreamSource(stream).disconnect();

          mediaRecorder.ondataavailable = function (e) {
            setAudioUrl(e.data);
            setOnRec(true);
          };
        } else {
          setOnRec(false);
        }
      };
    });

    // 음성인식 API
    {
      listen();
    }
  };

  // 사용자가 음성 녹음을 중지했을 때
  const offRecAudio = () => {
    // dataavailable 이벤트로 Blob 데이터에 대한 응답을 받을 수 있음
    media.ondataavailable = function (e) {
      setAudioUrl(e.data);
      setOnRec(true);
    };

    // 모든 트랙에서 stop()을 호출해 오디오 스트림을 정지
    stream.getAudioTracks().forEach(function (track) {
      track.stop();
    });

    // 미디어 캡처 중지
    media.stop();
    // 메서드가 호출 된 노드 연결 해제
    analyser.disconnect();
    source.disconnect();

    stop();
  };

  const onSubmitAudioFile = useCallback(() => {
    console.log({ value });
    if (audioUrl) {
      console.log(audioUrl);
      console.log(URL.createObjectURL(audioUrl)); // 출력된 링크에서 녹음된 오디오 확인 가능
    }
    // File 생성자를 사용해 파일로 변환
    const audioFile = new File([audioUrl], "audioFile.mp3", {
      lastModified: new Date().getTime(),
      type: "audio",
    });
    console.log(audioFile);
    // 오디오 파일 자체를 보내기
    onSearchAudioFile(audioFile);

    setIsCheckRec(false);
  }, [audioUrl]);

  // 결과확인 클릭 시 음성파일 보내기
  function onSearchAudioFile(audioUrl) {
    let reader = new FileReader();

    // Audio 파일 base64로 인코딩
    if (audioUrl) {
      reader.readAsDataURL(audioUrl);
    }
    reader.onload = function (e) {
      // Base64로 인코딩한 후 다시 디코딩 해준다.
      const base64Audio = e.target.result.toString().split(",");
      console.log(base64Audio[1]);
      const contentType = base64Audio[0].split(":")[1];
      const raw = window.atob(base64Audio[1]);
      const rawLength = raw.length;
      // 부호 없는 1byte 정수 배열을 생성
      const uInt8Array = new Uint8Array(rawLength);
      // 길이만 지정된 배열
      let i = 0;
      while (i < rawLength) {
        uInt8Array[i] = raw.charCodeAt(i);
        i++;
      }

      const reAudioBlob = new Blob([uInt8Array], {
        type: contentType,
      });
      setReAudioUrl(reAudioBlob);

      // reAudioUrl로 file을 만들어서 formData에 넣어서 전송하기

      // base64Audio[1] base64, raw data를 쪼개서 form data에 넣어서 보내기

      onClickVoiceRecognition(base64Audio[1]);
    };
  }

  const onRecAudioButton = (
    <Button color="primary" variant="contained" onClick={onRecAudio}>
      녹음시작
    </Button>
  );
  const offRecAudioButton = (
    <Button color="primary" variant="contained" onClick={offRecAudio}>
      녹음종료
    </Button>
  );

  const checkRec = (
    <Button color="primary" variant="contained" onClick={onSubmitAudioFile}>
      결과확인
    </Button>
  );
  const checkedRec = (
    <div>
      <Grid item xs={12}>
        <Button color="primary" variant="contained" onClick={onSubmitAudioFile}>
          결과확인
        </Button>
      </Grid>
      <Grid item xs={12}>
        <div>{value}</div>
      </Grid>
      <Grid item xs={12}>
        {reAudioUrl ? (
          <ReactAudioPlayer src={URL.createObjectURL(reAudioUrl)} controls />
        ) : undefined}
      </Grid>
    </div>
  );

  return (
    <div className="header">
      <h3 className="title"> 음성으로 검색하기 </h3>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {onRec ? onRecAudioButton : offRecAudioButton}
        </Grid>
        <Grid item xs={12}>
          {isCheckRec ? checkRec : checkedRec}
        </Grid>
      </Grid>
      {listening}
    </div>
  );
}
