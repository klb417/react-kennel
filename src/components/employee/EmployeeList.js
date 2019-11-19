import React, { Component } from "react";
import EmployeeCard from "./EmployeeCard";
import EmployeeManager from "../../modules/EmployeeManager";

class EmployeeList extends Component {
  state = {
    employees: []
  };

  componentDidMount() {
    EmployeeManager.getAll().then(employees => {
      this.setState({
        employees: employees
      });
    });
  }

  render() {
    return <>
      {this.state.employees.map(employee => <EmployeeCard key={employee.id} employee={employee}/>)}
    </>
  }
}

export default EmployeeList;

// class AnimalList extends Component {
//   //define what this component needs to render
//   state = {
//     animals: []
//   };

//   componentDidMount() {

//     AnimalManager.getAll().then(animals => {
//       this.setState({
//         animals: animals
//       });
//     });
//   }

//   render(){
//     

//     return(
//       <div className="container-cards">
//         {this.state.animals.map(animal =>
//           <AnimalCard key={animal.id} animal={animal} />
//         )}
//       </div>
//     )
//   }
// }

// export default AnimalList;
