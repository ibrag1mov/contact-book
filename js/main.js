const elAddBtn=document.querySelector('.js-add');
const elClearBtn=document.querySelector('.js-clear');
const elModal=document.querySelector('#modal');
const elEditModal=document.querySelector('#edit');
const elCard=document.querySelector('.card');
const elHeader=document.querySelector('.header');
const elCreateBtn = document.querySelector('.js-create');



// add btn
elAddBtn.addEventListener('click',(evt)=>{
   if(elModal.classList.contains('d-none')){
    elModal.setAttribute('class', 'modal-wrapper d-flex')
   }
   elRelationshipSelect.value=="Relationship";
   elRelationshipInput.value='';
   elNameInput.value='';
   elRelationshipInput.value='';
   elPhoneCode.value="";
   elPhoneNumber.value='';
})

elModal.addEventListener('click', (evt)=>{
   if(evt.target.classList.contains('modal-wrapper')  || evt.target.classList.contains('close-btn')){
        elModal.setAttribute('class', 'modal-wrapper d-none')
   }
})

// time
let date= new Date();

let newdate=date.getTime();



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


const localData = JSON.parse(window.localStorage.getItem('contact'));

const contact = localData ? localData : [];
// const contact = localData || [];


const renderContact = (arr, node)=>{
   window.localStorage.setItem('contact', JSON.stringify(contact));
   node.innerHTML='';
   arr.forEach((item) => {
      
      const newItem = document.createElement('li');
      const newDivN = document.createElement('div');
      const newDivP = document.createElement('div');
      const newDivBtn = document.createElement('div');
      const newName = document.createElement('h2');
      const newRelationship = document.createElement('span');
      const newPhoneLink = document.createElement('a');
      const newCallLink = document.createElement('a');
      const newPhone = document.createElement('span');
      const newEditBtn=document.createElement('button');
      const newDeleteBtn=document.createElement('button');
   
      newItem.setAttribute('class', 'w-100 py-2 d-flex align-items-center list-group-item bg-dark bg-opacity-75 js-item border-secondary ');
      newDivN.setAttribute('class', 'new-w-60 ps-3 text-white text-capitalize border-secondary rounded-start border-2  border-end');
      newDivP.setAttribute('class', ' ps-3 new-w-40 ');
      newDivBtn.setAttribute('class', 'ps-3 d-flex');
      newName.setAttribute('class', 'fs-2 m-0 p-0');
      newRelationship.setAttribute('class', ' fs-6 text-warning');
      newPhoneLink.setAttribute('class', 'phone-link')
      newPhone.setAttribute('class', 'phone fs-5 pe-none border-white text-white');
      newCallLink.setAttribute('class', 'btn btn-primary bg-opacity-75 me-2 py-2 shadow js-call-btn')
      newEditBtn.setAttribute('class', 'btn bg-success bg-opacity-75 text-white text-shadow bg-gradient me-2 shadow js-edit-btn');
      newDeleteBtn.setAttribute('class', 'btn bg-danger text-white bg-gradient shadow js-delete-btn');
   
      newName.textContent = item.name;
      newRelationship.textContent = item.relationship;
      newPhone.textContent =`+998${item.code}${item.number}`;
      newCallLink.innerHTML=`<i class="bi bi-telephone-fill pe-none"></i>`
      newEditBtn.innerHTML = `<i class="bi bi-pen  pe-none"></i>`;
      newDeleteBtn.innerHTML = `<i class="bi bi-x-lg pe-none"></i>`;
      newCallLink.dataset.contactId = item.id;
      newEditBtn.dataset.contactId = item.id;
      newDeleteBtn.dataset.contactId = item.id;
      newPhoneLink.href=`tel:998${item.code}${item.number}`;
      newCallLink.href=`tel:998${item.code}${item.number}`;
      
      newPhoneLink.appendChild(newPhone);
      newDivN.appendChild(newName);
      newDivN.appendChild(newRelationship);
      newDivP.appendChild(newPhoneLink);
      newDivBtn.appendChild(newCallLink);
      newDivBtn.appendChild(newEditBtn);
      newDivBtn.appendChild(newDeleteBtn);
      newItem.appendChild(newDivN);
      newItem.appendChild(newDivP);
      newItem.appendChild(newDivBtn);


      node.appendChild(newItem);
   });

   if(arr.length !== 0){
      elClearBtn.classList.remove('d-none');
      elAddBtn.setAttribute('class','btn btn-success w-100 mb-4 shadow p-2 rounded js-add')
   }
   if(arr.length === 0){
      elClearBtn.classList.add('d-none');
      const elText = document.createElement('p');
      elText.textContent = 'Add a contact 😐';
      elText.setAttribute('class', 'text-center fw-semibold  fs-4 mt-2 pt-1');
      elList.appendChild(elText)
      
   }

}

renderContact(contact, elList)

elRelationshipSelect.addEventListener('change', (evt)=>{
   if(elRelationshipSelect.value=="Another"){
      elRelationshipInput.classList.remove('d-none');
      elCreateBtn.setAttribute('class','btn d-block text-white btn-primary minus-3 new-w-60 mx-auto js-create')
   }
   if(elRelationshipSelect.value!="Another"){
      elRelationshipInput.classList.add('d-none')
      elCreateBtn.setAttribute('class','btn d-block text-white btn-primary new-w-60 mx-auto js-create')
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


   if( elNameInput.value.length === 0 || elRelationshipSelect.value == 'Relationship' || truth!=true || elPhoneCode.value.length!==2 || elPhoneNumber.value.length!==7){
      alert("Enter complete Contact information…❗")
      evt.preventDefault()
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
           number: elPhoneNumberValue,
           time: newdate
       };


       contact.push(newContact);

       renderContact(contact, elList);
      
        elModal.setAttribute('class', 'modal-wrapper d-none')
      }
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
   elClearBtn.classList.add('d-none');
})


// sort


let elSelectSort=document.querySelector('#sort');


elSelectSort.addEventListener('change',(evt)=>{
   
    let elSelectSortVal=elSelectSort.value;

    if(elSelectSortVal != "Sort"){
        if(elSelectSortVal == "A-Z"){
            const contactSort = contact.sort((a, b)=> a.name.charCodeAt(0)-b.name.charCodeAt(0));
            renderContact(contactSort, elList);
            evt.preventDefault();
        }
        else if(elSelectSortVal == "Z-A"){
            const contactSort = contact.sort((a, b)=> b.name.charCodeAt(0)-a.name.charCodeAt(0));
            renderContact(contactSort, elList);

            evt.preventDefault();
        }
    }
    else{
       const contactSort = contact.sort((a, b)=> a.time-b.time);
       renderContact(contactSort, elList);
       evt.preventDefault();
    }
    
})

// search

let elFrom = document.querySelector('.serch-form');
let elInput = document.querySelector('#search');

let newArray=[];

elFrom.addEventListener('input',(evt)=>{
    evt.preventDefault();
    elList.innerHTML=''
    let elInputValue=elInput.value.toLocaleLowerCase();

    contact.forEach((el)=>{
        if(el.name.toLocaleLowerCase().includes(elInputValue)){
            newArray.push(el)
        }
    });
    renderContact(newArray, elList)
    newArray=[]
});

// darkmode

let elModeBtn = document.querySelector('.darkmode');

let theme=false;

elModeBtn.addEventListener('click', function(){
   theme = !theme;
   const bg = theme ? 'dark' : 'light';
   window.localStorage.setItem('theme', bg);
   changeTheme()
})

function changeTheme(){
   if(window.localStorage.getItem('theme')==='dark'){
      document.body.classList.remove('light');
      elHeader.classList.remove('header-light');
      document.body.classList.add('dark');
      elHeader.classList.add('header-dark');
      elList.classList.remove('text-dark'); 
      elList.classList.add('text-white'); 
      elModeBtn.innerHTML=`<i class="bi bi-sun text-white pe-none fs-4 text-shadow"></i>`;
   }else{
      document.body.classList.remove('dark');
      elHeader.classList.remove('header-dark');
      document.body.classList.add('light');
      elHeader.classList.add('header-light');
      elList.classList.remove('text-white'); 
      elList.classList.add('text-dark');
      elModeBtn.innerHTML=`<i class="bi bi-moon-stars text-dark pe-none fs-4 text-shadow"></i>`;
   }
}

changeTheme();