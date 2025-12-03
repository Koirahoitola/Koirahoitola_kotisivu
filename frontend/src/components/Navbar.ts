export function Navbar() {
  return `
    <style>
      @keyframes rotate { 100% { transform: rotate(1turn); } }
      .rainbow::before {
        content: '';
        position: absolute;
        z-index: -2;
        left: -50%;
        top: -50%;
        width: 200%;
        height: 200%;
        background-position: 100% 50%;
        background-repeat: no-repeat;
        background-size: 50% 30%;
        filter: blur(6px);
        background-image: linear-gradient(90deg,#ff7a18,#af002d,#319197,#5ee7df);
        animation: rotate 5.5s linear infinite;
      }
      .rainbow { position: relative; z-index: 0; background: rgba(240, 219, 34, 0.08); overflow: hidden; padding: 0.15rem; display:inline-flex; align-items:center; justify-content:center; border-radius: 9999px; transition: transform .18s ease; }
      .rainbow:hover { transform: scale(1.04); }
      .rainbow .btn { padding: .375rem .75rem; border-radius: 9999px; background: rgba(0,0,0,0.75); color: #fff; border: none; font-weight: 600; text-decoration: none; }
    </style>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary px-3">
      <a class="navbar-brand" href="#/">ToinenKoti</a>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="#/">Etusivu</a></li>
          <li class="nav-item"><a class="nav-link" href="#/hinnasto">Hinnasto</a></li>
          <li class="nav-item">
            <div class="rainbow ms-2">
              <a class="btn" href="#/ajanvaraus">Ajanvaraus</a>
            </div>
          </li>
          <li class="nav-item"><a class="nav-link" href="#/galleria">Kuvagalleria</a></li>
          <li class="nav-item"><a class="nav-link" href="#/yhteystiedot">Yhteystiedot</a></li>
        </ul>
      </div>
    </nav>
  `;
}
