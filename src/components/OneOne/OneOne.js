import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './OneOne.css';

const OneOne = () => {

    const oneOne = useLoaderData();
    console.log(oneOne);


    return (
        <div>
            {
                oneOne.map((each_book, id) => <div key={id + 1}>{each_book.name}</div>)
            }
        </div>
    );
};

export default OneOne;