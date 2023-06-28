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

  const lastThreeReactions = reactions.slice(-3).reverse(); // Get the last 3 reactions

  function componentToHex(componente: number) {
    const hex = componente.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }
  const gerarCorHex = (): string => {
    // Gerar três valores de cor aleatórios (R, G, B)
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Converter os valores para o formato hexadecimal
    const corHex = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

    return corHex;
  }

  return (
      <div className={styles.frontStageContainer}>
        <CurrentSlide className={styles.slide} />
        <div className={styles.footer}>
          <div className={styles.comments}>
            {lastThreeReactions.map((reaction) => (
                <div key={reaction.id} className={styles.reaction} style={{
                  backgroundColor: gerarCorHex()
                }}>
                  <p className={styles.nickname}>{reaction.nickname} disse:</p>
                  <p>{reaction.reaction}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};