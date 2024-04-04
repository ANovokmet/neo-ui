import hljs from "highlight.js/lib/core";
import hljsHtml from "highlight.js/lib/languages/xml";
import hljsCss from "highlight.js/lib/languages/css";

hljs.registerLanguage("html", hljsHtml);
hljs.registerLanguage("css", hljsCss);

function visitBlockquote(node, callbackFn) {
    for (const child of node.children) {
        if (child.type === 'paragraph') {
            visitParagraph(child, node, callbackFn);
        }
    }
}

function visitParagraph(node, target, callbackFn) {
    for (const child of node.children) {
        if (child.type !== 'text') {
            continue;
        }
        const rxp = new RegExp(/example \((?<path>.+)\)/gm);
        const res = rxp.exec(child.value);
        if (res.groups) {
            callbackFn(target, res.groups.path);
        }
    }
}

/**
 * @param {string} input 
 */
function removeIndentation(input) {
    return input.replace(/^(\t|    )(\s*)/gm, '$2');
}

function getSrcdoc(html, css) {
    return `
    <html>
        <head>
            <link rel="stylesheet" href="/example.css">
            <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
            <style>${css}</style>
        </head>
        <body>
            ${html}
        </body>
    </html>`;
}

/** 
 * Remark plugin
 * 
 * @example 
 * 
 * > example (./path/file.html)
*/
export function remarkImportHtml() {
    return function (tree, file) {
        if (tree.type === 'root') {
            const imports = [];
            for (const child of tree.children) {
                if (child.type === 'blockquote') {
                    visitBlockquote(child, (node, path) => {
                        const alias = 'exampleData$$' + imports.length;
                        imports.push({
                            alias,
                            path,
                        });
                        node.type = 'html';
                        node.value = `<Example$$ html={${alias}.html} css={${alias}.css}  srcdoc={${alias}.srcdoc} />`;
                        delete node.children;
                    });
                }
            }

            // TODO:: use rehype to insert this import to an existing script
            const script = `
            <script>
            import Example$$ from '$lib/components/Example.svelte';
            ${imports.map(i => `import ${i.alias} from '${i.path}\?special';`).join('\n')}
            </script>`;

            tree.children.unshift({
                type: 'html',
                value: script,
            });
        }
    }
};

const extractRxp = new RegExp(/<template>(\s*\n)?(?<html>[\w\W]*)<\/template>\s*<style>(\s*\n)?(?<css>[\w\W]*)<\/style>/);

/** Vite plugin */
export const viteHtmlImport = {
    name: "example-import",
    /**
     * @param {string} src
     * @param {string} id
     */
    transform(src, id) {
        if (!/^.*\.html\?special$/g.test(id)) {
            return;
        }
        console.log('transofmr', id);

        const extractRes = extractRxp.exec(src);
        if (!extractRes || !extractRes.groups) {
            console.log('NO', id);
            return;
        }

        const htmlRaw = removeIndentation(extractRes.groups.html);
        const cssRaw = removeIndentation(extractRes.groups.css);

        const srcdoc = getSrcdoc(htmlRaw, cssRaw);
        const html = hljs.highlight(htmlRaw, { language: 'html' }).value;
        const css = hljs.highlight(cssRaw, { language: 'css' }).value;

        console.log('YES', id);
        const code = `export default {
            html: \`${html}\`,
            css: \`${css}\`,
            srcdoc: \`${srcdoc}\`
        }`;
        return { code };
    }
}
