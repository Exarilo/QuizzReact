import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import WordPress from './Wordpress';
import Error404 from './Error404';


const MyRouteur = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<WordPress />} />
                <Route path='/Home' element={<Home />} />
                <Route path='*' element={<Error404 />} />
                <Route path='/Error404' element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MyRouteur;