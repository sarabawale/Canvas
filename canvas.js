$(document).ready(function(){
  
  //set background color
  var background = $(".bkgd-color").val();
  $(".box").css("background-color", background);

  //set number of rows/columns
  $(".submit").on("click", function(){
    rowCol = $("num-rows-cols").val();
  });

  if($("num-rows-cols").val() === null){

  }

  var rowCol = 10;

  //create grid
  for(var i=0; i<rowCol; i++){
      var row = $('<div>').addClass('row');
      for(var j=0; j<rowCol; j++){
        var box = $('<div>').addClass('box box-' + i + '-' + j);
        row.append(box);
      }

      $('.wrapper').append(row);
    }
  
  //change box color
  $('.box').on("click", function(){ 
      var color = $(".color").val();
      $(this).css("background-color", color);
  });

});


