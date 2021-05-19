/* global data */
/* exported data */
const $imageTag = document.querySelector('img');
const $photoUrl = document.querySelector('.photo-url');
const $entryForm = document.querySelector('.entry-form');

$photoUrl.addEventListener('input', function (event) {
  $imageTag.setAttribute('src', event.target.value);
});

$entryForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const $entries = {};
  $entries.title = $entryForm.elements.title.value;
  $entries.photourl = $entryForm.elements.photourl.value;
  $entries.notes = $entryForm.elements.notes.value;
  $entries.entryid = data.nextEntryId;

  data.nextEntryId++;

  data.entries.unshift($entries);

  $imageTag.setAttribute('src', 'images/placeholder-image-square.jpg');

  $entryForm.reset();
});
