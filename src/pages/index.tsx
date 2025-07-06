import {lazy, type FC} from "react";
import {type RouteObject, RouterProvider} from "react-router-dom";
import {createBrowserRouter} from "react-router";
import WebsiteLayout from "../layuot/WebsiteLayout.tsx";
import NoFooterLayout from "../layuot/NoFooterLayout.tsx";

const Home = lazy<FC>(() => import('../pages/home/Home.tsx'))
const About = lazy<FC>(() => import('../pages/about/About.tsx'))
const Projects = lazy<FC>(() => import('../pages/projects/Projects.tsx'))
const Contact = lazy<FC>(() => import('../pages/contact/Contact.tsx'))
const NotFound = lazy<FC>(() => import('../pages/not-found/NotFound.tsx'))

const routes: RouteObject[] = [
    {
        path: `/`,
        element: <WebsiteLayout/>,
        children: [
            {
                path: `/about`,
                element: <About/>,
            },
            {
                path: `/projects`,
                element: <Projects/>,
            },
            {
                path: `/contact`,
                element: <Contact/>,
            },
        ]
    },
    {
        path: `/`,
        element: <NoFooterLayout/>,
        children: [
            {
                path: `/home`,
                element: <Home/>,
            },
        ]
    },
    {
        path: `*`,
        element: <NotFound/>,
    },
]

const Router = () => <RouterProvider router={createBrowserRouter(routes)}/>

export default Router
