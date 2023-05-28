import Menu from './Menu';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const { Sider, Content } = Layout;

const LayoutWrapper = () => {
  return (
    <Layout style={{ height: '100vh'}}>
      <Sider>
        <Menu />
      </Sider>
      <Content style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Outlet />
      </Content>
    </Layout>
  )
}

export default LayoutWrapper;