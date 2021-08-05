import React from 'react';
import WechatOutlined from "@ant-design/icons/WechatOutlined";
import UserOutlined from "@ant-design/icons/UserOutlined";
import './css/menu.scss';

export const Header = () => {
  return (
      <div className="container-header">
          <div className="container-header-title">
              <WechatOutlined style={{ fontSize: 24 }}/>
              <h1 className="header-app">Messenger App</h1>
          </div>
          <div className="container-header-actions">
              <UserOutlined  style={{ fontSize: 24, margin: 10 }} />
              <span>john.doe@test.fr</span>
          </div>
      </div>
  );
};
