import React, { useState } from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
function AdminDashboard({setUser }) {
  return (
    <div className="admin-dashboard p-6">
      <Header  setUser={setUser} />
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <CreateTask/>

   
    </div>
  );
}

export default AdminDashboard;
