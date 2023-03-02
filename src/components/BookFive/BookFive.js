import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import useAdmin from '../../customHooks/useAdmin';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';



const ThreeOneBook = ({ each_book, displayBooks, setDisplayBooks }) => {

    const { image, name, book_url } = each_book;

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);

    const handleDelete = each_book => {
        const agree = window.confirm(`Are you sure you want to delete: ${each_book.name}`);

        if (agree) {
            console.log(`deleting product with id: `, each_book._id);

            fetch(`https://ece-books-server.vercel.app/three_one/${each_book._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Book deleted successfully!');
                        const remainingBooks = displayBooks.filter(bk => bk._id !== each_book._id);
                        setDisplayBooks(remainingBooks);
                    }
                })
        }
    }


    return (
        <div className='book'>
            {
                isAdmin ?
                    <>

                        <Link target="_blank" to={`/update_five/${each_book._id}`}>
                            <button className='btn update m-1' >Update</button>
                        </Link>
                        <button className='btn delete m-1' onClick={() => handleDelete(each_book)} >Delete</button>

                        <PhotoProvider>
                            <PhotoView src={image}>
                                <img className='book_img mt-4' src={image} alt={name} />
                            </PhotoView>
                        </PhotoProvider>

                        <a className='download' href={book_url} target='_blank'><button className='btn submit mb-5'>Download</button></a>
                    </>

                    :

                    <>
                        <PhotoProvider>
                            <PhotoView src={image}>
                                <img className='book_img' src={image} alt={name} />
                            </PhotoView>
                        </PhotoProvider>

                        <a className='download' href={book_url} target='_blank'><button className='btn submit'>Download</button></a>
                    </>
            }

        </div>
    );
};

export default ThreeOneBook;