import { Link } from "react-router-dom";

export function Header () {

    return (
        <div className="flex flex-1 justify-between px-2 py-4 bg-slate-100">
            <Link to='/'>
                logo-sec
            </Link>
            <div>
                buttons
            </div>

        </div>
    ) 
}
