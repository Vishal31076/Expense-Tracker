
import { Box, Button, styled, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  & > h5, & > div, & > button{
    margin-top: 30px;
  }
`

 
export default function NewTransaction({setTransactions}) {

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const addTransaction =()=>{
    const transaction = {
      id: Math.floor(Math.random() *1000000),
      text: text,
      amount: +amount,
    }
    setTransactions(prevState => [transaction,...prevState]);
  }
  return (
    <Container>

      <Typography variant = "h5">New Transaction</Typography>
      <TextField id="outlined-basic" label="Expense" variant="outlined"  onChange={(e) => setText(e.target.value)}/>
      <TextField id="outlined-basic" label="Amount" variant="outlined"  onChange={(e) => setAmount(e.target.value)} />
      <Button  variant="contained" onClick={() =>addTransaction()}>Add Transaction</Button>

    </Container>
  )
}
