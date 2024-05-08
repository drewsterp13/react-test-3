import Home from "../pages/Home"
import Info from "../pages/Info"
import Dashboard from "../pages/Dashboard"

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
    protected: boolean
}

const routes: RouteType[] = [
    {
        path: "",
        component: Home,
        name: "Home",
        protected: false,
    },
    {
        path: "/dashboard",
        component: Dashboard,
        name: "Dashboard",
        protected: true,
    },
    {
        path: "/info",
        component: Info,
        name: "Info",
        protected: false,
    },
]

export default routes
