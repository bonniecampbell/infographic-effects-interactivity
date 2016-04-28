var $bar = $('.bar')
var $barTarget = $('.bar-target')
var $tickets = $('.tickets')
var $ticketsTarget = $('.tickets-target')
var $dvd = $('.dvd')
var $dvdTarget = $('.dvd-target')
var $buffet = $('.buffet')
var $buffetTarget = $('.buffet-target')
var $bottle = $('.bottle')
var $bottleTarget = $('.bottle-target')
var $underwear = $('.underwear')
var $underwearTarget = $('.underwear-target')
var $bin = $('.bin')
var $binTarget = $('.bin-target')
var $toy = $('.toy')
var $toyTarget = $('.toy-target')
var $jewellery = $('.jewellery')
var $jewelleryTarget = $('.jewellery-target')
var $flowers = $('.flowers')
var $flowersTarget = $('.flowers-target')
var $spend = $('.spend')
var $man = $('.man')
var $manTwo = $('.man-two')




$bar.on('mouseover', function (e) {
  $barTarget.addClass('is-hovered');
});

$bar.on('mouseout', function (e) {
  $barTarget.removeClass('is-hovered');
});

$tickets.on('mouseover', function (e) {
  $ticketsTarget.addClass('is-hovered');
});

$tickets.on('mouseout', function (e) {
  $ticketsTarget.removeClass('is-hovered');
});

$dvd.on('mouseover', function (e) {
  $dvdTarget.addClass('is-hovered');
});

$dvd.on('mouseout', function (e) {
  $dvdTarget.removeClass('is-hovered');
});

$dvd.on('mouseover', function (e) {
  $dvdTarget.addClass('is-hovered');
});

$dvd.on('mouseout', function (e) {
  $dvdTarget.removeClass('is-hovered');
});

$buffet.on('mouseover', function (e) {
  $buffetTarget.addClass('is-hovered');
});

$buffet.on('mouseout', function (e) {
  $buffetTarget.removeClass('is-hovered');
});

$bottle.on('mouseover', function (e) {
  $bottleTarget.addClass('is-hovered');
});

$bottle.on('mouseout', function (e) {
  $bottleTarget.removeClass('is-hovered');
});

$underwear.on('mouseover', function (e) {
  $underwearTarget.addClass('is-hovered');
});

$underwear.on('mouseout', function (e) {
  $underwearTarget.removeClass('is-hovered');
});

$bin.on('mouseover', function (e) {
  $binTarget.addClass('is-hovered');
});

$bin.on('mouseout', function (e) {
  $binTarget.removeClass('is-hovered');
});

$toy.on('mouseover', function (e) {
  $toyTarget.addClass('is-hovered');
});

$toy.on('mouseout', function (e) {
  $toyTarget.removeClass('is-hovered');
});

$jewellery.on('mouseover', function (e) {
  $jewelleryTarget.addClass('is-hovered');
});

$jewellery.on('mouseout', function (e) {
  $jewelleryTarget.removeClass('is-hovered');
});

$flowers.on('mouseover', function (e) {
  $flowersTarget.addClass('is-hovered');
});

$flowers.on('mouseout', function (e) {
  $flowersTarget.removeClass('is-hovered');
});

$flowers.on('mouseover', function (e) {
  $flowersTarget.addClass('is-hovered');
});

$flowers.on('mouseout', function (e) {
  $flowersTarget.removeClass('is-hovered');
});

$spend.on('click', function (e) {
  $man.toggleClass('hide');
});

$spend.on('click', function (e) {
  $manTwo.toggleClass('show');
});
