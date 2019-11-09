import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import githubContext from '../../context/github/githubContext';

const Users = () => {
    const context = useContext(githubContext);

    if (context.loading) {
        return <Spinner></Spinner>;
    } else {
        return (
            <div style={userStyle}>
                {context.users.map(user => (
                    <UserItem user={user} key={user.id}></UserItem>
                ))}
            </div>
        );
    }
};

const userStyle = {
    display: 'grid',
    gridTemplateColumns:
        window.innerWidth > 767 ? 'repeat(4, auto)' : 'repeat(2, auto)',
    columnGap: '10px'
};
export default Users;
