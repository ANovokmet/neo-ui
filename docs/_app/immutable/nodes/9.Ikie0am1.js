import{s as C}from"../chunks/scheduler.S4wXxuDW.js";import{S as T,i as q,s as x,e as g,t as E,p as z,h as S,d as t,c as j,a as f,f as D,n as H,g as v,q as P,b as p,l as W,r as A,u as B,v as F,w as G}from"../chunks/index.AEfH55ke.js";import{E as I}from"../chunks/Example.5uh9tBjF.js";const y={html:`<span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Typography<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">h1</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-outline-stroke&quot;</span>&gt;</span>Typography<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">h1</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-outline-shadow&quot;</span>&gt;</span>Typography<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
`,css:`<span class="hljs-selector-tag">h1</span> {
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">4rem</span>;
}

<span class="hljs-selector-class">.text-outline-stroke</span> {
    <span class="hljs-attribute">color</span>: transparent;
    -webkit-text-stroke: <span class="hljs-number">1px</span> black;
}

<span class="hljs-selector-class">.text-outline-shadow</span> {
    <span class="hljs-attribute">color</span>: <span class="hljs-built_in">rgb</span>(<span class="hljs-number">245</span>, <span class="hljs-number">235</span>, <span class="hljs-number">215</span>);
    <span class="hljs-attribute">text-shadow</span>:
        <span class="hljs-number">1px</span> <span class="hljs-number">1px</span> <span class="hljs-number">0</span> <span class="hljs-number">#000</span>,
        -<span class="hljs-number">1px</span> <span class="hljs-number">1px</span> <span class="hljs-number">0</span> <span class="hljs-number">#000</span>,
        -<span class="hljs-number">1px</span> -<span class="hljs-number">1px</span> <span class="hljs-number">0</span> <span class="hljs-number">#000</span>,
        <span class="hljs-number">1px</span> -<span class="hljs-number">1px</span> <span class="hljs-number">0</span> <span class="hljs-number">#000</span>;
}
`,srcdoc:`
    <html>
        <head>
            <link rel="stylesheet" href="/example.css">
            <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
            <style>h1 {
    font-size: 4rem;
}

.text-outline-stroke {
    color: transparent;
    -webkit-text-stroke: 1px black;
}

.text-outline-shadow {
    color: rgb(245, 235, 215);
    text-shadow:
        1px 1px 0 #000,
        -1px 1px 0 #000,
        -1px -1px 0 #000,
        1px -1px 0 #000;
}
</style>
        </head>
        <body>
            <h1>Typography</h1>
<h1 class="text-outline-stroke">Typography</h1>
<h1 class="text-outline-shadow">Typography</h1>

        </body>
    </html>`};function J($){let c,r,h,d,m,e,_="Display.",i,n,k="Example",u,l,o;return document.title=c=b,l=new I({props:{html:y.html,css:y.css,srcdoc:y.srcdoc}}),{c(){r=x(),h=g("h1"),d=E(b),m=x(),e=g("p"),e.textContent=_,i=x(),n=g("h2"),n.textContent=k,u=x(),z(l.$$.fragment)},l(s){S("svelte-1ci1mfp",document.head).forEach(t),r=j(s),h=f(s,"H1",{});var w=D(h);d=H(w,b),w.forEach(t),m=j(s),e=f(s,"P",{"data-svelte-h":!0}),v(e)!=="svelte-1xhj8ks"&&(e.textContent=_),i=j(s),n=f(s,"H2",{"data-svelte-h":!0}),v(n)!=="svelte-1jcu5zc"&&(n.textContent=k),u=j(s),P(l.$$.fragment,s)},m(s,a){p(s,r,a),p(s,h,a),W(h,d),p(s,m,a),p(s,e,a),p(s,i,a),p(s,n,a),p(s,u,a),A(l,s,a),o=!0},p(s,[a]){(!o||a&0)&&c!==(c=b)&&(document.title=c)},i(s){o||(B(l.$$.fragment,s),o=!0)},o(s){F(l.$$.fragment,s),o=!1},d(s){s&&(t(r),t(h),t(m),t(e),t(i),t(n),t(u)),G(l,s)}}}const K={title:"Typography"},{title:b}=K;class O extends T{constructor(c){super(),q(this,c,null,J,C,{})}}export{O as component};
