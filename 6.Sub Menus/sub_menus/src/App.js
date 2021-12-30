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
            <div className="linkName">
              <HomeOutlined className="linkIcon" />
              <span>Dashboard</span>
              <CaretDownOutlined className="collapseLink" />
            </div>
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
            <div className="linkName">
              <MessageOutlined className="linkIcon" />
              <span>Messenger</span>
              <CaretDownOutlined className="collapseLink" />
            </div>

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
            <div className="linkName">
              <PieChartOutlined className="linkIcon" />
              <span>Results</span>
              <CaretDownOutlined className="collapseLink" />
            </div>
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
            <div className="linkName">
              <FolderOpenOutlined className="linkIcon" />
              <span>Projects</span>
              <CaretDownOutlined className="collapseLink" />
            </div>
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
            <div className="linkName">
              <TeamOutlined className="linkIcon" />
              <span>Team</span>
              <CaretDownOutlined className="collapseLink" />
            </div>
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
            <div className="linkName">
              <SettingOutlined className="linkIcon" />
              <span>Settings</span>
              <CaretDownOutlined className="collapseLink" />
            </div>
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
