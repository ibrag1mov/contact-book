const elModalBtn=document.querySelector('.js-add');
const elModal=document.querySelector('#modal');
const elEditModal=document.querySelector('#edit');
const elCard=document.querySelector('.card');
const elListTitile = document.querySelector('.js-list-title')

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





var loader=document.querySelector('.load');

window.addEventListener("load", ()=>{
  loader.style.display="none";
})

// contact list

const elForm=document.querySelector('.js-form');
const elEditForm=document.querySelector('.js-edit-form');
const elList=document.querySelector('.js-list');
const elNameInput = document.querySelector('#name-input');
const elRelationshipInput = document.querySelector('#relationship-input');
const elPhoneInput = document.querySelector('#phone-input');
const elEditNameInput = document.querySelector('#name-edit-input');
const elEditRelationshipInput = document.querySelector('#relationship-edit-input');
const elEditPhoneInput = document.querySelector('#phone-edit-input');

const contact=[];

const renderContact = (arr, node)=>{
   node.innerHTML='';
   arr.forEach((item) => {
      
      const newItem = document.createElement('li');
      const newDivN = document.createElement('div');
      const newDivR = document.createElement('div');
      const newDivP = document.createElement('div');
      const newDivBtn = document.createElement('div');
      const newName = document.createElement('span');
      const newRelationship = document.createElement('span');
      const newPhone = document.createElement('span');
      const newEditBtn=document.createElement('button');
      const newDeleteBtn=document.createElement('button');
   
      newItem.setAttribute('class', 'd-flex w-100 p-0 list-group-item align-items-center js-item ');
      newDivN.setAttribute('class', 'new-w-30 ps-3 rounded-start py-3');
      newDivR.setAttribute('class', 'new-w-31 border-2 border-start border-end ps-3  py-3');
      newDivP.setAttribute('class', 'new-w-30 ps-3 py-3');
      newDivBtn.setAttribute('class', 'new-w-10 ps-3 d-flex');
      newName.setAttribute('class', 'fs-5');
      newRelationship.setAttribute('class', ' fs-5');
      newPhone.setAttribute('class', 'phone fs-5');
      newEditBtn.setAttribute('class', 'btn bg-light bg-gradient me-2 shadow js-edit-btn');
      newDeleteBtn.setAttribute('class', 'btn bg-danger text-white bg-gradient shadow js-delete-btn');
   
      newName.textContent = item.name;
      newRelationship.textContent = item.relationship;
      newPhone.textContent = item.phone;
      newEditBtn.innerHTML = `<i class="bi bi-pen  pe-none"></i>`;
      newDeleteBtn.innerHTML = `<i class="bi bi-x-lg pe-none"></i>`;
      newEditBtn.dataset.contactId = item.id;
      newDeleteBtn.dataset.contactId = item.id;

      newDivN.appendChild(newName);
      newDivR.appendChild(newRelationship);
      newDivP.appendChild(newPhone);
      newDivBtn.appendChild(newEditBtn);
      newDivBtn.appendChild(newDeleteBtn);
      newItem.appendChild(newDivN);
      newItem.appendChild(newDivR);
      newItem.appendChild(newDivP);
      newItem.appendChild(newDivBtn);


      node.appendChild(newItem);
   });


}

if(contact.length){
   renderContact(contact, elList);
}
else{
   const elText = document.createElement('p');
   elText.textContent = 'Contact qo\'shing';
   elText.setAttribute('class', 'text-center text-white fs-4 mt-5 pt-5');
   elList.appendChild(elText)
}


elForm.addEventListener('submit', (evt)=>{
   evt.preventDefault();

   if(elNameInput.value != '' && elRelationshipInput != '' && elPhoneInput.value.length>12 && elPhoneInput.value.length<14){
       let elNameValue = elNameInput.value;
       let elRelationshipValue = elRelationshipInput.value;
       let elPhoneValue = elPhoneInput.value;
       elNameInput.value='';
       elRelationshipInput.value='';
       elPhoneInput.value="+998";
   
       const newContact = {
           id: contact.length > 0 ? contact[contact.length-1].id + 1 : 1,
           name: elNameValue,
           relationship: elRelationshipValue,
           phone: elPhoneValue
       };

       contact.push(newContact);

       renderContact(contact, elList);

       elListTitile.setAttribute('class', 'list d-flex list-group list-group-horizontal mx-auto w-100 p-0 js-list-title')
       elModal.setAttribute('class', 'modal-wrapper d-none')
   };
   if(elPhoneInput.value.length<=12 || elPhoneInput.value.length>13){
      elPhoneInput.setAttribute('class', 'form-control new-w-60 mx-auto mb-5 shadow text-danger border-danger border-3')
   }
   else if(elPhoneInput.value.length=13){
      elPhoneInput.setAttribute('class', 'form-control new-w-60 mx-auto mb-5 shadow text-dark border-primary border-3')
   }
});


elEditForm.addEventListener('submit', (evt)=>{
   elList.innerHTML=''
   evt.preventDefault();
   if(elEditNameInput.value != '' && elEditRelationshipInput != '' && elEditPhoneInput.value.length>12 && elEditPhoneInput.value.length<14){
       let elEditNameValue = elEditNameInput.value;
       let elRditRelationshipValue = elEditRelationshipInput.value;
       let elRditPhoneValue = elEditPhoneInput.value;

   
       const newContact = {
           id: contact.length > 0 ? contact[contact.length-1].id + 1 : 1,
           name: elEditNameValue,
           relationship: elRditRelationshipValue,
           phone: elRditPhoneValue
       };

       contact.push(newContact);

       renderContact(contact, elList);

      
       elEditModal.setAttribute('class', 'modal-wrapper d-none')
   };
   if(elEditPhoneInput.value.length<=12 || elEditPhoneInput.value.length>13){
      elEditPhoneInput.setAttribute('class', 'form-control new-w-60 mx-auto mb-5 shadow text-danger border-danger border-3')
   }
   else if(elEditPhoneInput.value.length=13){
      elEditPhoneInput.setAttribute('class', 'form-control new-w-60 mx-auto mb-5 shadow text-dark border-primary border-3')
   }
});

elPhoneInput.addEventListener('keypress', (evt)=>{

      elPhoneInput.setAttribute('class', 'form-control new-w-60 mx-auto mb-5 shadow text-dark border-primary border-3')
   
})
elEditPhoneInput.addEventListener('keypress', (evt)=>{

      elEditPhoneInput.setAttribute('class', 'form-control new-w-60 mx-auto mb-5 shadow text-dark border-primary border-3')
   
})

elList.addEventListener('click', (evt)=>{
   if(evt.target.matches('.js-delete-btn')){
      const contactId=evt.target.dataset.contactId;

      const findedIndex = contact.findIndex((item)=> item.id == contactId);

      contact.splice(findedIndex, 1);

      renderContact(contact, elList);

   }
   if(evt.target.matches('.js-edit-btn')){
      const contactId=evt.target.dataset.contactId;

      const findedItem = contact.find((item)=> item.id == contactId);

      
      elEditNameInput.value = findedItem.name;
      elEditRelationshipInput.value = findedItem.relationship;
      elEditPhoneInput.value = findedItem.phone;

      // findedItem.name = elEditNameInput.value;
      // findedItem.relationship = elEditRelationshipInput.value;
      // findedItem.phone = elEditPhoneInput.value;

      if(elEditModal.classList.contains('d-none')){
         elEditModal.setAttribute('class', 'edit-modal-wrapper d-flex')
      }

      // renderContact(contact, elList)
   }
})
      
elEditModal.addEventListener('click',(evt)=>{
   if(evt.target.classList.contains('edit-modal-wrapper')  || evt.target.classList.contains('js-edit-close')){
      elEditModal.setAttribute('class', 'edit-modal-wrapper d-none')
 }
})