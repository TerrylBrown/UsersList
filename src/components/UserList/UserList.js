import React, { useState, useEffect } from 'react';
import './UserList.css';
import UserCard from '../UserCard/UserCard';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            await fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(users => {
                    setUsers(users);
                    setIsLoading(false);
                });
        })();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className='user-list'>
                <header className='user-list__header'>
                    <h1>User List</h1>
                </header>            
                <div className='user-list__list'>
                    {users.map(user => (
                        <div key={user.id} className='user-list__item'>
                            <UserCard user={user} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
};

export default UserList;