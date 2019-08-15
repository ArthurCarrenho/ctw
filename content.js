var element = document.getElementsByClassName('editor-container');

// Iterate through the retrieved elements and add the necessary class names.
for(var i = 0; i < element.length; i++)
{
    element[i].classList.add('notranslate');
    console.log(element[i].className);
}
var element2 = document.getElementsByClassName('CodeMirror');

// Iterate through the retrieved elements and add the necessary class names.
for(var i = 0; i < element2.length; i++)
{
    element2[i].classList.add('notranslate');
    console.log(element2[i].className);
}
setTimeout(function(){ 
// Get desired elements
var element = document.getElementsByClassName('editor-container');

// Iterate through the retrieved elements and add the necessary class names.
for(var i = 0; i < element.length; i++)
{
    element[i].classList.add('notranslate');
    console.log(element[i].className);
}
var element2 = document.getElementsByClassName('CodeMirror');

// Iterate through the retrieved elements and add the necessary class names.
for(var i = 0; i < element2.length; i++)
{
    element2[i].classList.add('notranslate');
    console.log(element2[i].className);
}
console.log('CTW: Finished')
}, 5000);