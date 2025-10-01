import React from 'react'
import { Employee } from './Components/Employee'
import employees from './data/empData'

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      employees: employees
    }
  }   

  render() {
    return (
      <>
        <Employee employees={this.state.employees} />
      </>
    )
  }
}
