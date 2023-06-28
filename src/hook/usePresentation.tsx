import {createContext, ReactNode, useContext, useMemo, useState} from "react";
import {off, onValue, ref} from "firebase/database";
import {databaseClient} from "../services/firebase.ts";

interface PresentationContextProps {
  children: ReactNode;
}

interface PresentationContextData {
  currentSlide: number;
}

export const PresentationContext = createContext({} as PresentationContextData);

export const PresentationContextProvider = ({children}: PresentationContextProps) => {

  const slideRef = ref(databaseClient, `slides/`);
  const [currentSlide, setCurrentSlide] = useState(0);

  useMemo(() => {
    onValue(slideRef, (snapshot) => {
      const data = snapshot.val();
      setCurrentSlide(data.current_slide);
    });

    return () => {
      off(slideRef)
    }
  }, [])

  return (
      <PresentationContext.Provider value={{
        currentSlide
      }}>
        {children}
      </PresentationContext.Provider>
  )
}

export const usePresentation = () => {
  return {
    ...useContext(PresentationContext)
  }
}