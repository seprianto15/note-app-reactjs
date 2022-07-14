import React from 'react';
import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
    

    this.state = {
        title: '',
        body: '',
        maxChar : 50
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onDescriptionChangeEventHandler = this.onDescriptionChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
}

    onTitleChangeEventHandler(event) {
        const char = 50;
        const maxCharTitle = event.target.value.slice(0, char);
        const maxLengthTitle = maxCharTitle.length;
        
        this.setState((prevState) => {
            return {
                ...prevState,
                title: maxCharTitle,
                maxChar: char - maxLengthTitle
            }
        
        });
    }

    onDescriptionChangeEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                body: event.target.value
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <>
            <h2>Add Note</h2>
            <div className='note-input'>
                <form    
                    onSubmit={this.onSubmitEventHandler}>
                    <p className='note-input__title__char-limit'>Sisa Karakter : {this.state.maxChar} </p>
                    <input type='text' placeholder='Title' value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                    <textarea placeholder="Description" value={this.state.body} onChange={this.onDescriptionChangeEventHandler}></textarea>
                    <Button type='submit' variant='outlined' startIcon={<AddOutlinedIcon />}>Add</Button>
                </form>
            </div>
            </>
        );
    }
}

export default NoteInput;