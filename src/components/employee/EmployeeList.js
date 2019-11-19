import React, { Component } from "react";
import EmployeeCard from "./EmployeeCard";
import APIManager from "../../modules/APIManager";

class EmployeeList extends Component {
  state = {
    employees: []
  };

  componentDidMount() {
    APIManager.getAll("employees").then(employees => {
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

//     APIManager.getAll("employees").then(animals => {
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
