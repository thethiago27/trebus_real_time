import lamina_0 from "../../assets/slides/lamina_0.png";
import lamina_1 from "../../assets/slides/lamina_1.png";
import lamina_2 from "../../assets/slides/lamina_2.png";
import lamina_3 from "../../assets/slides/lamina_3.png";
import lamina_4 from "../../assets/slides/lamina_4.png";
import lamina_5 from "../../assets/slides/lamina_5.png";
import lamina_6 from "../../assets/slides/lamina_6.png";
import lamina_7 from "../../assets/slides/lamina_7.png";
import lamina_8 from "../../assets/slides/lamina_8.png";
import lamina_9 from "../../assets/slides/lamina_9.png";
import lamina_10 from "../../assets/slides/lamina_10.png";
import lamina_11 from "../../assets/slides/lamina_11.png";
import lamina_12 from "../../assets/slides/lamina_12.png";
import lamina_13 from "../../assets/slides/lamina_13.png";
import lamina_14 from "../../assets/slides/lamina_14.png";
import lamina_15 from "../../assets/slides/lamina_15.png";

import thiago from "../../assets/speaker_image/thiago.png";
import gabriel from "../../assets/speaker_image/gabriel.png";
import andre from "../../assets/speaker_image/andre.png";

type Speaker = {
  name: string;
  image: string;
}

type Slides = {
  lamina: any | string;
  speaker: Speaker;
}

const speakers: Speaker[] = [
  {name: "Thiago Rodrigues", image: thiago},
  {name: "André Luiz", image: andre},
  {name: "Gabriel", image: gabriel},
];

const laminas: string[] = [
  lamina_0,
  lamina_1,
  lamina_2,
  lamina_3,
  lamina_4,
  lamina_5,
  lamina_6,
  lamina_7,
  lamina_8,
  lamina_9,
  lamina_10,
  lamina_11,
  lamina_12,
  lamina_13,
  lamina_14,
  lamina_15
];

const getCurrentSpeaker = (i: number): Speaker => {

  const speaker: Speaker = {
    name: "",
    image: ""
  }

  if (i < 6) {
    speaker.name = speakers[0].name;
    speaker.image = speakers[0].image;
  } else if (i < 9) {
    speaker.name = speakers[2].name;
    speaker.image = speakers[2].image;
  } else if (i < 11) {
    speaker.name = speakers[1].name;
    speaker.image = speakers[1].image;
  } else if (i === 13) {
    speaker.name = "João";
    speaker.image = "imagem_13.jpg";
  } else {
    speaker.name = speakers[0].name;
    speaker.image = speakers[0].image;
  }

  return speaker;

}


export const slides: Slides[] = laminas.map((lamina, i) => {
  return {
    lamina,
    speaker: getCurrentSpeaker(i)
  }
});

