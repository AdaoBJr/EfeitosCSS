import React, { useState } from 'react'
import { FaCamera } from 'react-icons/fa'
import profileImg from './image/profile.jpg'

function App() {
  const [showImg, setShowImg] = useState(false);
  return (
    <main>
    <div className={(showImg) ? 'bigImgProfile showImage' : 'bigImgProfile'}>
      <img src={profileImg} alt="img-profile" />
      <button
        type="button"
        className="close"
        onClick={() => setShowImg(!showImg)}
        ></button>
    </div>
    <div className="container">
        <div className="card">
          <div className="mainContent">
            <div className="imageProfile">
                <button
                  type="button"
                  className="bgCamera"
                  onClick={() => setShowImg(!showImg)}
                >
                  <FaCamera className="cameraIcon" />
                </button>
            </div>
          <h3 className="userName">@AdaoJr</h3>
          <h3 className="email">adaobjr@gmail.com</h3>
          </div>
        </div>
    </div>
    </main>
  );
}

export default App;
