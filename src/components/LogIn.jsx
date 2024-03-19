import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

LogIn.propTypes = {

};

function LogIn(props) {
  return (
    <div className='login'>
      <h2 className='text-center text-2xl font-medium mt-20 
      md:text-4xl
      lg:pt-20 
      '
      >
        Log In
      </h2>
      <form className='w-full h-80 mx-auto pl-14 mt-4 
      md:pl-28 md:text-lg
      lg:w-2/5 lg:mx-auto
      '
      >
        <label for='username'>User Name:</label> <br></br>
        <input className='mb-3 mt-2 w-5/6 pl-2 md:h-8 lg:pl-0' id='username' /> <br></br>

        <label for='password'>Password:</label>  <br></br>
        <input className='mb-3 mt-2 w-5/6 pl-2 md:h-8 lg:pl-0' id='password' type='password' /> <br></br>

        <input type='submit' value='Log In'
          className='h-7 w-16 text-sm text-slate-50 bg-blue-600 rounded-md cursor-pointer my-2
          md:h-9 md:w-20 md:text-base
          '
        />
        <br></br>

        <Link className='hover:underline hover:text-blue-600' to="/register">Don't have an account? Register here!</Link>
      </form>
    </div>
  );
}

export default LogIn;