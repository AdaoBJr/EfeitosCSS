import React, { useState } from "react";

function App() {
  const [active, setActive] = useState(false);

  return (
    <div className={active ? "icon iconActive" : "icon"}>
      <div onClick={() => setActive(!active)} className="plusMinus" />
    </div>
  );
}

export default App;
