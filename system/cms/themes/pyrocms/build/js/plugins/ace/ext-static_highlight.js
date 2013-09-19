ace.define("ace/ext/static_highlight",["require","exports","module","ace/edit_session","ace/layer/text","ace/config"],function(e,t,n){var r=e("../edit_session").EditSession,i=e("../layer/text").Text,s=".ace_static_highlight {font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', 'Droid Sans Mono', monospace;font-size: 12px;}.ace_static_highlight .ace_gutter {width: 25px !important;display: block;float: left;text-align: right;padding: 0 3px 0 0;margin-right: 3px;position: static !important;}.ace_static_highlight .ace_line { clear: both; }.ace_static_highlight .ace_gutter-cell {-moz-user-select: -moz-none;-khtml-user-select: none;-webkit-user-select: none;user-select: none;}",o=e("../config");t.render=function(e,n,i,s,u,a){function c(){var r=t.renderSync(e,n,i,s,u);return a?a(r):r}var f=0,l=r.prototype.$modes;return typeof i=="string"&&(f++,o.loadModule(["theme",i],function(e){i=e,--f||c()})),typeof n=="string"&&(f++,o.loadModule(["mode",n],function(e){l[n]||(l[n]=new e.Mode),n=l[n],--f||c()})),f||c()},t.renderSync=function(e,t,n,o,u){o=parseInt(o||1,10);var a=new r("");a.setUseWorker(!1),a.setMode(t);var f=new i(document.createElement("div"));f.setSession(a),f.config={characterWidth:10,lineHeight:20},a.setValue(e);var l=[],c=a.getLength();for(var h=0;h<c;h++)l.push("<div class='ace_line'>"),u||l.push("<span class='ace_gutter ace_gutter-cell' unselectable='on'>"+(h+o)+"</span>"),f.$renderLine(l,h,!0,!1),l.push("</div>");var p="<div class='"+n.cssClass+"'>"+"<div class='ace_static_highlight'>"+l.join("")+"</div>"+"</div>";return f.destroy(),{css:s+n.cssText,html:p}}})