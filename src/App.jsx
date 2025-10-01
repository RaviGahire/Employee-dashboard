import React from 'react'
import { Employee } from './Components/Employee'
import employees from './data/empData'
import Header from './Components/Header'

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
        <Header />
       <div className="flex items-center flex-col md:flex-row md:justify-center flex-wrap bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen p-4">
         <Employee employees={this.state.employees} />
       </div>
      </>
    )
  }
}
