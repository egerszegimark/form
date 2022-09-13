import { useNavigate } from "react-router-dom";
export default function List({ seriesData, setSeriesData, SetData }) {
  const navigate = useNavigate();

  function Close(id) {
    const newSeriesData = seriesData.filter((record) => record.id !== id);
    SetData(newSeriesData);
    setSeriesData(newSeriesData);
  }

  function onUpdate(id) {
    navigate("/form/update", { replace: true });
  }

  if (seriesData?.length > 0) {
    return (
      <>
        {seriesData.map((record) => {
          return (
            <figure className="figure wrapper" key={record.id}>
              <img
                src={`${record.link}`}
                alt="Series img"
                className="img-thumbnail"
                onClick={() => onUpdate(record.id)}
              ></img>
              <span className="close" onClick={() => Close(record.id)}>
                &times;
              </span>
              <figcaption className="figure-caption text-center">
                {record.title}
              </figcaption>
              <figcaption className="figure-caption text-center">
                {record.season.length === 1 && "S0" + record.season}
                {record.season.length > 1 && "S" + record.season}
                {record.episode.length === 1 && "E0" + record.episode}
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
