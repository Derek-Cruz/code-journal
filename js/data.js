/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var $entries = localStorage.getItem('entries');
if ($entries !== null) {
  data = JSON.parse($entries);
}

window.addEventListener('beforeunload', function (event) {
  const $data = JSON.stringify(data);
  localStorage.setItem('entries', $data);
});

/* window.addEventListener('DOMContentLoaded', function (event) {
  for (let i = 0; i < data.entries.length; i++) {

  }
});
*/
