import React, { Component } from 'react';
import { Router as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
// import AllCampuses from './AllCampuses';
// import AllStudents from './AllStudents';
// import NewStudent from './NewStudent';
// import SingleCampus from './SingleCampus';
// import SingleStudent from './SingleStudent';
// import store, { fetchCampuses, fetchStudents } from '../store/store';


export default class Main extends Component {
//this is the main momdule responsible for setup and routing.

componentDidMount () {
  // const campusesThunk = fetchCampuses();
  // const studentsThunk = fetchStudents();
  // store.dispatch(campusesThunk);
  // store.dispatch(studentsThunk);
}
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}