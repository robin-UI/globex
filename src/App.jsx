import { Outlet } from "react-router";
import Header from "./components/header/Header";
import Routers from "./router/Router";
import Footer from "./components/footer/footer"
<<<<<<< HEAD
import SideMedia from "./components/sideMedia/SideMedia";
=======
import SideMedia from "./components/sideMedia/sideMedia";
>>>>>>> refs/remotes/origin/robin


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
      <SideMedia/>
      <Outlet />
      <Footer/>
    </>
  );
};
