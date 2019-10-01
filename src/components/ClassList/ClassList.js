import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
    students:[]
    }
    
  }

  componentDidMount(){
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
      .then(results => {
        this.setState({
          students: results.data
        })
      })
    }

    
  
  render() {
    const students = this.state.students.map((students, i) =>(
      <Link to={`/students/${students.id}`} key={i}><h3 >{students.first_name} {students.last_name}{console.log(students)}</h3> </Link>
    ))
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students}
      </div>
    )
  }
}