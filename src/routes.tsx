import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

function Routes () {
    return(
        <BrowserRouter>
            <Route path ='/' component={PagePrincipal}/>
        </BrowserRouter>
    )
}

export default Routes