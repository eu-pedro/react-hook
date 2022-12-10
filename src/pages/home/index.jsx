// react hook form
import {  useForm } from 'react-hook-form'

// yup e yup resolver = para validação do meu formulário
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

// importando o hook navigate


// importando api
import { api } from '../../services/api.js'

// styled components
import {
  ContainerMain,
  ContainerContent,
  Title,
  Button,
  ContainerButton
} from './styled'

// react icons
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordFill } from 'react-icons/ri'

// components 
import Input from '../../components/Input/index.jsx'

// config schema de validação
const schema = yup.object({
  email: yup.string().email('email não é válido').required('Campo obrigatório'),
  password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
}).required();


const Home = () => {

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'

  });

 

   const onSubmit = async formData => {
    try {
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
      console.log('retorno api', data)

      if(data.length === 1){
        alert('você está logado!')
      }else{
        alert('email ou senha inválido')
      }

    } catch (error) {
      alert('Houve um erro, tente novamente')
    }
  }


  return (
    <ContainerMain>
      <ContainerContent>
        <Title>Formulário</Title>

       
        <form onSubmit={handleSubmit(onSubmit)}>

          <Input LeftIcon={<AiOutlineMail/>} name="email" errorMessage={errors?.email?.message}  control={control} placeholder={"email"} type={"text"}/>
          <Input LeftIcon={<RiLockPasswordFill/>} name="password" errorMessage={errors?.password?.message}  control={control} placeholder={"senha"} type={"password"}/>


          <ContainerButton>
            <Button type='submit'>Cadastrar</Button>
          </ContainerButton>

        </form>
          

        


        

        
        

      </ContainerContent>
    </ContainerMain>
  )
}

export default Home
