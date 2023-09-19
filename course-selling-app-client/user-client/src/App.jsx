import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Appbar } from "./layout/Appbar";
import { HomePage } from "./pages/HomePage";
function App() {
  return (
    <>
      <Router>
        <Appbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
