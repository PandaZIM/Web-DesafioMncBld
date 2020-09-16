import React, { FormEvent, useState } from 'react';

import './pageprincipal.sass'
import api from './services/api';
// import { Container } from './styles';

const PagePrincipal: React.FC = () => {

  const [userName, setUserName] = useState('');
  const [userLastName, setUserLastName] = useState('')
  const [userBirthday, setUserBirthday] = useState('')
  const [userGender, setUserGender] = useState('')
  const [userCPF, setUserCPF] = useState('')

  const handleCreateUser = (e: FormEvent) => {
    console.log('entrou')

    // const userInformation = {
    //   nome : userName,
    //   sobreNome : userLastName,
    //   dataNascimento: userBirthday,
    //   genero: userGender,
    //   cpf: userCPF
    // }

    e.preventDefault()

    api.post('users', {
      nome : userName,
      sobreNome : userLastName,
      dataNascimento: userBirthday,
      genero: userGender,
      cpf: userCPF
    }).then(() => {
      alert('Cadastro realizado com sucesso');


    }).catch(() => {
      alert('erro no cadastro')
    })
  }


  return(
    <div id="page-principal" className=".container">
        <div id="page-principal-conteudo">
            <form onSubmit={handleCreateUser}>
            <legend>Insira os dados</legend>
                <fieldset>
                    
                    <input type="text" 
                    placeholder="Name"
                    onChange={e => setUserName(e.target.value)}/>
                    <input type="text"
                    placeholder="Last Name"
                    onChange={e => setUserLastName(e.target.value)}/>
                    <input type="text"
                    placeholder="Birthday"
                    onChange={e => setUserBirthday(e.target.value)}/>
                    <input type="text"
                    placeholder="Gender"
                    onChange={e => setUserGender(e.target.value)}/>
                    <input type="text"
                    placeholder="CPF"
                    onChange={e => setUserCPF(e.target.value)}/>
                    

                </fieldset>

                <button type='submit'>Submit</button>
            </form>
        </div>
    </div>
  );
}

export default PagePrincipal;