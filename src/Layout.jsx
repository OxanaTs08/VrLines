import { Outlet } from "react-router-dom";
import Header from "./components/organisms/Header/Header";
import GlobalStyle from "./GlobalStyle";
import { Helmet } from "react-helmet";

const Layout = () => {
  return (
    <div>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
