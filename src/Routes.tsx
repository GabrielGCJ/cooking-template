import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="/test" element={<WhatDoIDo />} /> */}
      </Route>
    </Routes>
  );
}
