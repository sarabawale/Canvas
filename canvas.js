$(document).ready(function(){
  
  //set background color
  $(".bkgd-color").on("change", function(){
    var background = $(".bkgd-color").val();
    $(".box").css("background-color", background);
  })

  $(".reset").on("click", function(){
    var background = $(".bkgd-color").val();
    $(".box").css("background-color", background);
  });

  //set number of rows/columns
  var defaultNum = 10;
  createGrid(defaultNum);

  $(".submit").on("click", function(){
      userNum = $(".num-rows-cols").val();
      console.log(userNum)
      createGrid(userNum);
  });

  //change box color
  $('.box').on("click", function(){ 
      var color = $(".color").val();
      $(this).css("background-color", color);
  });

});

//create grid
var createGrid = function(rowCol){
  //empty the grid container
  $(".wrapper").empty();

  for(var i=0; i<rowCol; i++){
      var row = $("<div>").addClass("row");
      for(var j=0; j<rowCol; j++){
        var box = $("<div>").addClass("box box-" + i + "-" + j);
        row.append(box);
      }

      $(".wrapper").append(row);
  }
}
