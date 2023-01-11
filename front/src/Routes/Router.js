import { createBrowserRouter } from "react-router-dom";
import Layout from './Layout'
import Home from "../components/Home";
import Composers from '../components/Composers'
import Works from '../components/Works'
import Work from "../components/Work";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
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
            }
        ]
    }
])