const modal=document.getElementById("enrollModal");
const selectedCourse=document.getElementById("selectedCourse");
const courseField=document.getElementById("courseField");
const enrollMessage=document.getElementById("enrollMessage");

document.querySelectorAll(".enroll-btn").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const course=btn.closest(".course-card").dataset.course;
    selectedCourse.textContent=course;
    courseField.value=course;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden","false");
    document.body.classList.add("no-scroll");
  });
});

function closeModal(){
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden","true");
  document.body.classList.remove("no-scroll");
}
document.querySelector(".close-modal").addEventListener("click",closeModal);
modal.addEventListener("click",e=>{if(e.target===modal) closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape") closeModal()});

document.getElementById("enrollForm").addEventListener("submit",e=>{
  e.preventDefault();
  enrollMessage.textContent=`Application received for ${courseField.value}. Connect this form to a secure backend before collecting real CNIC or ID documents.`;
});

document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  document.getElementById("contactMessage").textContent="Thanks! Your inquiry has been prepared. Connect this form to your email/backend to receive submissions.";
});

document.querySelector(".menu-btn").addEventListener("click",()=>{
  document.querySelector(".nav-links").classList.toggle("open");
});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>{
  document.querySelector(".nav-links").classList.remove("open");
}));
