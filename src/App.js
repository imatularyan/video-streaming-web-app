import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {
  return (
    <Provider store={store}>
      <div className=" bg-blend-soft-light">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
  {},
]);

/**
 *
 * Head
 * Body
 *   Sidebar
 *   Menu items
 *  Main container
 *    Buttons List
 *    Video Container
 *      Video Card
 *
 */

export default App;
