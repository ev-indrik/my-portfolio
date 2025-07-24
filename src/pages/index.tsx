import {lazy, type FC} from "react";
import {type RouteObject, RouterProvider} from "react-router-dom";
import {createBrowserRouter} from "react-router";
import WebsiteLayout from "../layuot/WebsiteLayout.tsx";

const Home = lazy<FC>(() => import('../pages/home/Home.tsx'))
const About = lazy<FC>(() => import('../pages/about/About.tsx'))
const Projects = lazy<FC>(() => import('../pages/projects/Projects.tsx'))
const Contacts = lazy<FC>(() => import('./contacts/Contacts.tsx'))
const NotFound = lazy<FC>(() => import('../pages/not-found/NotFound.tsx'))
const ProjectDetailedPage = lazy<FC>(()=> import('./project-detailed-page/ProjectDetailedPage'))

const routes: RouteObject[] = [
    {
        path: '/',
        element: <WebsiteLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'home',
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'projects',
                element: <Projects />,
            },
            {
                path: 'contacts',
                element: <Contacts />,
            },
            {
                path: 'projects/:projectId',
                element: <ProjectDetailedPage/>,
            },
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    },
];

const Router = () => <RouterProvider router={createBrowserRouter(routes)}/>

export default Router
