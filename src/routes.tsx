import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Cadastro } from "./pages/Cadastro"
import { DepositoRapido } from "./pages/DepositoRapido"
import { DepositoPix } from "./pages/DepositoPix"
import { SucessoPix } from "./pages/SucessoPix"
import { ErroPix } from "./pages/ErroPix"

export const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route
            path="/"
            element={<Home/>}
            />
            <Route
            path="/cadastro"
            element={<Cadastro/>}
            />
            <Route
            path="/depositoRapido"
            element={<DepositoRapido/>}
            />
            <Route 
            path="/depositoPix" 
            element={<DepositoPix/>}
            />
            <Route
            path="/sucessoPix"
            element={<SucessoPix/>}
            />
            <Route
            path="/erroPix"
            element={<ErroPix/>}
            />
        </Route>
    )
 )