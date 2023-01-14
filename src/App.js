import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import OneOne from './components/OneOne/OneOne';
import OneTwo from './components/OneTwo/OneTwo';
import TwoOne from './components/TwoOne/TwoOne';
import TwoTwo from './components/TwoTwo/TwoTwo';
import ThreeOne from './components/ThreeOne/ThreeOne';
import ThreeTwo from './components/ThreeTwo/ThreeTwo';
import FourOne from './components/FourOne/FourOne';
import FourTwo from './components/FourTwo/FourTwo';
import Main from './layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <Home></Home> },
        {
          path: '/one_one',
          loader: async () => {
            return fetch('https://ece-books-server.vercel.app/one_one');
          },
          element: <OneOne></OneOne>
        },
        {
          path: '/one_two',
          loader: async () => {
            return fetch('https://ece-books-server.vercel.app/one_two');
          },
          element: <OneTwo></OneTwo>
        },
        {
          path: '/two_one',
          loader: async () => {
            return fetch('https://ece-books-server.vercel.app/two_one');
          },
          element: <TwoOne></TwoOne>
        },
        {
          path: '/two_two',
          loader: async () => {
            return fetch('https://ece-books-server.vercel.app/two_two');
          },
          element: <TwoTwo></TwoTwo>
        },
        {
          path: '/three_one',
          loader: async () => {
            return fetch('https://ece-books-server.vercel.app/three_one');
          },
          element: <ThreeOne></ThreeOne>
        },
        {
          path: '/three_two',
          loader: async () => {
            return fetch('https://ece-books-server.vercel.app/three_two');
          },
          element: <ThreeTwo></ThreeTwo>
        },
        {
          path: '/four_one',
          loader: async () => {
            return fetch('https://ece-books-server.vercel.app/four_one');
          },
          element: <FourOne></FourOne>
        },
        {
          path: '/four_two',
          loader: async () => {
            return fetch('https://ece-books-server.vercel.app/four_two');
          },
          element: <FourTwo></FourTwo>
        }
      ]
    },
    // {path: '*', element:}
  ])


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
