import React from 'react';
import Header from './Components/Header';
import MasterList from './Components/MasterList';
import './App.css';

class App extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        totalExpenses: [],
        totalIncome: [],
        value: null,
        exspense:{
          name: "",
          paymentAmount:0.0
        },
        income:{
          name:"",
          incomeAmount:0.0
        }
      };
    } 

  componentDidMount() {
    this.setState(
     this.state = {
        totalExpenses: [
          {
            name: "Light",
            paymentAmount:150.60
          },{
            name: "Water",
            paymentAmount:75.00
          },{
            name: "Cable",
            paymentAmount:59.00
          }

        ]

      }
    )
  }

 addIncome = () => {

}

addExspense = () =>{

}
    

  render() {
    return(
    <div className="App">
        <Header />
        <MasterList  totalExpenses = {this.state.totalExpenses} />
        
    </div>
    )
  };
}

export default App;
