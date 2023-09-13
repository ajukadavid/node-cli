#!/usr/bin/env node
const note = process.argv[2]
console.log(process.argv)

//process.argv is an array with 3 values, first value is the environment, second is the file and the third thing is the argument passed when calling the command
const newNote = {
    content: note,
    id: Date.now()
}

console.log(newNote)