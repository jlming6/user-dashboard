import React from 'react';

import { Layout, Menu, Icon } from 'antd';
import { Link } from 'dva/router';

import styles from './MainLayout.css';

const { Header, Content } = Layout;

const SubMenu = Menu.SubMenu;

function MainLayout({ children, location }) {
  return (
    <Layout className={styles.normal}>
      <Header style={{ padding: '0 0px' }}>
        <div className="logo" />
        <Menu
          selectedKeys={[location.pathname]}
          mode="horizontal"
          theme="dark"
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="/">
            <Link to="/"><Icon type="home" />Messaging Platform</Link>
          </Menu.Item>
          <Menu.Item key="/users">
            <Link to="/users"><Icon type="bars" />Users</Link>
          </Menu.Item>
          <SubMenu key="/cms" title={<span><Icon type="appstore" /><span>CMS</span></span>}>
            <Menu.Item key="/campaigns">Campaigns</Menu.Item>
            <Menu.Item key="/audience_segments">Audience Segments</Menu.Item>
          </SubMenu>
        </Menu>
      </Header>
      <Content>
        <div className={styles.content}>
          <div className={styles.main}>
            {children}
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default MainLayout;
