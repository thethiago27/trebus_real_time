import {slides} from "./slides.ts";
import styles from "./styles.module.scss";
import {usePresentation} from "../../hook/usePresentation.tsx";
import {CurrentSlide} from "../CurrentSlide";

export const SlideScreen = () => {

  const { currentSlide } = usePresentation();


  return (
      <div className={styles.slideContainer}>
        <CurrentSlide className={styles.slideImage} />
        <div className={styles.slideFooter}>
          <img src={slides[currentSlide].speaker_image} alt="avatar"/>
          <div className={styles.speakerInfo}>
            <p>Falando Agora:</p>
            <p>{slides[currentSlide].speaker}</p>
          </div>
        </div>
      </div>
  )
}