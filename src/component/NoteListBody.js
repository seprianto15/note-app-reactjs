import React from 'react'
import EmptyNote from './EmptyNote';
import { NoteList, ArchiveList } from './NoteList';

const NoteListBody = ( {notes, onDelete, onArchive, onUnArchive } ) => {
    
    const listNote = notes.filter((note) => note.archived === false)
    const archivedNote = notes.filter((note) => note.archived === true);
    
    return (
        <>
            <h2>List Note</h2>
            {
                listNote.length > 0 ? 
                <NoteList notes={listNote} onDelete={onDelete} onArchive= {onArchive} /> :
                <EmptyNote />
            }
            <h2>Archive Note</h2>
            {
                archivedNote.length > 0 ?
                <ArchiveList notes={archivedNote} onDelete={onDelete} onUnArchive= {onUnArchive} /> :
                <EmptyNote />
            }
        </>
    )
}

export default NoteListBody;