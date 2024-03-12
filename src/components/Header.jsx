import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Header.propTypes = {

};

function Header(props) {
  return (
    <div className='header fixed top-0 left-0 right-0 h-12 md:h-16 bg-zinc-400 grid grid-cols-12'>
      <div className='header__logo col-span-3 lg:col-start-2 lg:col-end-3'>
        <img src='' alt='' />
        <Link to='/'></Link>
      </div>

      <div className='col-span-3 md:col-span-5 lg:col-span-8'></div>

      <button className='
      header__signup col-span-3 text-center leading-9
      md:col-span-2
      lg:col-span-1 lg:text-lg lg:font-medium'
      >
        <Link to='/register'>Sign up</Link>
      </button>

      <button className='
      header__login col-span-3 text-center h-8 w-20 bg-blue-600 text-slate-50 my-auto rounded-md 
      md:col-span-2
      lg:col-span-1 lg:h-11 lg:w-28 lg:text-lg lg:font-medium lg:rounded-lg'
      >
        <Link to='/login'>Log in</Link>
      </button>


    </div>
  );
}

export default Header;