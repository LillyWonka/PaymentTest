//COUNTDOWN
function countdown() {
	let deadline = new Date("10/5/2019");			
		deadline = (Date.parse(deadline) / 1000);
	let now = new Date();
        now = (Date.parse(now) / 1000);
    if(now==deadline||deadline<now){$("p#countdown").text("Sale is over");
    }else{
        let timeLeft = deadline - now;
        let days = Math.floor(timeLeft / 86400); 
        let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
            if (days < "10") { days = "0" + days; }
            if (hours < "10") { hours = "0" + hours; }
            if (minutes < "10") { minutes = "0" + minutes; }
            $("p#countdown").text(days+'d : '+hours+'h : '+minutes+'m ');
            }
    } 
setInterval(function() {countdown(); }, 1000);

//LINKS 
$( document ).ready(function() {
    $('section.payment').hide();
});
$('#choose-annual').on('click', function() {
    $('section.plans').hide();
    $('section.payment').show();
    $('div.chosen-trial').hide();
});
$('#choose-trial').on('click', function() {
    $('section.plans').hide();
    $('section.payment').show();
    $('div.chosen-annual').hide();
});
$('.change-plan').on('click', function() {
    $('section.payment').hide();
    $('div.chosen-annual').show();
    $('div.chosen-trial').show();
    $('section.plans').show();
});

//ENABLE BUTTON
$(document).on('change keyup', '.required', function(e){
    let Disabled = true;
     $(".required").each(function() {
       let value = this.value;
       if ((value)&&(value.trim() !=''))
           {
             Disabled = false;
           }else{
             Disabled = true;
             return false;
           }
     });
    if(Disabled){
         $('.confirm').prop("disabled", true);
       }else{
         $('.confirm').prop("disabled", false);
       }
  })

  //SLIDER
$('.testimonials').fadeOut(0);
$('.testimonials:first').fadeIn();
$('.slider-bullet').click(function() {
  $('.slider-bullet').removeClass('active');
  $(this).addClass('active');
  var currIndex = $(this).index()+1;
  $('.testimonials').fadeOut(0);
  $('.testimonials:nth-of-type('+currIndex+')').fadeIn();
});
