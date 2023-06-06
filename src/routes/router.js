import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routers from ".";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {routers.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
