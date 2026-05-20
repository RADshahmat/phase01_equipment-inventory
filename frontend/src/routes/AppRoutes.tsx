import {
    createBrowserRouter,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/home";

import Login from "../pages/login";

import AdminDashboard from "../pages/AdminDashboard";

import CreateEquipment from "../pages/CreateEqipment";

import ProtectedRoute from "../components/ProtectedRoute";

export const router =
    createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,

            children: [

                {
                    index: true,
                    element: <Home />,
                },

                {
                    path: "login",
                    element: <Login />,
                },

                {
                    path: "admin",

                    element: (
                        <ProtectedRoute>
                            <AdminDashboard />
                        </ProtectedRoute>
                    ),
                },

                {
                    path: "admin/create",

                    element: (
                        <ProtectedRoute>
                            <CreateEquipment />
                        </ProtectedRoute>
                    ),
                },
            ],
        },
    ]);