import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CONST_GROUP_DUMMY } from '../data/dummy'

export const GroupDetail = () => {

    const params = useParams()
    const [groupData, setGroupData] = useState(CONST_GROUP_DUMMY.filter(item => item.seq == params.seq )[0]) 

    useEffect(()=> {
    }, [])
    
    
    
    return (
        <div>
            {groupData.seq} / {groupData.name} / {groupData.memberCount}
        </div>
    )
}