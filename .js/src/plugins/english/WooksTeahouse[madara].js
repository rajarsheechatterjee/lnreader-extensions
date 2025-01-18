var e=this&&this.__awaiter||function(e,t,a,n){return new(a||(a=Promise))((function(r,i){function o(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,s)}l((n=n.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var a,n,r,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]},o=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return o.next=s(0),o.throw=s(1),o.return=s(2),"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(l){return function(s){if(a)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(i=0)),i;)try{if(a=1,n&&(r=2&s[0]?n.return:s[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,s[1])).done)return r;switch(n=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,n=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){i.label=s[1];break}if(6===s[0]&&i.label<r[1]){i.label=r[1],r=s;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(s);break}r[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],n=0}finally{a=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("@libs/fetch"),r=require("cheerio"),i=require("@libs/defaultCover"),o=require("@libs/novelStatus"),s=a(require("dayjs")),l=function(e,t){return new RegExp(t.join("|")).test(e)},u=new(function(){function a(e){var t;this.parseData=function(e){var t,a=(0,s.default)(),n=(null===(t=e.match(/\d+/))||void 0===t?void 0:t[0])||"",r=parseInt(n,10);if(!n)return e;if(l(e,["detik","segundo","second","วินาที"]))a=a.subtract(r,"second");else if(l(e,["menit","dakika","min","minute","minuto","นาที","دقائق"]))a=a.subtract(r,"minute");else if(l(e,["jam","saat","heure","hora","hour","ชั่วโมง","giờ","ore","ساعة","小时"]))a=a.subtract(r,"hours");else if(l(e,["hari","gün","jour","día","dia","day","วัน","ngày","giorni","أيام","天"]))a=a.subtract(r,"days");else if(l(e,["week","semana"]))a=a.subtract(r,"week");else if(l(e,["month","mes"]))a=a.subtract(r,"month");else{if(!l(e,["year","año"]))return"Invalid Date"!==(0,s.default)(e).format("LL")?(0,s.default)(e).format("LL"):e;a=a.subtract(r,"year")}return a.format("LL")},this.id=e.id,this.name=e.sourceName,this.icon="multisrc/madara/".concat(e.id.toLowerCase(),"/icon.png"),this.site=e.sourceSite;var a=(null===(t=e.options)||void 0===t?void 0:t.versionIncrements)||0;this.version="1.0.".concat(5+a),this.options=e.options,this.filters=e.filters}return a.prototype.translateDragontea=function(e){var t;if("dragontea"!==this.id)return e;var a=(0,r.load)((null===(t=e.html())||void 0===t?void 0:t.replace("\n","").replace(/<br\s*\/?>/g,"\n"))||"");return e.html(a.html()),e.find("*").addBack().contents().filter((function(e,t){return 3===t.nodeType})).each((function(e,t){var n=a(t),r=n.text().normalize("NFD").split("").map((function(e){var t=e.normalize("NFC"),a="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(t);return a>=0?"zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA"[a]+e.slice(t.length):e})).join("");n.replaceWith(r.replace("\n","<br>"))})),e},a.prototype.getHostname=function(e){var t=(e=e.split("/")[2]).split(".");return t.pop(),t.join(".")},a.prototype.getCheerio=function(a,i){return e(this,void 0,void 0,(function(){var e,o,s,l;return t(this,(function(t){switch(t.label){case 0:return[4,(0,n.fetchApi)(a)];case 1:if(!(e=t.sent()).ok&&1!=i)throw new Error("Could not reach site ("+e.status+") try to open in webview.");return s=r.load,[4,e.text()];case 2:if(o=s.apply(void 0,[t.sent()]),l=o("title").text().trim(),this.getHostname(a)!=this.getHostname(e.url)||"Bot Verification"==l||"You are being redirected..."==l||"Un instant..."==l||"Just a moment..."==l||"Redirecting..."==l)throw new Error("Captcha error, please open in webview");return[2,o]}}))}))},a.prototype.parseNovels=function(e){var t=[];return e(".manga-title-badges").remove(),e(".page-item-detail, .c-tabs-item__content").each((function(a,n){var r=e(n).find(".post-title").text().trim(),o=e(n).find(".post-title").find("a").attr("href")||"";if(r&&o){var s=e(n).find("img"),l={name:r,cover:s.attr("data-src")||s.attr("src")||s.attr("data-lazy-srcset")||i.defaultCover,path:o.replace(/https?:\/\/.*?\//,"/")};t.push(l)}})),t},a.prototype.popularNovels=function(a,n){return e(this,arguments,void 0,(function(e,a){var n,r,i,o,s,l,u=a.filters,c=a.showLatestNovels;return t(this,(function(t){switch(t.label){case 0:for(r in n=this.site+"/page/"+e+"/?s=&post_type=wp-manga",u||(u=this.filters||{}),c&&(n+="&m_orderby=latest"),u)if("object"==typeof u[r].value)for(i=0,o=u[r].value;i<o.length;i++)s=o[i],n+="&".concat(r,"=").concat(s);else u[r].value&&(n+="&".concat(r,"=").concat(u[r].value));return[4,this.getCheerio(n,1!=e)];case 1:return l=t.sent(),[2,this.parseNovels(l)]}}))}))},a.prototype.parseNovel=function(a){return e(this,void 0,void 0,(function(){var e,l,u,c,h,p,d,m,f=this;return t(this,(function(t){switch(t.label){case 0:return[4,this.getCheerio(this.site+a,!1)];case 1:return(e=t.sent())(".manga-title-badges, #manga-title span").remove(),(l={path:a,name:e(".post-title h1").text().trim()||e("#manga-title h1").text().trim()}).cover=e(".summary_image > a > img").attr("data-lazy-src")||e(".summary_image > a > img").attr("data-src")||e(".summary_image > a > img").attr("src")||i.defaultCover,e(".post-content_item, .post-content").each((function(){var t=e(this).find("h5").text().trim(),a=e(this).find(".summary-content");switch(t){case"Genre(s)":case"Genre":case"Tags(s)":case"Tag(s)":case"Tags":case"Género(s)":case"التصنيفات":l.genres?l.genres+=", "+a.find("a").map((function(t,a){return e(a).text()})).get().join(", "):l.genres=a.find("a").map((function(t,a){return e(a).text()})).get().join(", ");break;case"Author(s)":case"Author":case"Autor(es)":case"المؤلف":case"المؤلف (ين)":l.author=a.text().trim();break;case"Status":case"Novel":case"Estado":l.status=a.text().trim().includes("OnGoing")||a.text().trim().includes("مستمرة")?o.NovelStatus.Ongoing:o.NovelStatus.Completed;break;case"Artist(s)":l.artist=a.text().trim()}})),l.author||(l.author=e(".manga-authors").text().trim()),e("div.summary__content .code-block,script,noscript").remove(),l.summary=this.translateDragontea(e("div.summary__content")).text().trim()||e("#tab-manga-about").text().trim()||e('.post-content_item h5:contains("Summary")').next().find("span").map((function(t,a){return e(a).text()})).get().join("\n\n").trim()||e(".manga-summary p").map((function(t,a){return e(a).text()})).get().join("\n\n").trim()||e(".manga-excerpt p").map((function(t,a){return e(a).text()})).get().join("\n\n").trim(),u=[],c="",(null===(m=this.options)||void 0===m?void 0:m.useNewChapterEndpoint)?[4,(0,n.fetchApi)(this.site+a+"ajax/chapters/",{method:"POST",referrer:this.site+a}).then((function(e){return e.text()}))]:[3,3];case 2:return c=t.sent(),[3,5];case 3:return h=e(".rating-post-id").attr("value")||e("#manga-chapters-holder").attr("data-id")||"",(p=new FormData).append("action","manga_get_chapters"),p.append("manga",h),[4,(0,n.fetchApi)(this.site+"wp-admin/admin-ajax.php",{method:"POST",body:p}).then((function(e){return e.text()}))];case 4:c=t.sent(),t.label=5;case 5:return"0"!==c&&(e=(0,r.load)(c)),d=e(".wp-manga-chapter").length,e(".wp-manga-chapter").each((function(t,a){var n=e(a).find("a").text().trim(),r=e(a).find("span.chapter-release-date").text().trim();r=r?f.parseData(r):(0,s.default)().format("LL");var i=e(a).find("a").attr("href")||"";i&&"#"!=i&&u.push({name:n,path:i.replace(/https?:\/\/.*?\//,"/"),releaseTime:r||null,chapterNumber:d-t})})),l.chapters=u.reverse(),[2,l]}}))}))},a.prototype.parseChapter=function(a){return e(this,void 0,void 0,(function(){var e,n,r;return t(this,(function(t){switch(t.label){case 0:return[4,this.getCheerio(this.site+a,!1)];case 1:return e=t.sent(),n=e(".text-left")||e(".text-right")||e(".entry-content")||e(".c-blog-post > div > div:nth-child(2)"),null===(r=this.options)||void 0===r||r.customJs,[2,this.translateDragontea(n).html()||""]}}))}))},a.prototype.searchNovels=function(a,n){return e(this,void 0,void 0,(function(){var e,r;return t(this,(function(t){switch(t.label){case 0:return e=this.site+"/page/"+n+"/?s="+a+"&post_type=wp-manga",[4,this.getCheerio(e,!0)];case 1:return r=t.sent(),[2,this.parseNovels(r)]}}))}))},a}())({id:"wooksteahouse",sourceSite:"https://wooksteahouse.com/",sourceName:"Wook's Teahouse",options:{useNewChapterEndpoint:!0,lang:"English"},filters:{"genre[]":{type:"Checkbox",label:"Genre",value:[],options:[{label:"Adventure",value:"adventure"},{label:"Fantasy",value:"fantasy"},{label:"Historical Fiction",value:"historical-fiction"},{label:"Horror",value:"horror"},{label:"Humor",value:"humor"},{label:"Mystery",value:"mystery"},{label:"Orientation: Hetero/BG",value:"orientation-hetero-bg"},{label:"Orientation: Yaoi/BL",value:"orientation-yaoi-bl"},{label:"Orientation: Yuri/GL",value:"orientation-yuri-gl"},{label:"Origin: China",value:"origin-china"},{label:"Origin: Japan",value:"origin-japan"},{label:"Origin: Korea",value:"origin-korea"},{label:"R18",value:"r18"},{label:"Romance",value:"romance"},{label:"Science Fiction",value:"science-fiction"},{label:"Thriller",value:"thriller"}]},op:{type:"Switch",label:"having all selected genres",value:!1},author:{type:"Text",label:"Author",value:""},artist:{type:"Text",label:"Artist",value:""},release:{type:"Text",label:"Year of Released",value:""},adult:{type:"Picker",label:"Adult content",value:"",options:[{label:"All",value:""},{label:"None adult content",value:"0"},{label:"Only adult content",value:"1"}]},"status[]":{type:"Checkbox",label:"Status",value:[],options:[{label:"OnGoing",value:"on-going"},{label:"Completed",value:"end"},{label:"Canceled",value:"canceled"},{label:"On Hold",value:"on-hold"},{label:"Upcoming",value:"upcoming"}]},m_orderby:{type:"Picker",label:"Order by",value:"",options:[{label:"Relevance",value:""},{label:"Latest",value:"latest"},{label:"A-Z",value:"alphabet"},{label:"Rating",value:"rating"},{label:"Trending",value:"trending"},{label:"Most Views",value:"views"},{label:"New",value:"new-manga"}]}}});exports.default=u;