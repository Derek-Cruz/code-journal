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

function entryMaker(entry) {
  const $li = document.createElement('li');
  $li.setAttribute('class', 'row');

  const $div = document.createElement('div');
  $div.setAttribute('class', 'column-half');

  const $img = document.createElement('img');
  $img.setAttribute('class', 'entries-img');
  $img.setAttribute('src', entry.photourl);

  const $divTwo = document.createElement('div');
  $divTwo.setAttribute('class', 'column-half');

  const $headerTwo = document.createElement('h2');
  $headerTwo.textContent = entry.title;

  const $paragraph = document.createElement('p');
  $paragraph.textContent = entry.notes;

  $li.appendChild($div);
  $div.appendChild($img);
  $li.appendChild($divTwo);
  $divTwo.appendChild($headerTwo);
  $divTwo.appendChild($paragraph);

  return $li;
}

const $ulEntries = document.querySelector('.ul-entries');

document.addEventListener('DOMContentLoaded', function (event) {
  for (let i = 0; i < data.entries.length; i++) {
    const $entry = entryMaker(data.entries[i]);
    $ulEntries.appendChild($entry);
  }
});
