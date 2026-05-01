import { createBrowserRouter } from 'react-router-dom';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Home from './components/pages/Home';
import Editor from './components/pages/Editor';
import Room from './components/pages/Room';

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
    {
        path: '/editor',
        element: <Editor />,
    },
    {
        path: '/rooms',
        element: <Room />,
    },
]);


export default router;