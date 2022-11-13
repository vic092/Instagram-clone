import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,Route,
} from "react-router-dom";
import Post from './components/Post';
import { store } from './app/store'
import { Provider } from 'react-redux'
import './styles/main.scss';
import { Login } from './pages/Login';
import 'boxicons'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "instagram",
    element: <Post/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
