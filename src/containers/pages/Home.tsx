import React, { Dispatch, SetStateAction } from 'react'
import AddShows from './AddShows'
import Login from './Login'

type Props = {
    isLoggedIn: boolean
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>
}

function Home(props: Props): JSX.Element {
    const { isLoggedIn, setIsLoggedIn } = props

    return isLoggedIn ? (
        <div>
            <AddShows />
        </div>
    ) : (
        <div>
            <Login setIsLoggedIn={setIsLoggedIn} />
        </div>
    )
}

export default Home
