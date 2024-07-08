import React from 'react';
import ReferEarnPage from './components/ReferEarnPage';
import { Route, Routes } from 'react-router-dom';
import Successful from './components/Successful';
import Contact from './components/Contact';

function App() {
    return (
        <>
        <Routes>
            <Route path="/" element={<ReferEarnPage />}></Route>
            <Route path="/success" element={<Successful />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        </>
    );
}

export default App;
