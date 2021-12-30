import React from 'react';
import {
  CaretDownOutlined,
  FolderOpenOutlined,
  HomeOutlined,
  MessageOutlined,
  PieChartOutlined,
  SettingOutlined,
  TeamOutlined,
} from '@ant-design/icons';

import './App.css';

function App() {
  return (
    <main>
      <header>
        <div className="header" />
      </header>
      <section>
        <div className="section" />
      </section>
      <footer className="root">
        <div className="wrapper">
          <div className="links">
            <SettingOutlined className="linkIcon" />
            <span className="linkName">Settings</span>
            <CaretDownOutlined className="collapseLink" />
            <ul className="collapseMenu">
              <a href="#" className="collapseSublink">
                Data
              </a>
              <a href="#" className="collapseSublink">
                Group
              </a>
              <a href="#" className="collapseSublink">
                Members
              </a>
            </ul>
          </div>
          <PieChartOutlined />
          <MessageOutlined />
          <FolderOpenOutlined />
          <TeamOutlined />
          <HomeOutlined />
        </div>
      </footer>
    </main>
  );
}

export default App;
