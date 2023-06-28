import styles from "./styles.module.scss";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {newUserRegistration} from "../../../../services/registration.ts";
import {useNavigate} from "react-router-dom";

interface RegistrationFormData {
  nickname: string
}

const registrationFormValidationSchema = z.object({
  nickname: z.string().min(5, 'Informe seu nickname').max(15, "Nickname muito grande"),
});
export const RegistrationForm = () => {

  const { handleSubmit, register } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationFormValidationSchema),
  });

  const navigate = useNavigate();
  const handleRegistration = async (data: RegistrationFormData) => {

    const { nickname } = data;

    newUserRegistration(nickname);

    navigate('/stage');
  }

  return (
      <form
          className={styles.form}
          onSubmit={handleSubmit(handleRegistration)}
      >
        <label htmlFor="nickname">Digite seu nickname:</label>
        <input
            type="text"
            id="nickname"
            {...register('nickname')}
        />
        <button type="submit">Continuar</button>
      </form>
  )
}