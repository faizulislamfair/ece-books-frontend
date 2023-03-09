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
import main_image from './assets/images/main_image.svg';
import { Helmet } from "react-helmet";



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
      <Helmet>
        <meta charSet="utf-8" />

        <title>ECE Books</title>

        <link rel="canonical" href="https://ecebooks-71501.web.app/" />

        <meta name="description" content="ECE Books" />

        <meta name="keywords" content="ECE, ECE-Books, RUET, Rajshahi, Bangladesh, 1st year Odd semester, 1st year Even semester, 2nd year Odd semester, 1st year Even semester, 3rd year Odd semester, 3rd year Even semester, 4th year Odd semester, 4th year Even semester" />

        <meta name="author" content="S.M. Faizul Islam Fair Email: faizulislamfair@gmail.com" />


        <meta property="og:site_name" content="ECE Books" />

        <meta property="og:site" content="https://ecebooks-71501.firebaseapp.com/" />

        <meta property="og:title" content="ECE-Books" />

        <meta property="og:description"
          content=" This is a REST API based project about management of academic books which are classified semester-wise" />

        <meta property="og:image" content={main_image} />

        <meta property="og:url" content="https://ecebooks-71501.firebaseapp.com/" />

        <meta property="og:type" content="website" />

      </Helmet>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
