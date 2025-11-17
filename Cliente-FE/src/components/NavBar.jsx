import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/log">
                        Inicio de sesion
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/customers">
                        Compradores
                    </NavLink>
                </li>
                <li>

                    <NavLink to="/add-Sale">
                        Añadir una venta
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Sales">
                        Listado de Ventas
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sales-per-client">
                        Listado de ventas Por cliente
                    </NavLink>

                </li>
            </ul>
        </nav>
    )
}

export default NavBar