faq_container = document.getElementsByClassName('faq-container');
faq = document.querySelectorAll('.faq');
answer = document.querySelectorAll('.answer')

faq.forEach(element => {
     const question = element.querySelector('.question');
     question.addEventListener('click',function(){;
          if(element.style.height === '75px'){
               element.style.height = '50px';
               element.querySelector('.answer').classList.toggle('answer_off');
               question.querySelector('p').style.fontWeight = '400';
               question.querySelector('img').style.transform = 'rotateZ(0deg)'
          }else{
               for(i=0;i < answer.length;i++){
                    answer[i].classList.add('answer_off');
                    answer[i].parentElement.style.height = '50px';
                    answer[i].parentElement.querySelector('.question').querySelector('p').style.fontWeight = '400';
                    answer[i].parentElement.querySelector('.question').querySelector('img').style.transform = 'rotateZ(0deg)'
               }
               element.style.height = '75px';
               question.querySelector('p').style.fontWeight = '600';
               question.querySelector('img').style.transform = 'rotateZ(180deg)';
               element.querySelector('.answer').classList.toggle('answer_off');
          }
          
     })    


});
