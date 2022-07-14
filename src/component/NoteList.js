import React from 'react'
import { NoteItem, ArchiveItem } from "./NoteItem";

const NoteList = ( {notes, onDelete, onArchive} ) => {
    return(
        <div className="note-list">
            {
                notes.map((note) => (
                    <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} {...note} />
                ))
            }
        </div>
    );
}

const ArchiveList = ( {notes, onDelete, onUnArchive} ) => {
    return(
        <div className="note-list">
            {
                notes.map((note) => (
                    <ArchiveItem key={note.id} id={note.id} onDelete={onDelete} onUnArchive={onUnArchive} {...note} />
                ))
            }
        </div>
    );
}

export {NoteList, ArchiveList};

