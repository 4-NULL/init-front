import { Link } from "react-router-dom";
import { Button } from "./Button";
export function Header () {

    return (
        <div className="flex flex-1 justify-between px-2 py-4 bg-slate-100">
            <Link to='/'>
                logo-sec
            </Link>
            <div>
                <Button label="test1"/>
                <Button label="test2"/>
            </div>

        </div>
    ) 
}
