import {slides} from "./slides";
import styles from "./styles.module.scss";
import {usePresentation} from "../../hook/usePresentation";
import {CurrentSlide} from "../CurrentSlide";

export const SlideScreen = () => {

  const { currentSlide } = usePresentation();

  console.log(slides);

  return (
      <div className={styles.slideContainer}>
        <CurrentSlide className={styles.slideImage} />
        <div className={styles.slideFooter}>
          <img src={slides[currentSlide].speaker.image} alt="avatar"/>
          <div className={styles.speakerInfo}>
            <p>Falando Agora:</p>
            <p>{slides[currentSlide].speaker.name}</p>
          </div>
        </div>
      </div>
  )
}