import { createRouter, createWebHistory } from "vue-router";
import CountryPage from "./pages/CountryPage.vue";
// import DocumentPage from "./pages/DocumentPage.vue";
import IntroductionPage from "./pages/Introduction.vue";
import IntroductionBCH from "./pages/IntroductionBCH.vue";
// import DocumentsValidatePage from "./pages/DocumentsValidatePage.vue";
import BaseDocumentPage from "./pages/BaseDocumentPage.vue";
import LoginPage from "./pages/LoginPage.vue";
import AuthLayout from "./layouts/AuthLayout.vue";
import MainLayout from "./layouts/MainLayout.vue";
import CHMLayout from "./layouts/CHMLayout.vue";

import documentMarkdown from "./markdown/document.md";
import documentsValidateMarkdown from "./markdown/documentsValidate.md";
import irccDocumentsMarkdown from "./markdown/ircc/documents.md"
import cnaDocumentsMarkdown from "./markdown/cna/documents.md"

import documentJson from "./swagger/document.json";
import documentsValidateJson from "./swagger/documentsValidate.json";
import irccDocumentsJson from "./swagger/ircc/documents.json"
import cnaDocumentsJson from "./swagger/cna/documents.json"

const routes = [
  {
    path: "/",
    redirect: "/bch",
  },
  {
    path: "/bch",
    component: MainLayout,
    children: [
      {
        path: "",
        component: IntroductionPage,
        name: "IntroductionBCH",
      },
      {
        path: "public",
        children: [
          {
            path: "countries",
            component: CountryPage,
            name: "CountryBCH",
          },
          {
            path: "document",
            component: BaseDocumentPage,
            name: "DocumentBCH",
            props: {
              markdownContent: documentMarkdown,
              documentJson: documentJson,
            },
          },
        ],
      },
      {
        path: "partner",
        children: [
          {
            path: "documents/validate",
            component: BaseDocumentPage,
            name: "DocumentsValidateBCH",
            props: {
              markdownContent: documentsValidateMarkdown,
              documentJson: documentsValidateJson,
              protected: true,
            },
          },
          {
            path: "ircc/documents",
            component: BaseDocumentPage,
            name: "irccDocuments",
            props: {
              markdownContent: irccDocumentsMarkdown,
              documentJson: irccDocumentsJson,
              protected: true,
            },
          },
          {
            path: "cna/documents",
            component: BaseDocumentPage,
            name: "cnaDocuments",
            props: {
              markdownContent: cnaDocumentsMarkdown,
              documentJson: cnaDocumentsJson,
              protected: true,
            },
          },
        ],
      },
    ],
  },
  {
    path: "/chm",
    component: CHMLayout,
    children: [
      {
        path: "",
        component: IntroductionBCH,
        name: "IntroductionCHM",
      },
    ],
  },
  {
    path: "/login",
    component: AuthLayout,
    children: [
      {
        path: "",
        component: LoginPage,
        name: "Login",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
