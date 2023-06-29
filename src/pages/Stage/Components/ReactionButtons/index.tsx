import styles from "./styles.module.scss";
import { ref, update, push, child } from "firebase/database";
import {getNickname} from "../../../../services/registration";
import {databaseClient} from "../../../../services/firebase";

type Reaction = {
  [key: string]: {
    reaction: string;
    nickname: null | string;
    createdAt: string;
  }
}

export const ReactionButtons = () => {

  const reactionList: string[] = ["Trebus é TOP! 🎉", "Fechado com Trebus 😎", "Chega de atrasos 🤬", "Gleice melhor orientadora 🤩"]

  const handleReaction = async (reaction: string) => {

    const newReactionKey = push(
        child(ref(databaseClient), `reactions`)
    ).key;

    const reactionObj: Reaction = {}

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