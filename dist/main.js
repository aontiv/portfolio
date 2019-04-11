function headerBotIcon() {
    return `<span class="header-bot__icon"><i class="fas fa-sort-down"></i></span>`;
}

function headerSVG() {
    return (
        `<svg class="header__svg" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="100%" height="10" fill="#000" />
            <rect x="0" y="20" width="100%" height="100" fill="#000" />
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

function removeElements(selectors) {
    selectors.forEach(selector => document.querySelector(`.${selector}`).remove());
}

function insertElement(selector, html, position) {
    document.querySelector(`.${selector}`).insertAdjacentHTML(position, html.trim());
}

function init() {
    var tablet = window.innerWidth < 769 ? true : false;
    var desktop = window.innerWidth > 768 ? true : false;

    if (desktop) {
        removeElements(["footer__svg", "footer-totop", "header-bot__icon"]);
        insertElement("header", headerSVG(), "beforeend");
    }

    window.onresize = function(event) {
        let screenWidth = window.innerWidth;

        if (!tablet && screenWidth < 769) {
            removeElements(["header__svg"]);
            insertElement("header-bot-container", headerBotIcon(), "afterbegin");
            insertElement("footer", footerToTop(), "beforeend");
            insertElement("footer", footerSVG(), "beforeend");

            tablet = true;
            desktop = false;
        }

        if (!desktop && screenWidth > 768) {
            removeElements(["footer__svg", "footer-totop", "header-bot__icon"]);
            insertElement("header", headerSVG(), "beforeend");

            tablet = false;
            desktop = true;
        }
    }
}

window.onload = init();
