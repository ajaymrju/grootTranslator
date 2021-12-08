document.getElementById('submit-btn').addEventListener('click',translateToGroot);
let url = "https://api.funtranslations.com/translate/groot.json";

function translateToGroot(){
    let inputText = document.getElementById('input-text').value;
    let encodedUrl = finalURL(inputText);
    fetch(encodedUrl).then(response => response.json()).then(data =>{
        document.getElementById('output-text').innerText= data.contents.translated;
    }).catch(()=> {
        alert("some error occcured")
    })
}

function finalURL(param){
    return url+"?text="+encodeURI(param);
}