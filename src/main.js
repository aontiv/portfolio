function init() {
    var desktop = window.innerWidth > 768 ? true : false;

    if (desktop) {
        removeElements(["footer__svg", "footer-totop", "header-bot__icon"]);
        insertElement("header", headerSVG(), "beforeend");
    }
    else {
        getElement("fa-chevron-up").addEventListener("click", scrollToTop);
        getElement("fa-sort-down").addEventListener("click", scrollToProjects);
    }

    // EVENT LISTENERS
    window.onresize = domSideEffects;

    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    function scrollToProjects() {
        var projects = getElement("projects");
        var location = projects.getBoundingClientRect();

        window.scrollTo(location.x, location.y);
    }

    function domSideEffects() {
        let screenWidth = window.innerWidth;

        if (desktop && screenWidth < 769) {
            removeElements(["header__svg"]);
            insertElement("header-bot-container", headerBotIcon(), "afterbegin");
            insertElement("footer", footerToTop(), "beforeend");
            insertElement("footer", footerSVG(), "beforeend");

            desktop = false;
        }

        if (!desktop && screenWidth > 768) {
            removeElements(["footer__svg", "footer-totop", "header-bot__icon"]);
            insertElement("header", headerSVG(), "beforeend");

            desktop = true;
        }
    }

    // HTML TEMPLATE FUNCTIONS
    function headerBotIcon() {
        return `<span class="header-bot__icon"><i class="fas fa-sort-down"></i></span>`;
    }
    
    function headerSVG() {
        return (
            `<svg class="header__svg" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="100%" height="10" fill="#000" />
                <rect x="0" y="20" width="100%" height="100" fill="#2f4367" />
                <rect x="0" y="130" width="100%" height="10" fill="#000" />
            </svg>`
        );
    }
    
    function footerToTop() {
        return (
            `<div class="footer-totop">
                <div class="footer-totop-container">
                    <span class="footer-totop__icon"><i class="fas fa-chevron-up"></i></span>
                </div>
            </div>`
        );
    }
    
    function footerSVG() {
        return (
            `<svg class="footer__svg" viewBox="0 0 360 162" xmlns="http://www.w3.org/2000/svg">
                <polygon points="0,162 360,0 360,162" stroke="none" fill="#000" />
            </svg>`
        );                
    }

    // UTILITY FUNCTIONS
    function getElement(classname) {
        return document.querySelector(`.${classname}`);
    }
    
    function removeElements(classnames) {
        classnames.forEach(classname => document.querySelector(`.${classname}`).remove());
    }
    
    function insertElement(classname, html, position) {
        document.querySelector(`.${classname}`).insertAdjacentHTML(position, html.trim());
    }
}

window.onload = init;
