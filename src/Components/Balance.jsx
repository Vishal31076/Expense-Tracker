
import {Box,styled,Typography} from '@mui/material'

import React from 'react'

const BalanceText = styled(Typography)`
    font-size:26px;
    margin-bottom:20px;

`

export default function Balance({transactions}) {
    
    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((amount,item) => (amount += item), 0).toFixed(2);

  return (
    <Box>
      <BalanceText>
        Balance : ₹{total}
      </BalanceText>
    </Box>
  )
}
