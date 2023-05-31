const buttonEl=document.getElementsByTagName("button");
const conatiner1El=document.querySelector(".container1");
const conatiner2El=document.querySelector(".container2");
const delayEl=document.querySelector(".delay");
const start=document.getElementById("start");
const conatiner3El=document.querySelector(".container3");
const conatiner4El=document.querySelector(".container4");
const conatiner5El=document.querySelector(".container5");
const hiddenElements=document.querySelectorAll('.hidden');
const homeEl=document.getElementById("home");

const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting)
        {
            entry.target.classList.add('show');
        }
        else
        {
            entry.target.classList.remove('show');
        }
    });
});
hiddenElements.forEach((el)=>observer.observe(el));

buttonEl,addEventListener("click",()=> {
    conatiner1El.style.display="none";
    conatiner2El.style.display="flex";
   setTimeout(()=>{
        delayEl.style.display="flex";
    },2000)
    setTimeout(()=>{
        delayEl.style.display="none";
        start.style.display="block";
    },14000)
})

start.addEventListener("click",()=>{
    delayEl.style.display="none";
    Start();
})



function Start(){
    let pages=(time,work)=>{
        return new Promise((resolve,reject)=>{
            if(true)
            {
                setTimeout(()=>{
                    resolve(work());
                },time);
            }
            else
            {
                reject();
            }
        });
    }

    pages(0,()=>{
        conatiner1El.style.display="none";
        conatiner2El.style.display="none";
        conatiner3El.style.display="flex";

    })
    .then(()=>{
        return pages(2000,()=>{
            conatiner1El.style.display="none";
            conatiner2El.style.display="none";
            conatiner3El.style.display="none";
            conatiner4El.style.display="flex";
        })
    })
}

homeEl.addEventListener("click",()=>{
    conatiner1El.style.display="flex";
    conatiner2El.style.display="none";
    conatiner3El.style.display="none";
    conatiner4El.style.display="none";
})