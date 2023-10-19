import React from "react"
import { Routes, Route } from "react-router-dom";

import Home from './Home'
import Drink from './Drink'
import Eat from './Eat'
import Sardines from './Sardines'


function MyRoutes() {
    return (
        <Routes>
            <Route path="/">
                <Home />
            </Route>
            <Route path="/drink">
                <Drink />
            </Route>
            <Route path="/eat">
                <Eat />
            </Route>
            <Route path="/sardines">
                <Sardines />
            </Route>
        </Routes>
    )
}

export default MyRoutes;