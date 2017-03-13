$( document ).ready(function() {
  $.getJSON( "TopSpots.json", function( data ){
    $.each(data, function(i, b){
      $('#TopSpotsTable').append('<tr><td>' + b.name + '</td><td>'
        + b.description + '</td><td>'
        + "<td><a href='https://www.google.com/maps/place/"+data[i].location+"'>Link</a></td>");
    });
  });
})
