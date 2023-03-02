import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import useAdmin from '../../customHooks/useAdmin';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const TwoTwoBook = ({ each_book }) => {

    const { image, name, book_url } = each_book;

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);

    const handleDelete = each_book => {
        const agree = window.confirm(`Are you sure you want to delete: ${each_book.name}`);

        if (agree) {
            console.log(`deleting product with id: `, each_book._id);
        }
    }


    return (
        <div className='book'>
            {
                isAdmin ?
                    <>

                        <button className='btn update m-1' >Update</button>
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

export default TwoTwoBook;