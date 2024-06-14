<template>
  <div class="wrapper">
    <aside id="sidebar" class="expand">
      <div class="d-flex">
        <button id="toggle-btn" type="button">
          <!-- <i class="bi bi-list"></i> -->
        </button>
        <div class="sidebar-logo">
          <a href="#"></a>
        </div>
      </div>
      <div>
        <input
          type="text"
          class="form-control w-75 mx-auto"
          v-model="searchQuery"
          placeholder="Search..."
          @input="filterMenu"
        />
      </div>
      <ul class="sidebar-nav">
        <menu-item
          v-for="item in filteredMenuTree"
          :key="item.label"
          :item="item"
        ></menu-item>
      </ul>
      <div class="sidebar-footer">
        <a href="#" class="sidebar-link">
          <!-- <i class="bi bi-box-arrow-left"></i>
          <span>Logout</span> -->
        </a>
      </div>
    </aside>
  </div>
</template>

<script>
import MenuItem from "./MenuItem.vue";

const markdownContext = require.context("../markdown", true, /\.md$/);

export default {
  name: "SideBar",
  components: {
    MenuItem,
  },
  mounted() {
    const hamburger = document.querySelector("#toggle-btn");

    hamburger.addEventListener("click", function () {
      document.querySelector("#sidebar").classList.toggle("expand");
    });

    this.loadContents();

    console.log("MENUTREE", this.menuTree);
  },
  data() {
    return {
      searchQuery: "",
      menuTree: [
        {
          label: "Introduction",
          icon: "bi bi-list-task",
          route: "/",
          contentPath: "./introduction/introduction.md",
          content: "",
        },
        {
          label: "IRCC",
          icon: "bi bi-shield-lock",
          children: [
            {
              label: "Documents",
              route: "/bch/partner/ircc/documents",
              contentPath: "./ircc/documents.md",
              content: "",
            },
          ],
        },
        {
          label: "CNA",
          icon: "bi bi-shield-lock",
          children: [
            {
              label: "Documents",
              route: "/bch/partner/cna/documents",
              contentPath: "./cna/documents.md",
              content: "",
            },
          ],
        },
        {
          label: "Public",
          icon: "bi bi-shield-lock",
          children: [
            {
              label: "Document",
              children: [
                {
                  label:"GET",
                  route:"/bch/public/document",
                  contentPath: "./document.md",
                  content: "",
                }
              ]
            },
          ],
        },
      ],
      filteredMenuTree: [],
    };
  },
  methods: {
    loadContents() {
      const loadContentRecursively = (items) => {
        items.forEach((item) => {
          if (item.children) {
            loadContentRecursively(item.children);
          }
          if (item.contentPath) {
            item.content = this.loadMarkdownContent(item.contentPath);
          }
        });
      };
      loadContentRecursively(this.menuTree);
      this.filteredMenuTree = JSON.parse(JSON.stringify(this.menuTree));
    },
    loadMarkdownContent(path) {
      try {
        return markdownContext(path).default;
      } catch (error) {
        console.error("Error loading markdown content:", error);
        return "";
      }
    },
    filterMenu() {
      const query = this.searchQuery.toLowerCase();
      this.filteredMenuTree = this.menuTree
        .map((item) => this.filterItem(item, query))
        .filter((item) => item);
    },
    filterItem(item, query) {
      let filteredItem = { ...item };
      if (filteredItem.children) {
        filteredItem.children = filteredItem.children
          .map((child) => this.filterItem(child, query))
          .filter((child) => child);
        if (
          filteredItem.children.length > 0 ||
          (filteredItem.content &&
            filteredItem.content.toLowerCase().includes(query))
        ) {
          return filteredItem;
        }
      } else if (
        filteredItem.content &&
        filteredItem.content.toLowerCase().includes(query)
      ) {
        return filteredItem;
      }
      return null;
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  height: calc(100vh - 56px);
  position: sticky;
  left: 0;
  top: 56px;
}

.main {
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  transition: all 0.35s ease-in-out;
  background-color: #fafbfe;
}

#sidebar {
  width: 70px;
  min-width: 70px;
  z-index: 1000;
  transition: all 0.25s ease-in-out;
  background-color: #0e2238;
  display: flex;
  flex-direction: column;
}

#sidebar.expand {
  width: 260px;
  min-width: 260px;
}

#toggle-btn {
  background-color: transparent;
  cursor: pointer;
  border: 0;
  padding: 1rem 1.5rem;
}

#toggle-btn i {
  font-size: 1.5rem;
  color: #fff;
}

.sidebar-logo {
  margin: auto 0;
}

.sidebar-logo a {
  color: #fff;
  font-size: 1.15rem;
  font-weight: 600;
}

#sidebar:not(.expand) .sidebar-logo,
#sidebar:not(.expand) a.sidebar-link span {
  display: none;
}

.sidebar-nav {
  padding: 2rem 0;
  flex: 1 1 auto;
}

a.sidebar-link {
  padding: 0.625rem 1.625rem;
  color: #fff;
  display: block;
  font-size: 0.9rem;
  white-space: nowrap;
  border-left: 3px solid transparent;
}

.sidebar-link i {
  font-size: 1.1rem;
  margin-right: 0.75rem;
}

a.sidebar-link:hover {
  background-color: rgba(255, 255, 255, 0.075);
  border-left: 3px solid #3b7ddd;
}

.sidebar-item {
  position: relative;
}

#sidebar:not(.expand) .sidebar-item .sidebar-dropdown {
  position: absolute;
  top: 0;
  left: 70px;
  background-color: #0e2238;
  padding: 0;
  min-width: 15rem;
  display: none;
}

#sidebar:not(.expand) .sidebar-item:hover .has-dropdown + .sidebar-dropdown {
  display: block;
  max-height: 15em;
  width: 100%;
  opacity: 1;
}

#sidebar.expand .sidebar-link[data-bs-toggle="collapse"]::after {
  border: solid;
  border-width: 0 0.075rem 0.075rem 0;
  content: "";
  display: inline-block;
  padding: 2px;
  position: absolute;
  right: 1.5rem;
  top: 1.4rem;
  transform: rotate(-135deg);
  transition: all 0.2s ease-out;
}

#sidebar.expand .sidebar-link[data-bs-toggle="collapse"].collapsed::after {
  transform: rotate(45deg);
  transition: all 0.2s ease-out;
}
</style>
