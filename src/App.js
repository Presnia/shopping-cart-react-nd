import React from 'react';
import CountersList from "./components/countersList";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <div className='container'>
            <Navbar />
            <CountersList />
        </div>
    );
};

export default App;