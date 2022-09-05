import { useState } from "react";

const defaultFormData = {
  title: "",
  link: "",
  season: "",
  episode: "",
};

export default function Form() {
  const [formData, setFormData] = useState(defaultFormData);
  const { title, link, season, episode } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(defaultFormData);
  };

  return (
    <>
      <h1 className="display-5">Add a new series</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Title"
            value={title}
            onChange={onChange}
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
          ></input>
        </div>

        <div className="mb-3 row">
          <div className="col">
            <input
              type="number"
              className="form-control"
              id="season"
              placeholder="Season"
              aria-label="Season"
              value={season}
              onChange={onChange}
            ></input>
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              id="episode"
              placeholder="Episode"
              aria-label="Episode"
              value={episode}
              onChange={onChange}
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
