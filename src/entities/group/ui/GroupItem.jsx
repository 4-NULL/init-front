
export const GroupItem = ({ name, count }) => {

    return (
        <div className="p-4 rounded border-black border-2"> 
            <div className="font-bold text-lg">
                {name}    
            </div>
            <div>
                count: {count}
            </div>
        </div>
    )
}