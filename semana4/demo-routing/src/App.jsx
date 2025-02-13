import React from 'react'
import { Routes, Route } from 'react-router'
import { HomePage } from './Pages/HomePage'
import { AboutUS } from './Pages/AboutUS'
import { TeamPage } from './Pages/TeamPage'
import { AboutPage } from './Pages/AboutPage'
import { LoginPage } from './Pages/LoginPage'
import { CreateUser } from './Pages/CreateUser'
import { EditUser } from './Pages/EditUser'
import { NavBar } from './components/NavBar'

export const App = () => {
  return (
    <div>
      <NavBar/>
        <h1>Demo Routing</h1>
        <hr />
        <Routes>
            <Route path = '/' element = {<HomePage/>}/>
            <Route path = 'about' element = {<AboutPage/>}>
                <Route index element = {<AboutUS/>}/>
                <Route path = 'team' element={<TeamPage/>}/>
            </Route>
            <Route path = 'login' element = {<LoginPage/>}/>
            <Route path = 'user'>
                <Route path = 'create' element = {<CreateUser/>}/>
                <Route  path = 'edit/:userid' element = {<EditUser/>}/>
            </Route>
        </Routes>
        <Link to = "/">HomePage</Link>
        <Link to = "/about">AboutPage</Link>
        <Link to = "/about/team">Team</Link>
    </div>
  )
}
