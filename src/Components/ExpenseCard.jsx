import { Box, Card, CardContent, styled, Typography } from "@mui/material";
import React from "react";

const Conatiner = styled(Box)`
    display: flex;
    & > div{
        flex: 1;
        padding: 15px;
    }
`

export default function ExpenseCard({transactions}) {
     
    const amount = transactions.map(transaction => transaction.amount);
    const income = amount.filter(item => item > 0).reduce((acc,item) => (acc += item), 0).toFixed(2);
    const expense = (amount.filter(item => item < 0).reduce((acc,item) => (acc += item), 0)*-1).toFixed(2);

  return (
    <Conatiner>
      <Card>
        <CardContent>
            <Typography>Income</Typography>
            <Typography style = {{color: 'green'}}>₹{income}</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
            <Typography>Expense</Typography>
            <Typography style = {{color: 'red'}}>₹{expense}</Typography>
        </CardContent>
      </Card>
    </Conatiner>
  );
}
