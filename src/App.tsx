import React from 'react';
import './App.css';
import AuthUser from './components/AuthUser';
import Counter from './components/Counter';
import Customer from './components/Customer';
import { CustomerClass } from './components/CustomerClass';
import Employee from './components/Employee';
import { EmployeeClass } from './components/EmployeeClass';
import Greetings from './components/Greetings';
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar';
import UserList from './components/UserList';
import UsersList from './components/UsersList';
import {Routes, Route, Navigate} from 'react-router-dom'
import UserDetails from './components/UserDetails';
import About from './components/About';

function App() {

  //internal way of applying style
  // let colors = {
  //   color: 'blue'
  // }

  return (
    <React.Fragment>
      <div className="container mt-3">
        <NavBar />
        <Routes>
          <Route path='/' element={<Navigate to={'/user/list'} />} />
          <Route path='/user/list' element={<UsersList />} />
          <Route path='/user/:id' element={<UserDetails />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
