import { createBrowserRouter } from "react-router-dom";
import Layout from './Layout'
import Home from "../components/Home";
import Composers from '../components/Composers'
import Works from '../components/Works'
import Work from "../components/Work";
import Login from "../components/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/',
        element: <Layout />,
        children: [
           
            {
                path: 'composers',
                element: <Composers />
            },
            {
                path: 'composers/:composerId',
                element: <Works />
            },
            {
                path: 'composers/:id/:workId',
                element: <Work />
            },
            {
                path: 'login',
                element: <Login />
            }
        ]
    }
])