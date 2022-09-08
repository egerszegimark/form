export default function List() {
  const data = JSON.parse(localStorage.getItem("jsonData"));

  return (
    <>
      {data.map((record) => {
        return (
          <figure className="figure" key={record.id}>
            <img
              src={`${record.link}`}
              alt="Series img"
              className="img-thumbnail"
            ></img>
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
}
