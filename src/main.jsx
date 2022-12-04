import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ErrorHandler from "./Components/Error/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// routes 
import Home from "./Components/Page/Home";
import AddNewMember from "./Components/Page/AddNewMember";


 const actionHandler = async ({params, request}) => {
    console.log("yours params", params);
     console.log('your request', request);
     const formData = await request.formData();
     console.log(formData);
    return <h1>success</h1>
}



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorHandler />,
        children: [
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/add-new-member",
                element: <AddNewMember />,
                action: actionHandler,
                children: [
                    {
                        path: "success",
                        element: <h1>submitted success fully</h1>,
                        action: actionHandler,
                    },
                    {
                        path: "fail",
                        element: <h1>submition fail</h1>,
                    },
                ],
            },
            {
                path: "/all-member",
                element: <h1>All member</h1>,
            },
            {
                path: "/manage-member",
                element: <h1>Manage members</h1>,
            },
            {
                path: "log-in",
                element: <h1>log in</h1>,
            },
            {
                path: "register",
                element: <h1>register here</h1>,
            },
            {
                path: "log out",
                element: <h1>logout</h1>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
