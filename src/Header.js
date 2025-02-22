import { Link } from "react-router-dom";

function Header(){
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">DJS AUTOMOBILES</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/vehicles">Vehicles</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/services">Services</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact-us">Contact us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}

export default Header;