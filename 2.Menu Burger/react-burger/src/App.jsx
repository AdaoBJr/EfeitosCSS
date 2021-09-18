import React, { useState } from 'react';
import { FaBookOpen, FaUtensils, FaBeer } from 'react-icons/fa';

function App() {
  const [active, setActive] = useState(false);

  return (
    <main>
      <section className="mainContent">
        <div className={(active) ? 'icon iconActive' : 'icon'}>
          <button
            type="button"
            onClick={() => setActive(!active)}
            className="hamburguer"
          >
            <div />
          </button>
        </div>
        <div className={(!active) && 'menuClose'}>
          <div className="containerBtns">
            <div className={(active) ? 'categoriesBtns' : 'titleClose'}>
              <button type="button">
                <FaBookOpen />
                All
              </button>
              <button type="button">
                <FaUtensils />
                Food
              </button>
              <button type="button">
                <FaBeer />
                Drink
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
