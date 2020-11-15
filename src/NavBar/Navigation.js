import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import './Navigation.css'
const Navigation = () => {
    return (
        <div className = "Navigation-conatainer">
            <div className="logo">
                <h2>logo</h2>
            </div>
            <div className="button">
                <span> login </span>
            <Button variant="danger">Danger</Button> 
            </div>
        </div>
    );
};

export default Navigation;