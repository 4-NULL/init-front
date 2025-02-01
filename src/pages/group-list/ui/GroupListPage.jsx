import { GroupList } from "@widgets/group";



export function GroupListPage() {
    return (
        <div>
            <GroupList showGroupAddBtn={false} groups={[]}/>
        </div>
    )
}