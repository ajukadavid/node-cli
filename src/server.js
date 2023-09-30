import fs from 'node:fs/promises'
import http from 'node:http'
import open from 'open'

const interpolate = (html, data) => {
  return html.replace(/\{\{\s*(\w+)\s*\}\}/g, (match, placeholder) => {
    return data[placeholder] || '';
  });
}

const formatNotes = notes => {
    return notes.map(note => {
        return `<div classs="note">
        <p>${note.content}</p>
        <div class="tags">
        ${notes.tags.map(tag => `<span class="tag">${tag}</span>`)}
        </div>
        </div>`
    }).join('\n')
} 