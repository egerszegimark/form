import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const defaultFormData = {
  id: "",
  title: "",
  link: "",
  season: "",
  episode: "",
};

export default function Form({ seriesData, setSeriesData, SetData }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(defaultFormData);
  const { title, link, season, episode } = formData;
  const [ready, setReady] = useState(false);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  useEffect(() => {
    SetData(seriesData);
    if (ready) navigate("/list");
  }, [ready, SetData, navigate, seriesData]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (seriesData?.length > 0) {
      formData.id = seriesData[seriesData?.length - 1].id + 1;
      setSeriesData((prevState) => [...prevState, formData]);
    } else {
      formData.id = 1;
      setSeriesData([formData]);
    }
    setFormData(defaultFormData);
    setReady(true);
  };

  return (
    <>
      <h1 className="display-5">Add a new series</h1>
      <form onSubmit={onSubmit} autoComplete="off">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Title"
            value={title}
            onChange={onChange}
            required
          ></input>
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="link"
            placeholder="Image link"
            value={link}
            onChange={onChange}
            required
          ></input>
        </div>

        <div className="mb-3 row">
          <div className="col">
            <input
              type="number"
              className="form-control"
              id="season"
              placeholder="Season"
              min="1"
              value={season}
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
              value={episode}
              onChange={onChange}
              required
            ></input>
          </div>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="submit" className="btn btn-secondary">
            Add
          </button>
        </div>
      </form>
    </>
  );
}
