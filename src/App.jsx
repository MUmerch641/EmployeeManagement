import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import './index.css';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';
import { setLocalStorage } from './Utils/LocalStorage';

function App() {
  setLocalStorage();

  const [userData, setuserData] = useContext(AuthContext);
  const [User, setUser] = useState(null);
  const [LoginUser, setLoginUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUSer');
    if (loggedInUser) {
      try {
        const userData = JSON.parse(loggedInUser);
        console.log("Parsed userData:", userData);
        setUser(userData.role);
        setLoginUser(userData.data);
      } catch (error) {
        console.error("Error parsing loggedInUser:", error);
      }
    }
  }, []);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser); // Parse `loggedInUser` to access role
      setLoginUser(parsedUser.role);
    }
  }, [userData]);

  const handleUser = (email, pass) => {
    if (userData?.admin?.find((e) => e.email === email && e.password === pass)) {
      setUser('Admin');
      localStorage.setItem('loggedInUSer', JSON.stringify({ role: 'Admin' }));
    } else if (userData) {
      const employee = userData?.employees.find((e) => e.email === email && e.password === pass);
      console.log(userData);
      if (employee) {
        setUser('Employee');
        setLoginUser(employee);
        localStorage.setItem('loggedInUSer', JSON.stringify({ role: 'Employee', data: employee }));
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <>
      {User === null ? (
        <Login handleUser={handleUser} />
      ) : User === 'Admin' ? (
      <AdminDashboard  setUser={setUser} />

      ) : User === 'Employee' ? (
        <EmployeeDashboard setUser={setUser} userLoggedIn={LoginUser} />
      ) : null}
    </>
  );
}

export default App;
