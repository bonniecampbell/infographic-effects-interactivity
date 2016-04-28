var $valentines = $('.valentines')
var $womenwant = $('.womenwant')
var $spend = $('.spend')
var $ladiesandgents = $('.ladiesandgents')

$valentines.waypoint(function (direction) {
  if (direction == 'down') {
    $valentines.addClass('js-opacity');
  } else {
    $valentines.removeClass('js-opacity');
  }
}, { offset: '50%' });

$womenwant.waypoint(function (direction) {
  if (direction == 'down') {
    $womenwant.addClass('js-opacity');
  } else {
    $womenwant.removeClass('js-opacity');
  }
}, { offset: '50%' });

$spend.waypoint(function (direction) {
  if (direction == 'down') {
    $spend.addClass('js-opacity');
  } else {
    $spend.removeClass('js-opacity');
  }
}, { offset: '70%' });

$ladiesandgents.waypoint(function (direction) {
  if (direction == 'down') {
    $ladiesandgents.addClass('js-opacity');
  } else {
    $ladiesandgents.removeClass('js-opacity');
  }
}, { offset: '70%' });
