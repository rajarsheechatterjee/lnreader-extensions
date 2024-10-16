var e=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function i(e){try{u(n.next(e))}catch(e){o(e)}}function s(e){try{u(n.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,s)}u((n=n.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(u){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(i=0)),i;)try{if(r=1,n&&(a=2&s[0]?n.return:s[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,s[1])).done)return a;switch(n=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,n=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){i.label=s[1];break}if(6===s[0]&&i.label<a[1]){i.label=a[1],a=s;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(s);break}a[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],n=0}finally{r=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("@libs/fetch"),n=require("@libs/filterInputs"),a=function(){function a(){this.id="genesistudio",this.name="Genesis",this.icon="src/en/genesis/icon.png",this.customCSS="src/en/genesis/customCSS.css",this.site="https://genesistudio.com",this.version="1.0.5",this.imageRequestInit={headers:{referrer:this.site}},this.filters={sort:{label:"Sort Results By",value:"sort=Popular",options:[{label:"Popular",value:"sort=Popular"},{label:"Recent",value:"sort=Recent"},{label:"Views",value:"sort=Views"}],type:n.FilterTypes.Picker},storyStatus:{label:"Status",value:"serialization=All",options:[{label:"All",value:"serialization=All"},{label:"Ongoing",value:"serialization=Ongoing"},{label:"Completed",value:"serialization=Completed"}],type:n.FilterTypes.Picker},genres:{label:"Genres",value:[],options:[{label:"Action",value:"genres=Action"},{label:"Comedy",value:"genres=Comedy"},{label:"Drama",value:"genres=Drama"},{label:"Fantasy",value:"genres=Fantasy"},{label:"Harem",value:"genres=Harem"},{label:"Martial Arts",value:"genres=Martial+Arts"},{label:"Modern",value:"genres=Modern"},{label:"Mystery",value:"genres=Mystery"},{label:"Psychological",value:"genres=Psychological"},{label:"Romance",value:"genres=Romance"},{label:"Slice of life",value:"genres=Slice+of+Life"},{label:"Tragedy",value:"genres=Tragedy"}],type:n.FilterTypes.CheckboxGroup}}}return a.prototype.parseNovels=function(r){return e(this,void 0,void 0,(function(){return t(this,(function(e){return[2,r.map((function(e){return{name:e.novel_title,path:"/novels/".concat(e.abbreviation),cover:e.cover}}))]}))}))},a.prototype.popularNovels=function(n,a){return e(this,arguments,void 0,(function(e,n){var a,o,i=n.showLatestNovels,s=n.filters;return t(this,(function(t){switch(t.label){case 0:return 1!==e?[2,[]]:(a="".concat(this.site,"/api/search?"),i?a+="sort=Recent":(s.genres.value&&(a+=s.genres.value),a+="&".concat(s.storyStatus.value,"&").concat(s.sort.value)),[4,(0,r.fetchApi)(a).then((function(e){return e.json()}))]);case 1:return o=t.sent(),[2,this.parseNovels(o)]}}))}))},a.prototype.parseNovel=function(n){return e(this,void 0,void 0,(function(){var e,a,o,i,s;return t(this,(function(t){switch(t.label){case 0:return e="".concat(this.site).concat(n,"/__data.json?x-sveltekit-invalidated=001"),[4,(0,r.fetchApi)(e).then((function(e){return e.json()}))];case 1:return a=t.sent(),o=a.nodes,i=this.extractNovelData(o),s={path:n,name:"",cover:"",summary:"",author:"",status:"Unknown",chapters:[]},this.populateNovelMetadata(s,i),s.chapters=this.extractChapters(i),[2,s]}}))}))},a.prototype.extractNovelData=function(e){return e.filter((function(e){return"data"===e.type})).map((function(e){return e.data}))[0]},a.prototype.populateNovelMetadata=function(e,t){for(var r in t){var n=t[r];if("object"==typeof n&&null!==n&&"novel_title"in n){e.name=t[n.novel_title]||"Unknown Title",e.cover=t[n.cover]||"",e.summary=t[n.synopsis]||"",e.author=t[n.author]||"Unknown Author",e.genres=t[n.genres].map((function(e){return t[e]})).join(", ")||"Unknown Genre",e.status=n.release_days?"Ongoing":"Completed";break}}},a.prototype.extractChapters=function(e){var t=this;for(var r in e){var n=e[r],a="chapters";if("object"==typeof n&&null!==n&&a in n){var o=this.decodeData(e[n[a]]);return Object.values(o).flatMap((function(e){return e.map((function(e){return t.formatChapter(e)})).filter((function(e){return null!==e}))}))}}return[]},a.prototype.formatChapter=function(e){var t=e.id,r=e.chapter_title,n=e.chapter_number,a=e.required_tier,o=e.date_created;if(t&&r&&n&&null!==a&&o){var i=parseInt(n,10)||0;if(0===(parseInt(a,10)||0))return{name:"Chapter ".concat(i,": ").concat(r),path:"/viewer/".concat(t),releaseTime:o,chapterNumber:i}}return null},a.prototype.decodeData=function(e){for(var t=this.getOffsetIndex(e),r=this.getDecodeParams(e),n=this.getConstant(e),a=this.getStringsArrayRaw(e),o=function(e){return a[e-t]};;)try{if(this.applyDecodeParams(r,o)===n)break;a.push(a.shift())}catch(e){a.push(a.shift())}return this.getChapterData(e,o)},a.prototype.getOffsetIndex=function(e){var t=/{(\w+)=\1-0x(?<offset>[0-9a-f]+);/.exec(e).groups.offset;return parseInt(t,16)},a.prototype.getStringsArrayRaw=function(e){var t=/function \w+\(\){var \w+=(?<array>\['.+']);/.exec(e).groups.array;return t=t.replace(/'(.+?)'([,\]])/g,(function(e,t,r){return'"'.concat(t.replace(/\\x([0-9a-z]{2})/g,(function(e,t){return String.fromCharCode(parseInt(t,16))})),'"').concat(r)})),JSON.parse(t)},a.prototype.getDecodeParams=function(e){for(var t=[],r=0,n=/while\(!!\[]\){try{var \w+=(?<code>.+?);/.exec(e).groups.code.split("+");r<n.length;r++){var a=n[r];t.push(this.decodeParamSection(a))}return t},a.prototype.decodeParamSection=function(e){for(var t=[],r=0,n=e.split("*");r<n.length;r++){var a=n[r],o=/parseInt\(\w+\(0x(?<offset>[0-9a-f]+)\)\)/.exec(a).groups.offset,i=parseInt(o,16),s=/\/0x(?<divider>[0-9a-f]+)/.exec(a).groups.divider,u=parseInt(s,16),l=a.includes("-");t.push({offset:i,divider:u,negated:l})}return t},a.prototype.getConstant=function(e){var t=/}}}\(\w+,0x(?<constant>[0-9a-f]+)\),/.exec(e).groups.constant;return parseInt(t,16)},a.prototype.getChapterData=function(e,t){var r=/\),\(function\(\){var \w+=\w+;return(?<data>{.+?});/.exec(e).groups.data;return r=(r=(r=(r=r.replace(/:0x([0-9a-f]+)/g,(function(e,t){var r=parseInt(t,16);return": ".concat(r)}))).replace(/:!!\[]/g,":true").replace(/:!\[]/g,":false")).replace(/'(.+?)'([,\]}:])/g,(function(e,t,r){return'"'.concat(t.replace(/\\x([0-9a-z]{2})/g,(function(e,t){return String.fromCharCode(parseInt(t,16))})),'"').concat(r)}))).replace(/:\w+\(0x(?<offset>[0-9a-f]+)\)/g,(function(e,r){var n=parseInt(r,16);return":".concat(JSON.stringify(t(n)))})),JSON.parse(r)},a.prototype.applyDecodeParams=function(e,t){for(var r=0,n=0,a=e;n<a.length;n++){for(var o=1,i=0,s=a[n];i<s.length;i++){var u=s[i];o*=parseInt(t(u.offset))/u.divider,u.negated&&(o*=-1)}r+=o}return r},a.prototype.parseChapter=function(n){return e(this,void 0,void 0,(function(){var e,a,o,i,s,u,l;return t(this,(function(t){switch(t.label){case 0:return e="".concat(this.site).concat(n,"/__data.json?x-sveltekit-invalidated=001"),[4,(0,r.fetchApi)(e).then((function(e){return e.json()}))];case 1:return a=t.sent(),o=a.nodes,i=o.filter((function(e){return"data"===e.type})).map((function(e){return e.data}))[0],s=null!==(l=i[i[0].gs])&&void 0!==l?l:i[19],u=i[i[0].footnotes],[2,s+(null!=u?u:"")]}}))}))},a.prototype.searchNovels=function(n,a){return e(this,void 0,void 0,(function(){var e,o;return t(this,(function(t){switch(t.label){case 0:return 1!==a?[2,[]]:(e="".concat(this.site,"/api/search?serialization=All&sort=Popular&title=").concat(n),[4,(0,r.fetchApi)(e).then((function(e){return e.json()}))]);case 1:return o=t.sent(),[2,this.parseNovels(o)]}}))}))},a}();exports.default=new a;