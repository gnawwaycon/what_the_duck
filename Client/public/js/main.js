// test js so far
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function yo() {
  alert('Hello World')
}


var apple = 0
var bread = []
var sauce = []
var cheese = []
var meat = []
var vages = []
$(document).ready(function() {
  // alert('ready')
  // yo() 

  $(".bread .collection a").click(function () {
    if ($(this).hasClass("green")) {
      $(this).removeClass("green");
      var index = bread.indexOf($(this).attr("value"));
      bread.splice(index, 1);      
    } else {
      $(this).addClass("green");
      $(this).addClass("accent-1");
      bread.push($(this).attr("value"))
    }
    // alert(bread)  
  });

  $(".sauce .collection a").click(function () {
    if ($(this).hasClass("green")) {
      $(this).removeClass("green");
      var index = sauce.indexOf($(this).attr("id"));
      sauce.splice(index, 1);      
    } else {
      $(this).addClass("green");
      $(this).addClass("accent-1");
      sauce.push($(this).attr("id"))
    }
    // alert(sauce)  
  });

  $(".cheese .collection a").click(function () {
    if ($(this).hasClass("green")) {
      $(this).removeClass("green");
      var index = cheese.indexOf($(this).attr("id"));
      cheese.splice(index, 1);      
    } else {
      $(this).addClass("green");
      $(this).addClass("accent-1");
      cheese.push($(this).attr("id"))
    }
    // alert(cheese)  
  });

  $(".meat .collection a").click(function () {
    if ($(this).hasClass("green")) {
      $(this).removeClass("green");
      var index = meat.indexOf($(this).attr("id"));
      meat.splice(index, 1);      
    } else {
      $(this).addClass("green");
      $(this).addClass("accent-1");
      meat.push($(this).attr("id"))
    }
    // alert(meat)  
  });

  $(".vages .collection a").click(function () {
    if ($(this).hasClass("green")) {
      $(this).removeClass("green");
      var index = vages.indexOf($(this).attr("id"));
      vages.splice(index, 1);      
    } else {
      $(this).addClass("green");
      $(this).addClass("accent-1");
      vages.push($(this).attr("id"))
    }
    // alert(sauce)  
  });

  // page scroll animation
  $('.page-scoll a').bind('click', function(event) {
        // alert('AAAAAA')
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 2250, 'easeInOutExpo');
        event.preventDefault();
  });

  // page scroll animation
  $("#veges-button").click(function () {
    // alert("Blaster!")
    // alert(bread.length)
    // Choose Bread
    var luck = getRandomInt(0, bread.length)
    bread_choose = bread[luck]
    $('#result_bread').html(bread_choose); 

    var luck = getRandomInt(0, sauce.length)
    sauce_choose = sauce[luck]
    $('#result_sauce').html(sauce_choose);     

    var luck = getRandomInt(0, cheese.length)
    cheese_choose = cheese[luck]
    $('#result_cheese').html(cheese_choose);     

    var luck = getRandomInt(0, meat.length)
    meat_choose = meat[luck]
    $('#result_meat').html(meat_choose);     

    var luck = getRandomInt(0, vages.length)
    vages_choose = vages[luck]
    $('#result_vages').html(vages_choose);     

  });
  
});



