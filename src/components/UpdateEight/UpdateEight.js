import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateEight = () => {

    const bookEight = useLoaderData();

    const [book, setBook] = useState(bookEight);


    const handleBookUpdate = event => {
        event.preventDefault();
        console.log(book);

        fetch(`https://ece-books-server.vercel.app/four_two/${bookEight._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(book)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Book Updated Successfully!');
                    console.log(data);
                }
            })


    }


    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newBook = { ...book }
        newBook[field] = value;
        setBook(newBook);
    }


    return (
        <div>
            <h2>Update: {bookEight.name}</h2>

            <form className='mt-5' onSubmit={handleBookUpdate}>

                <div className='form-group mt-2'>
                    <input onChange={handleInputChange} className='form-input' defaultValue={bookEight.image} type="text" name='image' placeholder='image_url' required />
                </div>


                <div className='form-group mt-2'>
                    <input onChange={handleInputChange} className='form-input' defaultValue={bookEight.name} type="text" name='name' placeholder='name' required />
                </div>


                <div>
                    <input onChange={handleInputChange} className='form-input' defaultValue={bookEight.book_url} type="text" name='book_url' id="" placeholder='book_url' required />
                </div>


                <button className='btn sign-in m-3' type="submit">Update Book</button>
            </form>
        </div>
    );
};

export default UpdateEight;