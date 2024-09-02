import React, { useState } from "react";
import { Routes, Route } from "react-router";
import AssProfile from "./AssProfile";
import LoginAssigment from "./LoginAssigment";
import "./styleTail.css";
function BaseApp() {
  return (
    <Routes>
      <Route path="/" element={<LoginAssigment />} />
      <Route path="/login" element={<LoginAssigment />} />
      <Route path="/profile" element={<AssProfile />} />
    </Routes>
  );
}

export default BaseApp;
