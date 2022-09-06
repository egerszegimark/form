export default function List() {
  const title = localStorage.getItem("title");

  return (
    <>
      <figure className="figure">
        <img
          src="https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg"
          alt="Series img"
          className="img-thumbnail"
        ></img>
        <figcaption className="figure-caption text-center">{title}</figcaption>
        <figcaption className="figure-caption text-center">S01E03</figcaption>
      </figure>
    </>
  );
}
