

$(document) .ready(function(){
     $(".loaderArea").css("display", "none");
    
     
     
     
     function calculate(){
         let sum = parseInt($("#select1 option:selected").val()) 
          + parseInt($("#select2 option:selected").val()) + parseInt($("#select3 option:selected").val()); 
          let days = parseInt($("#select1 option:selected").attr("days")) + parseInt($("#select2 option:selected").attr("days")) + parseInt($("#select3 option:selected").attr("days"));
         $(".days .digit").text(days);
         $(".amount .digit").text(sum);
     }
     $("select").on("change", function(){
         calculate();
     });
         calculate();



      $(window).scroll(() => {
         let scrollDistance = $(window).scrollTop();
          
          
          $('.section').each((i, el) => {
              
          if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
          $('nav a').each((i, el) => {
          if ($(el).hasClass('active')) {
          $(el).removeClass('active');
        }
        });
                  
        $('nav li:eq(' + i + ')').find('a').addClass('active');
        }
                                  
        });
      });
    

    
$('.image-link').magnificPopup({
        type: 'image'
    });


 let options = {threshold: [0.5]};
 let observer = new IntersectionObserver(onEntry, options);
 let elements = $('.element-animation');

elements.each((i, el) => {
observer.observe(el);
    
});



  
 

  function onEntry(entry) {
  entry.forEach(change => {
  if (change.isIntersecting) {
  change.target.classList.add('show-animation');
    }
  });
}


  let optionsImg = {threshold: [0.5]};
  let observerImg = new IntersectionObserver(onEntryImg,      optionsImg);
  let elementsImg = $('.off-img');

  elementsImg.each((i, el) => {
  observerImg.observe(el);
        });


   function onEntryImg(entry) {
    entry.forEach(change => {
    if (change.isIntersecting) {
    change.target.src = change.target.dataset.src;}
            });
        }


    
      let optionsStat = {
            threshold: [0.5]
        };
        let observerStat = new IntersectionObserver(onEntryStat, optionsStat);
        let elementsStat = $('.numbUp');

        elementsStat.each((i, el) => {
            observerStat.observe(el);
        });


        function onEntryStat(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    if(!$('.numbUp').hasClass("done")){
                        $('.numbUp').addClass("done");
                        $('.numbUp').spincrement({
                         thousandSeparator: "",
                         duration: 3000
                    });
                  }
                }
            });
        }
   
    setTimeout(function () {
           const myModal = new bootstrap.Modal('#staticBackdrop', {
                keyboard: false
            });
            modalToggle = document.getElementById('toggleMyModal'); 
            myModal.show(modalToggle);

        }, 1000);
    });
        
    
