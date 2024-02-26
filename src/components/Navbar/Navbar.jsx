import classes from './Navbar.module.css'
import CartWidgets from '../CartWidgets/CartWidgets'
import logo from '../../assets/logo.png'



const Navbar = () => {
    return (
        <header className={classes.header}>

            <img className={classes.logo} src={logo} alt="Logo de la empresa" />
            
            <nav>
               
            <a className={classes.btn} href="#inicio">Inicio</a>
            <a className={classes.btn} href="#productos">Productos</a>
            <a className={classes.btn} href="#acerca-de">Nosotros</a>
            <a className={classes.btn} href="#contacto">Contacto</a>
            <a className={classes.btn} href="#ayuda">Ayuda</a>
            </nav>
            <h1 className={classes.title}  lang="en">Modernmarket</h1>
            <div>
            <CartWidgets/>
            </div>
        </header> 
    )
}

export default Navbar