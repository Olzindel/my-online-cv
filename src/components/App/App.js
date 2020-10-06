import React from 'react';
import './App.css';
import NavBar from "../NavBar/NavBar";
import Education from "../Education/Education";

function App() {
    return (
        <div className='App'>
            <NavBar className='navbar'/>
            <div className='main-content'>
                <Education/>
            </div>
        </div>
    );
}

export default App;
