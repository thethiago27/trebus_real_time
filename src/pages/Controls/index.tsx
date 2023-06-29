import { ControlButton } from "../../components/ControlButton";
import { databaseClient } from "../../services/firebase.ts";
import { get, ref, set } from "firebase/database";

export const Controls = () => {
  const updateSlide = async (increment: number) => {
    const currentSlideRef = ref(databaseClient, "slides/");
    const currentSlideSnapshot = await get(currentSlideRef);
    const currentSlide = currentSlideSnapshot.val();
    const newSlide = currentSlide.current_slide + increment;
    await set(ref(databaseClient, "slides/current_slide"), newSlide);
  };

  const handleNextSlide = async () => {
    await updateSlide(1);
  };

  const handlePreviousSlide = async () => {
    await updateSlide(-1);
  };

  return (
      <main>
        <ControlButton onClick={handleNextSlide}>Next</ControlButton>
        <ControlButton onClick={handlePreviousSlide}>Previous</ControlButton>
      </main>
  );
};