import React, {Component} from 'react';
import './NavBar.css';
import NavBarItem from "./NavBarItem/NavBarItem";

import graduationLogo from './resources/graduation-logo.svg'

const navbarItems = [
    {name: "Graduation", title: "Formation", logo: graduationLogo},
    {name: "Experiences", title: "Expériences professionnelles", logo: graduationLogo},
    {name: "Skills", title: "Compétences", logo: graduationLogo},
    {name: "Contact", title: "Contact", logo: graduationLogo}
];

class NavBar extends Component {
    state = {isExtended: false};

    render() {
        let navBarClassName = (this.state.isExtended) ? 'navbar-extended' : 'navbar-retracted';

        return (
            <nav className={navBarClassName} onMouseEnter={() => this.extendNavBar()}
                 onMouseLeave={() => this.retractNavBar()}>
                <ul className='navbar-nav-list'>
                    {navbarItems.map(({name, title, logo}) =>
                        <li key={name}>
                            <NavBarItem className="navbar-items" name={name} title={title} logo={logo}
                                        isExtended={this.state.isExtended}/>
                        </li>)}
                </ul>
            </nav>
        );
    }

    extendNavBar() {
        // console.log("Extending navbar...");
        this.setState({isExtended: true});
    }

    retractNavBar() {
        // console.log("Retracting navbar...");
        this.setState({isExtended: false});
    }

}

export default NavBar;