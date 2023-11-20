
let ulHeader = document.querySelector("ul.global-nav__primary-items");

let liViewPosts = document.createElement("li");
liViewPosts.classList.add("global-nav__primary-items");

let aViewPosts = document.createElement("a");

aViewPosts.setAttribute("target" , "_blank");
aViewPosts.setAttribute("href" , "https://www.linkedin.com/my-items/saved-posts/");
aViewPosts.classList.add("app-aware-link","global-nav__primary-items");

let divOuter = document.createElement("div");
divOuter.classList.add("ivm-image-view-model", "global-nav__icon-ivm");

let divInner = document.createElement("div");
divInner.classList.add("ivm-view-attr__img-wrapper", "display-flex");

let img = document.createElement("img");
img.setAttribute("id","imgSaved");
img.setAttribute("src", chrome.runtime.getURL("images/save.png"));

divInner.appendChild(img);
divOuter.appendChild(divInner);
aViewPosts.appendChild(divOuter);

let spanViewPost = document.createElement("span");
spanViewPost.classList.add("t-12", "break-words","block", "t-black--light" ,"t-normalglobal-nav__primary-link-text");
spanViewPost.innerHTML = "Saved";

aViewPosts.appendChild(spanViewPost);
liViewPosts.appendChild(aViewPosts);
ulHeader.appendChild(liViewPosts);

document.addEventListener('keypress',handlekpd);
function handlekpd(event){
    console.log(event);
    if(event.shiftKey && event.altKey && event.code === 'KeyO'){
        aViewPosts.click();
    }
}

let speechRecognition = new webkitSpeechRecognition();
speechRecognition.continuous = true;
//speechRecognition.interimResults = true;
speechRecognition.lang = "en-in";
speechRecognition.start();

let transcript = "";
speechRecognition.onresult = (event) =>{
    let transcript = event.results[event.resultIndex][0].transcript;

    console.log(event);
    if(transcript.trim().toLowerCase().includes("open post")){
        aViewPosts.click();
    }
} 

