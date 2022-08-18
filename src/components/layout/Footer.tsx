import React from 'react'

function Footer(): JSX.Element {
    return (
        <footer className="footer">
            <small>
                &copy; Copyright {new Date().getFullYear()}, Caleb Tracey
            </small>
        </footer>
    )
}

export default Footer
