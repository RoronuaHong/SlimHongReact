// import React from 'react';
// import { Layout, Menu } from 'antd';
// import { HomeOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

// const { Header } = Layout;

// const NavBar: React.FC = () => {
//   const location = useLocation(); // 获取当前路由路径
//   const selectedKey = location.pathname === '/' ? '1' : '2'; // 根据路径确定选中的菜单项

//   const items = [
//     {
//       key: '1',
//       icon: <HomeOutlined />,
//       label: <Link to="/">Home</Link>,
//     },
//     {
//       key: '2',
//       icon: <UnorderedListOutlined />,
//       label: <Link to="/mytodolist">My Todo List</Link>,
//     },
//   ];

//   return (
//     <Header className="header">
//       <div className="logo" />
//       <Menu
//         theme="dark"
//         mode="horizontal"
//         items={items}
//         selectedKeys={[selectedKey]} // 动态设置选中的菜单项
//       />
//     </Header>
//   );
// };

// export default NavBar;


import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div>123</div>
  );
};

export default App;


