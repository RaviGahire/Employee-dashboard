import React from 'react'
import { Employee } from './Components/Employee'
import employees from './data/empData'
import Header from './Components/Header'




export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allEmployees: employees,
      employees: employees,

    }
  }

  // Get the selected department value
  DepartmentSelection = (event) => {

    const OptionValue = event.target.value;
    // console.log(OptionValue);
    if (OptionValue === "All") {
      this.setState({ employees: this.state.allEmployees });
    } else {
      const filteredDept = this.state.allEmployees.filter((emp) => emp.department === OptionValue);
      this.setState({ employees: filteredDept });
    }

  }

  SearchEmployee = () => {
    const empName = prompt("Enter Employee Name");
    const searchedEmp = this.state.allEmployees.filter((emp) => emp.name.toLowerCase().includes(empName.toLowerCase()));
    this.setState({ employees: searchedEmp });

    if (searchedEmp.length === 0) {
      alert("Employee Not Found");
      this.setState({ employees: this.state.allEmployees });
    }


  }




  render() {
    return (
      <>
        <Header />
        {/* Action Buttons */}
        <div className="container bg-blue-300  h-auto py-2 mx-auto flex items-center  space-x-4 my-4 rounded-lg shadow-lg ">
          <div className='flex items-center justify-center w-full md:flex-row flex-col md:space-y-0 space-y-4'>
            <select onChange={this.DepartmentSelection} className="bg-gradient-to-r from-green-600 to-green-800 text-white font-semibold py-2 px-4 rounded-lg ml-4 cursor-pointer shadow focus:outline-none focus:ring-2 focus:ring-green-300 transition">
              <option defaultValue="All Dept" disabled hidden className="bg-white text-green-700 font-bold">
                Department View
              </option>
              <option className="bg-white text-green-700 font-semibold" value="All">All Dept</option>
              <option className="bg-white text-green-700 font-semibold" value="HR">HR</option>
              <option className="bg-white text-green-700 font-semibold" value="Engineering">Engineering</option>
              <option className="bg-white text-green-700 font-semibold" value="Marketing">Marketing</option>
              <option className="bg-white text-green-700 font-semibold" value="Finance">Finance</option>
              <option className="bg-white text-green-700 font-semibold" value="Sales">Sales</option>
            </select>
            <button onClick={this.SearchEmployee} className="bg-neutral-800 hover:bg-neutral-600 text-white font-semibold py-2 px-4 rounded-lg ml-4 cursor-pointer">
              Search Employee
            </button>
          </div>

        </div>
        {/* Employee List */}
        <div className="flex items-center flex-col md:flex-row md:justify-center flex-wrap bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen p-4">
          <Employee employees={this.state.employees} />
        </div>
      </>
    )
  }
}
