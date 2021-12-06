import React, { useReducer } from 'react';

import ThemeContext from './authContext';
import themeReducer from './authReducer';

import {
    THEME_TYPE
} from '../types';
//import { config } from 'dotenv';
//"proxy": "http://localhost:5000"
const ThemeState = props => {
    const initialState = {
        // token: localStorage.getItem('token'),//vanilla js to get the token from the web browser local storage
        // isAuthenticated: localStorage.getItem('isAuthenticated'),
        mode: 'light'
        // user: localStorage.getItem('user'),
        // error: null
    };
    const [state, dispatch] = useReducer(themeReducer, initialState);


    // Clear Errors

    // const clearErrors= () => {
    //     dispatch({ type: CLEAR_ERRORS, payLoad:null })
    }
    return (
        <AuthContext.Provider value={{
            theme:state.mode
                
        }}>
            {props.children}
        </AuthContext.Provider>
    )


export default AuthState;