let counter = 0;

function hide(event)
{
    if(event.target.parentElement.querySelector('.description').style.display === "none" || 
   event.target.parentElement.querySelector('.description').style.display === "")
    {
        event.target.parentElement.querySelector('.description').style.display = "block";
    }
    else if(event.target.parentElement.querySelector('.description').style.display === "block")
    {
        event.target.parentElement.querySelector('.description').style.display = "none";
    }

}

document.getElementById("projects").querySelectorAll("li").forEach(liElement => {
    liElement.addEventListener("click", hide);    
});

document.getElementById("counter").innerHTML = setInterval(() => {
    counter++;
    document.getElementById("counter").innerHTML = counter;
}, 1000);