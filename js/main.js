// Variables
const anchuraMovil = 600;
const subNavs = document.querySelectorAll('.subnav');

// Functions
function removeAllClickEvents(elem) {
    const clone = elem.cloneNode(true);
    elem.parentNode.replaceChild(clone, elem);
    return clone;
}

function initialSubNavs() {
    const width = window.innerWidth;
    if (width < anchuraMovil) {
        // Mobile
        subNavs.forEach(subNav => {
            // Close
            subNav.removeAttribute("open");
            // Details, enable click on summary
            const summary = subNav.querySelector(".subnav__title");
            const newDOM = removeAllClickEvents(summary);
            newDOM.addEventListener("click", (event) => {
                event.preventDefault();
                const open = subNav.getAttribute("open");
                if (open) {
                    subNav.removeAttribute("open");
                } else {
                    subNav.setAttribute("open", true);
                }
            });
        });
    } else {
        // Desktop
        subNavs.forEach(subNav => {
            // Open
            subNav.setAttribute("open", true);
            // Details, disable click on summary
            const summary = subNav.querySelector(".subnav__title");
            const newDOM = removeAllClickEvents(summary);
            newDOM.addEventListener("click", (event) => {
                event.preventDefault();
                subNav.setAttribute("open", true);
            });
        });
    }
}

// Events
window.addEventListener('resize', initialSubNavs);

// Init
initialSubNavs();
AOS.init();