import "./App.css";
import Form from "./pages/Form";
import List from "./pages/List";
import Navbar from "./components/Navbar";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Update from "./pages/Update";

export default function App() {
  const [seriesData, setSeriesData] = useState(
    JSON.parse(localStorage.getItem("seriesData"))
  );

  function SetData(item) {
    localStorage.setItem("seriesData", JSON.stringify(item));
  }

  return (
    <div className="background-image">
      <Navbar />
      <Router>
        <Routes>
          <Route
            exact
            path="/list"
            element={
              <List
                seriesData={seriesData}
                setSeriesData={setSeriesData}
                SetData={SetData}
              />
            }
          />
          <Route
            exact
            path="/form"
            element={
              <Form
                seriesData={seriesData}
                setSeriesData={setSeriesData}
                SetData={SetData}
              />
            }
          />
          <Route path="/form/update" element={<Update />} />
          <Route path="*" element={<Navigate to="/list" replace />} />
        </Routes>
      </Router>
    </div>
  );
}
