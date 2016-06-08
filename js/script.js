var leapYear = function(year){
  if((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0) && (year >= 0) && (typeof year === "number")){
    return true;
  } else {
    return false;
  }
}

$(function(){
  $("#lyear").submit(function(event){
    event.preventDefault();
    var res;
    if(leapYear(parseInt($("#year").val()))){
      res = "true";
    } else {
      res = "false";
    }
    $("#result").empty().append(res);
  });
});


// && (year) && (year >= 0) && (typeof year === "number")
