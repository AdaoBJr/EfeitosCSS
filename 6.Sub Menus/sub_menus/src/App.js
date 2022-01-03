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
            <div className="linkName">
              <HomeOutlined className="linkIcon" />
              <button
                type="button"
                name="link-0"
                className="linkBtn"
                onClick={showCollapse}
              >
                Dashboard
              </button>
              <CaretDownOutlined
                className={
                  showElement === 'link-0' ? 'collapseLink rotate' : 'collapseLink'
                }
              />
            </div>
            <ul
              className={
                showElement === 'link-0' ? 'collapseMenu showCollapse' : 'collapseMenu'
              }
            >
              <a className="collapseSublink">Data</a>
              <a className="collapseSublink">Group</a>
              <a className="collapseSublink">Members</a>
            </ul>
          </div>
          <div className="links">
            <div className="linkName">
              <MessageOutlined className="linkIcon" />
              <button
                type="button"
                name="link-1"
                className="linkBtn"
                onClick={showCollapse}
              >
                Messenger
              </button>
              <CaretDownOutlined
                className={
                  showElement === 'link-1' ? 'collapseLink rotate' : 'collapseLink'
                }
              />
            </div>

            <ul
              className={
                showElement === 'link-1' ? 'collapseMenu showCollapse' : 'collapseMenu'
              }
            >
              <a className="collapseSublink">Data</a>
              <a className="collapseSublink">Group</a>
              <a className="collapseSublink">Members</a>
            </ul>
          </div>
          <div className="links">
            <div className="linkName">
              <PieChartOutlined className="linkIcon" />
              <button
                type="button"
                name="link-2"
                className="linkBtn"
                onClick={showCollapse}
              >
                Results
              </button>
              <CaretDownOutlined
                className={
                  showElement === 'link-2' ? 'collapseLink rotate' : 'collapseLink'
                }
              />
            </div>
            <ul
              className={
                showElement === 'link-2' ? 'collapseMenu showCollapse' : 'collapseMenu'
              }
            >
              <a className="collapseSublink">Data</a>
              <a className="collapseSublink">Group</a>
              <a className="collapseSublink">Members</a>
            </ul>
          </div>
          <div className="links">
            <div className="linkName">
              <FolderOpenOutlined className="linkIcon" />
              <button
                type="button"
                name="link-3"
                className="linkBtn"
                onClick={showCollapse}
              >
                Projects
              </button>
              <CaretDownOutlined
                className={
                  showElement === 'link-3' ? 'collapseLink rotate' : 'collapseLink'
                }
              />
            </div>
            <ul
              className={
                showElement === 'link-3' ? 'collapseMenu showCollapse' : 'collapseMenu'
              }
            >
              <a className="collapseSublink">Data</a>
              <a className="collapseSublink">Group</a>
              <a className="collapseSublink">Members</a>
            </ul>
          </div>
          <div className="links">
            <div className="linkName">
              <TeamOutlined className="linkIcon" />
              <button
                type="button"
                name="link-4"
                className="linkBtn"
                onClick={showCollapse}
              >
                Team
              </button>
              <CaretDownOutlined
                className={
                  showElement === 'link-4' ? 'collapseLink rotate' : 'collapseLink'
                }
              />
            </div>
            <ul
              className={
                showElement === 'link-4' ? 'collapseMenu showCollapse' : 'collapseMenu'
              }
            >
              <a className="collapseSublink">Data</a>
              <a className="collapseSublink">Group</a>
              <a className="collapseSublink">Members</a>
            </ul>
          </div>
          <div className="links">
            <div className="linkName">
              <SettingOutlined className="linkIcon" />
              <button
                type="button"
                name="link-5"
                className="linkBtn"
                onClick={showCollapse}
              >
                Settings
              </button>
              <CaretDownOutlined
                className={
                  showElement === 'link-5' ? 'collapseLink rotate' : 'collapseLink'
                }
              />
            </div>
            <ul
              className={
                showElement === 'link-5' ? 'collapseMenu showCollapse' : 'collapseMenu'
              }
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
