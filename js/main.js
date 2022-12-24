const elAddBtn=document.querySelector('.js-add');
const elClearBtn=document.querySelector('.js-clear');
const elModal=document.querySelector('#modal');
const elEditModal=document.querySelector('#edit');
const elCard=document.querySelector('.card');
const elListTitile = document.querySelector('.js-list-title')


// add btn
elAddBtn.addEventListener('click',(evt)=>{
   if(elModal.classList.contains('d-none')){
    elModal.setAttribute('class', 'modal-wrapper d-flex')
   }
})

elModal.addEventListener('click', (evt)=>{
   if(evt.target.classList.contains('modal-wrapper')  || evt.target.classList.contains('close-btn')){
        elModal.setAttribute('class', 'modal-wrapper d-none')
   }
})





// loading
var loader=document.querySelector('.load');

window.addEventListener("load", ()=>{
  loader.style.display="none";
})

// contact list
const elList=document.querySelector('.js-list');


const elForm=document.querySelector('.js-form');
const elNameInput = document.querySelector('#name-input');
const elRelationshipSelect = document.querySelector('#relationship-select');
const elRelationshipInput = document.querySelector('#relationship-input');
const elPhoneCode = document.querySelector('#phone-code');
const elPhoneNumber = document.querySelector('#phone-number');

// edit

const elEditForm=document.querySelector('.js-edit-form');
const elEditNameInput=document.querySelector('#name-edit-input')
const elEtidRelationshipSelect = document.querySelector('#relationship-edit-select');
const elEditRelationshipInput = document.querySelector('#relationship-edit-input');
const elEditPhoneCode = document.querySelector('#phone-edit-code');
const elEditPhoneNumber = document.querySelector('#phone-edt-number');


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
      const newPhoneLink = document.createElement('a');
      const newPhone = document.createElement('span');
      const newEditBtn=document.createElement('button');
      const newDeleteBtn=document.createElement('button');
   
      newItem.setAttribute('class', 'd-flex w-100 p-0 list-group-item align-items-center js-item ');
      newDivN.setAttribute('class', 'new-w-30 ps-3 rounded-start border-2  border-end py-3');
      newDivR.setAttribute('class', 'new-w-30  ps-3  py-3');
      newDivP.setAttribute('class', 'new-w-31 ps-3 py-3 border-2   border-start');
      newDivBtn.setAttribute('class', 'new-w-10 ps-3 d-flex');
      newName.setAttribute('class', 'fs-5');
      newRelationship.setAttribute('class', ' fs-5');
      newPhoneLink.setAttribute('class', 'phone-link')
      newPhone.setAttribute('class', 'phone fs-5 pe-none');
      newEditBtn.setAttribute('class', 'btn bg-light bg-gradient me-2 shadow js-edit-btn');
      newDeleteBtn.setAttribute('class', 'btn bg-danger text-white bg-gradient shadow js-delete-btn');
   
      newName.textContent = item.name;
      newRelationship.textContent = item.relationship;
      newPhone.textContent =`+998${item.code}${item.number}`;
      newEditBtn.innerHTML = `<i class="bi bi-pen  pe-none"></i>`;
      newDeleteBtn.innerHTML = `<i class="bi bi-x-lg pe-none"></i>`;
      newEditBtn.dataset.contactId = item.id;
      newDeleteBtn.dataset.contactId = item.id;
      newPhoneLink.href=`tel:998${item.code}${item.number}`
      
      newPhoneLink.appendChild(newPhone);
      newDivN.appendChild(newName);
      newDivR.appendChild(newRelationship);
      newDivP.appendChild(newPhoneLink);
      newDivBtn.appendChild(newEditBtn);
      newDivBtn.appendChild(newDeleteBtn);
      newItem.appendChild(newDivN);
      newItem.appendChild(newDivR);
      newItem.appendChild(newDivP);
      newItem.appendChild(newDivBtn);


      node.appendChild(newItem);
   });

   if(arr.length !== 0){
      if(elListTitile.classList.contains('d-none')){
         elListTitile.classList.remove('d-none');
         elClearBtn.classList.remove('d-none');
         elAddBtn.setAttribute('class','btn btn-success w-25 shadow p-2 rounded js-add')
      }
   }
   if(arr.length === 0){
      if(!elListTitile.classList.contains('d-none')){
         elListTitile.classList.add('d-none');
         elClearBtn.classList.add('d-none');
         elAddBtn.setAttribute('class','btn mx-auto btn-success w-50 shadow p-2 rounded js-add')
         const elText = document.createElement('p');
         elText.textContent = 'Add a contact 😐';
         elText.setAttribute('class', 'text-center text-white fs-4 mt-5 pt-5');
         elList.appendChild(elText)
      }
   }

}


if(contact.length){
   renderContact(contact, elList);
}
else{
   const elText = document.createElement('p');
   elText.textContent = 'Add a contact 😐';
   elText.setAttribute('class', 'text-center text-white fs-4 mt-5 pt-5');
   elList.appendChild(elText)
}

elRelationshipSelect.addEventListener('change', (evt)=>{
   if(elRelationshipSelect.value=="Another"){
      elRelationshipInput.classList.remove('d-none')
      elPhoneCode.setAttribute('class',' form-control new-w-10  mb-3 shadow outline-blue');
      elPhoneNumber.setAttribute('class',' form-control new-w-60  mb-3 shadow outline-blue');
   }
   if(elRelationshipSelect.value!="Another"){
      elRelationshipInput.classList.add('d-none')
      elPhoneCode.setAttribute('class',' form-control new-w-10  mb-5 shadow outline-blue');
      elPhoneNumber.setAttribute('class',' form-control new-w-60  mb-5 shadow outline-blue');
   }
   elRelationshipSelect.setAttribute('class', 'form-select new-w-60 mx-auto mb-2 shadow outline-blue')

})

elPhoneCode.addEventListener('input', (evt)=>{
   if(elPhoneCode.value.length ){
      elPhoneCode.setAttribute('class',' form-control new-w-10  mb-5 shadow outline-blue')
   }
})

elPhoneNumber.addEventListener('input', (evt)=>{
   if(elPhoneNumber.value.length ){
      elPhoneNumber.setAttribute('class',' form-control new-w-60  mb-5 shadow outline-blue')
   }
})

elRelationshipInput.addEventListener('input', (evt)=>{
   if(elRelationshipInput.value.length){
      elRelationshipInput.setAttribute('class','form-control new-w-60 mx-auto mb-2 shadow outline-blue')
   }
})

elNameInput.addEventListener('input', (evt)=>{
   if(elNameInput.value.length){
      elNameInput.setAttribute('class','form-control new-w-60 mx-auto mb-2 shadow outline-blue')
   }
})


let truth=true;

elForm.addEventListener('submit', (evt)=>{
   
   if(elNameInput.value.length === 0){
      elNameInput.setAttribute('class','form-control new-w-60 mx-auto mb-2 shadow outline-red border-danger')
   }

   if(elRelationshipSelect.value == 'Relationship'){
      elRelationshipSelect.setAttribute('class', 'form-select new-w-60 mx-auto mb-2 shadow outline-red')

   }

   if(elRelationshipSelect.value=="Another"){
      if(elRelationshipInput.value.length !==0){
         truth=true;
         
      }
      if(elRelationshipInput.value.length ===0){
         truth=false;
         elRelationshipInput.setAttribute('class','form-control new-w-60 mx-auto mb-2 shadow border-5 outline-red border-danger')
      }
      
   }

   if(elPhoneCode.value.length!==2){
       elPhoneCode.setAttribute('class',' form-control new-w-10  mb-5 shadow border-5 rounded-start outline-red border-danger')
   }

   if(elPhoneNumber.value.length!==7){
      elPhoneNumber.setAttribute('class','form-control new-w-60  mb-5 shadow border-5 rounded-end outline-red border-danger')
   }


   if(elNameInput.value.length === 0 || elRelationshipSelect.value == 'Relationship' || truth!=true || elPhoneCode.value.length!==2 || elPhoneNumber.value.length!==7){
      alert("Enter complete Contact information…❗")
   }

   if(elNameInput.value != '' && elRelationshipSelect.value != 'Relationship' && elPhoneCode.value.length===2 && elPhoneNumber.value.length===7 && truth!=false){
       let elNameValue = elNameInput.value;
       let elRelationshipSelectValue = elRelationshipSelect.value;
       let elRelationshipInputValue = elRelationshipInput.value;
       let elPhoneCodeValue = elPhoneCode.value;
       let elPhoneNumberValue = elPhoneNumber.value;
       elRelationshipSelect.value=="Relationship";
       elRelationshipInput.value='';
       elNameInput.value='';
       elRelationshipInput.value='';
       elPhoneCode.value="";
       elPhoneNumber.value='';
   
       const newContact = {
           id: contact.length > 0 ? contact[contact.length-1].id + 1 : 1,
           name: elNameValue,
           relationship: elRelationshipSelectValue == "Another" ? elRelationshipInputValue : elRelationshipSelectValue,
           code: elPhoneCodeValue,
           number: elPhoneNumberValue
       };

       contact.push(newContact);

       renderContact(contact, elList);

       elListTitile.setAttribute('class', 'list d-flex list-group list-group-horizontal mx-auto w-100 p-0 js-list-title')
       elModal.setAttribute('class', 'modal-wrapper d-none')
   }
   evt.preventDefault();
})

const editFunction=(array)=>{

   console.log(array);

}
let newId=0;

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
      const findedIndex = contact.findIndex((item)=> item.id == contactId);


      newId=findedIndex;
    
      elEditNameInput.value=findedItem.name;
      elEditRelationshipInput.value=findedItem.relationship;
      elEditPhoneCode.value =findedItem.code;
      elEditPhoneNumber.value = findedItem.number;
      


      if(elEditModal.classList.contains('d-none')){
         elEditModal.setAttribute('class', 'edit-modal-wrapper d-flex')
      }
   }
})
      
elEditModal.addEventListener('click',(evt)=>{
   if(evt.target.classList.contains('edit-modal-wrapper')  || evt.target.classList.contains('js-edit-close')){
      elEditModal.setAttribute('class', 'edit-modal-wrapper d-none')
 }
})



elEditPhoneCode.addEventListener('input', (evt)=>{
   if(elEditPhoneCode.value.length ){
      elEditPhoneCode.setAttribute('class',' form-control new-w-10  mb-5 shadow outline-blue')
   }
})

elEditPhoneNumber.addEventListener('input', (evt)=>{
   if(elEditPhoneNumber.value.length ){
      elEditPhoneNumber.setAttribute('class',' form-control new-w-60  mb-5 shadow outline-blue')
   }
})

elEditRelationshipInput.addEventListener('input', (evt)=>{
   if(elEditRelationshipInput.value.length){
      elEditRelationshipInput.setAttribute('class','form-control new-w-60 mx-auto mb-2 shadow  outline-blue')
   }
})

elEditNameInput.addEventListener('input', (evt)=>{
   if(elEditNameInput.value.length){
      elEditNameInput.setAttribute('class','form-control new-w-60 mx-auto mb-2 shadow outline-blue')
   }
})



elEditForm.addEventListener('submit', (evt)=>{
   evt.preventDefault();
   if(elEditNameInput.value.length === 0){
      elEditNameInput.setAttribute('class','form-control new-w-60 mx-auto mb-2 shadow outline-red border-danger')
   }

   if(elEditRelationshipInput.value.length === 0){
      elEditRelationshipInput.setAttribute('class','form-control new-w-60 mx-auto mb-2 shadow  outline-red')
   }


   if(elEditPhoneCode.value.length!==2){
       elEditPhoneCode.setAttribute('class','  form-control new-w-10  mb-5 shadow  border-5 rounded-start outline-red border-danger')
   }

   if(elEditPhoneNumber.value.length!==7){
      elEditPhoneNumber.setAttribute('class','form-control new-w-60  mb-5 shadow border-5 rounded-end outline-red border-danger')
   }


   if(elEditNameInput.value.length === 0 || elEditRelationshipInput.value.length===0 || elEditPhoneCode.value.length!==2 || elEditPhoneNumber.value.length!==7){
      alert("Enter complete Contact information…❗")
   }

   if(elEditNameInput.value.length !== 0 && elEditRelationshipInput.value.length!==0 && elEditPhoneCode.value.length===2 && elEditPhoneNumber.value.length===7 ){

      contact[newId].name=elEditNameInput.value;
      contact[newId].relationship=elEditRelationshipInput.value;
      contact[newId].code=elEditPhoneCode.value;
      contact[newId].number=elEditPhoneNumber.value;

      renderContact(contact, elList);


      elEditModal.setAttribute('class', 'edit-modal-wrapper d-none')
      
   }


})


// clear btn

elClearBtn.addEventListener('click', (evt)=>{
   contact.splice(0);
   renderContact(contact, elList);
   elListTitile.classList.add('d-none');
   elClearBtn.classList.add('d-none');
   elAddBtn.setAttribute('class','btn mx-auto btn-success w-50 shadow p-2 rounded js-add')
})

