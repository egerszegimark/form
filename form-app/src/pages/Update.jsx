import { useLocation } from "react-router-dom";

export default function Update() {
  const { state } = useLocation();
  const localData = JSON.parse(localStorage.getItem("seriesData"));
  const info = localData.filter((record) => record.id === state.id);
  console.log(info[0]);

  return (
    <>
      <h1 className="display-5">Update your progress</h1>
      <form autoComplete="off">
        <div className="mb-3 row">
          <div className="col">
            <input
              type="number"
              className="form-control"
              id="season"
              placeholder="Season"
              min="1"
              //value={season}
              //onChange={onChange}
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
              //value={episode}
              //onChange={onChange}
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
