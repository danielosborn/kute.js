// common demo JS
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//scroll top?
var toTop = document.getElementById('toTop'),
    toTopTween = KUTE.to( 'window', { scroll: 0 }, {easing: 'easingQuarticOut', duration : 1500  } );

function topHandler(e){
	e.preventDefault(); 
    toTopTween.start();
}
toTop.addEventListener('click',topHandler,false);


// toggles utility
var toggles = document.querySelectorAll('[data-function="toggle"]');

function closeToggles(el){
    el.classList.remove('open');
}

function classToggles(el){
    el.classList.toggle('open');
}

document.addEventListener('click', function(e){
    var target = e.target.parentNode.tagName === 'LI' ? e.target : e.target.parentNode, 
        parent = target.parentNode;

    for (var i = 0, l = toggles.length; i<l; i++ ){
        if ( parent.tagName === 'LI' && toggles[i] === target ) {
            classToggles(parent);
        } else {
            closeToggles(toggles[i].parentNode);
        }
    }
}, false);