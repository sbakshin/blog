import React from 'react';
import { Route, Routes } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import RegistrationPage from './pages/RegistrationPage'
import PostsPage from './pages/PostsPage'
import Layout from './components/Layout'

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={ <MainPage />}/>
                <Route path='/posts' element={ <PostsPage />}/>
                <Route path='/login' element={ <LoginPage />}/>
                <Route path='/registration' element={ <RegistrationPage />}/>
            </Routes>
        </Layout>
    )
}

export default App;
