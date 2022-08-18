import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../containers/pages/Login'
import Home from '../containers/pages/Home'
import Register from '../containers/pages/Register'
import AddShows from '../containers/pages/AddShows'

function AppRoutes(): JSX.Element {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const data: string | null = localStorage.getItem('user')
    const user = data ? JSON.parse(data) : null

    useEffect(() => {
        if (user !== null) {
            setIsLoggedIn(true)
        }
    }, [user])

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Home
                        isLoggedIn={isLoggedIn}
                        setIsLoggedIn={setIsLoggedIn}
                    />
                }
            />
            <Route
                path="/login"
                element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/addShows" element={<AddShows />} />
        </Routes>
    )
}

export default AppRoutes
