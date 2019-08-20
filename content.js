setTimeout(function(){ 
// Get desired elements
var element = document.getElementById('discovery-resize-14');

element.classList.add('notranslate');

var element2 = document.getElementById('discovery-resize-25')

element2.classList.add('notranslate');

var element3 = document.getElementsByClassName('CodeMirror');

// Iterate through the retrieved elements and add the necessary class names.
for(var i = 0; i < element3.length; i++)
{
    element3[i].classList.add('notranslate');
    console.log(element3[i].className);
}

console.log('CTW: Finished')
}, 1000);
