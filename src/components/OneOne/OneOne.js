import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './OneOne.css';

const OneOne = () => {

    const oneOne = useLoaderData();
    console.log(oneOne);


    return (
        <div>

        </div>
    );
};

export default OneOne;