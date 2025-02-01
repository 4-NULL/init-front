
export const GroupDetail = ({ groupData }) => {
    const { seq, name, description } = groupData;


    return (
        <div>
            {seq} / {name} / {description}
        </div>
    )
}