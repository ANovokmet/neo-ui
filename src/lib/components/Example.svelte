<script>
    import "highlight.js/styles/atom-one-light.css";
    import { onMount } from "svelte";

    /** @type HTMLIFrameElement */
    let iframeElement;

    /** @type string */
    export let css;
    /** @type string */
    export let html;
    /** @type string */
    export let srcdoc;

    /**
     * @param iframe {HTMLIFrameElement}
     */
    function resizeIframe(iframe) {
        iframe.style.height = Math.ceil(iframe.contentWindow.document.body.scrollHeight) + 2 + "px";
    }

    function onLoad() {
        resizeIframe(iframeElement);
    }

    onMount(() => {
        // because html renders but svelte has yet to mount, and onload would not be triggered
        iframeElement.contentWindow.location.reload();
    });
</script>

<div class="example box">
    <iframe bind:this={iframeElement} {srcdoc} title="Example" on:load={onLoad}></iframe>
    <div class="panels">
        <div class="panel">
            <div class="panel-header">HTML</div>
            <div class="panel-content code-wrapper">
                <pre class="language-html hljs"><code class="language-html">{@html html}</code></pre>
            </div>
        </div>
        <div class="panel">
            <div class="panel-header">CSS</div>
            <div class="panel-content code-wrapper">
                <pre class="language-css hljs"><code class="language-css">{@html css}</code></pre>
            </div>
        </div>
    </div>
</div>

<style>
    iframe {
        border-bottom: 2px solid rgb(0 0 0);
        width: 100%;
        height: auto;
        display: block;
    }

    .code-wrapper > pre {
        overflow: auto;
        max-height: 400px;
        min-height: 100%;
    }

    .box {
        --tw-shadow: 8px 8px 0 #000;
        --tw-shadow-colored: 8px 8px 0 var(--tw-shadow-color);
        border: 4px solid rgb(0 0 0);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
            var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        margin-bottom: 40px;
    }

    .panels {
        display: flex;
        overflow: auto;
    }

    .panel:not(:last-child) {
        border-right: 2px solid rgb(0 0 0);
    }
    .panel {
        flex: 1 1 0;
        overflow: auto;
        display: flex;
        flex-direction: column;
    }

    .panel-header {
        padding: 20px;
        border-bottom: 2px solid black;
        font-weight: 700;
        font-size: 2rem;
    }

    .panel-content {
        flex: 1;
    }
</style>
