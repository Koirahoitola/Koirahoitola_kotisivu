export function Navbar() {
  return `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary px-3">
      <a class="navbar-brand" href="#/">ToinenKoti</a>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="#/">Etusivu</a></li>
          <li class="nav-item"><a class="nav-link" href="#/hinnasto">Hinnasto</a></li>
          <li class="nav-item"><a class="nav-link" href="#/ajanvaraus">Ajanvaraus</a></li>
          <li class="nav-item"><a class="nav-link" href="#/galleria">Kuvagalleria</a></li>
          <li class="nav-item"><a class="nav-link" href="#/yhteystiedot">Yhteystiedot</a></li>
        </ul>
      </div>
    </nav>
  `;
}
