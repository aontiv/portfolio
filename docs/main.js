function init(){var o=window.innerWidth>768;function e(){return'<svg class="header__svg" xmlns="http://www.w3.org/2000/svg">\n                <rect x="0" y="0" width="100%" height="10" fill="#000" />\n                <rect x="0" y="20" width="100%" height="100" fill="#2f4367" />\n                <rect x="0" y="130" width="100%" height="10" fill="#000" />\n            </svg>'}function n(o){return document.querySelector(`.${o}`)}function t(o){o.forEach(o=>document.querySelector(`.${o}`).remove())}function r(o,e,n){document.querySelector(`.${o}`).insertAdjacentHTML(n,e.trim())}o?(t(["footer__svg","footer-totop","header-bot__icon"]),r("header",e(),"beforeend")):(n("fa-chevron-up").addEventListener("click",function(){window.scrollTo(0,0)}),n("fa-sort-down").addEventListener("click",function(){var o=n("projects").getBoundingClientRect();window.scrollTo(o.x,o.y)})),window.onresize=function(){let n=window.innerWidth;o&&n<769&&(t(["header__svg"]),r("header-bot-container",'<span class="header-bot__icon"><i class="fas fa-sort-down"></i></span>',"afterbegin"),r("footer",'<div class="footer-totop">\n                <div class="footer-totop-container">\n                    <span class="footer-totop__icon"><i class="fas fa-chevron-up"></i></span>\n                </div>\n            </div>',"beforeend"),r("footer",'<svg class="footer__svg" viewBox="0 0 360 162" xmlns="http://www.w3.org/2000/svg">\n                <polygon points="0,162 360,0 360,162" stroke="none" fill="#000" />\n            </svg>',"beforeend"),o=!1);!o&&n>768&&(t(["footer__svg","footer-totop","header-bot__icon"]),r("header",e(),"beforeend"),o=!0)}}window.onload=init;