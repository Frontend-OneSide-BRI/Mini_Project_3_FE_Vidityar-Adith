import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routers from ".";
import Layout from "../pages/Layout";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {routers.map((item, index) =>
          item.layout ? (
            <Route
              key={index}
              path={item.path}
              element={<Layout access={item.access}>{item.element}</Layout>}
            />
          ) : (
            <Route key={index} path={item.path} element={item.element} />
          )
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
