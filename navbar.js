const navEl = document.querySelector("#nav");

navEl.innerHTML = `<div class="container-fluid">
      
<div class="row about">
  <div class="col-2 visible"></div>
  <div class="col-7"></div>
  <div class="col-lg-2 col-md-3 col-4 nav-log"><a>About WSJ</a></div>
  <div class="col-lg-1 d-none "></div>
</div>

  <div class="row ">
      <div class="col-3 visible"></div>
      <div class="col-6 title-col "><a class="navbar-brand" href="#">THE WALL STREET JOURNAL</a>
      </div>
      <div class="col-lg-2 col-md-3 col-4 nav-log mt-1">
          <span><a href="#">Login</a> / <a href="#">Sign up</a></span>
      <br>
          <div class="sub">
            <b><a href="#">Subscribe</a></b>
          </div>
  </div>
      <div class="col-lg-1"></div>
  </div>
</div>

<nav class="navbar  navbar-expand-md navbar-light">
<div class="container-fluid">
  
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="shortened" href="#">WSJ</a>
  <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
    <ul class="nav justify-content-center ">
      <li class="nav-item">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">World</a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="#">U.S.</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Politics</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Economy</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Business</a>
        </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Markets</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Opinion</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Books & Arts</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Real Estate</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Life & Work</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Style</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Sports</a>
      </li>
    </ul>
  </div>
</div>
</nav>`;
