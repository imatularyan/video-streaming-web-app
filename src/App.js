import "./App.css";
import React from "react";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import ResultsPage from "./components/ResultsPage";
import Error from "./components/Error";

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
      <Outlet />
    </Provider>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "results",
        element: <ResultsPage />,
      },
    ],
  },
]);

export default App;
