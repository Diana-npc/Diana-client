import type { ReactNode } from "react"
import Header from "../components/header/Header"

interface ILayout {
    children: ReactNode
}

const Layout: React.FC<ILayout> = ({children}) => {

    return(
        <>

        <Header />
        {children}
        </>
    )
}

export default Layout