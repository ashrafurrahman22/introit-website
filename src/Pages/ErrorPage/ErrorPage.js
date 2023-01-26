import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center min-h-screen'>
            <h2 className='text-4xl text-center font-bold'>404!</h2>
            <h2 className='text-2xl text-center'>Page Not Found!!</h2>
        <Link to='/' className="btn w-56 mx-auto font-medium my-4 justify-center">Back to HomePage?</Link>
            {/* <img className='mx-auto w-full' src="https://digitalagencynetwork.com/wp-content/uploads/2019/08/best-digital-agency-404-pages-for-your-inspiration.jpg" alt="" />
            <Link to='/' className="btn btn-info font-medium my-5 hover:bg-blue-500 justify-center">Back to HomePage?</Link> */}
        </div>
    );
};

export default ErrorPage;