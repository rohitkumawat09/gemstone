
import First from './First'

import RegisterForm from './pages/Auth/RegisterForm';
import LoginForm from './pages/Auth/LoginForm';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



const router = createBrowserRouter([
  {
    path: '/',
    element: <First />,
    children: [
      { index: true, element: <Home /> },
    
  

   
    ],
  },
]);
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App