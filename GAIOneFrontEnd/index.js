const url = "http://localhost:8080/chat?prompt=";
const key="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";
let body = document.getElementById("content");
let buttonOne = document.getElementById("one");
buttonOne.addEventListener("click", async function find(el){
    el.preventDefault();
    try {
        let method = await fetch(url+"Generate a shayari in hindi for me of four line only",{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${key}`
            }
        });
        let data=await method.json();
        if(method.ok){
            body.innerText=data["message"]["content"];
         }
    } catch (error) {
        body.innerText="Error occuured...Sorry!";
    }
    
});
let buttonTwo = document.getElementById("two");
buttonTwo.addEventListener("click", async function find(el){
    el.preventDefault();
    try {
        let method = await fetch(url+"Generate a shayari in English for me of four line only",{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${key}`
            }
        });
        let data=await method.json();
        if(method.ok){
            body.innerText=data["message"]["content"];
         }
     } catch (error) {
         body.innerText="Error occuured...Sorry!";
     }
    
});