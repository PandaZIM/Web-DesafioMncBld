import React from 'react';

import './pageprincipal.sass'
// import { Container } from './styles';

const PagePrincipal: React.FC = () => {
  return(
    <div id="page-principal" className=".container">
        <div id="page-principal-conteudo">
            <form action="">
                <fieldset>
                    <legend>Insira os dados</legend>

                    <input type="text"/>
                </fieldset>
            </form>
        </div>
    </div>
  );
}

export default PagePrincipal;