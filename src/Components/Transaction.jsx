import { Box, Divider, List, Typography } from '@mui/material'
import React from 'react'
import AllTrasaction from './AllTrasaction'


export default function Transaction({transactions,setTransactions}) {
  return (
    <Box>
      <Typography variant='h5'>Transaction Histroy</Typography>
      <Divider/>
       <List>
            {
                transactions.map(transaction =>(
                    <AllTrasaction transaction ={transaction} setTransactions = {setTransactions} transactions={transactions} />
                ))
            }
       </List>
    </Box>
  )
}
