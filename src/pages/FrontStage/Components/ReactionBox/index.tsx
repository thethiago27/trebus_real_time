import styles from "./styles.module.scss";

interface ReactionProps {
  nickname: string;
  reaction: string;
  id: string;
}

export const ReactionBox = (reaction: ReactionProps) => {
  return (
      <div key={reaction.id} className={styles.reaction}>
        <p className={styles.nickname}>{reaction.nickname} disse:</p>
        <p>{reaction.reaction}</p>
      </div>
  )
}