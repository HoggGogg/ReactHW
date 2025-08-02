import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";
import {AuthResorcesPage} from "../pages/AuthResorcesPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>,},
            {path: 'login', element: <LoginPage/>,},
            {path: '/auth/resources', element: <AuthResorcesPage/>,}
        ]
    }
]);