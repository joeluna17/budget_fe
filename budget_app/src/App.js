import React from 'react';
import Header from './Components/Header';
import MasterList from './Components/MasterList';
import './App.css';
import { ThemeProvider } from 'styled-components';

class App extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        totalExpenses: [],
        totalIncome: [],
        totalExpensesAmount: 0,
        totalIncomeAmount: 5200.00
      };
    } 

  componentDidMount() {
    this.setState( {
        totalExpenses: [
          {
          
            name: "Light",
            paymentAmount:150.60,
            value:0
          },{
           
            name: "Water",
            paymentAmount:75.00,
            value:0
          },{
          
            name: "Cable",
            paymentAmount:59.00,
            value:0
          },
          {
          
            name: "Vehicle 1",
            paymentAmount:750.00,
            value:0
          },
          {
          
            name: "Rent",
            paymentAmount:1600.00,
            value:0
          }

        ]

      }
   )
  }

  calculateTotalExpenses = () => {
    var totalAmount = 0;
 
     const total = this.state.totalExpenses.map(exspense => {
                return totalAmount += exspense.value;
     }); 

     return totalAmount;
  }

 addIncome = () => {

}

addExspense = () =>{

}
    
handleUpdate = (e, value, index) => {
//OK, here we needed to drill into state and update a propery in the array but in order to do this we need to access the property via the map because it does not mutate the array on state rather returns a new one 
//read the following article for info -> https://www.robinwieruch.de/react-state-array-add-update-remove 
    this.setState( state => {
        const list = state.totalExpenses.map((exspense, j) => {
            if(j === index ){
              return exspense.value = value;
             }else {
              return exspense;
             }
        });
        return{
          list
        },

        state.totalExpensesAmount = this.calculateTotalExpenses();

    });
  
    
}

  render() {
    return(
     //console.log(this.state.totalExpenses[0]? this.state.totalExpenses[0]['value'] : null),
   
    <div className="App">

        <Header />
        <div>
          <h1>Total Expenses: ${this.state.totalExpensesAmount}</h1>
         <h1>Total Income: ${this.state.totalIncomeAmount}</h1>
         <h1>Total Disposable: ${this.state.totalIncomeAmount - this.state.totalExpensesAmount}</h1>
         <h1>Saving From Disposable: ${(this.state.totalIncomeAmount - this.state.totalExpensesAmount)*0.10}</h1>
         </div>
        <MasterList totalExpenses={this.state.totalExpenses} handleUpdate={this.handleUpdate} />
    </div>
    )
  };
}

export default App;
