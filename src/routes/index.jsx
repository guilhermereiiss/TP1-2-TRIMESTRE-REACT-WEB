// import {
//     createBrowserRouter,
//     RouterProvider,
// } from "react-router-dom";

// import Home from "../views/Home"
// import SigIn from "../views/SigIn";
// import SingUp from "../views/SingUp";
// import Form from "../views/Form";
// import Settings from "../views/Settings";

// const router = createBrowserRouter([
//     {
//         path: "/TP/",
//         element: <Home/>,
//     },
//     {
//         path: "/TP/Form",
//         element: <Form/>,
//     },
//     {
//         path: "/TP/SigIn",
//         element: <SigIn/>,
//     },
//     {
//         path: "/TP/SingUp",
//         element: <SingUp/>,
//     },
//     {
//         path: "/TP/Settings",
//         element: <Settings/>,
//     },
// ]);

// const RouterApp = () =>{


    
//     return(
//         <div>
//             <RouterProvider router={router} />
//         </div>
//     )
// }


// export default RouterApp;

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { AuthProvider } from "./AuthContext"; 
import Home from "../views/Home";
import SigIn from "../views/SigIn";
import SingUp from "../views/SingUp";
import Form from "../views/Form";
import Settings from "../views/Settings";
import PrivateRoute from "./PrivateRoute"; 

const router = createBrowserRouter([
    {
        path: "/TP/",
        element: <PrivateRoute element={<Home />} />,
    },
    {
        path: "/TP/Form",
        element: <PrivateRoute element={<Form />} />,
    },
    {
        path: "/TP/SigIn",
        element: <SigIn />,
    },
    {
        path: "/TP/SingUp",
        element: <SingUp />,
    },
    {
        path: "/TP/Settings",
        element: <PrivateRoute element={<Settings />} />,
    },
]);

const RouterApp = () => (
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
);

export default RouterApp;

