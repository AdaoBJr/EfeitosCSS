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
  const { showCollapse, showElement, isDesktop } = useApp();
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
          <div className={showElement && showElement === 0 ? 'links move' : 'links'}>
            <div className="linkName">
              <HomeOutlined className="linkIcon" />
              <button type="button" name="0" className="linkBtn" onClick={showCollapse}>
                Dashboard
              </button>
              <CaretDownOutlined
                className={showElement === 0 ? 'collapseLink rotate' : 'collapseLink'}
              />
            </div>
            <ul
              className={showElement === 0 ? 'collapseMenu showCollapse' : 'collapseMenu'}
            >
              <a className="collapseSublink">Data</a>
              <a className="collapseSublink">Group</a>
              <a className="collapseSublink">Members</a>
            </ul>
          </div>
          <div className={showElement && showElement <= 1 ? 'links move' : 'links'}>
            <div className="linkName">
              <FolderOpenOutlined className="linkIcon" />
              <button type="button" name="1" className="linkBtn" onClick={showCollapse}>
                Projects
              </button>
              <CaretDownOutlined
                className={showElement === 1 ? 'collapseLink rotate' : 'collapseLink'}
              />
            </div>
            <ul
              className={showElement === 1 ? 'collapseMenu showCollapse' : 'collapseMenu'}
            >
              <a className="collapseSublink">Data</a>
              <a className="collapseSublink">Group</a>
              <a className="collapseSublink">Members</a>
            </ul>
          </div>
          <div className={showElement && showElement <= 2 ? 'links move' : 'links'}>
            <div className="linkName">
              <SettingOutlined className="linkIcon" />
              <button type="button" name="2" className="linkBtn" onClick={showCollapse}>
                Settings
              </button>
              <CaretDownOutlined
                className={showElement === 2 ? 'collapseLink rotate' : 'collapseLink'}
              />
            </div>
            <ul
              className={showElement === 2 ? 'collapseMenu showCollapse' : 'collapseMenu'}
            >
              <a className="collapseSublink">Data</a>
              <a className="collapseSublink">Group</a>
              <a className="collapseSublink">Members</a>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
