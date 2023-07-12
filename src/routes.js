/* eslint-disable object-curly-spacing */
// eslint-disable-next-line max-len
const { addNoteHandler, showNoteHandler, allNotesHandler, editNoteHandler, removeNoteHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: allNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: showNoteHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: removeNoteHandler,
  },
];

module.exports = routes;
