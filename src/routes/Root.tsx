import React, { useState } from 'react';
import { Button, Layout, Menu, theme } from 'antd';
import { HomeOutlined, UnorderedListOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Link, useLocation, Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const Root: React.FC = () => {
  const location = useLocation(); // 获取当前路由路径
  const [collapsed, setCollapsed] = useState(false);
  const selectedKey = location.pathname === '/' ? '1' : '2'; // 根据路径确定选中的菜单项
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const items = [
    {
      key: '1',
      icon: <HomeOutlined />,
      label: <Link to="/">Home</Link>,
    },
    {
      key: '2',
      icon: <UnorderedListOutlined />,
      label: <Link to="/mytodolist">My Todo List</Link>,
    },
    {
      key: '3',
      icon: <UnorderedListOutlined />,
      label: <Link to="/about">About</Link>,
    },
    {
      key: '4',
      icon: <UnorderedListOutlined />,
      label: <Link to="/other">Other</Link>,
    },
  ];

  return (
    // <Header className="header">
    //   <div className="logo" />
    //   <Menu
    //     theme="dark"
    //     mode="horizontal"
    //     items={items}
    //     selectedKeys={[selectedKey]} // 动态设置选中的菜单项
    //   />
    // </Header>
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          items={items}
          selectedKeys={[selectedKey]} // 动态设置选中的菜单项
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: '100%',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Root;
