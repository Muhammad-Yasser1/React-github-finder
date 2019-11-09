import React, { useState, useContext } from 'react';
import githubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = ({ showClearButton }) => {
    const [text, setText] = useState('');
    const context = useContext(githubContext);
    const alertContext = useContext(AlertContext);

    const onChange = e => setText(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        if (!text) return alertContext.setAlert();
        context.searchUsers(text);
    };

    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <input
                    type="text"
                    name="text"
                    value={text}
                    onChange={onChange}
                    placeholder="Search for users (eg. john doe)"
                />
                <button type="submit" className="btn btn-block btn-dark">
                    Search
                </button>
            </form>
            {context.users.length > 0 && (
                <button
                    className="btn btn-light btn-block my-1"
                    onClick={context.clearUsers}
                >
                    Clear
                </button>
            )}
        </div>
    );
};

export default Search;
