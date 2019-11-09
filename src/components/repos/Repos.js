import React, { useContext } from 'react';
import Repo from './Repo';
import githubContext from '../../context/github/githubContext';

const Repos = () => {
    const context = useContext(githubContext);

    return context.repos.map(repo => <Repo repo={repo} key={repo.id}></Repo>);
};

export default Repos;
