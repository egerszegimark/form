export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/list">
                  MyList
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/form">
                  Add
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
