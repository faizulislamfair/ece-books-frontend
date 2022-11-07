import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const AddUser = () => {

    const [user, setUser] = useState({});

    const handleAddUser = event => {
        event.preventDefault();
        console.log(user);
    }



    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser);
    }



    return (

        <Form onSubmit={handleAddUser}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address </Form.Label> <br />
                <Form.Control onBlur={handleInputBlur} type="email" name="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name </Form.Label> <br />
                <Form.Control onBlur={handleInputBlur} type="text" name="name" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password </Form.Label> <br />
                <Form.Control onBlur={handleInputBlur} type="password" name="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

    );
};

export default AddUser;