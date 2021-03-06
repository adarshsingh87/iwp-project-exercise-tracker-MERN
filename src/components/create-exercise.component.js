import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import './createexercise.css';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: '',
      description: '',
      duration: 0,
      weight: 0,
      date: new Date(),
      users: [],
      passwords: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username,
            passwords: response.data.map(user => user.password),
            password: response.data[0].password
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeWeight(e) {
    this.setState({
      weight: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      password: this.state.password,
      description: this.state.description,
      duration: this.state.duration,
      weight: this.state.weight,
      date: this.state.date
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div class="div-b">
      <div className='form-container'>
        <h2>Create New Exercise Log</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <select ref="userInput"
                required
                className="form-control input-boxes input-boxes-black"
                value={this.state.username}
                onChange={this.onChangeUsername}>
                {
                  this.state.users.map(function(user) {
                    return <option 
                      key={user}
                      value={user}>{user}
                      </option>;
                  })
                }
            </select>
          </div>
          {/*<div className="form-group"> 
            <label>Password: </label>
            <select ref="userInput"
                required
                className="form-control input-boxes"
                value={this.state.password}
                onChange={this.onChangePassword}>
                {
                  this.state.passwords.map(function(user) {
                    return <option 
                      key={user}
                      value={user}>{user}
                      </option>;
                  })
                }
            </select>
              </div>*/}
          <div className="form-group"> 
            <label>Password: </label>
            <input type="password"
                required
                className="form-control input-boxes input-boxes-black"
                value={this.state.password}
                onChange={this.onChangePassword}
                />
          </div>
          <div className="form-group"> 
            <label>Description: </label>
            <input  type="text"
                required
                className="form-control input-boxes input-boxes-black"
                value={this.state.description}
                onChange={this.onChangeDescription}
                />
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input 
                type="text" 
                className="form-control input-boxes input-boxes-black"
                value={this.state.duration}
                onChange={this.onChangeDuration}
                />
          </div>
          <div className="form-group">
            <label>Weight (in kg): </label>
            <input 
                type="text" 
                className="form-control input-boxes input-boxes-black"
                value={this.state.weight}
                onChange={this.onChangeWeight}
                />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
  
          <div className="form-group">
            <input type="submit" value="Create Exercise Log" className="btn btn-dark" />
          </div>
        </form>
      </div>
    </div>
    )
  }
}
