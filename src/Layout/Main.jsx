import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='main-bg '>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;