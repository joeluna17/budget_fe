import React from "react";
import Header from "./Components/Header";
import MasterList from "./Components/MasterList";
import "./App.css";
import { ThemeProvider, keyframes } from "styled-components";
import styled from "styled-components";
import ActionModal from "./Components/GlobalComponent/ActionModal";
import SliderProto from "./Components/GlobalComponent/Slider";
import { green } from "@material-ui/core/colors";

const CalculatorWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 140px;
  background-color: rgba(0, 0, 0, 0.95);
  color: white;
  z-index: 2;
`;
// for the above component we need to add a listen to the window for on scroll and then make the div go from displaying block to fixed
const rotate = keyframes`
    from{
      transform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
    }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 20px;
  bottom: 5px;
  width: 65px;
  height: 65px;
  color: white;
  background-color: rgba(27, 156, 252, 1);
  font-size: 65px;
  border-radius: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.4);
  cursor: pointer;
  :hover {
    animation: ${rotate} 0.2s linear 1;
  }
`;

const ExspenseAmountColor = styled.h1 `
    color: red;
`;

const IncomeAmountColor = styled(ExspenseAmountColor)`
      color: greenyellow;
`;



let marks = [
  { value: 0 },
  { value: 10 },
  { value: 20 },
  { value: 30 },
  { value: 40 },
  { value: 50 }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accounts: [],
      totalExpensesAmount: 0.0,
      totalIncomeAmount: 0.0,
      savingAmount: 0.0,
      show: false
    };
  }

  componentDidMount() {
    this.setState({
      accounts: [
        {
          name: "Light",
          value: 0.0,
          type: "exspense"
        },
        {
          name: "WATER",
          type: "exspense",
          value: 0.0
        },
        {
          name: "CABLE",
          type: "exspense",
          value: 0.0
        },
        {
          name: "RAM TRUCK",
          type: "exspense",
          value: 0.0
        },
        {
          name: "HOUSE RENT",
          type: "exspense",
          value: 0.0
        },
        {
          name: "CALUDIA",
          type: "income",
          value: 0.0
        },
        {
          name: "JOE",
          type: "income",
          value: 0.0
        }
      ]
    });

    console.log("Here in the CDL state.accounts: ", this.state.accounts);
  }

  calculateTotalExpenses = type => {
    var totalAmount = 0;

    const total = this.state.accounts.map(account => {
      if (account.type === type) {
        return (totalAmount += account.value);
      }
    });

    return totalAmount;
  };

  handleUpdate = (e, value, index, type) => {
    //OK, here we needed to drill into state and update a propery in the array but in order to do this we need to access the property via the map because it does not mutate the array on state rather returns a new one
    //read the following article for info -> https://www.robinwieruch.de/react-state-array-add-update-remove

    this.setState(state => {
      const list = state.accounts.map((account, j) => {
        if (j === index && account.type === type) {
          return (account.value = value);
        } else {
          return account;
        }
      });
      return list;
    });
    if (type === "exspense") {
      this.setState({
        totalExpensesAmount: this.calculateTotalExpenses(type)
      });
    } else if (type === "income") {
      this.setState({
        totalIncomeAmount: this.calculateTotalExpenses(type)
      });
    }
  };

  addAccount = async (account) => {

    await this.setState({
      accounts: [...this.state.accounts, account]
    });

   
       if (account.type === "exspense") {
       await this.setState({
          totalExpensesAmount: this.calculateTotalExpenses(account.type)
        });
      } else if (account.type === "income") {
       await this.setState({
          totalIncomeAmount: this.calculateTotalExpenses(account.type)
        })
      }
    
    console.log(this.state.accounts);
  };

  handleClose = e => {
    this.setState({
      show: false
    });
    console.log(this.state.show);
  };

  handleShow = e => {
    console.log(this.state.show);
    this.setState({
      show: true
    });
  };

  handleUpdateSavings = (e, value) => {
    this.setState({
      savingAmount: value
    });
  };

  render() {
    return (
      //console.log(this.state.totalExpenses[0]? this.state.totalExpenses[0]['value'] : null),

      <div className="App">
        <CalculatorWrapper>
          <h2>
            Total Expenses: <br /> <ExspenseAmountColor>${this.state.totalExpensesAmount}</ExspenseAmountColor>
          </h2>
          <h2>
            Total Income: <br /> <IncomeAmountColor>${this.state.totalIncomeAmount}</IncomeAmountColor>
          </h2>
          <h2>
            Total Disposable:
            <br /> $
            {this.state.totalIncomeAmount - this.state.totalExpensesAmount}
          </h2>
          <h2>
            Saving From Disposable:
            <br /> $
            {((this.state.totalIncomeAmount - this.state.totalExpensesAmount) *
              this.state.savingAmount) /
              100}
            <SliderProto
              valueLabelDisplay="on"
              track={true}
              marks={marks}
              defaultValue={0}
              min={0}
              max={50}
              onChange={(e, value) => {
                this.handleUpdateSavings(e, value);
              }}
            />
          </h2>
        </CalculatorWrapper>
        <Header />
        <MasterList
          accounts={this.state.accounts}
          handleUpdate={this.handleUpdate}
        />

        <ButtonWrapper onClick={this.handleShow}>+</ButtonWrapper>

        <ActionModal
          show={this.state.show}
          handleClose={this.handleClose}
          addAccount={this.addAccount}
        />
      </div>
    );
  }
}

export default App;
