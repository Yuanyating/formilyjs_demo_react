import { Menu, MenuProps } from 'antd'
import { useNavigate } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}

export type  RouteObject = {
  path?: string;
  children?: RouteObject[]
  element?: React.ReactNode
  index?: boolean
}

const items: MenuProps['items'] = [
  {
    label: 'EP1:远程下拉联动',
    key: 'hive',
  },
  {
    label: 'EP2:文件上传',
    key: 'upload',
  },
  {
    label: 'EP3:复杂联动',
    key: '/linkage',
  },
  {
    label: 'EP4: 表格',
    key: '/table',
  },
  {
    label: 'EP5: 任务配置',
    key: '/task',
  },
]

export default () => {
  const navigate = useNavigate()

  return (
    <Menu
      mode="inline"
      onClick={({ key }) => {
        console.log('key', key)
        navigate(key)
      }}
      items={items}
    />
  )
}
