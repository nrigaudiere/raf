!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e():"function"==typeof define&&define.amd?define(e):e()}(0,function(){function t(t,e,n){void 0===n&&(n=!0),this._stopped=!n,this._remainder=0,this._delay=0|t,this._remainingTime=t,this._callback=void 0===e?function(){}:e;var i=this.restart,o=this;this.restart=function(t,e){i.call(o,t,e)},0===this._delay&&(this._stopped=!0)}t.prototype.setCallback=function(t,e){this._callback=void 0===t?function(){}:t,e&&this.restart(e)},t.prototype.stop=function(){this._stopped=!0},t.prototype.start=function(){this._stopped&&this.restart()},t.prototype.restart=function(t,e){void 0===e&&(e=!0),void 0!==t&&(this._delay=t),this._stopped=!1,this._remainingTime=this._delay-this._remainder*+e},t.prototype.update=function(t){this._stopped||(this._remainingTime-=t,this._remainingTime<=0?(this._stopped=!0,this._remainder=-this._remainingTime%this._delay,this._callback(this.restart)):this._remainder=0)},t.prototype.dispose=function(){this._callback=this.restart=function(){},this._stopped=!0,this._remainder=0,this._remainingTime=this._delay};var e,n,i="undefined"==typeof window?global:window,o=[],r=[],a=[],s=null,u=null,f=!1,c=!1;function l(t){var d;if(void 0===t&&(t=0),null===u&&(u=t),e+=n=t-u,u=t,s=f?null:i.requestAnimationFrame(l),f&&(f=!1),c){for(d=0;d<a.length;d++)a[d](n);for(d=0;d<o.length;d++)o[d](n);for(d=0;d<r.length;d++)r[d](n)}else for(d=0;d<o.length;d++)o[d](n)}function d(){c=!!(r.length>0||a.length>0)}function h(t,e,n){return!(!e||!t)&&(!~t.indexOf(e)&&((n=!!n)?t.unshift(e):t.push(e),!0))}function p(t,e){if(!e)return!1;var n=t.indexOf(e);return!!~n&&(t.splice(n,1),!(0!==t.length))}function m(t){f=!1,s||(u=null,(t=!!t)?l():s=i.requestAnimationFrame(l))}function _(){s&&(i.cancelAnimationFrame(s),s=null)}var v={add:function(t,e){h(o,t,e)&&m()},addAfter:function(t,e){h(r,t,e)&&d()},addBefore:function(t,e){h(a,t,e)&&d()},remove:function(t){p(o,t)&&_()},removeAfter:function(t,e){p(r,t)&&d()},removeBefore:function(t){p(a,t)&&d()},start:m,stop:_,time:e,dt:n,requestOnce:function(){s||(f=!0,u=null,s=i.requestAnimationFrame(l))},dispose:function(){_(),o.length=0,r.length=0,a.length=0,c=!1,u=null,e=0,n=0}};function g(t,e,n){void 0===n&&(n=!1),t.innerHTML=(n?"":t.innerHTML)+e+"\n"}var y,q,b=[];!function(){var t=document.querySelector("pre.log");v.addBefore(function e(n){g(t,"addBefore & requestOnce"),v.removeBefore(e),b.forEach(v.add)}),v.requestOnce()}(),function(){var t=document.querySelector("pre.raf");b.push(function(e){g(t,"Deltatime: "+e+"ms",!0)})}(),y=document.querySelector("pre.fpslimiter"),q=!0,b.push(function(t,e){if(void 0===e)throw new Error("You must specify a callback");void 0===t&&(t=30);var n=1e3/t,i=0,o=0;return function(t){o+=t,(i-=t)<=0&&(e(o),o=0,i=n+i%n)}}(1,function(){g(y,(q?"—> Ping!":"<— Pong!")+" (1fps framerate)",!0),console.log("ok"),q=!q})),function(){var e=document.querySelector("pre.raftimer");g(e,"Next call in 1000ms");var n=new t(1e3,function(t){var n=4e3*(Math.random()-.5)+2e3|0;g(e,"Called — Next call in "+n+"ms",!0),t(n)});b.push(function(t){return n.update(t)})}()});
//# sourceMappingURL=raf.umd.js.map