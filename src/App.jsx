import { useState } from "react";
import { Welcome } from "./Welcome";

function App() {
  useState(0);

  return (
    <div>
      <Welcome />
    </div>
  );
}

export default App;
