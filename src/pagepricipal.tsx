import React, { useState } from 'react';

import './pageprincipal.sass'
// import { Container } from './styles';

const PagePrincipal: React.FC = () => {

  const [userName, setUserName] = useState('');
  const [userLastName, setUserLastName] = useState('')
  const [userBirthday, setUserBirthday] = useState('')
  const [userGender, setUserGender] = useState('')
  const [userCPF, setUserCPF] = useState('')

  const submitUserInformation = () => {
    const userInformation = {
      'Name' : userName,
      'Last Name' : userLastName,
      'Birthday': userBirthday,
      'Gender': userGender,
      'CPF': userCPF
    }
  }
  return(
    <div id="page-principal" className=".container">
        <div id="page-principal-conteudo">
            <form action="">
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
            </form>
        </div>
    </div>
  );
}

export default PagePrincipal;