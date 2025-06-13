import {lazy, type FC} from "react";
import {type RouteObject, RouterProvider} from "react-router-dom";
import {createBrowserRouter} from "react-router";

const Home = lazy<FC>(() => import('../pages/home/Home.tsx'))
const About = lazy<FC>(() => import('../pages/about/About.tsx'))

const routes: RouteObject[] = [
    {
        path: `/home`,
        element: <Home/>,
    },
    {
        path: `/about`,
        element: <About/>,
    },
]

const Router = () => <RouterProvider router={createBrowserRouter(routes)}/>

export default Router
