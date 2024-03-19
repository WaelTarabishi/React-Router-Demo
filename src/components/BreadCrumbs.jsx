import { useLocation, Link } from "react-router-dom"
const BreadCrumbs = () => {
    const Location = useLocation()

    let currentLink = []

    const crumbs = Location.pathname.split("/").filter(crumb => crumb !== "")
        .map(crumb => {
            currentLink.push(`/${crumb}`)
            return (
                <div key={crumb}>
                    <Link to={currentLink.join("")}>{crumb}</Link>
                </div>
            )
        })


    return (
        <main>
            <div>{crumbs}</div>
        </main>
    )
}

export default BreadCrumbs