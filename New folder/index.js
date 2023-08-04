const url = "https://api.openai.com/v1/chat/completions?prompt=";
const key="";
let body = document.getElementById("content");
let buttonOne = document.getElementById("one");
buttonOne.addEventListener("click", async function find(el){
    el.preventDefault();
    try {
        let method = await fetch(url+"Generate a shayari in hindi for me",{
            method:"POST",
            headers:{
                "Content-Type": "application/json","Authorization": `Bearer ${key}`
            }
        });
        if(method.ok){
           body.innerText=method["choices"][0]["message"]["content"];
        }
    } catch (error) {
        body.innerText="Error occuured...Sorry!";
        console.log(error);
    }
    
});
let buttonTwo = document.getElementById("two");
buttonTwo.addEventListener("click", async function find(el){
    el.preventDefault();
    try {
        let method = await fetch(url+"Generate a shayari in English for me",{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${key}`
            }
        });
        if(method.ok){
           body.innerText=method["choices"][0]["message"]["content"];
        }
    } catch (error) {
        body.innerText="Error occuured...Sorry!";
        console.log(error);
    }
    
});