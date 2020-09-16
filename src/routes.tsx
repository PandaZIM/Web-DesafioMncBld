import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import PagePrincipal from './pagepricipal'

function Routes () {
    return(
        <BrowserRouter>
            <Route path ='/' component={PagePrincipal}/>
        </BrowserRouter>
    )
}

export default Routes