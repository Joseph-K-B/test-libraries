import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import './header.css'

class Header extends Component {
    state = { }
    render() {
        return (
            <header>
                <section className='header-section'>
                    <div className= 'header-div'>
                        <NavLink className='three' to='/three' exact>three</NavLink>
                    </div>
                </section>
            </header>
        );
    }
}
export default Header;
