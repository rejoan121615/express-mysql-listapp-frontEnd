import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ErrorHandler from "./Components/Error/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// routes
import Home from "./Components/Page/Home";
import AddNewMember from "./Components/Page/AddNewMember";
import RegisterPage from "./Components/Page/Register/Register";
import Loginpage from "./Components/Page/LogIn/Login";
import AllMemberPage from "./Components/Page/AllMember/AllMember";
import MemberPage from './Components/Page/AllMember/Member'

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/add-new-member" element={<AddNewMember />} />
                    <Route path="/all-member" element={<AllMemberPage />} />
                    <Route
                        path="/all-member/:memberName"
                        element={<MemberPage />}
                    />
                    <Route
                        path="/manage-member"
                        element={<h1>Manage Member</h1>}
                    />
                    <Route path="/log-in" element={<Loginpage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
