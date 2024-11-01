import { Outlet } from "react-router";
import Header from "./components/header/Header";
import Routers from "./router/Router";

// This is our layout

function App() {
  return (
    <>
      <Routers />
    </>
  );
}

export default App;

export const LayOut = function () {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
