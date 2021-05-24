import { Note } from './note';
import './main.scss';

let addButton = <HTMLButtonElement>document.getElementById("addButton")
let notesContainer = <HTMLDivElement>document.getElementById("notesContainer")

let noteDiv: any = " ";
let notesArray: any[] = [];



window.onload = function() {

        let data: any = (localStorage.getItem('notesArray'));
        let objData = JSON.parse(data)
        console.log(objData);

        for (let i=0; i<objData.length; i++) {
                let saveNote = new Note(objData[i].title, objData[i].text, objData[i].color, objData[i].date )
                let noteDiv = saveNote.createNoteDiv();
                notesContainer.appendChild(noteDiv);
            }
}

addButton.addEventListener('click', async() =>  {

    var noteTitle: string = (<HTMLInputElement>document.getElementById("enterTitle")).value;
    var noteText: string = (<HTMLInputElement>document.getElementById("enterText")).value;
    var noteColor: string = (<HTMLInputElement>document.getElementById("enterColor")).value;
    var noteDate: number = new Date().getTime();
    
    const newNote = new Note(noteTitle, noteText, noteColor, noteDate)

        noteDiv = newNote.createNoteDiv();
        notesContainer.appendChild(noteDiv);
        notesArray.push(newNote);
        //console.log(newNote);
        console.log(notesArray);
        newNote.saveData(notesArray);
});




