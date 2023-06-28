import styles from "./styles.module.scss";
import logo from "../../assets/logo.svg";
import {Bus} from "@phosphor-icons/react";

export const Header = () => {
  return (
      <header className={styles.defaultHeader}>
        <img src={logo} alt="Logo"/>
        <div className={styles.userCounter}>
          <Bus size={24} weight="light" /> 0
        </div>
      </header>
  )
}