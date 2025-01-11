import { GroupItem } from "@entities/group";

const CONST_GROUP_LIST = [
  { name: "group1", seq: 1 },
  { name: "group2", seq: 2 },
  { name: "group3", seq: 3 },
];

export function GroupList() {
  return (
    <div>
      <h1>내 그룹 리스트</h1>
      <div className="flex gap-2">
        {CONST_GROUP_LIST.map((item) => (
          <GroupItem key={item.seq} data={item} />
        ))}
      </div>
    </div>
  );
}
