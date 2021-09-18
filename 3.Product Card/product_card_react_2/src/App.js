import React from 'react';
import './App.css';

import img1 from './images/img1.jpeg';
import img2 from './images/img2.jpeg';
import img3 from './images/img3.jpeg';

function App() {
  return (
    <main className="main">
      <div className="container">
        <div className="card">
          <div className="imgBx">
            <img src={img1} alt="dog 1" />
          </div>
          <div className="content">
            <h2>Card 1</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="imgBx">
            <img src={img2} alt="dog 2" />
          </div>
          <div className="content">
            <h2>Card 2</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="imgBx">
            <img src={img3} alt="dog 3" />
          </div>
          <div className="content">
            <h2>Card 3</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
