import {slides} from "../SlideScreen/slides";
import {usePresentation} from "../../hook/usePresentation";

interface CurrentSlideProps {
  className?: string;
}

export const CurrentSlide = ({ className }: CurrentSlideProps) => {

  const { currentSlide } = usePresentation();

  return (
      <img
          src={slides[currentSlide].lamina}
          alt="slide"
          className={className}
      />
  )
}