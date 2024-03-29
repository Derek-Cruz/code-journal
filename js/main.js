/* global data */
/* exported data */
const $imageTag = document.querySelector('img');
const $photoUrl = document.querySelector('.photo-url');
const $entryForm = document.querySelector('.entries-form');
const $h1 = document.querySelector('#page-header');

$photoUrl.addEventListener('input', function (event) {
  $imageTag.setAttribute('src', event.target.value);
});

$entryForm.addEventListener('submit', function (event) {
  event.preventDefault();
  if (data.editing !== null) {
    data.editing.title = $entryForm.elements.title.value;
    data.editing.photoUrl = $entryForm.elements.photoUrl.value;
    data.editing.notes = $entryForm.elements.notes.value;

    data.editing = null;

    const $entriesUpdated = document.querySelector('ul');
    $entriesUpdated.innerHTML = '';
    for (let updatedIndex = 0; updatedIndex < data.entries.length; updatedIndex++) {
      const testTest = entryMaker(data.entries[updatedIndex]);
      $entriesUpdated.appendChild(testTest);
    }
  } else {
    const $entries = {};
    $entries.title = $entryForm.elements.title.value;
    $entries.photoUrl = $entryForm.elements.photoUrl.value;
    $entries.notes = $entryForm.elements.notes.value;
    $entries.entryId = data.nextEntryId;

    data.nextEntryId++;
    data.entries.unshift($entries);
    const $newEntry = entryMaker($entries);
    $ulEntries.prepend($newEntry);
  }
  $imageTag.setAttribute('src', 'images/placeholder-image-square.jpg');
  $entryForm.reset();
  viewSwapping('entries');
});

function entryMaker(entry) {
  const $li = document.createElement('li');
  $li.setAttribute('data-entry-id', entry.entryId);
  $li.setAttribute('class', 'row');

  const $div = document.createElement('div');
  $div.setAttribute('class', 'column-half');

  const $img = document.createElement('img');
  $img.setAttribute('class', 'entries-img');
  $img.setAttribute('src', entry.photoUrl);

  const $divTwo = document.createElement('div');
  $divTwo.setAttribute('class', 'column-half');

  const $divHeaderIcon = document.createElement('div');
  $divHeaderIcon.setAttribute('class', 'column-full header-icon-placement');

  const $headerTwo = document.createElement('h2');
  $headerTwo.setAttribute('class', 'column-85');
  $headerTwo.textContent = entry.title;

  const $editIcon = document.createElement('i');
  $editIcon.setAttribute('data-entry-id', entry.entryId);
  $editIcon.setAttribute('class', 'column-10 fas fa-pen');

  const $paragraph = document.createElement('p');
  $paragraph.textContent = entry.notes;

  $li.appendChild($div);
  $div.appendChild($img);
  $li.appendChild($divTwo);
  $divTwo.appendChild($divHeaderIcon);
  $divHeaderIcon.appendChild($headerTwo);
  $divHeaderIcon.appendChild($editIcon);
  $divTwo.appendChild($paragraph);

  return $li;
}

const $ulEntries = document.querySelector('.ul-entries');

document.addEventListener('DOMContentLoaded', function (event) {
  for (let i = 0; i < data.entries.length; i++) {
    const $entry = entryMaker(data.entries[i]);
    $ulEntries.appendChild($entry);
  }

  viewSwapping(data.view);
});

const $aTag = document.querySelector('.a-tag-entries');
const $newButton = document.querySelector('.button-new');
const $entryFormView = document.querySelector('div[data-view="entry-form"]');
const $entriesView = document.querySelector('div[data-view="entries"]');

function viewSwapping(view) {
  if (view === 'entry-form') {
    $entryFormView.setAttribute('class', '');
    $entriesView.setAttribute('class', 'hidden');

    data.view = 'entry-form';
  } else if (view === 'entries') {
    $entryFormView.setAttribute('class', 'hidden');
    $entriesView.setAttribute('class', '');

    data.view = 'entries';
  }
}

$aTag.addEventListener('click', function (event) {
  viewSwapping('entries');
});

$newButton.addEventListener('click', function (event) {
  $h1.textContent = 'New Entry';
  viewSwapping('entry-form');
});

$ulEntries.addEventListener('click', function (event) {
  if (event.target.tagName !== 'I') {
    return;
  }
  $h1.textContent = 'Edit Entry';
  viewSwapping('entry-form');

  const $entryIdNum = event.target.getAttribute('data-entry-id');

  const $parsedEntry = parseInt($entryIdNum);

  for (let entriesIndex = 0; entriesIndex < data.entries.length; entriesIndex++) {
    if ($parsedEntry === data.entries[entriesIndex].entryId) {
      $imageTag.setAttribute('src', data.entries[entriesIndex].photoUrl);
      $entryForm.elements.title.value = data.entries[entriesIndex].title;
      $entryForm.elements.photoUrl.value = data.entries[entriesIndex].photoUrl;
      $entryForm.elements.notes.value = data.entries[entriesIndex].notes;

      data.editing = data.entries[entriesIndex];
    }
  }
});
