import React, { Component } from 'react';
import Home from "./Home";
import PropTypes from 'prop-types';



const App = ({ children }) => {
    return (
        <div>
            <Home />
            <div className="content">
                {children}
            </div>
        </div>
    );
};

App.propTypes = {
    children: PropTypes.node,
};

export default App;
