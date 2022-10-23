"use strict"

 let site, design, adaptive;

 let calculator = {
     price: [
         [100, 500, 1000],
         [500, 1000, 2000],
         [1000, 2000, 5000],
     ],
     days: [
     [1, 2, 3],
     [3, 2, 4],
     [1, 5, 6],
     ],
     run(siteType, designType, adaptiveType){
       let sum = parseInt(calculator.price[0] [siteType-1]) + parseInt(calculator.price[1][designType-1]) + parseInt(calculator.price[2][adaptiveType-1]);
       let days = parseInt(calculator.days[0] [siteType-1]) + parseInt(calculator.days[1][designType-1]) + parseInt(calculator.days[2][adaptiveType-1]);
       alert("Сроки: "+ days + "Cтоимость: "+ sum);
     }
  }
  
  function getAnswers() {
      site = prompt("Какой тип сайта? 1 - Сайт-визитка 2 - Корпоративный 3 - Интернет-магазин");
      if(site != 1 && site != 2 && site !=3 ){
          alert("Такого варианта нет");
          getAnswers();
          return;
      }
      
       design = prompt("Какой тип дизайна? 1 - Шаблонный 2 - Уникальный 3 - WOW-дизайн");
      if(site != 1 && site != 2 && site !=3 ){
          alert("Такого варианта нет");
          getAnswers();
          return;
      }
      
       adaptive = prompt("Какой тип адаптивности? 1 - ПК 2 - Мобильный 3 - ПК+мобильный");
      if(site != 1 && site != 2 && site !=3 ){
          alert("Такого варианта нет");
          getAnswers();
          return;
      }
      calculator.run(site, design, adaptive);
  }

  getAnswers();



 
 