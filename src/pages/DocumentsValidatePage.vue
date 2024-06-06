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
import documentJson from "../swagger/documentsValidate.json";
import MarkdownIt from "markdown-it";
import MarkdownItAbbr from "markdown-it-abbr";
import MarkdownItAnchor from "markdown-it-anchor";
import MarkdownItFootnote from "markdown-it-footnote";
import MarkdownItHighlightjs from "markdown-it-highlightjs";
import MarkdownItSub from "markdown-it-sub";
import MarkdownItSup from "markdown-it-sup";
import MarkdownItTasklists from "markdown-it-task-lists";
import MarkdownItTOC from "markdown-it-toc-done-right";
import markdownContent from "../markdown/documentsValidate.md";
import "swagger-ui-dist/swagger-ui.css";

export default {
  name: "DocumentValidatePage",
  data() {
    return {
      markdownContent: markdownContent,
    };
  },
  mounted() {
    const authToken = localStorage.getItem("authToken");
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/swagger-ui-dist/swagger-ui-bundle.js";
    script.onload = () => {
      const ui = window.SwaggerUIBundle({
        spec: documentJson, // Load your JSON schema here
        dom_id: "#swagger-ui",
        operationsSorter: "alpha",
        presets: [
          window.SwaggerUIBundle.presets.apis,
          window.SwaggerUIStandalonePreset,
        ],
        layout: "BaseLayout",
      });

      //
      if (authToken) {
        // Add authorization token to the Swagger UI
        ui.initOAuth({
          clientId: "your-client-id",
          clientSecret: "your-client-secret-if-required",
          realm: "your-realms",
          appName: "your-app-name",
          scopeSeparator: " ",
          additionalQueryStringParams: {},
        });
        const prefixedAuthToken = `Ticket ${authToken}`;
        ui.preauthorizeApiKey("ApiKeyAuth", prefixedAuthToken);
      } else {
        // Use MutationObserver to disable the "Try it out" buttons after they are rendered
        const observer = new MutationObserver(() => {
          const tryOutButtons = document.querySelectorAll(".try-out__btn");
          tryOutButtons.forEach((button) => {
            button.disabled = true;
            button.title = "Authorization token is missing";
          });
        });

        const targetNode = document.getElementById("swagger-ui");
        const config = { childList: true, subtree: true };

        observer.observe(targetNode, config);
      }

      // Remove the "Authorize" button
      const observer = new MutationObserver(() => {
        const authorizeBtn = document.querySelector(".auth-wrapper");
        if (authorizeBtn) {
          authorizeBtn.parentNode.removeChild(authorizeBtn);
        }
      });
      const targetNode = document.getElementById("swagger-ui");
        const config = { childList: true, subtree: true };

        observer.observe(targetNode, config);

      //
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

<style scoped></style>
