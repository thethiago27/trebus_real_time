import {ControlButton} from "../../components/ControlButton";
import {databaseClient} from "../../services/firebase.ts";
import {get, ref, set} from "firebase/database";

export const Controls = () => {

  const buttonList = [
    {
      name: 'Next',
      action: 'next'
    },
    {
      name: 'Previous',
      action: 'previous'
    }
  ]

  const handleNextSlide = async () => {

    // Increment the current slide

    const currentSlideRef = ref(databaseClient, `slides/`);

    const currentSlideSnapshot = await get(currentSlideRef);

    const currentSlide = currentSlideSnapshot.val();

    const newSlide = currentSlide.current_slide + 1;

    await set(ref(databaseClient, `slides/current_slide`), newSlide);
  }

  const handlePreviousSlide = async () => {
    // Decrement the current slide

    const currentSlideRef = ref(databaseClient, `slides/`);

    const currentSlideSnapshot = await get(currentSlideRef);

    const currentSlide = currentSlideSnapshot.val();

    const newSlide = currentSlide.current_slide - 1;

    await set(ref(databaseClient, `slides/current_slide`), newSlide);
  }

  return (
      <main>
        <ControlButton
            onClick={handleNextSlide}
        >
          Next
        </ControlButton>
        <ControlButton
            onClick={handlePreviousSlide}
        >
          Previous
        </ControlButton>
      </main>
  )
}
