import { Link, useRouteError } from "react-router-dom"
const CareersEror = () => {
    const error = useRouteError()
    return (
        <div className="career-error">
            <h2>Erorr</h2>
            <p>{error.message}</p>
            <Link to="/">Back to Home Bage</Link>
        </div>
    )
}

export default CareersEror