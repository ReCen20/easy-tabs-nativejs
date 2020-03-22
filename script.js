window.addEventListener("DOMContentLoaded", function() {

    "use strict";

    let infoHeader = document.querySelector(".info-header"),
        infoHeaderTab = document.querySelectorAll(".info-header-tab"),
        infoTabcontent = document.querySelectorAll(".info-tabcontent");

    function onHide(element) {
        if(element.classList.contains("show")) {
            element.classList.remove("show");
        }

        if(!element.classList.contains("hide")) {
            element.classList.add("hide");
        }
    }

    function onShow(element) {
        if(element.classList.contains("hide")) {
            element.classList.remove("hide");
        }

        if(!element.classList.contains("show")) {
            element.classList.add("show");
        }
    }

    for(let i = 1; i < infoTabcontent.length; i++) {
        onHide(infoTabcontent[i]);
    }
    onShow(infoTabcontent[0]);

    infoHeader.addEventListener("click", function(event) {
        let target = event.target;
        
        if(target && event.target.classList.contains('info-header-tab')) {

            let activeTarget = document.querySelector('.info-tabcontent.show');
            for(let i = 0; i < infoTabcontent.length; i++) {
                if (target === infoHeaderTab[i]) {
                    if (activeTarget !== infoTabcontent[i]) {
                        onHide(activeTarget);
                        onShow(infoTabcontent[i]);
                    }
                    break;
                }
            }
        }
    });
});