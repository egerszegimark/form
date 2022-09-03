import "./App.css";
import Form from "./pages/Form";
import List from "./pages/List";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

export default function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/list">
                  List
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/form">
                  Form
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Router>
        <Routes>
          <Route path="/list" element={<List />} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<Navigate to="/list" replace />} />
        </Routes>
      </Router>
    </>
  );
}
