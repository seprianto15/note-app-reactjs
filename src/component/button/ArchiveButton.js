import React from 'react';
import Button from '@mui/material/Button';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';

const ArchiveButton = ( {id, onArchive} ) => {
    return <Button className='note-item__archive' variant='outlined' startIcon={<ArchiveOutlinedIcon />} onClick={() => onArchive(id)}>Archive Note</Button>
}

export default ArchiveButton;