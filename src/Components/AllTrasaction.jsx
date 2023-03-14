import { ListItem, ListItemIcon, ListItemText, styled } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';


const Details = styled(ListItem)`
    margin-top: 10px;
`

export default function AllTrasaction({transaction,setTransactions,transactions}) {

    const color = transaction.amount > 0 ? 'Green' : 'Red';

    const deleteTransaction = (id) =>{
        setTransactions(transactions.filter(transaction => transaction.id !== id))
    }

  return (
    <Details style = {{background: `${color}` , color: 'white' }}>
        <ListItemIcon>
            <DeleteIcon onClick ={()=> deleteTransaction(transaction.id)} />
        </ListItemIcon>
      <ListItemText>{transaction.text}</ListItemText>
      <ListItemText>{transaction.amount}</ListItemText>
    </Details>
  )
}
