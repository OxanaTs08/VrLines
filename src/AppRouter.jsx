import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import MainPage from "./components/pages/MainPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;
