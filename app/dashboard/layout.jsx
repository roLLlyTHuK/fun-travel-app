import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export default function Layout({ children }) {
    return (
        <>

            <SideBar />
            <div>
                <NavBar />
                <div>{children}</div>
            </div>
        </>
    );
}