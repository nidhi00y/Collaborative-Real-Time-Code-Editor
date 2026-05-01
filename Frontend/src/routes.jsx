import { createBrowserRouter } from 'react-router-dom';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Home from './components/pages/Home';

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/signup',
        element: <Signup />,
    },
    {
        path: '/',
        element: <Home />,
    },
]);


export default router;