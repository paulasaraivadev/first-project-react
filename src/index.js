import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './Styles/globalStyles';
import Routes from './routes';

ReactDOM.render(
    <>
        <Routes /> <GlobalStyle /> 
    </>, 
    document.getElementById('root')
);

