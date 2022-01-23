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
  return (
    <div className="accordion">
      <div className="wrapper">
        <div className="accordionItem">
          <div className="accordionHeader">
            <HomeOutlined />
            <h3>Home</h3>
          </div>
          <div className="accordionContent">
            <p>Link info</p>
            <p>Link info</p>
            <p>Link info</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
