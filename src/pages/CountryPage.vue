<template>
  <h1 class="mt-3">Getting a Resource</h1>
  <div class="mt-4">
    <h3 class="text-decoration-underline">Request</h3>
    <ul>
      <li>HTTP Method: <span>GET</span></li>
      <li>Content Type: <span>application/json</span></li>
      <li>URL: <span>https://accounts.cbd.int/api/v2013/countries</span></li>
    </ul>
  </div>
  <div class="mt-4">
    <h3 class="text-decoration-underline">Parameters</h3>
    <p>No Parameters</p>
  </div>
  <div class="mt-4">
    <h3 class="text-decoration-underline">Request example</h3>
    <VCodeBlock
      :code="code"
      highlightjs
      label=""
      lang="javascript"
      theme="neon-bunny"
    />
  </div>
  <div class="mt-5">
    <h3 class="text-decoration-underline">Playground</h3>
    <div id="swagger-ui"></div>
  </div>
</template>

<script>
import { VCodeBlock } from "@wdns/vue-code-block";
import countriesJson from "../swagger/countries.json";
import "swagger-ui-dist/swagger-ui.css";

export default {
  name: "CountryPage",
  data() {
    return {
      code: `fetch('https://accounts.cbd.int/api/v2013/countries',{
        method: 'GET',
        headers:{
          'Content-Type':'application/json'
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
      `,
    };
  },
  components: {
    VCodeBlock,
  },
  mounted() {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/swagger-ui-dist/swagger-ui-bundle.js";
    script.onload = () => {
      window.SwaggerUIBundle({
        spec: countriesJson, // Load your JSON schema here
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
};
</script>

<style scoped></style>
