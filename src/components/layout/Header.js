import React from 'react'
import { Link } from 'react-router-dom';
import { isPatternLike } from '@babel/types';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Ask It, Do It</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#7952B3',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}
export default Header