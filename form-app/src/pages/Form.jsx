export default function Form() {
  return (
    <>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Title
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Year
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Director
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            IMDb
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
        </div>
        <label for="customRange3" class="form-label">
          IMDb
        </label>
        <input
          type="range"
          class="form-range"
          min="0"
          max="10"
          step="0.1"
          id="customRange3"
        ></input>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
