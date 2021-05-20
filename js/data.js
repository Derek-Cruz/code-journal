/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', function (event) {
  const $data = JSON.stringify(data.entries);
  localStorage.setItem('value:', $data);
});
