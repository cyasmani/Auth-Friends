import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from './api/axiosWithAuth';
import Friends from './Friends';
import SecondForm from './SecondForm';
import "./style/friendslist.css"


function FriendsList(props) {

    const [friends, setFriends] = useState([])

    const getData = () => {
        axiosWithAuth().get('/friends')
        .then(res => {
            setFriends(res.data)
            console.log(res.data)
        })
        .catch((err) => console.error(err.message));
    }

    useEffect (() => {
        getData()
    }, []);

    return (
        <div>
        <h1>To join the Force, enter info below!</h1>
        <SecondForm/>
        <div>
        {
            friends.map(friend => (
                <div className="cards">
                    <Friends name={friend.name} age={friend.age} email={friend.email} />
                </div>
            ))
        }
        </div>
        </div>
    )
};

export default FriendsList;