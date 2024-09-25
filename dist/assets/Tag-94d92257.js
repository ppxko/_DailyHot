import{aF as o,bp as e,aJ as r,d as n,B as l,h as a,A as c,f as s,j as t,r as i,u as d,l as h,H as g,I as b,ak as C,c as v,p,z as u,y as k,bq as f,b as m,ao as x,n as y,ap as I,q as P}from"./index-57d6b5c8.js";const z={name:"Tag",common:o,self:function(o){const{textColor2:n,primaryColorHover:l,primaryColorPressed:a,primaryColor:c,infoColor:s,successColor:t,warningColor:i,errorColor:d,baseColor:h,borderColor:g,opacityDisabled:b,tagColor:C,closeIconColor:v,closeIconColorHover:p,closeIconColorPressed:u,borderRadiusSmall:k,fontSizeMini:f,fontSizeTiny:m,fontSizeSmall:x,fontSizeMedium:y,heightMini:I,heightTiny:P,heightSmall:z,heightMedium:S,closeColorHover:B,closeColorPressed:$,buttonColor2Hover:H,buttonColor2Pressed:R,fontWeightStrong:M}=o;return Object.assign(Object.assign({},e),{closeBorderRadius:k,heightTiny:I,heightSmall:P,heightMedium:z,heightLarge:S,borderRadius:k,opacityDisabled:b,fontSizeTiny:f,fontSizeSmall:m,fontSizeMedium:x,fontSizeLarge:y,fontWeightStrong:M,textColorCheckable:n,textColorHoverCheckable:n,textColorPressedCheckable:n,textColorChecked:h,colorCheckable:"#0000",colorHoverCheckable:H,colorPressedCheckable:R,colorChecked:c,colorCheckedHover:l,colorCheckedPressed:a,border:`1px solid ${g}`,textColor:n,color:C,colorBordered:"rgb(250, 250, 252)",closeIconColor:v,closeIconColorHover:p,closeIconColorPressed:u,closeColorHover:B,closeColorPressed:$,borderPrimary:`1px solid ${r(c,{alpha:.3})}`,textColorPrimary:c,colorPrimary:r(c,{alpha:.12}),colorBorderedPrimary:r(c,{alpha:.1}),closeIconColorPrimary:c,closeIconColorHoverPrimary:c,closeIconColorPressedPrimary:c,closeColorHoverPrimary:r(c,{alpha:.12}),closeColorPressedPrimary:r(c,{alpha:.18}),borderInfo:`1px solid ${r(s,{alpha:.3})}`,textColorInfo:s,colorInfo:r(s,{alpha:.12}),colorBorderedInfo:r(s,{alpha:.1}),closeIconColorInfo:s,closeIconColorHoverInfo:s,closeIconColorPressedInfo:s,closeColorHoverInfo:r(s,{alpha:.12}),closeColorPressedInfo:r(s,{alpha:.18}),borderSuccess:`1px solid ${r(t,{alpha:.3})}`,textColorSuccess:t,colorSuccess:r(t,{alpha:.12}),colorBorderedSuccess:r(t,{alpha:.1}),closeIconColorSuccess:t,closeIconColorHoverSuccess:t,closeIconColorPressedSuccess:t,closeColorHoverSuccess:r(t,{alpha:.12}),closeColorPressedSuccess:r(t,{alpha:.18}),borderWarning:`1px solid ${r(i,{alpha:.35})}`,textColorWarning:i,colorWarning:r(i,{alpha:.15}),colorBorderedWarning:r(i,{alpha:.12}),closeIconColorWarning:i,closeIconColorHoverWarning:i,closeIconColorPressedWarning:i,closeColorHoverWarning:r(i,{alpha:.12}),closeColorPressedWarning:r(i,{alpha:.18}),borderError:`1px solid ${r(d,{alpha:.23})}`,textColorError:d,colorError:r(d,{alpha:.1}),colorBorderedError:r(d,{alpha:.08}),closeIconColorError:d,closeIconColorHoverError:d,closeIconColorPressedError:d,closeColorHoverError:r(d,{alpha:.12}),closeColorPressedError:r(d,{alpha:.18})})}},S={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},B=n("tag","\n --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);\n white-space: nowrap;\n position: relative;\n box-sizing: border-box;\n cursor: default;\n display: inline-flex;\n align-items: center;\n flex-wrap: nowrap;\n padding: var(--n-padding);\n border-radius: var(--n-border-radius);\n color: var(--n-text-color);\n background-color: var(--n-color);\n transition: \n border-color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier),\n opacity .3s var(--n-bezier);\n line-height: 1;\n height: var(--n-height);\n font-size: var(--n-font-size);\n",[l("strong","\n font-weight: var(--n-font-weight-strong);\n "),a("border","\n pointer-events: none;\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n border-radius: inherit;\n border: var(--n-border);\n transition: border-color .3s var(--n-bezier);\n "),a("icon","\n display: flex;\n margin: 0 4px 0 0;\n color: var(--n-text-color);\n transition: color .3s var(--n-bezier);\n font-size: var(--n-avatar-size-override);\n "),a("avatar","\n display: flex;\n margin: 0 6px 0 0;\n "),a("close","\n margin: var(--n-close-margin);\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n "),l("round","\n padding: 0 calc(var(--n-height) / 3);\n border-radius: calc(var(--n-height) / 2);\n ",[a("icon","\n margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);\n "),a("avatar","\n margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);\n "),l("closable","\n padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);\n ")]),l("icon, avatar",[l("round","\n padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);\n ")]),l("disabled","\n cursor: not-allowed !important;\n opacity: var(--n-opacity-disabled);\n "),l("checkable","\n cursor: pointer;\n box-shadow: none;\n color: var(--n-text-color-checkable);\n background-color: var(--n-color-checkable);\n ",[c("disabled",[s("&:hover","background-color: var(--n-color-hover-checkable);",[c("checked","color: var(--n-text-color-hover-checkable);")]),s("&:active","background-color: var(--n-color-pressed-checkable);",[c("checked","color: var(--n-text-color-pressed-checkable);")])]),l("checked","\n color: var(--n-text-color-checked);\n background-color: var(--n-color-checked);\n ",[c("disabled",[s("&:hover","background-color: var(--n-color-checked-hover);"),s("&:active","background-color: var(--n-color-checked-pressed);")])])])]),$=Object.assign(Object.assign(Object.assign({},h.props),S),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),H=m("n-tag"),R=t({name:"Tag",props:$,setup(o){const e=i(null),{mergedBorderedRef:r,mergedClsPrefixRef:n,inlineThemeDisabled:l,mergedRtlRef:a}=d(o),c=h("Tag","-tag",B,z,o,n);g(H,{roundRef:b(o,"round")});const s={setTextContent(o){const{value:r}=e;r&&(r.textContent=o)}},t=C("Tag",a,n),u=v((()=>{const{type:e,size:n,color:{color:l,textColor:a}={}}=o,{common:{cubicBezierEaseInOut:s},self:{padding:t,closeMargin:i,borderRadius:d,opacityDisabled:h,textColorCheckable:g,textColorHoverCheckable:b,textColorPressedCheckable:C,textColorChecked:v,colorCheckable:p,colorHoverCheckable:u,colorPressedCheckable:k,colorChecked:f,colorCheckedHover:m,colorCheckedPressed:x,closeBorderRadius:P,fontWeightStrong:z,[y("colorBordered",e)]:S,[y("closeSize",n)]:B,[y("closeIconSize",n)]:$,[y("fontSize",n)]:H,[y("height",n)]:R,[y("color",e)]:M,[y("textColor",e)]:T,[y("border",e)]:E,[y("closeIconColor",e)]:W,[y("closeIconColorHover",e)]:w,[y("closeIconColorPressed",e)]:O,[y("closeColorHover",e)]:_,[y("closeColorPressed",e)]:j}}=c.value,F=I(i);return{"--n-font-weight-strong":z,"--n-avatar-size-override":`calc(${R} - 8px)`,"--n-bezier":s,"--n-border-radius":d,"--n-border":E,"--n-close-icon-size":$,"--n-close-color-pressed":j,"--n-close-color-hover":_,"--n-close-border-radius":P,"--n-close-icon-color":W,"--n-close-icon-color-hover":w,"--n-close-icon-color-pressed":O,"--n-close-icon-color-disabled":W,"--n-close-margin-top":F.top,"--n-close-margin-right":F.right,"--n-close-margin-bottom":F.bottom,"--n-close-margin-left":F.left,"--n-close-size":B,"--n-color":l||(r.value?S:M),"--n-color-checkable":p,"--n-color-checked":f,"--n-color-checked-hover":m,"--n-color-checked-pressed":x,"--n-color-hover-checkable":u,"--n-color-pressed-checkable":k,"--n-font-size":H,"--n-height":R,"--n-opacity-disabled":h,"--n-padding":t,"--n-text-color":a||T,"--n-text-color-checkable":g,"--n-text-color-checked":v,"--n-text-color-hover-checkable":b,"--n-text-color-pressed-checkable":C}})),k=l?p("tag",v((()=>{let e="";const{type:n,size:l,color:{color:a,textColor:c}={}}=o;return e+=n[0],e+=l[0],a&&(e+=`a${P(a)}`),c&&(e+=`b${P(c)}`),r.value&&(e+="c"),e})),u,o):void 0;return Object.assign(Object.assign({},s),{rtlEnabled:t,mergedClsPrefix:n,contentRef:e,mergedBordered:r,handleClick:function(){if(!o.disabled&&o.checkable){const{checked:e,onCheckedChange:r,onUpdateChecked:n,"onUpdate:checked":l}=o;n&&n(!e),l&&l(!e),r&&r(!e)}},handleCloseClick:function(e){if(o.triggerClickOnClose||e.stopPropagation(),!o.disabled){const{onClose:r}=o;r&&x(r,e)}},cssVars:l?void 0:u,themeClass:null==k?void 0:k.themeClass,onRender:null==k?void 0:k.onRender})},render(){var o,e;const{mergedClsPrefix:r,rtlEnabled:n,closable:l,color:{borderColor:a}={},round:c,onRender:s,$slots:t}=this;null==s||s();const i=u(t.avatar,(o=>o&&k("div",{class:`${r}-tag__avatar`},o))),d=u(t.icon,(o=>o&&k("div",{class:`${r}-tag__icon`},o)));return k("div",{class:[`${r}-tag`,this.themeClass,{[`${r}-tag--rtl`]:n,[`${r}-tag--strong`]:this.strong,[`${r}-tag--disabled`]:this.disabled,[`${r}-tag--checkable`]:this.checkable,[`${r}-tag--checked`]:this.checkable&&this.checked,[`${r}-tag--round`]:c,[`${r}-tag--avatar`]:i,[`${r}-tag--icon`]:d,[`${r}-tag--closable`]:l}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},d||i,k("span",{class:`${r}-tag__content`,ref:"contentRef"},null===(e=(o=this.$slots).default)||void 0===e?void 0:e.call(o)),!this.checkable&&l?k(f,{clsPrefix:r,class:`${r}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:c,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?k("div",{class:`${r}-tag__border`,style:{borderColor:a}}):null)}});export{R as _,H as t};
