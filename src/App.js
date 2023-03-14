import logo from './logo.svg';
import './App.css';


import {Typography, styled, Box} from '@mui/material';
import Balance from './Components/Balance';
import ExpenseCard from './Components/ExpenseCard';
import NewTransaction from './Components/NewTransaction';
import Transaction from './Components/Transaction';
import { useState } from 'react';

const Header = styled(Typography)`
  font-size: 36px;
  color: blue;
  text-transform: uppercase;
`

const Component = styled(Box)`
 display: flex;
 background: white;
 width: 800px;
 padding: 10px;
 border-radius: 20px;
 margin: auto;
 & > div{
  height: 70vh;
  width: 50%;
  padding: 10px;
 }

`

function App() {

  const [transactions,setTransactions] = useState([
    {id:1, text: 'Shake', amount: -100},
    {id:2, text: 'Rent', amount: 3000},
    {id:3, text: 'Pizza', amount: -599},
    {id:4, text: 'Pocket Money', amount: 5000},
  ])
  return (
    <Box className="App">
     <Header>Expense Tracker</Header>
     <Component>
      <Box>
        <Balance transactions={transactions}/>
        <ExpenseCard transactions = {transactions}/>
        <NewTransaction setTransactions = {setTransactions}/>
      </Box>
      <Box>
        <Transaction transactions={transactions} setTransactions = {setTransactions}/>
      </Box>
     </Component>
    </Box>
  );
}

export default App;
