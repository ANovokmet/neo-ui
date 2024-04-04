import{s as y}from"../chunks/scheduler.S4wXxuDW.js";import{S as $,i as k,s as b,e as _,t as w,p as C,h as q,d as l,c as j,a as x,f as E,n as S,g as z,q as B,b as c,l as H,r as D,u as P,v as W,w as A}from"../chunks/index.AEfH55ke.js";import{E as F}from"../chunks/Example.5uh9tBjF.js";const d={html:`<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>Click me<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
`,css:`<span class="hljs-selector-class">.button</span> {
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">1rem</span>;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">1.5</span>;
    <span class="hljs-attribute">padding</span>: .<span class="hljs-number">75rem</span> <span class="hljs-number">1rem</span>;
    <span class="hljs-attribute">border</span>: solid <span class="hljs-number">1px</span> <span class="hljs-built_in">rgb</span>(<span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span>);
    <span class="hljs-attribute">border-radius</span>: .<span class="hljs-number">25rem</span>;
    <span class="hljs-attribute">display</span>: inline-flex;
    <span class="hljs-attribute">align-items</span>: center;
    <span class="hljs-attribute">justify-content</span>: center;
    <span class="hljs-attribute">cursor</span>: pointer;
    <span class="hljs-attribute">text-decoration</span>: none;
    <span class="hljs-attribute">transition</span>: all <span class="hljs-number">0.14s</span> ease-out;
    <span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">rgb</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>);
    <span class="hljs-attribute">color</span>: <span class="hljs-built_in">rgb</span>(<span class="hljs-number">255</span>, <span class="hljs-number">255</span>, <span class="hljs-number">255</span>);
}

<span class="hljs-selector-class">.button</span><span class="hljs-selector-pseudo">:hover</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">rgb</span>(<span class="hljs-number">255</span>, <span class="hljs-number">144</span>, <span class="hljs-number">232</span>);
    <span class="hljs-attribute">color</span>: <span class="hljs-built_in">rgb</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>);
}

<span class="hljs-selector-class">.button</span><span class="hljs-selector-pseudo">:hover</span><span class="hljs-selector-pseudo">:not</span>(<span class="hljs-selector-pseudo">:active</span>) {
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate</span>(-<span class="hljs-number">0.25rem</span>, -<span class="hljs-number">0.25rem</span>);
    <span class="hljs-attribute">box-shadow</span>: .<span class="hljs-number">25rem</span> .<span class="hljs-number">25rem</span> <span class="hljs-number">0rem</span> <span class="hljs-built_in">rgb</span>(<span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span>);
}
`,srcdoc:`
    <html>
        <head>
            <link rel="stylesheet" href="/example.css">
            <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
            <style>.button {
    font-size: 1rem;
    line-height: 1.5;
    padding: .75rem 1rem;
    border: solid 1px rgb(0 0 0);
    border-radius: .25rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.14s ease-out;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
}

.button:hover {
    background-color: rgb(255, 144, 232);
    color: rgb(0, 0, 0);
}

.button:hover:not(:active) {
    transform: translate(-0.25rem, -0.25rem);
    box-shadow: .25rem .25rem 0rem rgb(0 0 0);
}
</style>
        </head>
        <body>
            <button class="button">Click me</button>

        </body>
    </html>`};function G(v){let e,o,p,m,i,n,g="Basic",u,t,r;return document.title=e=h,t=new F({props:{html:d.html,css:d.css,srcdoc:d.srcdoc}}),{c(){o=b(),p=_("h1"),m=w(h),i=b(),n=_("h2"),n.textContent=g,u=b(),C(t.$$.fragment)},l(s){q("svelte-1ci1mfp",document.head).forEach(l),o=j(s),p=x(s,"H1",{});var f=E(p);m=S(f,h),f.forEach(l),i=j(s),n=x(s,"H2",{"data-svelte-h":!0}),z(n)!=="svelte-1dusnn0"&&(n.textContent=g),u=j(s),B(t.$$.fragment,s)},m(s,a){c(s,o,a),c(s,p,a),H(p,m),c(s,i,a),c(s,n,a),c(s,u,a),D(t,s,a),r=!0},p(s,[a]){(!r||a&0)&&e!==(e=h)&&(document.title=e)},i(s){r||(P(t.$$.fragment,s),r=!0)},o(s){W(t.$$.fragment,s),r=!1},d(s){s&&(l(o),l(p),l(i),l(n),l(u)),A(t,s)}}}const I={title:"Buttons"},{title:h}=I;class M extends ${constructor(e){super(),k(this,e,null,G,y,{})}}export{M as component};
