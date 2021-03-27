var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input")
var outputDiv=document.querySelector("#output")
//var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL="https://api.funtranslations.com/translate/minion.json"





function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}



function errorHandler(error){
    console.log("error occured",error);
}



function clickHandler(){
    //outputDiv.innerText="dnndn " + txtInput.value;

var inputText=txtInput.value;

//calling server for processing
fetch(getTranslationURL(inputText))
.then(response=> response.json())
.then(json => {
    var translatedText = json.contents.translated;
    outputDiv.innerHTML=translatedText;
})
    //console.log(json.contents.translated))
.catch(errorHandler)


};










btnTranslate.addEventListener("click", clickHandler)
