console.log("script linked")

function removeButton(element){
    console.log(element);
    element.remove();
}

function signIn(element){
    if(element.innerText ==="Login"){
        (element.innerText="Log Out")
    }

    else(element.innerText="Login")
}