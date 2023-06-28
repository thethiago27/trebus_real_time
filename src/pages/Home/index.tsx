import {RegistrationForm} from "./Components/RegistrationForm";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {getNickname} from "../../services/registration.ts";

export const Home = () => {

  const navigate = useNavigate();
  const redirectToStage = () => {
    navigate('/stage');
  }

  useEffect(() => {
    if(getNickname()) redirectToStage();
  }, [])

  return (
      <div>
        <p>
          Seja bem vindo a experencia em
          tempo real TREBUS
        </p>
        <RegistrationForm/>
      </div>
  )
}