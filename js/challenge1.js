let header1 = document.querySelector('h1');

window.addEventListener("load", function(){
    header1.classList.add("heading");
});

window.addEventListener("dblclick", function(){
    alert(Date());
    console.log("double click");
});

document.querySelector('#toggle').addEventListener("click", function(){
    let email = document.querySelector('#emailBox');
    if (email.classList.value == "hidden"){
        email.classList.remove("hidden");
    }
    else{
        email.classList.add("hidden");
    }
});