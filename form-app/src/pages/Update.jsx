import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Update({ SetData }) {
  const { state } = useLocation();
  const navigate = useNavigate();
  const localData = JSON.parse(localStorage.getItem("seriesData"));
  const info = localData.filter((record) => record.id === state.id)[0];
  const [updated, setUpdated] = useState({
    season: info.season,
    episode: info.episode,
  });

  const onChange = (e) => {
    setUpdated((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const updateState = () => {
    const newState = localData.map((obj) => {
      if (obj.id === state.id) {
        return { ...obj, season: updated.season, episode: updated.episode };
      }

      return obj;
    });

    SetData(newState);
    navigate("/list");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateState();
  };

  return (
    <>
      <h1 className="display-5">Update your progress</h1>
      <form onSubmit={onSubmit} autoComplete="off">
        <div className="mb-3 row">
          <div className="col">
            <input
              type="number"
              className="form-control"
              id="season"
              placeholder="Season"
              min="1"
              value={updated.season}
              onChange={onChange}
              required
            ></input>
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              id="episode"
              placeholder="Episode"
              min="1"
              value={updated.episode}
              onChange={onChange}
              required
            ></input>
          </div>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="submit" className="btn btn-secondary">
            Save
          </button>
        </div>
      </form>
    </>
  );
}
