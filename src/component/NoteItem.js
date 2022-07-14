import React from "react";
import DeleteButton from "./button/DeleteButton";
import ArchiveButton from "./button/ArchiveButton";
import NoteItemContent from "./NoteItemContent";
import UnArchiveButton from './button/UnArchiveButton'

const NoteItem = ( {id, title, createdAt, body, onDelete, onArchive} ) => {
    return (
        <div className="note-item">
            
            <NoteItemContent title={title} createdAt={createdAt} body={body} />
            
            <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete}/>
                <ArchiveButton id={id} onArchive={onArchive} />
            </div>

        </div>
    );
}

const ArchiveItem = ( {id, title, createdAt, body, onDelete, onUnArchive} ) => {
    return (
        <div className="note-item">
            
            <NoteItemContent title={title} createdAt={createdAt} body={body} />
            
            <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete}/>
                <UnArchiveButton id={id} onUnArchive={onUnArchive} />
            </div>
        </div>
    );
}


export {NoteItem, ArchiveItem};