/* global data */
/* exported data */
const $imageTag = document.querySelector('img');
const $photoUrl = document.querySelector('.photo-url');
const $entryForm = document.querySelector('.entry-form');

$photoUrl.addEventListener('input', function (event) {
  $imageTag.setAttributes('src', event.target.value);
});

$entryForm.addEventListener('submit', function (event) {
  const $entries = {};
  $entries.title = $entries.elements.title.value;
  $entries.photourl = $entries.elements.photourl.value;
  $entries.notes = $entries.elements.notes.value;
});
