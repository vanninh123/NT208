import React from 'react';
import PropTypes from 'prop-types';

Input.propTypes = {

};

function Input(props) {
  return (
    <div>
      <h2 className='text-center text-2xl font-medium mt-20 mb-8
    md:text-4xl
    lg:pt-20 
    '
      >
        Your URL
      </h2>
      <form className='rounded-full h-16 w-2/5 mx-auto border-slate-200 border-2 bg-white py-4'>
        <i className="fa-solid fa-xmark p-2 mx-3 cursor-pointer"></i>
        <input
          className='w-5/6 focus:outline-none'
          placeholder='https://example.com/blog/deleted.html'
        />
        <i className="fa-solid fa-arrow-right p-2 ml-1 cursor-pointer"></i>
      </form>
      <div className='mt-4 text-center text-slate-600'>Guest users are allowed 3 searches per day</div>
    </div>
  );
}

export default Input;