import React from 'react';
import { Link } from 'react-router-dom';
import './UserCard.css';

const UserCard = props => {
    const {
        id,
        name,
        username,
        email,
        address,
        phone,
        website,
        company
    } = props.user;

    return (        
        <div className='user-card'>
            <div className='user-card__name'>
                <h2>{username} <span>({name})</span></h2>     
            </div>
            <div className='user-card__contact-info'>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Website:</strong> {website}</p>
                <p><strong>City:</strong> {address.city}</p>
                <p><strong>Company:</strong> {company.name}</p>
            </div>
            <Link to={`/user/${id}`}>View</Link>
        </div>
    );
}

export default UserCard;