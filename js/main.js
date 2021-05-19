/* global data */
/* exported data */
var $imageTag = document.querySelector('img');
var $photoUrl = document.querySelector('.photo-url');
var $entryForm = document.querySelector('.entry-form');

$photoUrl.addEventListener('input', function (event) {
  $imageTag.setAttributes('src', event.target.value);
});

$entryForm.addEventListener('submit', function (event) {

});
