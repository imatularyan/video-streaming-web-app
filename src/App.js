import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div className=" bg-blend-soft-light">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

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
