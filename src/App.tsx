import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <div className="container">
            <button type="button" className="btn btn-primary ms-1">
                Primary
            </button>
            <button type="button" className="btn btn-secondary ms-1">
                Secondary
            </button>
            <button type="button" className="btn btn-success ms-1">
                Success
            </button>
            <button type="button" className="btn btn-danger ms-1">
                Danger
            </button>
            <button type="button" className="btn btn-warning ms-1">
                Warning
            </button>
            <button type="button" className="btn btn-info ms-1">
                Info
            </button>
        </div>
    );
}

export default App;
