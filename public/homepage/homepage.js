// no need for anchor(#) links anymore. empty href doesn't refresh page 
const links = document.querySelectorAll('a');
links.forEach((a) => {
    let href = a.getAttribute('href');
    if(href === ''){
        a.addEventListener('click', (e) => e.preventDefault());
    }
});

///////////BOOTSTRAP////////////

// popover enable
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
return new bootstrap.Popover(popoverTriggerEl)
})

// tooltip enable
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})
