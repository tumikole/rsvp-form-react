import React from 'react'
import './App.css'
 class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     name: '',
     surname: '',
     age: '',
     gender: '',
     food: '',
     date: ''
   };
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleChangeSurname = this.handleChangeSurname.bind(this);
   this.handleChangeAge = this.handleChangeAge.bind(this);
   this.handleChangeGender = this.handleChangeGender.bind(this);
   this.handleChangeFood = this.handleChangeFood.bind(this);
   this.handleChangeDate = this.handleChangeDate.bind(this);



 }
 
 handleChange(event) {
   this.setState({
     [ event.target.name]: event.target.value,
 
   });
 
 
 }
 
 handleChangeSurname(event) {
   this.setState({
     [ event.target.name]: event.target.value,
 
   });
 }

 handleChangeAge(event) {
  this.setState({
    [ event.target.name]: event.target.value,

  });
}

handleChangeGender(event) {
  this.setState({
    [ event.target.name]: event.target.value,

  });
}

handleChangeFood(event) {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;
  this.setState({
    [name]: value    });
}

handleChangeDate(event) {
  this.setState({
    [ event.target.name]: event.target.value,

  });
}




 
 handleSubmit(event) {
   event.preventDefault()
   this.setState({
     submitName: this.state.name,
     submitSurname: this.state.surname,
     submitAge: this.state.age,
     submitGender: this.state.gender,
     submitFood: this.state.food,
     submitDate: this.state.date



 
    
   });
 }
 
 
 render() {
   return (
     <div>
     <div id="myForm-div">
       <form id="myForm" onSubmit={this.handleSubmit}>
         <input
         name="name"
           value={this.state.name}
           onChange={this.handleChange} />

           <br/>
           <input
         name="surname"
           value={this.state.surname}
           onChange={this.handleChangeSurname} />
           <br/>
           <input
           type="number"
         name="age"
           value={this.state.age}
           onChange={this.handleChangeAge} />
           <br/>
           <div>
        <input type="radio" value="Male" name="gender" onChange={this.handleChangeGender}/> Male
        <input type="radio" value="Female" name="gender" onChange={this.handleChangeGender}/> Female
      </div>
      <br/>
      <label>
          Rice:
          <input
            name="food"
            type="checkbox"
            onChange={this.handleChangeFood} />
        </label>
        <label>
          Pap:
          <input
            name="food"
            type="checkbox"
            onChange={this.handleChangeFood} />
        </label>
        <label>
          Stew:
          <input
            name="food"
            type="checkbox"
            onChange={this.handleChangeFood} />
        </label>
        <label>
          Mince:
          <input
            name="food"
            type="checkbox"
            onChange={this.handleChangeFood} />
        </label>
        <br/>
        <input
           type="date"
         name="date"
           value={this.state.date}
           onChange={this.handleChangeDate} />
           <br/>
         <button type='submit'>Submit!</button>
       </form>
       </div>
 
<div>
       <table id="myTable">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
    <th>Gender</th>
    <th>Food</th>
    <th>Date</th>


  </tr>
  <tr>
    <td>{this.state.submitName}</td>
    <td>{this.state.submitSurname}</td>
    <td>{this.state.submitAge}</td>
    <td>{this.state.submitGender}</td>
    <td>{this.state.submitFood}</td>
    <td>{this.state.submitDate}</td>
  </tr>
</table>
     </div>
     </div>
   );
 };
}
export default App;
 
