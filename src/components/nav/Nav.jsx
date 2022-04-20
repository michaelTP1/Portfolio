import React from 'react';
import NavLink from './NavLink';
import './Nav.css';

function Nav  () {
	return (
		<nav id="navbar">
			<NavLink navLinkId="Header" scrollToId="header" />
			<NavLink navLinkId="About" scrollToId="about" />
			<NavLink navLinkId="Experience" scrollToId="experience" />
			<NavLink navLinkId="Skills" scrollToId="skills" />
		
	  </nav>

		// <nav>
		// 	{navLinks.map(({ navLinkId, scrollToId }, idx) => (
		// 		<NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
		// 	))}
		// </nav>
	);
};

export default Nav;
