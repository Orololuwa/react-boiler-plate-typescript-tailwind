import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import { Outlet } from "react-router";

const LayoutLandingPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </>
  );
};

export default LayoutLandingPage;
