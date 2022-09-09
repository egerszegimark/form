import "./App.css";
import Form from "./pages/Form";
import List from "./pages/List";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

export default function App() {
  return (
    <div className="background-image">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/list" element={<List />} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<Navigate to="/list" replace />} />
        </Routes>
      </Router>
    </div>
  );
}
