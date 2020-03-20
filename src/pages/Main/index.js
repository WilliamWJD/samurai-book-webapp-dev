import React, { useEffect } from 'react';
import Quagga from 'quagga'

import { Video } from './styles';

function Main() {
  useEffect(() => {
    //VERIFICA SE O NAVEGADOR TEM A POSSIBILIDADE DE ABRIR A CAMERA
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      Quagga.init({
        inputSream: {
          name: "Live",
          type: "LiveStream",
          target: document.querySelector("#video"),
          constraints: {
            facingMode: "environment",
          }
        },
        numOfWorkers: 1,
        locate: true,
        decoder: {
          readers: ["ean_reader"]
        }
      },
        err => {
          if (err) {
            console.error(err)
            alert("Erro ao abrir a câmera do dispositivo, por favor, dê a permissão de uso.")
            return;
          }
          Quagga.start();
        }
      )
    }
  }, [])

  return (
    <Video id="video" />
  );
}

export default Main;
