/*
 * Each Color Rect is a link <a>.
 * You need to make these links clickable, 
 * each link should color its own container (parent element with class name ‘.container’) 
 * into the color from data-color attribute.
 * 
 * Link ".animate-all" should animate color switching of each container, from left to right  
 * with time interval of 2 seconds.
 */

window.onload=function(){
 
    //-----------coloring link's container-----------------

    var btns = [].slice.call(document.querySelectorAll('a'));
    
    btns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var color = btn.getAttribute('data-color');
            var block = btn.closest('.container');
            block.style.backgroundColor=color; 
            //break
        });
    });
    //-----------------------------------------------------

    //--------------------animation------------------------

    var trigger = document.getElementsByClassName('animate-all')[0];
    var containers = [].slice.call(document.querySelectorAll('.container'));
        
    containers.forEach(function (container) {
        trigger.addEventListener('click', function () {
            var first = containers[0];
            var second = containers[1];
            var third = containers[2];

            first.style.backgroundColor='red';
            setTimeout(function() {
                first.style.backgroundColor='green';
                second.style.backgroundColor='red';
                setTimeout(function() {
                    first.style.backgroundColor='blue';
                    second.style.backgroundColor='green';
                    third.style.backgroundColor='red';
                    setTimeout(function() {
                        first.style.backgroundColor='';
                        second.style.backgroundColor='blue';
                        third.style.backgroundColor='green';
                        setTimeout(function() {
                            second.style.backgroundColor='';
                            third.style.backgroundColor='blue';
                            setTimeout(function() {
                                third.style.backgroundColor=''; 
                            }, 2000);
                        }, 2000);
                    }, 2000);
                }, 2000);
            }, 2000);
        });
    });


};

