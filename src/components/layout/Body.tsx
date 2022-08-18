import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Content from '../../containers/Content'

function Body(): JSX.Element {
    return (
        <div className="body">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default Body
