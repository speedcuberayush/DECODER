$('#myCarousel').on('slide.bs.carousel', function () {
    interval : 2000
  })

  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
  })