import React from 'react';
import Button from '@mui/material/Button';
import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined';

const UnArchive = ( {id, onUnArchive} ) => {
    return <Button className='note-item__UnArchive' variant='outlined' startIcon={<UnarchiveOutlinedIcon />} onClick={() => onUnArchive(id)}>List Note</Button>
}

export default UnArchive;