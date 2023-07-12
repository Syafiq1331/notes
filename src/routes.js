/* eslint-disable object-curly-spacing */
// eslint-disable-next-line max-len
const { addNoteHandler, showNoteHandler, allNotesHandler, editNoteHandler } = require('./handler');

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
];

module.exports = routes;
