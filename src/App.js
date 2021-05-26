import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import ExerciseHelper from './components/exercise-helper.component';
import './App.css';
/*import "bootstrap/dist/css/bootstrap.min.css";*/

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
        <Route path="/exercise-help" component={ExerciseHelper} />
      </div>
    </Router>
  );
}

export default App;
