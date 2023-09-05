import { Footer, NavBar } from "@/components";
import { FC, ReactNode } from "react";
//TODO: Footer renderizando duas vezes quando atualiza a pagina
interface LayoutProps{
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <html>
            <body>
                <NavBar />
                    {children}
                <Footer/>
            </body>
        </html>
    )
}

export default Layout;