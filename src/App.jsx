import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { routs } from "./routes/routs";
import "./App.css";

function App() {
  <>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {routs.map(({ Component, path }, id) => (
          <Route
            index={path ? true : false}
            key={id}
            path={path}
            element={<Component />}
          />
        ))}
      </Route>
    </Routes>
  </>;
}

export default App;
