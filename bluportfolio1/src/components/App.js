import React, { Component } from 'react';
import Routes from "./Routes";
import PropTypes from 'prop-types';



const App = ({ children }) => {
    return (
        <div>
            <Routes/>
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
