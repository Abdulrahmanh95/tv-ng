(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"Tx//":function(n,t,e){"use strict";e.r(t),e.d(t,"LayoutModule",(function(){return C}));var i=e("ofXK"),o=e("tyNb"),a=e("TyYk"),s=e("fXoL");let c=(()=>{class n{constructor(){this.waitListOpened=!1,this.sideNavOpen$=new s.n,this.waitListClick$=new s.n}ngOnInit(){}emitClick(){this.waitListOpened=!this.waitListOpened,this.waitListClick$.emit()}toggleSideNav(){this.sideNavOpen$.emit()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Hb({type:n,selectors:[["tv-header"]],inputs:{waitListOpened:"waitListOpened"},outputs:{sideNavOpen$:"sideNavOpen$",waitListClick$:"waitListClick$"},decls:22,vars:2,consts:[[1,"header"],[1,"user-nav"],[1,"user-nav__icon"],["href","assets/icons/bell.svg"],[1,"user-nav__user"],[1,"user-nav__photo-shape"],[1,"user-nav__user-photo"],["href","assets/icons/profile.svg"],[1,"user-nav__welcome-user"],[1,"user-nav__user-name"],[1,"waiting-list",3,"click"],[1,"waiting-list__right-arrow"],["href","assets/icons/arrow-right.svg"],[1,"waiting-list__waiting-count"],[1,"waiting-list__waiting-text"],[1,"nav-menu",3,"click"],[1,"nav-menu__icon"],["href","assets/icons/nav-menu.svg"]],template:function(n,t){1&n&&(s.Tb(0,"header",0),s.Tb(1,"nav",1),s.ec(),s.Tb(2,"svg",2),s.Ob(3,"image",3),s.Sb(),s.dc(),s.Tb(4,"div",4),s.Tb(5,"div",5),s.ec(),s.Tb(6,"svg",6),s.Ob(7,"image",7),s.Sb(),s.Sb(),s.dc(),s.Tb(8,"span",8),s.Ac(9,"\u0645\u0631\u062d\u0628\u0627\u064b \u0628\u0643 "),s.Sb(),s.Tb(10,"span",9),s.Ac(11,"\u0645\u0627\u0644\u0643 \u0645\u062d\u0645\u062f"),s.Sb(),s.Sb(),s.Sb(),s.Tb(12,"div",10),s.bc("click",(function(){return t.emitClick()})),s.ec(),s.Tb(13,"svg",11),s.Ob(14,"image",12),s.Sb(),s.dc(),s.Tb(15,"span",13),s.Ac(16,"\u0661\u0664"),s.Sb(),s.Tb(17,"span",14),s.Ac(18,"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631"),s.Sb(),s.Sb(),s.Tb(19,"div",15),s.bc("click",(function(){return t.toggleSideNav()})),s.ec(),s.Tb(20,"svg",16),s.Ob(21,"image",17),s.Sb(),s.Sb(),s.Sb()),2&n&&s.Fb("header--opened",t.waitListOpened)},styles:["[_nghost-%COMP%]   .header[_ngcontent-%COMP%]{height:var(--header-height);display:flex;align-items:center;justify-content:space-between;padding:0 6rem;background-color:var(--color-white);transition:padding .3s}@media only screen and (max-width:75em){[_nghost-%COMP%]   .header[_ngcontent-%COMP%]{padding:0 3rem;position:fixed;left:0;top:0;width:100%;z-index:1000}}@media only screen and (max-width:56.25em){[_nghost-%COMP%]   .header[_ngcontent-%COMP%]{padding:0 4.5rem}}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .user-nav[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}@media only screen and (max-width:56.25em){[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .user-nav[_ngcontent-%COMP%]{display:none}}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .user-nav__user[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;color:var(--color-primary-2)}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .user-nav__welcome-user[_ngcontent-%COMP%]{padding:0 1rem 0 0;font-size:var(--font-size-default);font-weight:700;line-height:1.81}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .user-nav__user-name[_ngcontent-%COMP%]{font-size:var(--font-size-medium-2);font-weight:800;line-height:1.53;margin-right:.3rem}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .waiting-list[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;color:var(--color-tertiary-1);font-size:var(--font-size-big);font-weight:800;cursor:pointer}@media only screen and (max-width:56.25em){[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .waiting-list[_ngcontent-%COMP%]{font-size:2rem}}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .waiting-list__right-arrow[_ngcontent-%COMP%]{height:1.7rem;width:1.7rem;margin-left:2.4rem;transform:rotate(0);transition:transform .3s ease-in-out .4s,margin-left .3s}@media only screen and (max-width:56.25em){[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .waiting-list__right-arrow[_ngcontent-%COMP%]{display:none}}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .waiting-list__waiting-count[_ngcontent-%COMP%]{margin-left:.75rem}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .waiting-list__waiting-count[_ngcontent-%COMP%], [_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .waiting-list__waiting-text[_ngcontent-%COMP%]{width:auto;transform:scale(1);transition:transform .3s,width .1s .3s}@media only screen and (max-width:56.25em){[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .waiting-list__waiting-count[_ngcontent-%COMP%], [_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .waiting-list__waiting-text[_ngcontent-%COMP%]{transition:none}}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]{display:none}@media only screen and (max-width:56.25em){[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]{display:flex;width:4rem;height:100%;align-items:center;justify-content:center}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .nav-menu__icon[_ngcontent-%COMP%]{width:100%;height:100%;line-height:1}}[_nghost-%COMP%]   .header--opened[_ngcontent-%COMP%]{padding:0 6rem 0 2rem}[_nghost-%COMP%]   .header--opened[_ngcontent-%COMP%]   .waiting-list__right-arrow[_ngcontent-%COMP%]{transform:rotate(-180deg);margin-left:0}[_nghost-%COMP%]   .header--opened[_ngcontent-%COMP%]   .waiting-list__waiting-count[_ngcontent-%COMP%], [_nghost-%COMP%]   .header--opened[_ngcontent-%COMP%]   .waiting-list__waiting-text[_ngcontent-%COMP%]{width:0;transform:scale(0)}@media only screen and (max-width:56.25em){[_nghost-%COMP%]   .header--opened[_ngcontent-%COMP%]   .waiting-list__waiting-count[_ngcontent-%COMP%], [_nghost-%COMP%]   .header--opened[_ngcontent-%COMP%]   .waiting-list__waiting-text[_ngcontent-%COMP%]{width:auto;transform:scale(1);transition:transform .3s,width .1s .3s}}[_nghost-%COMP%]   .header--opened[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]{display:none}"]}),n})();function r(n,t){1&n&&s.Pb(0)}const g=function(n){return{user:n}};function l(n,t){if(1&n&&(s.Rb(0),s.yc(1,r,1,0,"ng-container",26),s.Qb()),2&n){const n=t.$implicit;s.fc();const e=s.pc(50);s.Bb(1),s.lc("ngTemplateOutlet",e)("ngTemplateOutletContext",s.nc(2,g,n))}}function _(n,t){1&n&&(s.ec(),s.Ob(0,"image",35))}function d(n,t){1&n&&(s.ec(),s.Ob(0,"image",36))}function m(n,t){if(1&n&&(s.ec(),s.dc(),s.Tb(0,"li",27),s.Tb(1,"div",28),s.ec(),s.Tb(2,"svg",29),s.yc(3,_,1,0,"image",30),s.yc(4,d,1,0,"image",31),s.Sb(),s.Sb(),s.dc(),s.Tb(5,"div",32),s.Tb(6,"span",33),s.Ac(7),s.Sb(),s.Tb(8,"span",34),s.Ac(9),s.Sb(),s.Sb(),s.Sb()),2&n){const n=t.user;s.Fb("wait-list__item--active",n.active),s.Bb(3),s.lc("ngIf",!n.active),s.Bb(1),s.lc("ngIf",n.active),s.Bb(3),s.Bc(n.since),s.Bb(2),s.Bc(n.name)}}const h=[{path:"",component:(()=>{class n{constructor(n){this.renderer=n,this.waitListOpened=!1,this.sideNavOpened=!1,this.users=[{name:"\u0645\u0633\u062a\u062e\u062f\u0645 1",since:"\u0645\u0646\u0630 \u0661\u0665 \u062f\u0642\u064a\u0642\u0629"},{name:"\u0645\u0633\u062a\u062e\u062f\u0645 2",since:"\u0645\u0646\u0630 \u0661\u0662 \u062f\u0642\u064a\u0642\u0629"},{name:"\u0645\u0633\u062a\u062e\u062f\u0645 3",since:"\u0645\u0646\u0630 \u0661\u0661 \u062f\u0642\u064a\u0642\u0629"},{name:"\u0645\u0627\u0644\u0643 \u0645\u062d\u0645\u062f",since:"\u0645\u0646\u0630 \u0661\u0660 \u062f\u0642\u064a\u0642\u0629",active:!0},{name:"\u0645\u0633\u062a\u062e\u062f\u0645 4",since:"\u0645\u0646\u0630 \u0668 \u062f\u0642\u064a\u0642\u0629"},{name:"\u0645\u0633\u062a\u062e\u062f\u0645 5",since:"\u0645\u0646\u0630 \u0665 \u062f\u0642\u064a\u0642\u0629"},{name:"\u0645\u0633\u062a\u062e\u062f\u0645 6",since:"\u0645\u0646\u0630 \u0662 \u062f\u0642\u064a\u0642\u0629"}]}ngOnInit(){}toggleListOpened(){this.waitListOpened=!this.waitListOpened,this.waitListOpened?this.renderer.addClass(document.documentElement,"opened"):this.renderer.removeClass(document.documentElement,"opened")}toggleSideNav(){this.sideNavOpened=!this.sideNavOpened}}return n.\u0275fac=function(t){return new(t||n)(s.Nb(s.E))},n.\u0275cmp=s.Hb({type:n,selectors:[["tv-landing"]],decls:51,vars:5,consts:[[1,"main-layout"],[1,"main-container"],[3,"waitListClick$","sideNavOpen$"],[1,"content"],[1,"left-side-nav"],[1,"nav-list"],[1,"nav-list__item","nav-list__item--main"],["href","#",1,"nav-list__link"],[1,"nav-list__item"],[1,"nav-list__item","nav-list__item--join"],[1,"wait-list"],[1,"wait-list__top"],[1,"wait-list__heading"],[1,"waiting-list__count"],[1,"waiting-list__text"],[1,"wait-list__ul"],[4,"ngFor","ngForOf"],[1,"wait-list__footer"],[1,"wait-list__rights"],[1,"wait-list__owner"],[1,"wait-list__social-accounts"],[1,"wait-list__platform-icon"],["href","assets/icons/instagram.svg"],["href","assets/icons/twitter.svg"],["href","assets/icons/facebook.svg"],["userInfoElement",""],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"wait-list__item"],[1,"wait-list__user-circle"],[1,"wait-list__user-img"],["href","assets/icons/user-bluegray.svg",4,"ngIf"],["href","assets/icons/user-secondary.svg",4,"ngIf"],[1,"wait-list__user-info"],[1,"wait-list__since"],[1,"wait-list__user-name"],["href","assets/icons/user-bluegray.svg"],["href","assets/icons/user-secondary.svg"]],template:function(n,t){1&n&&(s.Tb(0,"div",0),s.Tb(1,"div",1),s.Tb(2,"tv-header",2),s.bc("waitListClick$",(function(){return t.toggleListOpened()}))("sideNavOpen$",(function(){return t.toggleSideNav()})),s.Sb(),s.Tb(3,"div",3),s.Ob(4,"router-outlet"),s.Tb(5,"div",4),s.Tb(6,"ul",5),s.Tb(7,"li",6),s.Tb(8,"a",7),s.Ac(9,"\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629"),s.Sb(),s.Sb(),s.Tb(10,"li",8),s.Tb(11,"a",7),s.Ac(12,"\u0646\u0628\u0630\u0647 \u0639\u0646\u0627"),s.Sb(),s.Sb(),s.Tb(13,"li",8),s.Tb(14,"a",7),s.Ac(15,"\u0627\u0644\u062e\u0628\u0631\u0627\u0621"),s.Sb(),s.Sb(),s.Tb(16,"li",8),s.Tb(17,"a",7),s.Ac(18,"\u0633\u0624\u0627\u0644 \u0648\u062c\u0648\u0627\u0628"),s.Sb(),s.Sb(),s.Tb(19,"li",8),s.Tb(20,"a",7),s.Ac(21,"\u0627\u062e\u062a\u0628\u0627\u0631\u0627\u062a \u0643\u0648\u0631\u0648\u0646\u0627"),s.Sb(),s.Sb(),s.Tb(22,"li",8),s.Tb(23,"a",7),s.Ac(24,"\u0627\u062a\u0635\u0644 \u0628\u0646\u0627"),s.Sb(),s.Sb(),s.Tb(25,"li",9),s.Tb(26,"a",7),s.Ac(27,"\u0627\u0646\u0636\u0645 \u0643\u062e\u0628\u064a\u0631"),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Tb(28,"div",10),s.Tb(29,"div",11),s.Tb(30,"h2",12),s.Tb(31,"span",13),s.Ac(32,"\u0661\u0664"),s.Sb(),s.Tb(33,"span",14),s.Ac(34,"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631"),s.Sb(),s.Sb(),s.Tb(35,"ul",15),s.yc(36,l,2,4,"ng-container",16),s.Sb(),s.Sb(),s.Tb(37,"div",17),s.Tb(38,"div",18),s.Ac(39,"\u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629"),s.Sb(),s.Tb(40,"div",19),s.Ac(41,"\u062a\u0627\u064a\u0645 \u0641\u064a\u0648\u064a\u0631 \xa9 \u0662\u0660\u0661\u0663 - \u0662\u0660\u0662\u0660"),s.Sb(),s.Tb(42,"div",20),s.ec(),s.Tb(43,"svg",21),s.Ob(44,"image",22),s.Sb(),s.Tb(45,"svg",21),s.Ob(46,"image",23),s.Sb(),s.Tb(47,"svg",21),s.Ob(48,"image",24),s.Sb(),s.Sb(),s.Sb(),s.yc(49,m,10,6,"ng-template",null,25,s.zc),s.Sb(),s.Sb()),2&n&&(s.Fb("main-layout--shifted",t.waitListOpened),s.Bb(5),s.Fb("left-side-nav--opened",t.sideNavOpened),s.Bb(31),s.lc("ngForOf",t.users))},directives:[c,o.f,i.s,i.A,i.t],styles:['[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]{display:flex;position:relative;overflow-x:hidden}[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]{flex:0 1 100%;opacity:1;transition:all .3s}@media only screen and (max-width:56.25em){[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]{width:100%;margin:0;transition:margin .5s cubic-bezier(.68,-.6,.32,1.6)}}[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{border-top-left-radius:0;overflow:inherit;position:relative}@media only screen and (max-width:56.25em){[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{margin-top:var(--header-height)}}[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .left-side-nav[_ngcontent-%COMP%]{width:80%;height:80vh;position:absolute;top:0;left:-110%;display:flex;align-items:center;justify-content:center;background-color:var(--color-white);z-index:1001;transition:left .4s}[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .left-side-nav--opened[_ngcontent-%COMP%]{left:0}[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .left-side-nav[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]{list-style:none;display:flex;flex-direction:column;justify-content:center;align-items:center}[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .left-side-nav[_ngcontent-%COMP%]   .nav-list__item[_ngcontent-%COMP%]{color:var(--color-tertiary-1);font-size:1.7rem;font-weight:500}[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .left-side-nav[_ngcontent-%COMP%]   .nav-list__item[_ngcontent-%COMP%]:not(:last-child){padding:3rem 0}[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .left-side-nav[_ngcontent-%COMP%]   .nav-list__item--join[_ngcontent-%COMP%], [_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .left-side-nav[_ngcontent-%COMP%]   .nav-list__item--main[_ngcontent-%COMP%]{font-weight:800}[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .left-side-nav[_ngcontent-%COMP%]   .nav-list__link[_ngcontent-%COMP%]:link, [_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .left-side-nav[_ngcontent-%COMP%]   .nav-list__link[_ngcontent-%COMP%]:visited{text-decoration:none;color:inherit}[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .wait-list[_ngcontent-%COMP%]{width:20%;height:97%;display:flex;justify-content:space-between;flex-direction:column;padding-top:var(--header-height);padding-right:var(--header-height);position:absolute;top:0;left:0;visibility:hidden;z-index:-1;transform:translate3d(100%,0,0);transition:visibility .5s ease-in,transform .3s ease-in}@media only screen and (max-width:56.25em){[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .wait-list[_ngcontent-%COMP%]{left:auto;right:3.5rem;width:35%;padding-left:var(--header-height);padding-right:0;transform:translate3d(-100%,0,0)}}@media only screen and (max-width:37.5em){[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .wait-list[_ngcontent-%COMP%]{width:50%}}[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .wait-list__heading[_ngcontent-%COMP%]{font-size:var(--font-size-big);font-weight:800;color:var(--color-tertiary-1);position:relative;padding-bottom:1.5rem;margin-bottom:3rem}@media only screen and (max-width:56.25em){[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .wait-list__heading[_ngcontent-%COMP%]{display:none}}[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .wait-list__heading[_ngcontent-%COMP%]:after{content:"";width:4rem;height:.2rem;position:absolute;right:0;bottom:0;background-color:var(--color-secondary-2);border-radius:2rem}[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .wait-list__count[_ngcontent-%COMP%]{margin-left:1rem}[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .wait-list__ul[_ngcontent-%COMP%]{list-style:none;display:flex;flex-direction:column;align-self:stretch;margin-right:-3.5rem}[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .wait-list__item[_ngcontent-%COMP%]{display:flex;padding:1rem 1.3rem 1rem 0}@media only screen and (max-width:56.25em){[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .wait-list__item[_ngcontent-%COMP%]{justify-content:center}}[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .wait-list__item--active[_ngcontent-%COMP%]{background-color:#f5f5f5;border-top-right-radius:30px;border-bottom-right-radius:30px}@media only screen and (max-width:56.25em){[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .wait-list__item--active[_ngcontent-%COMP%]{border-radius:30px 0 0 30px}}[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .wait-list__item[_ngcontent-%COMP%]:not(:last-child){margin-bottom:1rem}[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .wait-list__user-circle[_ngcontent-%COMP%]{width:5.8rem;height:5.8rem;display:flex;justify-content:center;align-items:center;border:1px solid var(--color-secondary-1);border-radius:50%;overflow:hidden;background-color:var(--color-white);box-shadow:-.2rem .2rem .5rem 0 rgba(0,0,0,.09);margin-left:1rem}[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .wait-list__user-img[_ngcontent-%COMP%]{width:2rem;height:2.8rem}[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .wait-list__user-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .wait-list__since[_ngcontent-%COMP%]{font-size:1.1rem;color:#8c9cbe}[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .wait-list__user-name[_ngcontent-%COMP%]{font-size:var(--font-size-default);font-weight:700;color:var(--color-primary-2)}[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .wait-list__footer[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-right:-2rem;font-size:var(--font-size-default);color:#889dc7}[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .wait-list__social-accounts[_ngcontent-%COMP%]{display:flex;margin-top:1.5rem}[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .wait-list__platform-icon[_ngcontent-%COMP%]{width:2.4rem;height:2.4rem}[_nghost-%COMP%]   .main-layout[_ngcontent-%COMP%]   .wait-list__platform-icon[_ngcontent-%COMP%]:not(:last-child){margin-left:.75rem}[_nghost-%COMP%]   .main-layout--shifted[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]   .main-layout--shifted[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]{flex:0 1 80%;opacity:.97}@media only screen and (max-width:56.25em){[_nghost-%COMP%]   .main-layout--shifted[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]{flex:0 1 100%;margin:0 35% 0 -35%}}@media only screen and (max-width:37.5em){[_nghost-%COMP%]   .main-layout--shifted[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]{margin:0 50% 0 -50%}}[_nghost-%COMP%]   .main-layout--shifted[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%]{border-top-left-radius:2rem;overflow:hidden;box-shadow:-3.2rem 6rem 3.3rem 0 rgba(29,66,139,.51)}[_nghost-%COMP%]   .main-layout--shifted[_ngcontent-%COMP%]   .wait-list[_ngcontent-%COMP%]{visibility:visible;transform:none}']}),n})(),children:[{path:a.a,loadChildren:()=>e.e(5).then(e.bind(null,"J04v")).then(n=>n.DigitalClinicModule)},{path:"",redirectTo:a.a,pathMatch:"full"}]}];let O=(()=>{class n{}return n.\u0275mod=s.Lb({type:n}),n.\u0275inj=s.Kb({factory:function(t){return new(t||n)},imports:[[o.e.forChild(h)],o.e]}),n})(),C=(()=>{class n{}return n.\u0275mod=s.Lb({type:n}),n.\u0275inj=s.Kb({factory:function(t){return new(t||n)},imports:[[i.c,O]]}),n})()}}]);