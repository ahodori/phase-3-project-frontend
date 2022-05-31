import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import SelectUser from './SelectUser';
import CompareUsers from './CompareUsers';
import EditUser from './EditUser';

import './Container.css';

function Container() {
  return (
    <div className="Container">
      <Routes>
        <Route path="/select_user" element={<SelectUser />} />
        <Route path="/compare_users" element={<CompareUsers />} />
        <Route path="/edit_user" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default Container;
