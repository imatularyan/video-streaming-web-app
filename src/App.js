import "./App.css";
import React from "react";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import ResultPage from "./components/ResultPage";
import Error from "./components/Error";
import VideoContainer from "./components/VideoContainer";

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
        children: [
          {
            path: "",
            element: <VideoContainer />,
          },
          {
            path: "result",
            element: <ResultPage />,
          },
        ],
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

export default App;
