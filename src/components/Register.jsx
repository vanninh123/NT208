import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Register.propTypes = {

};

function Register(props) {
  return (
    <div className='register'>
      <h2 className='text-center text-2xl font-medium mt-20 
      md:text-4xl
      lg:pt-20
      '
      >
        Register
      </h2>
      <form className='w-full h-80 mx-auto pl-14 mt-4 
      md:pl-28 md:text-lg
      lg:w-2/5 lg:mx-auto
      '
      >
        <label for='username'>User name:</label> <br></br>
        <input className='mb-3 mt-2 w-5/6 pl-2 md:h-8 lg:pl-0' id='username' /> <br></br>

        <label for='password'>Password:</label>  <br></br>
        <input className='mb-3 mt-2 w-5/6 pl-2 md:h-8 lg:pl-0' id='password' type='password' /> <br></br>

        <label for='confirm'>Confirm password:</label>  <br></br>
        <input className='mb-3 mt-2 w-5/6 pl-2 md:h-8 lg:pl-0' id='confirm' type='password' /> <br></br>

        <input
          type='submit'
          value='Sign In'
          className='h-7 w-16 text-sm text-slate-50 bg-blue-700 rounded-md cursor-pointer my-2
          md:h-9 md:w-20 md:text-base
          '
        />

        <br></br>
        <Link className='hover:underline hover:text-blue-600' to="/login">Have an account? Log in now!</Link>
      </form>
    </div>
  );
}

export default Register;