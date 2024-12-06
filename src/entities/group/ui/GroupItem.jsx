
import { NavLink } from "react-router-dom"

export const GroupItem = ({ data }) => {
    const { name, seq, count } = data
    return (
        <NavLink to={`/group/${seq}`}>

            <div className="p-4 rounded border-black border-2 cursor-pointer hover:bg-slate-50"> 
                <div className="font-bold text-lg">
                    {name}    
                </div>
                <div>
                    count: {count}
                </div>
            </div>
        </NavLink>
    )
}