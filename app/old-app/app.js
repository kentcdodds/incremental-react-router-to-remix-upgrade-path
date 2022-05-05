import React from "react";

import { Routes, Route } from "react-router-dom";
import { PageFour } from "./pages/page-4";
import { PageTwo } from "./pages/page-2";

function App() {
  return (
    <div>
      <div>Old app</div>
      <Routes>
        <Route path="/page2" element={<PageTwo />} />
        <Route path="/page4" element={<PageFour />} />
      </Routes>
    </div>
  );
}

export default App;
