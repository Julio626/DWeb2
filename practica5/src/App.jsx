import { BrowserRouter, Routes, Route } from "react-router"
import {IndexPage } from "./Pages/IndexPage"
import { FavoritesPage } from "./Pages/FavoritesPage"
import Layout from "./layout/layout"

const App = () => {

    return (
        <BrowserRouter>
           <Routes>
                <Route element = {<Layout/>}>
                    <Route path = "/" element = {<IndexPage/>}/>
                    <Route path = "/favoritos" element = {<FavoritesPage/>}/>
                </Route>  
           </Routes>
        </BrowserRouter>
    )
}

export default App