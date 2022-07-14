import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const ButtonDelete = ({ id, onDelete }) => {
    return <Button className='note-item__delete' variant='outlined' startIcon={<DeleteIcon />} onClick={() => onDelete(id)}>Delete</Button>
}

export default ButtonDelete;