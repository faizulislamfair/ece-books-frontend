import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const users = useLoaderData();


    const handleDelete = user => {
        const agree = window.confirm(`Are you sure you want to delete: ${user.name}`);

        if (agree) {
            console.log(`deleting user with id: `, user._id);
        }
    }


    return (
        <div>
            <h2>Users: {users.length}</h2>
            <div>
                {
                    users.map(user => <p
                        key={user._id}>
                        {user.name} {user.comment} <button onClick={() => handleDelete(user)}>X</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Home;