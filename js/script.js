document.getElementById('dropdown-icon').addEventListener('click', showDropdown);

let open = false;
function showDropdown(){
  if(!open){
    document.querySelector('.dropdown').style.display = 'flex';
    document.querySelector('.dropdown-head').style.display = 'block';
    document.getElementById('dropdown-icon').style.transform = 'rotate(180deg)';
    setTimeout(()=>{
      document.querySelector('.dropdown').style.height = '200px';
    document.querySelector('.dropdown-head').style.height = '25px';
    })
    open = true;
  }else{
    document.querySelector('.dropdown').style.display = 'none';
    document.querySelector('.dropdown').style.height = '0';
    document.querySelector('.dropdown-head').style.display = 'none';
    document.querySelector('.dropdown-head').style.height = '0';
    document.getElementById('dropdown-icon').style.transform = 'rotate(0)';
    open = false;
  }
}

window.onscroll = () =>{
  document.querySelector('.dropdown').style.display = 'none';
    document.querySelector('.dropdown').style.height = '0';
    document.querySelector('.dropdown-head').style.display = 'none';
    document.querySelector('.dropdown-head').style.height = '0';
    document.getElementById('dropdown-icon').style.transform = 'rotate(0)';
    open = false;
}
/*======================*/
/*-------modal------*/
/*======================*/
const close = document.getElementById("close");
const opens = document.getElementById("openModal");
const modal = document.getElementById("modal");
const btnModal = document.getElementById("btnModal");

//show modal
opens.addEventListener("click", () => modal.classList.add("show-modal"));

// Hide modal
close.addEventListener("click", () => modal.classList.remove("show-modal"));
// btnModal.addEventListener("click", () => modal.classList.remove("show-modal"));

// hide modal on outside

window.addEventListener("click", (e) =>
  e.target == modal ? modal.classList.remove("show-modal") : false
);
