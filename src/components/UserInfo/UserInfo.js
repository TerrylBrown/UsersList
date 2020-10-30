import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const UserInfo = () => {
    const { userId } = useParams();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    let {
        id,
        name,
        username,
        email,
        address,
        phone,
        website,
        company
    } = user;

    useEffect(() => {
        (async () => {
            await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                .then(res => res.json())
                .then(user => {
                    setUser(user);
                    setIsLoading(false);
                });
        })();
    }, []);
    
    if (isLoading) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className='user-info'>
                <Link to={`/`}>Back to users</Link>
                <h2>{username} <span>({name})</span></h2>     
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Website:</strong> {website}</p>
                <p><strong>City:</strong> {address.city}</p>
                <p><strong>Company:</strong> {company.name}</p>                
            </div>
        );
    }    

};

export default UserInfo;