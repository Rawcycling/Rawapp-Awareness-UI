import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AwarenessPage from "./pages/AwarenessPage.jsx";
import WaitlistPage from "./pages/WaitlistPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<AwarenessPage />} />
          <Route path="/waitlist" element={<WaitlistPage />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
