import { Outlet } from "react-router"
import Header from "../components/Header"
import Footer from "../components/Footer"

function MainLayout() {
  return (
    <>
        <Header />
        <div>
            <Outlet />
        </div>
        <Footer />
    </>
  )
}

export default MainLayout