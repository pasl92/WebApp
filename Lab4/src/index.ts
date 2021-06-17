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
const db = firebaseApp.firestore();

async function addNoteToFirebase(note: any) {
    const res = await db.collection('notes').add(note)
    console.log(res);
}

const noteTest = {
    title: "czy zadziała",
    content: "czy moze nie"
}


window.onload = function() {

        let data: string = (localStorage.getItem('notesArray'));
        let objData = JSON.parse(data)

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
    
    let newNote = new Note(noteTitle, noteText, noteColor, noteDate, isPinned);

    let testowyObj = {
        title: newNote.title,
        text: newNote.text,
        color: newNote.color,
        date: newNote.date,
        pinned: newNote.pinned
    };

    noteDiv = newNote.createNoteDiv();
    if (isPinned == true){
        notesContainerPinned.appendChild(noteDiv);
    }
    else{
        notesContainerUnPinned.appendChild(noteDiv);
    }

    //notesArray.push(newNote);
    //console.log(newNote);
    //console.log(notesArray);
    console.log(testowyObj);
    addNoteToFirebase(testowyObj);
    //newNote.saveData(notesArray);
});
