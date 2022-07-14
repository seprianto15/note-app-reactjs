import React from "react";
import { getInitialData } from "../utils/data";
import NoteInput from "./NoteInput";
import NoteListBody from "./NoteListBody";
import SearchBar from "./SearchBar";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            searchTitle: ''

        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onSearchHandler(event) {
        const search = this.state.notes.filter(note => note.title.search(event.target.value) !== -1);
        this.setState({search})
        this.setState({searchTitle: event.target.value})
        console.log(search)
    }

    onArchiveHandler(id) {
        const data = this.state.notes
        .filter((note) => note.id === id)
        .map((note) => (note.archived = !note.archived));
        this.setState({ data }); 
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        createdAt: new Date().toISOString(),
                        body,
                        archived: false
                    }
                ]
            }
        });
    }

    render() {
        return (
            <>         
                <SearchBar onSearch={this.onSearchHandler} searchTitle={this.state.searchTitle} />
                <div className="note-app">         
                    <NoteInput addNote={this.onAddNoteHandler} />
                    <NoteListBody notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} onUnArchive={this.onArchiveHandler}/>
                </div>
            </>
        )
    }
}

export default NoteApp;