import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog";
import ChakOut from "../Pages/ChackOut/ChakOut";
import Course from "../Pages/Course/Course";
import Courses from "../Pages/Courses/Courses";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../SignUp/SignUp";
import PrivateRoute from "./privateRoute/PrivateRoute";






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
            },
            {
                path:"/checkout/:id",
                
                
                
                element:<PrivateRoute><ChakOut></ChakOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://learn-programming-language-server.vercel.app/course/${params.id}`),
            }
            ,
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://learn-programming-language-server.vercel.app/data')
            }
            ,
            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`https://learn-programming-language-server.vercel.app/course/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
        

    },
    {
        path:"*",
        element:<ErrorPage></ErrorPage>
      }
])