import{s as I}from"../chunks/scheduler.S4wXxuDW.js";import{S as J,i as K,s as i,e as y,t as L,p as _,h as M,d as l,c as d,a as k,f as N,n as O,g as F,q as $,b as n,l as Q,r as q,u as C,v as S,w as E}from"../chunks/index.AEfH55ke.js";import{E as D}from"../chunks/Example.5uh9tBjF.js";const W={html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;container&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box shadow border&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box shadow border medium&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box shadow border large&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,css:`<span class="hljs-selector-class">.shadow</span> {
    <span class="hljs-attribute">box-shadow</span>: <span class="hljs-built_in">var</span>(--shadow-offset) <span class="hljs-built_in">var</span>(--shadow-offset) <span class="hljs-number">0</span> <span class="hljs-number">#000</span>;
    <span class="hljs-attr">--shadow-offset</span>: <span class="hljs-number">4px</span>;
}

<span class="hljs-selector-class">.shadow</span><span class="hljs-selector-class">.medium</span> {
    <span class="hljs-attr">--shadow-offset</span>: <span class="hljs-number">8px</span>;
}

<span class="hljs-selector-class">.shadow</span><span class="hljs-selector-class">.large</span> {
    <span class="hljs-attr">--shadow-offset</span>: <span class="hljs-number">14px</span>;
}

<span class="hljs-selector-class">.border</span> {
    <span class="hljs-attribute">border</span>: <span class="hljs-number">2px</span> solid <span class="hljs-built_in">rgb</span>(<span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span>);
}

<span class="hljs-selector-class">.border</span><span class="hljs-selector-class">.large</span> {
    <span class="hljs-attribute">border</span>: <span class="hljs-number">3px</span> solid <span class="hljs-built_in">rgb</span>(<span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span>);
}

<span class="hljs-selector-class">.hoverable</span> {
    
    }

<span class="hljs-selector-class">.box</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;
}
<span class="hljs-selector-class">.box</span><span class="hljs-selector-class">.medium</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">200px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">150px</span>;
}
<span class="hljs-selector-class">.box</span><span class="hljs-selector-class">.large</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">500px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">200px</span>;
}
<span class="hljs-selector-class">.container</span> {
    <span class="hljs-attribute">display</span>: flex;
    <span class="hljs-attribute">gap</span>: <span class="hljs-number">2rem</span>;;
}

<span class="hljs-selector-pseudo">:root</span> {
    <span class="hljs-attr">--tw-ring-offset-shadow</span>: <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">#0000</span>;
    <span class="hljs-attr">--tw-ring-shadow</span>: <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">#0000</span>;
    <span class="hljs-attr">--tw-shadow</span>: <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">#0000</span>;
    <span class="hljs-attr">--tw-shadow-colored</span>: <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">#0000</span>;
    <span class="hljs-attr">--shadow-offset</span>: <span class="hljs-number">4px</span>;
}
`,srcdoc:`
    <html>
        <head>
            <link rel="stylesheet" href="/example.css">
            <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
            <style>.shadow {
    box-shadow: var(--shadow-offset) var(--shadow-offset) 0 #000;
    --shadow-offset: 4px;
}

.shadow.medium {
    --shadow-offset: 8px;
}

.shadow.large {
    --shadow-offset: 14px;
}

.border {
    border: 2px solid rgb(0 0 0);
}

.border.large {
    border: 3px solid rgb(0 0 0);
}

.hoverable {
    
    }

.box {
    width: 100px;
    height: 100px;
}
.box.medium {
    width: 200px;
    height: 150px;
}
.box.large {
    width: 500px;
    height: 200px;
}
.container {
    display: flex;
    gap: 2rem;;
}

:root {
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --shadow-offset: 4px;
}
</style>
        </head>
        <body>
            <div class="container">
    <div class="box shadow border"></div>
    <div class="box shadow border medium"></div>
    <div class="box shadow border large"></div>
</div>

        </body>
    </html>`},H={html:`<span class="hljs-tag">&lt;<span class="hljs-name">section</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;background&quot;</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>
`,css:`<span class="hljs-selector-tag">section</span> {
    <span class="hljs-attribute">height</span>: <span class="hljs-number">300px</span>;
}

<span class="hljs-selector-class">.background</span> {
    <span class="hljs-attribute">background</span>: <span class="hljs-number">#e7dfff</span> bottom/cover no-repeat <span class="hljs-built_in">url</span>(<span class="hljs-string">&quot;/hole.svg&quot;</span>); 
    <span class="hljs-attribute">background-attachment</span>: fixed;
}
`,srcdoc:`
    <html>
        <head>
            <link rel="stylesheet" href="/example.css">
            <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
            <style>section {
    height: 300px;
}

.background {
    background: #e7dfff bottom/cover no-repeat url("/hole.svg"); 
    background-attachment: fixed;
}
</style>
        </head>
        <body>
            <section class="background">
</section>

        </body>
    </html>`},P={html:`<span class="hljs-tag">&lt;<span class="hljs-name">section</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;section&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;card clickable&quot;</span>&gt;</span>Click me<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>
`,css:`<span class="hljs-selector-class">.card</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#fff</span>;
    <span class="hljs-attribute">border</span>: <span class="hljs-number">3px</span> solid <span class="hljs-number">#000</span>;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">24px</span>;
    <span class="hljs-attribute">box-shadow</span>: <span class="hljs-built_in">var</span>(--shadow-offset) <span class="hljs-built_in">var</span>(--shadow-offset) <span class="hljs-number">0</span> <span class="hljs-built_in">var</span>(--shadow-color, <span class="hljs-number">#000</span>);

    <span class="hljs-attribute">max-width</span>: <span class="hljs-number">500px</span>;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> auto;
}

<span class="hljs-selector-class">.section</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">var</span>(--background-color, <span class="hljs-number">#d1ffee</span>);
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">64px</span> <span class="hljs-number">24px</span>;
}

<span class="hljs-selector-tag">body</span> {
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span>;
}

<span class="hljs-selector-class">.clickable</span> {
    <span class="hljs-attribute">cursor</span>: pointer;
    <span class="hljs-attribute">transition</span>: all <span class="hljs-number">0.14s</span> ease-out;
}

<span class="hljs-selector-class">.clickable</span><span class="hljs-selector-pseudo">:hover</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">rgb</span>(<span class="hljs-number">255</span>, <span class="hljs-number">144</span>, <span class="hljs-number">232</span>);
    <span class="hljs-attribute">color</span>: <span class="hljs-built_in">rgb</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>);
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate</span>(<span class="hljs-built_in">var</span>(--translate-xy), <span class="hljs-built_in">var</span>(--translate-xy));
    <span class="hljs-attribute">box-shadow</span>: <span class="hljs-built_in">var</span>(--shadow-offset) <span class="hljs-built_in">var</span>(--shadow-offset) <span class="hljs-number">0</span> <span class="hljs-built_in">var</span>(--shadow-color, <span class="hljs-number">#000</span>);
}

<span class="hljs-selector-class">.clickable</span><span class="hljs-selector-pseudo">:hover</span><span class="hljs-selector-pseudo">:not</span>(<span class="hljs-selector-pseudo">:active</span>) {
    <span class="hljs-attr">--shadow-offset</span>: <span class="hljs-number">18px</span>;
    <span class="hljs-attr">--translate-xy</span>: -<span class="hljs-number">4px</span>;
}

<span class="hljs-selector-class">.clickable</span><span class="hljs-selector-pseudo">:active</span> {
    <span class="hljs-attr">--shadow-offset</span>: <span class="hljs-number">10px</span>;
    <span class="hljs-attr">--translate-xy</span>: <span class="hljs-number">4px</span>;
}

<span class="hljs-selector-pseudo">:root</span> {
    <span class="hljs-attr">--shadow-color</span>: <span class="hljs-number">#2ac3a2</span>;
    <span class="hljs-attr">--shadow-offset</span>: <span class="hljs-number">14px</span>;
}
`,srcdoc:`
    <html>
        <head>
            <link rel="stylesheet" href="/example.css">
            <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
            <style>.card {
    background-color: #fff;
    border: 3px solid #000;
    padding: 24px;
    box-shadow: var(--shadow-offset) var(--shadow-offset) 0 var(--shadow-color, #000);

    max-width: 500px;
    margin: 0 auto;
}

.section {
    background-color: var(--background-color, #d1ffee);
    padding: 64px 24px;
}

body {
    padding: 0;
}

.clickable {
    cursor: pointer;
    transition: all 0.14s ease-out;
}

.clickable:hover {
    background-color: rgb(255, 144, 232);
    color: rgb(0, 0, 0);
    transform: translate(var(--translate-xy), var(--translate-xy));
    box-shadow: var(--shadow-offset) var(--shadow-offset) 0 var(--shadow-color, #000);
}

.clickable:hover:not(:active) {
    --shadow-offset: 18px;
    --translate-xy: -4px;
}

.clickable:active {
    --shadow-offset: 10px;
    --translate-xy: 4px;
}

:root {
    --shadow-color: #2ac3a2;
    --shadow-offset: 14px;
}
</style>
        </head>
        <body>
            <section class="section">
    <div class="card clickable">Click me</div>
</section>

        </body>
    </html>`};function R(G){let o,b,h,v,u,t,z="Common CSS styles to style own components.",m,p,A="Shadows",f,e,g,c,x,r,j;return document.title=o=w,e=new D({props:{html:W.html,css:W.css,srcdoc:W.srcdoc}}),c=new D({props:{html:H.html,css:H.css,srcdoc:H.srcdoc}}),r=new D({props:{html:P.html,css:P.css,srcdoc:P.srcdoc}}),{c(){b=i(),h=y("h1"),v=L(w),u=i(),t=y("p"),t.textContent=z,m=i(),p=y("h2"),p.textContent=A,f=i(),_(e.$$.fragment),g=i(),_(c.$$.fragment),x=i(),_(r.$$.fragment)},l(s){M("svelte-1ci1mfp",document.head).forEach(l),b=d(s),h=k(s,"H1",{});var B=N(h);v=O(B,w),B.forEach(l),u=d(s),t=k(s,"P",{"data-svelte-h":!0}),F(t)!=="svelte-1bsbexi"&&(t.textContent=z),m=d(s),p=k(s,"H2",{"data-svelte-h":!0}),F(p)!=="svelte-l73yxd"&&(p.textContent=A),f=d(s),$(e.$$.fragment,s),g=d(s),$(c.$$.fragment,s),x=d(s),$(r.$$.fragment,s)},m(s,a){n(s,b,a),n(s,h,a),Q(h,v),n(s,u,a),n(s,t,a),n(s,m,a),n(s,p,a),n(s,f,a),q(e,s,a),n(s,g,a),q(c,s,a),n(s,x,a),q(r,s,a),j=!0},p(s,[a]){(!j||a&0)&&o!==(o=w)&&(document.title=o)},i(s){j||(C(e.$$.fragment,s),C(c.$$.fragment,s),C(r.$$.fragment,s),j=!0)},o(s){S(e.$$.fragment,s),S(c.$$.fragment,s),S(r.$$.fragment,s),j=!1},d(s){s&&(l(b),l(h),l(u),l(t),l(m),l(p),l(f),l(g),l(x)),E(e,s),E(c,s),E(r,s)}}}const T={title:"Elements"},{title:w}=T;class Y extends J{constructor(o){super(),K(this,o,null,R,I,{})}}export{Y as component};
