import { useState } from "react";
export default function List() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("seriesData"))
  );

  function Close(id) {
    const newSeriesData = data.filter((record) => record.id !== id);
    localStorage.setItem("seriesData", JSON.stringify(newSeriesData));
    setData(newSeriesData);
  }

  if (data != null) {
    return (
      <>
        {data.map((record) => {
          return (
            <figure className="figure wrapper" key={record.id}>
              <img
                src={`${record.link}`}
                alt="Series img"
                className="img-thumbnail"
              ></img>
              <span className="close" onClick={() => Close(record.id)}>
                &times;
              </span>
              <figcaption className="figure-caption text-center">
                {record.title}
              </figcaption>
              <figcaption className="figure-caption text-center">
                {record.season.length === 1 && "S0" + record.season}
                {record.episode.length === 1 && "E0" + record.episode}
                {record.season.length > 1 && "S" + record.season}
                {record.episode.length > 1 && "E" + record.episode}
              </figcaption>
            </figure>
          );
        })}
      </>
    );
  } else {
    return (
      <>
        <h1 className="display-5">Your series list is empty!</h1>
      </>
    );
  }
}
