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

import useApp from '../src/talons/useApp';

import './App.css';

function App() {
  const { showCollapse, showElement } = useApp();
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
            <button name="link-0" className="linkName" onClick={showCollapse}>
              <HomeOutlined className="linkIcon" />
              <span>Dashboard</span>
              <CaretDownOutlined className="collapseLink" />
            </button>
            <ul
              className={
                showElement === 'link-0' ? 'collapseMenu showCollapse' : 'collapseMenu'
              }
            >
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
            <div name="link-1" aria-hidden className="linkName">
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
            <div name="link-2" aria-hidden className="linkName">
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
            <div name="link-3" aria-hidden className="linkName">
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
            <div name="link-4" aria-hidden className="linkName">
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
            <div name="link-5" aria-hidden className="linkName">
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
