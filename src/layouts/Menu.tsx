import { Menu, MenuProps, Space } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

export type RouteObject = {
  path?: string;
  children?: RouteObject[];
  element?: React.ReactNode;
  index?: boolean;
};

const items: MenuProps["items"] = [
  {
    label: "EP1:远程下拉联动",
    key: "ep1",
  },
  {
    label: "EP2: UI隐藏",
    key: "ep2",
  },

  {
    label: "EP3: 可选择表格",
    key: "ep3",
  },
  {
    label: "EP4: 可拖拽表格",
    key: "ep4",
  },
  {
    label: "EP5: 组合表单",
    key: "ep5",
  },
  {
    label: "EP6: 前后端数据格式兼容",
    key: "ep6",
  },
  {
    label: "EP7: 校验",
    key: "ep7",
  },
  {
    label: "EP8: 数据流任务配置",
    key: "ep8",
  },
  {
    label: "xrender vs formily",
    key: "vs",
  },
];

export default () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedKey = location.pathname.split("/")[1] || "hive";

  return (
    // <Space direction="vertical" style={{ width: '100%'}}>
    // <div style={{ height: 30 }}>icons</div>
    <Menu
      mode="inline"
      onClick={({ key }) => {
        console.log("key", key);
        navigate(key);
      }}
      items={items}
      defaultSelectedKeys={["hive"]}
      selectedKeys={[selectedKey]}
    />
    // </Space>
  );
};
