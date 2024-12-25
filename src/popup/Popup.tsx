import { useState } from "react";

function Popup() {
  const [count, setCount] = useState(0);
  return (
    <>
      <main>
        <img src="./rts-extention-logo.png" alt="boiler plate logo." />
        <h1>Popup!</h1>
        <p>
          Every thing you write in <b>'./src/popup/Popup.tsx'</b> appears here!
        </p>
        <button
          onClick={() => {
            setCount((cur) => cur + 1);
          }}
        >
          {count}
        </button>
      </main>
    </>
  );
}

export default Popup;
