
// MovieTicket Business Logic
function MovieTicket(title, time, rating) {
  this.price = 7;
  this.title = title;
  this.time = time;
  this.rating = rating;
}


MovieTicket.prototype.calcPrice = function () {
  if (this.time <= 5) {
    this.price += -2
  }
  if (this.title === 'Terminator 2' || this.title === 'Die Hard') {
    this.price += 2;
  }
  return this.price;
}


// User Interface Logic
$(document).ready(function () {
  var movieArr = [{ name: 'Terminator 2', rating: "R" }, { name: 'Mad Max', rating: "R" }, { name: 'RoboCop', rating: "R" }, { name: 'Die Hard', rating: "R" }]
  movieArr.forEach(function (movie) {
    $('#movies').append(`<option value="${movie.name},${movie.rating}">${movie.name}</option>`)
  })
  $('#form').submit(function (e) {
    e.preventDefault();
    var movieSelection = $('#movies').val().split(',');
    var time = $('#time').val();
    var newTicket = new MovieTicket(movieSelection[0], time, movieSelection[1]);
    var price = newTicket.calcPrice()
    $('#movie-confirm').html(`<h2>${price < 7 ? 'you got a discount! your total is: $' + price : 'your total is: $' + price}</h2>`)
    //alert(`you owe: $${newTicket.calcPrice()}`)
  })
});
