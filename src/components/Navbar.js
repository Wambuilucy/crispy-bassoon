import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
	return (
		<div className='navbar_quiz'>
			<Link style={{fontSize: '24px', textDecoration: 'none', color: 'white', fontFamily: 'monospace', padding: '5px'}} to='/createquiz' className='nav_links'>Create Quiz</Link>
			<Link style={{fontSize: '24px', textDecoration: 'none', color: 'white', fontFamily: 'monospace', padding: '5px'}} to='/editquiz' className='nav_links'>Edit Quiz</Link>
			<Link style={{fontSize: '24px', textDecoration: 'none', color: 'white', fontFamily: 'monospace', padding: '5px'}} to='/takequiz' className='nav_links'>Take Quiz</Link>
		</div>
	)
}

export default Navbar
