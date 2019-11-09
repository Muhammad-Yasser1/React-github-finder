import React, { useReducer } from 'react';
import githubReducer from './githubReducer';
import githubContext from './githubContext';
import axios from 'axios';

import {
    CLEAR_USERS,
    GET_USERS,
    GET_REPOS,
    GET_USER,
    SEARCH_USERS,
    SET_LOADING
} from '../types';

//github keys
let githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
let githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        alert: null,
        loading: true
    };

    const [state, dispatch] = useReducer(githubReducer, initialState);

    // get initial users
    const getUsers = async text => {
        setLoading();
        const result = await axios.get(
            `https://api.github.com/users?client_id=${githubClientId}&client_secret=${githubClientSecret}`
        );
        dispatch({ type: GET_USERS, payload: result.data });
    };

    // search users and fill users array
    const searchUsers = async text => {
        setLoading();
        const result = await axios.get(
            `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
        );
        dispatch({ type: SEARCH_USERS, payload: result.data.items });
    };

    // set loading to true
    function setLoading() {
        dispatch({ type: SET_LOADING });
    }

    // get single user
    const getUser = async login => {
        setLoading();
        const result = await axios.get(
            `https://api.github.com/users/${login}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
        );

        dispatch({ type: GET_USER, payload: result.data });
    };

    //get repos for single user
    const getUserRepos = async login => {
        setLoading(true);

        const result = await axios.get(
            `https://api.github.com/users/${login}/repos?per_page=5&sort=created:ascclient_id=${githubClientId}&client_secret=${githubClientSecret}`
        );

        dispatch({ type: GET_REPOS, payload: result.data });
    };

    //clear users array
    const clearUsers = () => {
        dispatch({ type: CLEAR_USERS });
    };

    return (
        <githubContext.Provider
            value={{
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading: state.loading,
                alert: state.alert,
                searchUsers,
                getUser,
                getUserRepos,
                clearUsers,
                getUsers
            }}
        >
            {props.children}
        </githubContext.Provider>
    );
};

export default GithubState;
