(function(window){var svgSprite='<svg><symbol id="icon-shijian" viewBox="0 0 1024 1024"><path d="M874.179108 149.919291C777.456788 53.255031 648.909794 0 512.10296 0 375.343491 0 246.779689 53.255031 150.097095 149.929986 53.379358 246.635499 0.118216 375.225275 0.118216 512.003079c-0.024446 136.793083 53.195443 265.353829 149.900956 362.11893 96.670371 96.613839 225.246396 149.878037 361.98753 149.878037 136.806834 0 265.42564-53.297812 362.172407-149.978879C1073.767443 674.41297 1073.798001 349.603883 874.179108 149.919291L874.179108 149.919291 874.179108 149.919291zM826.994433 826.827324c-84.130878 84.118655-195.994709 130.492014-314.986203 130.492014-118.90746 0-230.743788-46.350441-314.819662-130.392701C113.111166 742.833957 66.820314 630.993045 66.838649 512.003079c0-118.97316 46.313771-230.826295 130.420203-314.899113 84.094208-84.074346 195.893867-130.372838 314.844108-130.372838 118.954825 0 230.77893 46.296964 314.891473 130.378949C1000.583984 370.74241 1000.583984 653.25458 826.994433 826.827324L826.994433 826.827324 826.994433 826.827324zM733.350836 637.475934l-176.979966-102.351112L556.37087 256.000011c0-23.557196-19.111001-42.666669-42.674308-42.666669-23.544973 0-42.655973 19.109473-42.655973 42.666669l0 298.669736c0 15.826011 19.671741 29.095841 32.467921 36.437411 3.538621 5.329323 13.268303 10.15291 19.199619 13.564716l176.000581 106.673547c20.388327 11.769431 42.495544 4.774694 54.271086-15.619744 11.775542-20.40055 0.811316-46.469617-19.630487-58.245159l0 0L733.349308 637.475934zM733.350836 637.475934"  ></path></symbol><symbol id="icon-shijian1" viewBox="0 0 1024 1024"><path d="M876.419 358.043c-19.923-47.097-48.439-89.392-84.75-125.707-36.316-36.318-78.609-64.831-125.712-84.751-48.773-20.629-100.57-31.091-153.953-31.091-53.383 0-105.183 10.462-153.963 31.091-47.094 19.92-89.391 48.431-125.707 84.751-36.319 36.316-64.83 78.609-84.751 125.707-20.629 48.779-31.091 100.577-31.091 153.963 0 53.38 10.462 105.18 31.091 153.953 19.92 47.103 48.431 89.396 84.751 125.712 36.316 36.313 78.613 64.828 125.707 84.753 48.779 20.625 100.576 31.086 153.963 31.086 53.377 0 105.177-10.46 153.953-31.086 47.103-19.927 89.396-48.441 125.712-84.753 36.313-36.316 64.828-78.609 84.75-125.712 20.629-48.773 31.091-100.57 31.091-153.953 0-53.387-10.462-105.183-31.091-153.963M758.766 758.766c-65.916 65.913-153.55 102.207-246.763 102.207-93.22 0-180.851-36.295-246.766-102.207-65.916-65.916-102.211-153.55-102.211-246.761 0-93.22 36.295-180.854 102.211-246.77 65.913-65.911 153.547-102.211 246.766-102.211 93.214 0 180.846 36.299 246.763 102.211 65.911 65.916 102.208 153.55 102.208 246.77 0 93.212-36.295 180.846-102.208 246.761z"  ></path><path d="M535.267 251.431c-0.145-12.74-10.507-23.011-23.266-23.011s-23.121 10.272-23.267 22.997v249.417c0 1.924 0.242 3.791 0.681 5.583-0.431 1.676-0.679 3.601-0.679 5.583 0 12.849 10.417 23.267 23.267 23.267h260.567c0.001 0 0.002 0 0.004 0 12.846 0 23.259-10.413 23.259-23.259 0-0.003 0-0.005 0-0.007 0-0.003 0-0.007 0-0.007 0-12.846-10.414-23.259-23.259-23.259-0.001 0-0.003 0-0.004 0h-237.303v-237.303z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)