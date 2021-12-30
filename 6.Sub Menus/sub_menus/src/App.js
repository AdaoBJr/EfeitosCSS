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
            <HomeOutlined className="linkIcon" />
            <span className="linkName">Dashboard</span>
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
          <div className="links">
            <MessageOutlined className="linkIcon" />
            <span className="linkName">Messenger</span>
            <CaretDownOutlined className="collapseLink" />
            <ul className="collapseMenu showCollapse">
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
          <div className="links">
            <PieChartOutlined className="linkIcon" />
            <span className="linkName">Results</span>
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
          <div className="links">
            <FolderOpenOutlined className="linkIcon" />
            <span className="linkName">Projects</span>
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
          <div className="links">
            <TeamOutlined className="linkIcon" />
            <span className="linkName">Team</span>
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
        </div>
      </footer>
    </main>
  );
}

export default App;
