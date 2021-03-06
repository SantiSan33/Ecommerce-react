import CartWidget from "./CartWidget/CartWidget"




function NavBar(){
    return(
        
          <header className='main-header'>
            <div className='container-logo'>
            <img src="logo192.png" className="img-header" alt="logo"  />
            </div>
    
            <ul className='NavBar'>
            <li><button>Home</button></li>
            <li><button>Productos</button></li>
            <li><button>Nosotros</button></li>
            <li><button>Contacto</button></li>
            </ul>

            <CartWidget />
    
          </header>
          
      )
}

export default NavBar