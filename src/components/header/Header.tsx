import cl from "./style.module.css"
import logo from "./../../../public/logo.png"
import { Link } from "react-router-dom"

const Header = () => {

    return (
        <>
        <header className={cl.header}>
         <div className={cl.header__container}>
            <nav className={cl.header__navigation}>
               <img src={logo} className={cl.header__img} />
               <Link to="">Guitars</Link>
               <Link to="">Accessories</Link>
               <Link to="">Storage</Link>
               <Link to="">Lessons</Link>
               <Link to="">Repairs</Link>
            </nav>
            <div className={cl.header__icons}>
               <img src="./img/profile.svg" alt=""/>
               <img src="./img/cart.svg" alt=""/>
            </div>
         </div>
      </header>
        </>
    )
}

export default Header