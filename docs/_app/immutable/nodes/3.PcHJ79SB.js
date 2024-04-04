import{s as $}from"../chunks/scheduler.S4wXxuDW.js";import{S as C,i as E,s as u,e as x,t as B,p as S,h as H,d as l,c as j,a as f,f as P,n as z,g as y,q as D,b as p,l as W,r as A,u as F,v as G,w as I}from"../chunks/index.AEfH55ke.js";import{E as J}from"../chunks/Example.5uh9tBjF.js";const w={html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;browser&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;browser-bar&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;browser-bar-dot&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;browser-bar-dot&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;browser-bar-dot&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;browser-bar-close&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;browser-content&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,css:`<span class="hljs-selector-class">.box</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">200px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">200px</span>;
}

<span class="hljs-selector-class">.browser</span> {
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">10px</span>;
    <span class="hljs-attr">--shadow-offset</span>: <span class="hljs-number">14px</span>;
    <span class="hljs-attribute">box-shadow</span>: <span class="hljs-built_in">var</span>(--shadow-offset) <span class="hljs-built_in">var</span>(--shadow-offset) <span class="hljs-number">0</span> <span class="hljs-number">#ff8ac5</span>;
}

<span class="hljs-selector-class">.browser-bar</span> {
    <span class="hljs-attribute">align-items</span>: center;
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#ff9aa2</span>;
    <span class="hljs-attribute">border-left</span>: <span class="hljs-number">3px</span> solid <span class="hljs-number">#000</span>;
    <span class="hljs-attribute">border-right</span>: <span class="hljs-number">3px</span> solid <span class="hljs-number">#000</span>;
    <span class="hljs-attribute">border-top</span>: <span class="hljs-number">3px</span> solid <span class="hljs-number">#000</span>;
    <span class="hljs-attribute">border-top-left-radius</span>: <span class="hljs-number">10px</span>;
    <span class="hljs-attribute">border-top-right-radius</span>: <span class="hljs-number">10px</span>;
    <span class="hljs-attribute">display</span>: flex;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">50px</span>;
    <span class="hljs-attribute">padding-left</span>: <span class="hljs-number">16px</span>;
    <span class="hljs-attribute">padding-right</span>: <span class="hljs-number">16px</span>;
}

<span class="hljs-selector-class">.browser-content</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#321c64</span>;
    <span class="hljs-attribute">border</span>: <span class="hljs-number">3px</span> solid <span class="hljs-number">#000</span>;
    <span class="hljs-attribute">border-bottom-left-radius</span>: <span class="hljs-number">10px</span>;
    <span class="hljs-attribute">border-bottom-right-radius</span>: <span class="hljs-number">10px</span>;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">32px</span>;
}

<span class="hljs-selector-class">.browser-bar-dot</span>+<span class="hljs-selector-class">.browser-bar-dot</span> {
    <span class="hljs-attribute">margin-left</span>: <span class="hljs-number">16px</span>;
}

<span class="hljs-selector-class">.browser-bar-dot</span> {
    <span class="hljs-attribute">border</span>: <span class="hljs-number">3px</span> solid <span class="hljs-number">#000</span>;
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">50%</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">15px</span>;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">15px</span>;
}

<span class="hljs-selector-class">.browser-bar-close</span> {
    <span class="hljs-attribute">height</span>: <span class="hljs-number">22.5px</span>;
    <span class="hljs-attribute">margin-left</span>: auto;
    <span class="hljs-attribute">position</span>: relative;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">15px</span>;
}

<span class="hljs-selector-class">.browser-bar-close</span><span class="hljs-selector-pseudo">::before</span> {
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">rotate</span>(<span class="hljs-number">45deg</span>);
}

<span class="hljs-selector-class">.browser-bar-close</span><span class="hljs-selector-pseudo">::after</span> {
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">rotate</span>(-<span class="hljs-number">45deg</span>);
}

<span class="hljs-selector-class">.browser-bar-close</span><span class="hljs-selector-pseudo">::after</span>,
<span class="hljs-selector-class">.browser-bar-close</span><span class="hljs-selector-pseudo">::before</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#000</span>;
    <span class="hljs-attribute">content</span>: <span class="hljs-string">&quot;&quot;</span>;
    <span class="hljs-attribute">display</span>: block;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">22.5px</span>;
    <span class="hljs-attribute">position</span>: absolute;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">3px</span>;
}
`,srcdoc:`
    <html>
        <head>
            <link rel="stylesheet" href="/example.css">
            <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
            <style>.box {
    width: 200px;
    height: 200px;
}

.browser {
    border-radius: 10px;
    --shadow-offset: 14px;
    box-shadow: var(--shadow-offset) var(--shadow-offset) 0 #ff8ac5;
}

.browser-bar {
    align-items: center;
    background-color: #ff9aa2;
    border-left: 3px solid #000;
    border-right: 3px solid #000;
    border-top: 3px solid #000;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    height: 50px;
    padding-left: 16px;
    padding-right: 16px;
}

.browser-content {
    background-color: #321c64;
    border: 3px solid #000;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 32px;
}

.browser-bar-dot+.browser-bar-dot {
    margin-left: 16px;
}

.browser-bar-dot {
    border: 3px solid #000;
    border-radius: 50%;
    height: 15px;
    width: 15px;
}

.browser-bar-close {
    height: 22.5px;
    margin-left: auto;
    position: relative;
    width: 15px;
}

.browser-bar-close::before {
    transform: rotate(45deg);
}

.browser-bar-close::after {
    transform: rotate(-45deg);
}

.browser-bar-close::after,
.browser-bar-close::before {
    background-color: #000;
    content: "";
    display: block;
    height: 22.5px;
    position: absolute;
    width: 3px;
}
</style>
        </head>
        <body>
            <div class="browser">
    <div class="browser-bar">
        <div class="browser-bar-dot"></div>
        <div class="browser-bar-dot"></div>
        <div class="browser-bar-dot"></div>

        <div class="browser-bar-close"></div>
    </div>
    <div class="browser-content">
        <div class="box"></div>
    </div>
</div>

        </body>
    </html>`};function K(k){let r,h,o,g,i,t,v="Browser is used to illustrate a browser window, but can be used as a container for elements.",b,n,_="Basic",d,e,c;return document.title=r=m,e=new J({props:{html:w.html,css:w.css,srcdoc:w.srcdoc}}),{c(){h=u(),o=x("h1"),g=B(m),i=u(),t=x("p"),t.textContent=v,b=u(),n=x("h2"),n.textContent=_,d=u(),S(e.$$.fragment)},l(s){H("svelte-1ci1mfp",document.head).forEach(l),h=j(s),o=f(s,"H1",{});var q=P(o);g=z(q,m),q.forEach(l),i=j(s),t=f(s,"P",{"data-svelte-h":!0}),y(t)!=="svelte-oyz96b"&&(t.textContent=v),b=j(s),n=f(s,"H2",{"data-svelte-h":!0}),y(n)!=="svelte-1dusnn0"&&(n.textContent=_),d=j(s),D(e.$$.fragment,s)},m(s,a){p(s,h,a),p(s,o,a),W(o,g),p(s,i,a),p(s,t,a),p(s,b,a),p(s,n,a),p(s,d,a),A(e,s,a),c=!0},p(s,[a]){(!c||a&0)&&r!==(r=m)&&(document.title=r)},i(s){c||(F(e.$$.fragment,s),c=!0)},o(s){G(e.$$.fragment,s),c=!1},d(s){s&&(l(h),l(o),l(i),l(t),l(b),l(n),l(d)),I(e,s)}}}const L={title:"Browsers"},{title:m}=L;class Q extends C{constructor(r){super(),E(this,r,null,K,$,{})}}export{Q as component};
