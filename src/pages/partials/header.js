import React from 'react';
import { NavLink } from 'react-router-dom'

import Category from '../categories/components/CategoryMenu'

const Header = () => {

    return(
        <header className="header">
            <Category />

            <div className='header-menu'>
                <ul>
                    <li><NavLink to='/'> Anasayfa </NavLink></li>
                    <li><NavLink to='/category-settings'> Kategori Ekle </NavLink></li>
                    <li><NavLink to='/director'> Yönetmen Ekle </NavLink></li>
                    <li><NavLink to='/admin/movie'> Video Ekle </NavLink></li>
                </ul>
            </div>
        </header>
    )
}
export default Header;