import '../Styles/Navbar.css'

function Navbar() {
  return (
    <div className="Navbar">
      <a href="">VALLMEDIC</a>
      <nav>
        <ul className='Menu'>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar