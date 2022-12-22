const elModalBtn=document.querySelector('.js-add');
const elModal=document.querySelector('#modal');
const elCard=document.querySelector('.card');

elModalBtn.addEventListener('click',(evt)=>{
   if(elModal.classList.contains('d-none')){
    elModal.setAttribute('class', 'modal-wrapper d-flex')
   }
})

elModal.addEventListener('click', (evt)=>{
   if(evt.target.classList.contains('modal-wrapper')  || evt.target.classList.contains('close-btn')){
        elModal.setAttribute('class', 'modal-wrapper d-none')
   }
})