import styles from "./styles.module.scss";
import { ref, update, push, child } from "firebase/database";
import {getNickname} from "../../../../services/registration.ts";
import {databaseClient} from "../../../../services/firebase.ts";

export const ReactionButtons = () => {

  const reactionList: string[] = ["Trebus é TOP!", "Fechado com Trebus", "Chega de atrasos"]

  const handleReaction = async (reaction: string) => {

    const newReactionKey = push(
        child(ref(databaseClient), `reactions`)
    ).key;

    const reactionObj: any = {}

    reactionObj[`/reactions/${newReactionKey}`] = {
      reaction,
      nickname: getNickname(),
      createdAt: new Date().toISOString(),
    };

    await update(ref(databaseClient), reactionObj);

  }

  return (
      <div className={styles.buttonsContainer}>
        {reactionList.map((reaction, index) => (
            <button
                key={index}
                onClick={() => handleReaction(reaction)}
            >
              {reaction}
            </button>
        ))}
      </div>
  )
}