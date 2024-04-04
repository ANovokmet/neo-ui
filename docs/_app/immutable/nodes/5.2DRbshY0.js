import{s as A}from"../chunks/scheduler.S4wXxuDW.js";import{S as B,i as F,s as i,e as x,t as G,p as E,h as I,d as n,c as j,a as w,f as J,n as K,g as q,q as X,b as l,l as M,r as Y,u as D,v as H,w as P}from"../chunks/index.AEfH55ke.js";import{E as L}from"../chunks/Example.5uh9tBjF.js";const C={html:`<span class="hljs-tag">&lt;<span class="hljs-name">section</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;section blue&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;card clickable&quot;</span>&gt;</span>
        Card content
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">section</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;section green&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;card&quot;</span>&gt;</span>
        Card content
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">section</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;section orange&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;card&quot;</span>&gt;</span>
        Card content
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">section</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;section orange-alt&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;card&quot;</span>&gt;</span>
        Card content
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">section</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;section pink-alt&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;card&quot;</span>&gt;</span>
        Card content
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">section</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;section purple&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;card&quot;</span>&gt;</span>
        Card content
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">section</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;section pink&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;card&quot;</span>&gt;</span>
        Card content
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
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

<span class="hljs-selector-class">.section</span><span class="hljs-selector-pseudo">:not</span>(<span class="hljs-selector-pseudo">:last-child</span>) {
    <span class="hljs-attribute">border-bottom</span>: <span class="hljs-number">5px</span> solid <span class="hljs-number">#000</span>;
}

<span class="hljs-selector-tag">body</span> {
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span>;
}

<span class="hljs-selector-class">.blue</span> {
    <span class="hljs-attr">--background-color</span>: <span class="hljs-number">#00b3f4</span>;
    <span class="hljs-attr">--shadow-color</span>: <span class="hljs-number">#321c64</span>;
}

<span class="hljs-selector-class">.green</span> {
    <span class="hljs-attr">--background-color</span>: <span class="hljs-number">#d1ffee</span>;
    <span class="hljs-attr">--shadow-color</span>: <span class="hljs-number">#2ac3a2</span>;
}

<span class="hljs-selector-class">.orange</span> {
    <span class="hljs-attr">--background-color</span>: <span class="hljs-number">#ffb587</span>;
    <span class="hljs-attr">--shadow-color</span>: <span class="hljs-number">#ff8a50</span>;
}

<span class="hljs-selector-class">.orange-alt</span> {
    <span class="hljs-attr">--background-color</span>: <span class="hljs-number">#ffd567</span>;
    <span class="hljs-attr">--shadow-color</span>: <span class="hljs-number">#e27f2e</span>;
}

<span class="hljs-selector-class">.pink-alt</span> {
    <span class="hljs-attr">--background-color</span>: <span class="hljs-number">#ffdfe7</span>;
    <span class="hljs-attr">--shadow-color</span>: <span class="hljs-number">#08403f</span>;
}

<span class="hljs-selector-class">.purple</span> {
    <span class="hljs-attr">--background-color</span>: <span class="hljs-number">#e7dfff</span>;
    <span class="hljs-attr">--shadow-color</span>: <span class="hljs-number">#9059ff</span>;
}

<span class="hljs-selector-class">.pink</span> {
    <span class="hljs-attr">--background-color</span>: <span class="hljs-number">#ffdfe7</span>;
    <span class="hljs-attr">--shadow-color</span>: <span class="hljs-number">#ff8ac5</span>;
}

<span class="hljs-selector-pseudo">:root</span> {
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

.section:not(:last-child) {
    border-bottom: 5px solid #000;
}

body {
    padding: 0;
}

.blue {
    --background-color: #00b3f4;
    --shadow-color: #321c64;
}

.green {
    --background-color: #d1ffee;
    --shadow-color: #2ac3a2;
}

.orange {
    --background-color: #ffb587;
    --shadow-color: #ff8a50;
}

.orange-alt {
    --background-color: #ffd567;
    --shadow-color: #e27f2e;
}

.pink-alt {
    --background-color: #ffdfe7;
    --shadow-color: #08403f;
}

.purple {
    --background-color: #e7dfff;
    --shadow-color: #9059ff;
}

.pink {
    --background-color: #ffdfe7;
    --shadow-color: #ff8ac5;
}

:root {
    --shadow-offset: 14px;
}
</style>
        </head>
        <body>
            <section class="section blue">
    <div class="card clickable">
        Card content
    </div>
</section>
<section class="section green">
    <div class="card">
        Card content
    </div>
</section>
<section class="section orange">
    <div class="card">
        Card content
    </div>
</section>
<section class="section orange-alt">
    <div class="card">
        Card content
    </div>
</section>
<section class="section pink-alt">
    <div class="card">
        Card content
    </div>
</section>
<section class="section purple">
    <div class="card">
        Card content
    </div>
</section>
<section class="section pink">
    <div class="card">
        Card content
    </div>
</section>

        </body>
    </html>`},y={html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cube&quot;</span>&gt;</span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cube-calc&quot;</span>&gt;</span>
        Using CSS variables.
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cube-calc c-1&quot;</span>&gt;</span>
        Using CSS variables.
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cube-calc c-2&quot;</span>&gt;</span>
        Using CSS variables.
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cube-calc c-3&quot;</span>&gt;</span>
        Using CSS variables.
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`,css:`<span class="hljs-selector-class">.cube</span> {
    <span class="hljs-attribute">position</span>: relative;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">20px</span>;
    <span class="hljs-attribute">border</span>: <span class="hljs-number">2px</span> solid <span class="hljs-number">#000</span>;
    <span class="hljs-attribute">background</span>: <span class="hljs-number">#ff8ac5</span>;
}

<span class="hljs-selector-class">.cube</span><span class="hljs-selector-pseudo">::before</span> {
    <span class="hljs-attribute">content</span>: <span class="hljs-string">&#x27;&#x27;</span>;
    <span class="hljs-attribute">position</span>: absolute;
    <span class="hljs-attribute">left</span>: -<span class="hljs-number">18px</span>;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">16px</span>;
    <span class="hljs-attribute">top</span>: <span class="hljs-number">3px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-built_in">calc</span>(<span class="hljs-number">100%</span> + <span class="hljs-number">4px</span>);
    <span class="hljs-attribute">border</span>: <span class="hljs-number">2px</span> solid <span class="hljs-number">#000</span>;
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">skewY</span>(-<span class="hljs-number">30deg</span>);
    <span class="hljs-attribute">z-index</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">border-right-width</span>: <span class="hljs-number">0</span>;
}

<span class="hljs-selector-class">.cube</span><span class="hljs-selector-pseudo">::after</span> {
    <span class="hljs-attribute">content</span>: <span class="hljs-string">&#x27;&#x27;</span>;
    <span class="hljs-attribute">position</span>: absolute;
    <span class="hljs-attribute">bottom</span>: -<span class="hljs-number">11px</span>;
    <span class="hljs-attribute">left</span>: -<span class="hljs-number">10px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">9px</span>;
    <span class="hljs-attribute">width</span>: <span class="hljs-built_in">calc</span>(<span class="hljs-number">100%</span> + <span class="hljs-number">4px</span>);
    <span class="hljs-attribute">border</span>: <span class="hljs-number">2px</span> solid <span class="hljs-number">#000</span>;
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">skewX</span>(-<span class="hljs-number">60deg</span>);
    <span class="hljs-attribute">z-index</span>: -<span class="hljs-number">1</span>;
    <span class="hljs-attribute">border-top-width</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">border-left-width</span>: <span class="hljs-number">0</span>;
}

<span class="hljs-selector-class">.cube-calc</span> {
    <span class="hljs-attr">--border-width</span>: <span class="hljs-number">2px</span>;
    <span class="hljs-attr">--depth</span>: <span class="hljs-number">16px</span>;
    <span class="hljs-attr">--angle</span>: -<span class="hljs-number">30deg</span>;

    <span class="hljs-attr">--width</span>: <span class="hljs-built_in">var</span>(--depth);
    <span class="hljs-attr">--height</span>: <span class="hljs-built_in">calc</span>(<span class="hljs-built_in">abs</span>(<span class="hljs-built_in">tan</span>(<span class="hljs-built_in">var</span>(--angle)) * <span class="hljs-built_in">var</span>(--depth)));


    <span class="hljs-attribute">border</span>: <span class="hljs-built_in">var</span>(--border-width) solid <span class="hljs-number">#000</span>;
    <span class="hljs-attribute">position</span>: relative;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">20px</span>;
    <span class="hljs-attribute">background</span>: <span class="hljs-number">#ff8ac5</span>;
}

<span class="hljs-selector-class">.c-1</span> {
    <span class="hljs-attr">--border-width</span>: <span class="hljs-number">1px</span>;
    <span class="hljs-attr">--depth</span>: <span class="hljs-number">16px</span>;
    <span class="hljs-attr">--angle</span>: -<span class="hljs-number">30deg</span>;
}
<span class="hljs-selector-class">.c-2</span> {
    <span class="hljs-attr">--border-width</span>: <span class="hljs-number">2px</span>;
    <span class="hljs-attr">--depth</span>: <span class="hljs-number">24px</span>;
    <span class="hljs-attr">--angle</span>: -<span class="hljs-number">30deg</span>;
}
<span class="hljs-selector-class">.c-3</span> {
    <span class="hljs-attr">--border-width</span>: <span class="hljs-number">3px</span>;
    <span class="hljs-attr">--depth</span>: <span class="hljs-number">16px</span>;
    <span class="hljs-attr">--angle</span>: -<span class="hljs-number">60deg</span>;
}

<span class="hljs-selector-class">.cube-calc</span><span class="hljs-selector-pseudo">::before</span> {
    <span class="hljs-attribute">content</span>: <span class="hljs-string">&#x27;&#x27;</span>;
    <span class="hljs-attribute">position</span>: absolute;

    <span class="hljs-attr">--top</span>: <span class="hljs-built_in">calc</span>(<span class="hljs-built_in">var</span>(--height) / <span class="hljs-number">2</span> - <span class="hljs-built_in">var</span>(--border-width));

    <span class="hljs-attribute">left</span>: <span class="hljs-built_in">calc</span>(-<span class="hljs-number">1</span> * <span class="hljs-built_in">var</span>(--width) - <span class="hljs-built_in">var</span>(--border-width));
    <span class="hljs-attribute">width</span>: <span class="hljs-built_in">var</span>(--width);
    <span class="hljs-attribute">top</span>: <span class="hljs-built_in">var</span>(--top);
    <span class="hljs-attribute">height</span>: <span class="hljs-built_in">calc</span>(<span class="hljs-number">100%</span> + <span class="hljs-number">2</span> * <span class="hljs-built_in">var</span>(--border-width));
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">skewY</span>(<span class="hljs-built_in">var</span>(--angle));

    <span class="hljs-attribute">border</span>: <span class="hljs-built_in">var</span>(--border-width) solid <span class="hljs-number">#000</span>;
    <span class="hljs-attribute">z-index</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">border-right-width</span>: <span class="hljs-number">0</span>;
}

<span class="hljs-selector-class">.cube-calc</span><span class="hljs-selector-pseudo">::after</span> {
    <span class="hljs-attribute">content</span>: <span class="hljs-string">&#x27;&#x27;</span>;
    <span class="hljs-attribute">position</span>: absolute;

    <span class="hljs-attr">--left</span>: <span class="hljs-built_in">calc</span>(<span class="hljs-built_in">var</span>(--width) / -<span class="hljs-number">2</span> - <span class="hljs-built_in">var</span>(--border-width));
    <span class="hljs-attr">--angle-opposite</span>: <span class="hljs-built_in">calc</span>(-<span class="hljs-number">90deg</span> - <span class="hljs-built_in">var</span>(--angle));

    <span class="hljs-attribute">bottom</span>: <span class="hljs-built_in">calc</span>(-<span class="hljs-number">1</span> * <span class="hljs-built_in">var</span>(--height) - <span class="hljs-built_in">var</span>(--border-width));
    <span class="hljs-attribute">left</span>: <span class="hljs-built_in">var</span>(--left);
    <span class="hljs-attribute">height</span>: <span class="hljs-built_in">var</span>(--height);
    <span class="hljs-attribute">width</span>: <span class="hljs-built_in">calc</span>(<span class="hljs-number">100%</span> + <span class="hljs-number">2</span> * <span class="hljs-built_in">var</span>(--border-width));
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">skewX</span>(<span class="hljs-built_in">var</span>(--angle-opposite));

    <span class="hljs-attribute">border</span>: <span class="hljs-built_in">var</span>(--border-width) solid <span class="hljs-number">#000</span>;
    <span class="hljs-attribute">z-index</span>: -<span class="hljs-number">1</span>;
    <span class="hljs-attribute">border-top-width</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">border-left-width</span>: <span class="hljs-number">0</span>;
}

<span class="hljs-selector-class">.box</span> {
    <span class="hljs-attribute">display</span>: flex;
    <span class="hljs-attribute">flex-wrap</span>: wrap;
    <span class="hljs-attribute">gap</span>: <span class="hljs-number">2rem</span>;
}

<span class="hljs-selector-tag">body</span> {
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">40px</span>;
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#ffdfe7</span>;
}
`,srcdoc:`
    <html>
        <head>
            <link rel="stylesheet" href="/example.css">
            <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
            <style>.cube {
    position: relative;
    padding: 20px;
    border: 2px solid #000;
    background: #ff8ac5;
}

.cube::before {
    content: '';
    position: absolute;
    left: -18px;
    width: 16px;
    top: 3px;
    height: calc(100% + 4px);
    border: 2px solid #000;
    transform: skewY(-30deg);
    z-index: 0;
    border-right-width: 0;
}

.cube::after {
    content: '';
    position: absolute;
    bottom: -11px;
    left: -10px;
    height: 9px;
    width: calc(100% + 4px);
    border: 2px solid #000;
    transform: skewX(-60deg);
    z-index: -1;
    border-top-width: 0;
    border-left-width: 0;
}

.cube-calc {
    --border-width: 2px;
    --depth: 16px;
    --angle: -30deg;

    --width: var(--depth);
    --height: calc(abs(tan(var(--angle)) * var(--depth)));


    border: var(--border-width) solid #000;
    position: relative;
    padding: 20px;
    background: #ff8ac5;
}

.c-1 {
    --border-width: 1px;
    --depth: 16px;
    --angle: -30deg;
}
.c-2 {
    --border-width: 2px;
    --depth: 24px;
    --angle: -30deg;
}
.c-3 {
    --border-width: 3px;
    --depth: 16px;
    --angle: -60deg;
}

.cube-calc::before {
    content: '';
    position: absolute;

    --top: calc(var(--height) / 2 - var(--border-width));

    left: calc(-1 * var(--width) - var(--border-width));
    width: var(--width);
    top: var(--top);
    height: calc(100% + 2 * var(--border-width));
    transform: skewY(var(--angle));

    border: var(--border-width) solid #000;
    z-index: 0;
    border-right-width: 0;
}

.cube-calc::after {
    content: '';
    position: absolute;

    --left: calc(var(--width) / -2 - var(--border-width));
    --angle-opposite: calc(-90deg - var(--angle));

    bottom: calc(-1 * var(--height) - var(--border-width));
    left: var(--left);
    height: var(--height);
    width: calc(100% + 2 * var(--border-width));
    transform: skewX(var(--angle-opposite));

    border: var(--border-width) solid #000;
    z-index: -1;
    border-top-width: 0;
    border-left-width: 0;
}

.box {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}

body {
    padding: 40px;
    background-color: #ffdfe7;
}
</style>
        </head>
        <body>
            <div class="box">
    <div class="cube">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>
    <div class="cube-calc">
        Using CSS variables.
    </div>
    <div class="cube-calc c-1">
        Using CSS variables.
    </div>
    <div class="cube-calc c-2">
        Using CSS variables.
    </div>
    <div class="cube-calc c-3">
        Using CSS variables.
    </div>
</div>

        </body>
    </html>`};function N(W){let h,b,o,k,u,t,S="Card is a basic container.",g,p,$="Example",m,c,f,e,z="Pseudo-2D cube",v,r,d;return document.title=h=_,c=new L({props:{html:C.html,css:C.css,srcdoc:C.srcdoc}}),r=new L({props:{html:y.html,css:y.css,srcdoc:y.srcdoc}}),{c(){b=i(),o=x("h1"),k=G(_),u=i(),t=x("p"),t.textContent=S,g=i(),p=x("h2"),p.textContent=$,m=i(),E(c.$$.fragment),f=i(),e=x("h2"),e.textContent=z,v=i(),E(r.$$.fragment)},l(s){I("svelte-1ci1mfp",document.head).forEach(n),b=j(s),o=w(s,"H1",{});var U=J(o);k=K(U,_),U.forEach(n),u=j(s),t=w(s,"P",{"data-svelte-h":!0}),q(t)!=="svelte-gi53xm"&&(t.textContent=S),g=j(s),p=w(s,"H2",{"data-svelte-h":!0}),q(p)!=="svelte-1jcu5zc"&&(p.textContent=$),m=j(s),X(c.$$.fragment,s),f=j(s),e=w(s,"H2",{"data-svelte-h":!0}),q(e)!=="svelte-1vmgmaa"&&(e.textContent=z),v=j(s),X(r.$$.fragment,s)},m(s,a){l(s,b,a),l(s,o,a),M(o,k),l(s,u,a),l(s,t,a),l(s,g,a),l(s,p,a),l(s,m,a),Y(c,s,a),l(s,f,a),l(s,e,a),l(s,v,a),Y(r,s,a),d=!0},p(s,[a]){(!d||a&0)&&h!==(h=_)&&(document.title=h)},i(s){d||(D(c.$$.fragment,s),D(r.$$.fragment,s),d=!0)},o(s){H(c.$$.fragment,s),H(r.$$.fragment,s),d=!1},d(s){s&&(n(b),n(o),n(u),n(t),n(g),n(p),n(m),n(f),n(e),n(v)),P(c,s),P(r,s)}}}const O={title:"Card"},{title:_}=O;class V extends B{constructor(h){super(),F(this,h,null,N,A,{})}}export{V as component};
