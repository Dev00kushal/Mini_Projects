// Syntax for making manipulating css 
    //  element.style.propertyname = "value"
// It is important to keep the setTimeout change in a function 
// Events : Everything in a action in a website is a event 
// Click event (Dont forget to include the onclick element on the HTML file )

  const onclick_button = () =>{
    const Food_shop = document.querySelector("h1");
    const btn = document.querySelector("button");
    const paragraph= document.querySelector("ul");
    setTimeout( () => {
      btn.style.display = "none";
      Food_shop.innerHTML = " Welcome to the Game";
      paragraph.innerHTML = "";
       document.querySelector("body").style.backgroundColor = "pink";
      },1000);
    
  } 