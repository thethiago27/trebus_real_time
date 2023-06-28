import {ControlButton} from "../../components/ControlButton";
import {databaseClient} from "../../services/firebase.ts";
import {ref, get, set} from "firebase/database";

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

  const handleClick = async () => {

    // Increment the current slide

    const currentSlideRef = ref(databaseClient, `slides/`);

    const currentSlideSnapshot = await get(currentSlideRef);

    const currentSlide = currentSlideSnapshot.val();

    const newSlide = currentSlide.current_slide + 1;

    await set(ref(databaseClient, `slides/current_slide`), newSlide);
  }

  return (
      <main>
        {buttonList.map((button) => (
            <ControlButton
                onClick={handleClick}
                key={button.name}
            >
              {button.name}
            </ControlButton>
        ))}
      </main>
  )
}
