function doShowAll() {

    localStorage.setItem("Products",JSON.stringify([{name:"IPhone 12", category:"phone",price:1200}]));
    let list= JSON.parse(localStorage.getItem("Products"));
    let element=document.createElement('div');
    element.classList.add('item');
    document.querySelector('.container-items').appendChild(element);
}