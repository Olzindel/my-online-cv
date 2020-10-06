import React from "react";
import './NavBarItem.css'
import PropTypes from 'prop-types'

export default function NavBarItem({name = "NotNamed", title = "", logo = "", isExtended = false}) {
    let itemClassName = (isExtended) ? 'navbar-nav-item-extended' : 'navbar-nav-item-retracted';

    return (
        <div className={itemClassName}>
            <img className="logo" src={logo} alt={name + "Logo"}/>
            <span className="title-text">{title}</span>
        </div>
    )
}

NavBarItem.propTypes = {
    name: PropTypes.string.isRequired,
    isExtended: PropTypes.bool
};
