/* global data */
/* exported data */
const $imageTag = document.querySelector('img');
const $photoUrl = document.querySelector('.photo-url');
const $entryForm = document.querySelector('.entries-form');

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

  const $newEntry = entryMaker($entries);

  $ulEntries.prepend($newEntry);

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

  testingThisFunction(data.view);
});

const $aTag = document.querySelector('.a-tag-entries');
const $newButton = document.querySelector('.button-new');
const $goToEntries = document.querySelector('div[data-view="entry-form"]');
const $goToEntryForm = document.querySelector('div[data-view="entries"]');

$aTag.addEventListener('click', viewSwapping);
$newButton.addEventListener('click', viewSwapping);

function viewSwapping(event) {
  if (event === 'entry-form') {
    $goToEntries.setAttribute('class', '');
    $goToEntryForm.setAttribute('class', 'hidden');

    data.view = 'entry-form';
    // console.log('if viewSwapping', event);
  } else if (event === 'entries') {
    $goToEntries.setAttribute('class', 'hidden');
    $goToEntryForm.setAttribute('class', '');

    data.view = 'entries';
    // console.log('else viewSwapping', event);
  }
}

function testingThisFunction(event) {
  if (data.view === 'entry-form') {
    $goToEntries.setAttribute('class', '');
    $goToEntryForm.setAttribute('class', 'hidden');

    data.view = 'entry-form';
    // console.log('if testingThisFunction:', data.view);
    // console.log('3event:', event);
  } else if (data.view === 'entries') {
    $goToEntries.setAttribute('class', 'hidden');
    $goToEntryForm.setAttribute('class', '');

    data.view = 'entries';
    // console.log('else testingThisFunction:', data.view);
    // console.log('4event:', event);
  }
}

const $saveButton = document.querySelector('div[class="button-save"]');
$saveButton.addEventListener('click', function (event) {
  $goToEntries.setAttribute('class', 'hidden');
  $goToEntryForm.setAttribute('class', '');
});
