import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='mx-auto flex flex-col gap-5 justify-center w-2/4'>
            <img className='mx-auto w-full' src="https://digitalagencynetwork.com/wp-content/uploads/2019/08/best-digital-agency-404-pages-for-your-inspiration.jpg" alt="" />
            <Link to='/' className="btn btn-info font-medium my-5 hover:bg-blue-500 justify-center">Back to HomePage?</Link>
        </div>
    );
};

export default ErrorPage;