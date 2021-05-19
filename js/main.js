/* global data */
/* exported data */
var $imageTag = document.querySelector('img');

var $photoUrl = document.querySelector('#photo-url');
$photoUrl.addEventListener('input', function (event) {
  $imageTag.setAttributes('src', event.target.value);
});
