import { useState } from "react";
import { Link, Outlet } from 'react-router-dom'
const MainMenu = () => {
    const [currentPage, setcurrentPage] = useState("home");
    return (
        <div className="mainmenu">
            <div>
                <Link to={'/'}>
                    <button style={{ backgroundColor: currentPage === "home" ? "lightblue" : "initial" }}
                        onClick={() => setcurrentPage("home")}>
                        All
                    </button>
                </Link>
                <Link to={'/coding'}>
                    <button style={{ backgroundColor: currentPage === "coding" ? "lightblue" : "initial" }}
                        onClick={() => setcurrentPage("coding")}>
                        Coding
                    </button>
                </Link>
                <Link to={'/fullstack'}>
                    <button style={{ backgroundColor: currentPage === "fullstack" ? "lightblue" : "initial" }}
                        onClick={() => setcurrentPage("fullstack")}>Full Stack</button>
                </Link>
                <Link to={'/datascience'}>
                    <button style={{ backgroundColor: currentPage === "datascience" ? "lightblue" : "initial" }}
                        onClick={() => setcurrentPage("datascience")}>Data Science</button>
                </Link>
            </div>
            <Outlet />
        </div>
    );
}

export default MainMenu;