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
import Register from './components/Register/Register';
import SignIn from './components/SignIn/SignIn';
import RouteNotFound from './routes/RouteNotFound/RouteNotFound';
import AdminRoute from './routes/AdminRoute/AdminRoute';
import UpdateOne from './components/UpdateOne/UpdateOne';
import UpdateTwo from './components/UpdateTwo/UpdateTwo';
import UpdateThree from './components/UpdateThree/UpdateThree';
import UpdateFour from './components/UpdateFour/UpdateFour';
import UpdateFive from './components/UpdateFive/UpdateFive';
import UpdateSix from './components/UpdateSix/UpdateSix';
import UpdateSeven from './components/UpdateSeven/UpdateSeven';
import UpdateEight from './components/UpdateEight/UpdateEight';



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://ece-books-server.vercel.app/one_one');
          },
          element: <Home></Home>
        },
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
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/signin',
          element: <SignIn></SignIn>
        },
        {
          path: '/update_one/:id',
          element: <AdminRoute><UpdateOne></UpdateOne></AdminRoute>,
          loader: ({ params }) => fetch(`https://ece-books-server.vercel.app/one_one/${params.id}`)
        },
        {
          path: '/update_two/:id',
          element: <AdminRoute><UpdateTwo></UpdateTwo></AdminRoute>,
          loader: ({ params }) => fetch(`https://ece-books-server.vercel.app/one_two/${params.id}`)
        },
        {
          path: '/update_three/:id',
          element: <AdminRoute><UpdateThree></UpdateThree></AdminRoute>,
          loader: ({ params }) => fetch(`https://ece-books-server.vercel.app/two_one/${params.id}`)
        },
        {
          path: '/update_four/:id',
          element: <AdminRoute><UpdateFour></UpdateFour></AdminRoute>,
          loader: ({ params }) => fetch(`https://ece-books-server.vercel.app/two_two/${params.id}`)
        },
        {
          path: '/update_five/:id',
          element: <AdminRoute><UpdateFive></UpdateFive></AdminRoute>,
          loader: ({ params }) => fetch(`https://ece-books-server.vercel.app/three_one/${params.id}`)
        },
        {
          path: '/update_six/:id',
          element: <AdminRoute><UpdateSix></UpdateSix></AdminRoute>,
          loader: ({ params }) => fetch(`https://ece-books-server.vercel.app/three_two/${params.id}`)
        },
        {
          path: '/update_seven/:id',
          element: <AdminRoute><UpdateSeven></UpdateSeven></AdminRoute>,
          loader: ({ params }) => fetch(`https://ece-books-server.vercel.app/four_one/${params.id}`)
        },
        {
          path: '/update_eight/:id',
          element: <AdminRoute><UpdateEight></UpdateEight></AdminRoute>,
          loader: ({ params }) => fetch(`https://ece-books-server.vercel.app/four_two/${params.id}`)
        }
      ]
    },
    { path: '*', element: <RouteNotFound></RouteNotFound> }
  ])


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
