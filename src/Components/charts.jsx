import 'antd/dist/antd.css';

import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Sider, Content } = Layout;

export function Charts() {
  const onClick = (info) => {
    if (info.object) {
      // eslint-disable-next-line
      alert(
        `${info.object.properties.name} (${info.object.properties.abbrev})`
      );
    }
  };

  return (
    <Layout>
      <Sider theme="light">
        <Menu mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            chart 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            chart 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            chart 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Content style={{ position: 'relative' }}>
        {'Something to represent'}
      </Content>
    </Layout>
  );
}