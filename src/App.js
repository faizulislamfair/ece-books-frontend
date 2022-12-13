import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import OneOne from './components/OneOne/OneOne';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
    },
    {
      path: '/one_one',
      loader: async () => {
        return fetch('http://localhost:5000/one_one');
      },
      element: <OneOne></OneOne>
    }
  ])


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
