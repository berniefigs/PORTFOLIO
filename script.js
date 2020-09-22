// multiple tabs example

$('.multiple-tabs a').on('click', function() {
  var tabID = $(this).attr('data-tab');
  // hide all tab content before opening the clicked tab's content. comment out to see what it does
  $('.tab__content').hide();
  $('#' + tabID).show();
});


// modal example

// open the modal

$('.modal-example a').on('click', function() {
  var tabID = $(this).attr('data-tab');
  // opens the overlay between the modal and content below
  $('.overlay').show();
  $('#' + tabID).show();
});


// close the modal

// when either overlay or the close button is clicked, the overlay and modal will close
// $('.overlay, .close').on('click', function() {
 //  $('.overlay').hide();
 //  $('.modal').hide();
// });
