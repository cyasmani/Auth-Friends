import React, {useState} from 'react';
import {axiosWithAuth} from './api/axiosWithAuth';

const SecondForm = ({ setFriendsList }) => {
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: '',
        id: Date.now()
    });

    const handleChanges = e => {
        setNewFriend({...newFriend, [e.target.name]: e.target.value});
    };

    const handleSubmit = e => {
        axiosWithAuth()
        .post('/friends', newFriend)
        .then(res => setFriendsList(res.data));
        setNewFriend({
            name:'', 
            age:'', 
            email: ''
        });
    };

    return (
        <div className="container">
            <h1>Second Form</h1>
            <form onSubmit={handleSubmit}>
                Name:  <input
                type='text'
                name='name'
                value={newFriend.name}
                onChange={handleChanges}
                ></input>

                Age:<input
                type='text'
                name='age'
                value={newFriend.age}
                onChange={handleChanges}
                ></input>
                Email:<input
                type='text'
                name='email'
                value={newFriend.email}
                onChange={handleChanges}
                ></input>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default SecondForm; 