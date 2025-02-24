import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Hearder from "./components/Header";
import { BrowserRouter, Routes, Route} from "react-router";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import PackagePage from "./Pages/PackagePage";
import GaleryPage from "./Pages/GalleryPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Hearder/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="About" element={<AboutPage />} />
      <Route path="package" element={<PackagePage />} />
      <Route path="galery" element={<GaleryPage />} />
      <Route path="contact" element={<ContactPage />} />
    </Routes>
    <Footer/>
  </BrowserRouter>

    </>
  );
}

export default App;