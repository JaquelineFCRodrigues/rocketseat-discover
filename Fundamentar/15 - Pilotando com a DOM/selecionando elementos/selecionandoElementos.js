//getElementById (element)

console.log(document.getElementById("blog-title"));

//getElementsByClassName (HTML colection)

console.log(document.getElementsByClassName("one")); 

//getElementsByTagName (HTML colection)

console.log(document.getElementsByTagName("meta"));

//querySelector (css selector) traz sempre o primeiro (element)

console.log(document.querySelector(".one"));

//querySelectorAll (css selector) traz todos (Nodelist)

console.log(document.querySelectorAll(".one"));

//Diferença entre o Nodelist e HTML colection
//Nodelist aceita foreach o HTML colection não