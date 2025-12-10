import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const First = () => {
  return (
    <>
      <Header
        openLogin={() => {}}
        openRegister={() => {}}
      />

      <Outlet />

      <Footer />
    </>
  );
};

export default First;
