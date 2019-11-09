import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import githubContext from '../../context/github/githubContext';

const Navbar = () => {
    const context = useContext(githubContext);

    useEffect(() => {
        (async () => {
            context.getUsers();
        })();
    }, []);

    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className="fab fa-github"></i> GetGit
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
