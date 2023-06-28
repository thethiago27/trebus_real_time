import { CurrentSlide } from "../../components/CurrentSlide";
import styles from "./styles.module.scss";
import { off, onValue, ref } from "firebase/database";
import { databaseClient } from "../../services/firebase.ts";
import {useEffect, useState} from "react";

interface Reaction {
  nickname: string;
  reaction: string;
  id: string;
}

export const FrontStage = () => {
  const reactionsRef = ref(databaseClient, `reactions/`);
  const [reactions, setReactions] = useState<Reaction[]>([]);

  useEffect(() => {
    onValue(reactionsRef, (snapshot) => {
      const data = snapshot.val();

      const reactions = Object.entries(data).map(([key, value]: any) => ({
        ...value,
        id: key,
      }));

      setReactions((state) => [...state, ...reactions]);
    });

    return () => {
      off(reactionsRef);
    };
  }, []);

  const lastThreeReactions = reactions.slice(-3); // Get the last 3 reactions

  return (
      <div className={styles.frontStageContainer}>
        <CurrentSlide className={styles.slide} />
        <div className={styles.footer}>
          <div className={styles.comments}>
            {lastThreeReactions.map((reaction) => (
                <div key={reaction.id} className={styles.reaction}>
                  <p className={styles.nickname}>{reaction.nickname} disse:</p>
                  <p>{reaction.reaction}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};