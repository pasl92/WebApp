import { Note } from './note';
import './main.scss';
import firebase from 'firebase';
import { firebaseConfig } from  './config';

let addButton = <HTMLButtonElement>document.getElementById("addButton")
let notesContainer = <HTMLDivElement>document.getElementById("notesContainer")
let notesContainerPinned = <HTMLDivElement>document.getElementById("notesContainerPinned")
let notesContainerUnPinned = <HTMLDivElement>document.getElementById("notesContainerUnPinned")

let noteDiv: any = " ";
let notesArray: any[] = [];


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();



window.onload = function() {

        let data: any = (localStorage.getItem('notesArray'));
        let objData = JSON.parse(data)
        console.log(objData);

        for (let i=0; i<objData.length; i++) {
                let saveNote = new Note(objData[i].title, objData[i].text, objData[i].color, objData[i].date, objData[i].pinned )
                let noteDiv = saveNote.createNoteDiv();
                if (saveNote.pinned == true){
                    notesContainerPinned.appendChild(noteDiv);
                }
                else{
                    notesContainerUnPinned.appendChild(noteDiv);
                }
            }
}

addButton.addEventListener('click', async() =>  {

    var noteTitle: string = (<HTMLInputElement>document.getElementById("enterTitle")).value;
    var noteText: string = (<HTMLInputElement>document.getElementById("enterText")).value;
    var noteColor: string = (<HTMLInputElement>document.getElementById("enterColor")).value;
    var noteDate: number = new Date().getTime();
    var isPinned: boolean = (<HTMLInputElement>document.getElementById("pinnedNote")).checked;
    
    const newNote = new Note(noteTitle, noteText, noteColor, noteDate, isPinned)

        noteDiv = newNote.createNoteDiv();
        if (isPinned == true){
            notesContainerPinned.appendChild(noteDiv);
        }
        else{
            notesContainerUnPinned.appendChild(noteDiv);
        }

        notesArray.push(newNote);
        //console.log(newNote);
        console.log(notesArray);
        newNote.saveData(notesArray);
});
