<template>
  <div>
    <div class="markdown-content" v-html="compiledMarkdown"></div>
    <div>
      <h3 class="mt-4">Playground</h3>
      <div id="swagger-ui"></div>
    </div>
  </div>
</template>

<script>
import documentJson from "../swagger/document.json";
import MarkdownIt from "markdown-it";
import MarkdownItAbbr from "markdown-it-abbr";
import MarkdownItAnchor from "markdown-it-anchor";
import MarkdownItFootnote from "markdown-it-footnote";
import MarkdownItHighlightjs from "markdown-it-highlightjs";
import MarkdownItSub from "markdown-it-sub";
import MarkdownItSup from "markdown-it-sup";
import MarkdownItTasklists from "markdown-it-task-lists";
import MarkdownItTOC from "markdown-it-toc-done-right";
import markdownContent from "../markdown/document.md";
import "swagger-ui-dist/swagger-ui.css";

export default {
  name: "DocumentPage",
  data() {
    return {
      markdownContent: markdownContent,
    };
  },
  mounted() {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/swagger-ui-dist/swagger-ui-bundle.js";
    script.onload = () => {
      window.SwaggerUIBundle({
        spec: documentJson, // Load your JSON schema here
        dom_id: "#swagger-ui",
        operationsSorter: "alpha",
        presets: [
          window.SwaggerUIBundle.presets.apis,
          window.SwaggerUIStandalonePreset,
        ],
        layout: "BaseLayout",
      });
    };
    document.head.appendChild(script);
  },
  computed: {
    compiledMarkdown() {
      const md = new MarkdownIt()
        .use(MarkdownItAbbr)
        .use(MarkdownItAnchor)
        .use(MarkdownItFootnote)
        .use(MarkdownItHighlightjs)
        .use(MarkdownItSub)
        .use(MarkdownItSup)
        .use(MarkdownItTasklists)
        .use(MarkdownItTOC);
      const html = md.render(this.markdownContent);
      return html;
    },
  },
};
</script>

<style scoped>
</style>
