// console.log("java script");
const state = {
    taskList:[],
};

const taskContent = document.querySelector(".task__contents");
const taskModal = document.querySelector(".task__modal__body");

const htmlTaskContent = ({id,title,description,type,url}) =>`
    <div class="col-md-6 col-lg-4 mt-3" id=${id} key=${id}>
       <div class="card shadow-sm task__card">
          <div class="card-header d-flex gap-2 justify-content-end task__card__header">p
               <button type="button" class="btn btn-outline-info    mr-2" name=${id}>
                  <i class="fas fa-pencil-alt" name=${id}></i>
               </button>
               <button type="button" class="btn btn-outline-danger    mr-2" name=${id}>
                  <i class="fas fa-trash-alt" name=${id}></i>
               </button>
           </div>

           <div class="card-body">
                  ${
                     url
                     ? `<img width='100%' height='150px' style="object-fit: cover; object-position: center"  src=${url} alt='card image cap' class='card-image-top md-3 rounded-lg' />`
                     : `
               <img width='100%' height='150px' style="object-fit: cover; object-position: center" src="https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png" alt='card image cap' class='img-fluid place__holder__image mb-3' />
               `
                  }

                  <h4 class="task__card__title>${title}</h4>
                  <p class="description trip-3-lines text-muted" data-gram_editor="false">
                     ${description}
                  </p>
                  <div class="tags text-white d-flex flex-wrap">
                     <span>${type}</span>
                  </div>
            </div>
            
            <div class="card-footer">
              <button type="button"  class="btn btn-outline-primary  float-right" data-bs-toggle="modal" data-bs-target="#showTask"> 
                Open Task
                </button>
            </div>


       </div>
    </div>

`;

const htmlModalContent = ({id,title,description,url})=>{

   const date = new Date(parseInt(id));
   return `
      <div id=${id}>
      ${
         url && 
         `
            <img width='100%' src=${url} alt='card image cap' class='img-fluid place__holder__image mb-3' />
         `
      }
      <strong class="text-sm text-muted">Created On ${date.toDateString()}</strong>
      <h2 class"my-3">${title}</h2>
           <p class="lead">${description}</p>
      </div> 
   `;

};

const updateLocalStorage = () => {
   localStorage.setItem(
      "task",
      JSON.stringify({tasks: state.taskList})
   );
};

const loadInitalData = () => {
   const localStorageCopy = JSON.parse(localStorage.task);
   if(localStorageCopy){
      state.taskList = localStorageCopy.tasks;
   }
   state.taskList.map((cardData)=>{
      taskContent.insertAdjacentHTML("beforeend",htmlTaskContent(cardData));
   });
}