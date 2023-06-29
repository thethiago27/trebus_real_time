import {Outlet} from "react-router-dom";
import styles from "./styles.module.scss";
import {Header} from "../Header";
import { useLocation } from "react-router-dom";
import {SlideScreen} from "../SlideScreen";

export const StageLayout = () => {

  const location = useLocation();
  const isStage = location.pathname.includes("/stage");

  return (
      <div className={styles.defaultLayout}>
        <Header/>
        {isStage && <SlideScreen/>}
        <main className={styles.defaultContainer}>
          <Outlet/>
        </main>
      </div>
  )
}