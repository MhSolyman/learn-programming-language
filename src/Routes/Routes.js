import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Course from "../Pages/Course/Course";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../SignUp/SignUp";






export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }, {
                path:'/signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'/Login',
                element:<LogIn></LogIn>
            }
            ,
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/data')
            }
            ,
            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            }
        ]

    }
])