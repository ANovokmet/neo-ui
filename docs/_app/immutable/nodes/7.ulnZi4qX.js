import{s as $}from"../chunks/scheduler.S4wXxuDW.js";import{S as w,i as C,s as u,e as _,t as E,p as X,h as S,d as n,c as d,a as b,f as D,n as H,g as I,q as P,b as p,l as z,r as M,u as W,v as A,w as B}from"../chunks/index.AEfH55ke.js";import{E as F}from"../chunks/Example.5uh9tBjF.js";const v={html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;marquee&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;marquee__content&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Item 1<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>// Item 2 //<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Item 3<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;marquee__content&quot;</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Item 1<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>// Item 2 //<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Item 3<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,css:`<span class="hljs-selector-class">.marquee</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#000</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;

    <span class="hljs-attribute">padding</span>: .<span class="hljs-number">5em</span> <span class="hljs-number">0</span>;

    <span class="hljs-attribute">display</span>: flex;
    <span class="hljs-attribute">overflow</span>: hidden;
}

<span class="hljs-selector-class">.marquee__content</span> {
    <span class="hljs-attribute">flex-shrink</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">display</span>: flex;
    <span class="hljs-attribute">justify-content</span>: space-around;
    <span class="hljs-attribute">min-width</span>: <span class="hljs-number">100%</span>;
    <span class="hljs-attribute">animation</span>: scroll <span class="hljs-number">10s</span> linear infinite;
}

<span class="hljs-selector-class">.marquee</span><span class="hljs-selector-pseudo">:hover</span> <span class="hljs-selector-class">.marquee__content</span> {
    <span class="hljs-attribute">animation-play-state</span>: paused;
}

<span class="hljs-keyword">@keyframes</span> scroll {
    <span class="hljs-selector-tag">from</span> {
        <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translateX</span>(<span class="hljs-number">0</span>);
    }

    <span class="hljs-selector-tag">to</span> {
        <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translateX</span>(<span class="hljs-built_in">calc</span>(-<span class="hljs-number">100%</span>));
    }
}
`,srcdoc:`
    <html>
        <head>
            <link rel="stylesheet" href="/example.css">
            <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
            <style>.marquee {
    background-color: #000;
    color: #fff;

    padding: .5em 0;

    display: flex;
    overflow: hidden;
}

.marquee__content {
    flex-shrink: 0;
    display: flex;
    justify-content: space-around;
    min-width: 100%;
    animation: scroll 10s linear infinite;
}

.marquee:hover .marquee__content {
    animation-play-state: paused;
}

@keyframes scroll {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(calc(-100%));
    }
}
</style>
        </head>
        <body>
            <div class="marquee">
    <div class="marquee__content">
        <span>Item 1</span>
        <span>// Item 2 //</span>
        <span>Item 3</span>
    </div>
    <div class="marquee__content" aria-hidden="true">
        <span>Item 1</span>
        <span>// Item 2 //</span>
        <span>Item 3</span>
    </div>
</div>

        </body>
    </html>`};function G(k){let c,m,r,g,i,t,q="Display.",o,l,x="Example",j,e,h;return document.title=c=f,e=new F({props:{html:v.html,css:v.css,srcdoc:v.srcdoc}}),{c(){m=u(),r=_("h1"),g=E(f),i=u(),t=_("p"),t.textContent=q,o=u(),l=_("h2"),l.textContent=x,j=u(),X(e.$$.fragment)},l(s){S("svelte-1ci1mfp",document.head).forEach(n),m=d(s),r=b(s,"H1",{});var y=D(r);g=H(y,f),y.forEach(n),i=d(s),t=b(s,"P",{"data-svelte-h":!0}),I(t)!=="svelte-1xhj8ks"&&(t.textContent=q),o=d(s),l=b(s,"H2",{"data-svelte-h":!0}),I(l)!=="svelte-1jcu5zc"&&(l.textContent=x),j=d(s),P(e.$$.fragment,s)},m(s,a){p(s,m,a),p(s,r,a),z(r,g),p(s,i,a),p(s,t,a),p(s,o,a),p(s,l,a),p(s,j,a),M(e,s,a),h=!0},p(s,[a]){(!h||a&0)&&c!==(c=f)&&(document.title=c)},i(s){h||(W(e.$$.fragment,s),h=!0)},o(s){A(e.$$.fragment,s),h=!1},d(s){s&&(n(m),n(r),n(i),n(t),n(o),n(l),n(j)),B(e,s)}}}const J={title:"Marquee"},{title:f}=J;class O extends w{constructor(c){super(),C(this,c,null,G,$,{})}}export{O as component};
