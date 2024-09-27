import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import "./index.css";
import Root, {action as rootAction, loader as rootLoader} from "./routes/root.jsx";
import Contact, {loader as contactLoader} from './routes/contact.jsx'
import ErrorPage from "./error-page.jsx";
import EditContact, {action as editAction} from "./routes/edit.jsx";
import {action as destroyAction} from './routes/destoy.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        loader: rootLoader,
        action: rootAction,
        children: [
            {
                path: "contacts/:contactId",
                element: <Contact/>,
                loader: contactLoader,
            },
            {
                path: "contacts/:contactId/edit",
                element: <EditContact/>,
                loader: contactLoader,
                action: editAction
            },
            {
                path: "contacts/:contactId/destroy",
                element: <EditContact/>,
                action: destroyAction
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);