import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import WordPress from './Wordpress';
import Error404 from './Error404';
import ListeArticle from './ListeArticle';
import Article from './Article';

const MyRouteur = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/Quiz' element={<WordPress />} />
                <Route path='/' element={<Home />} />
                <Route path='*' element={<Error404 />} />
                <Route path='/Error404' element={<Error404 />} />
                <Route path='/ListeArticle' element={<ListeArticle />} />
                <Route path='/Article/:slug' element={<Article />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MyRouteur;