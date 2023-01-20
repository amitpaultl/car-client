import React from 'react';

const Loding = () => {
    return (
        <div className='spinner my-5'>
            <div className="flex justify-center items-center text-center">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default Loding;