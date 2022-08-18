/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react'

function Header(): JSX.Element {
    const date = new Date()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const year = date.getFullYear()

    return (
        <header style={{ zIndex: 10 }}>
            <div className="button-wrapper">
                <div className="date">{`${month}/${day}/${year}`}</div>
            </div>
        </header>
    )
}

export default Header
