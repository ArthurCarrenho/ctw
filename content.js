var checkExist = setInterval(function() {
    if ($('#discovery-resize-14').length) {
    	if (document.getElementById('discovery-resize-14').classList.contains('notranslate') == false) {

        console.log("Exists!");
        // Get desired elements
        var element = document.getElementById('discovery-resize-14');

        element.classList.add('notranslate');

        console.log("CTW: P1 OK");

        var element2 = document.getElementById('discovery-resize-25')

        element2.classList.add('notranslate');

        console.log("CTW: P2 OK");

        var element3 = document.getElementsByClassName('CodeMirror');

        // Iterate through the retrieved elements and add the necessary class names.
        for (var i = 0; i < element3.length; i++) {
            element3[i].classList.add('notranslate');
            console.log(element3[i].className);
        }

        console.log('CTW: Finished')
        clearInterval(checkExist);
    	}
    }
}, 100); // check every 100ms