<template>
  <div class="menu">
    <div class="search-box w-75 mx-auto my-2">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search..."
        class="search-input w-100 rounded"
      />
    </div>
    <SideBarItem
      v-for="(item, index) in filteredMenuTree"
      :key="index"
      :label="item.label"
      :route="item.route"
      :icon="item.icon"
      :depth="0"
      :data="item.children"
    />
  </div>
</template>

<script>
import SideBarItem from "./SideBarItem.vue";

export default {
  name: "SideBar",
  components: {
    SideBarItem,
  },
  data() {
    return {
      searchQuery: "",
      menuTree: [
        {
          label: "Home",
          icon: "house",
          children: [
            {
              label: "Introduction",
              route: "/",
            },
          ],
        },
        {
          label: "Public API",
          icon: "globe",
          children: [
            {
              label: "Countries",
              children: [
                {
                  label: "GET",
                  route: "/public/countries",
                },
              ],
            },
            {
              label: "Document",
              children: [
                {
                  label: "GET",
                  route: "/public/document",
                },
              ],
            },
          ],
        },
        {
          label: "Partner API",
          icon: "lock",
        },
      ],
    };
  },
  computed: {
    filteredMenuTree() {
      const filterMenu = (items) => {
        return items
          .map((item) => {
            if (item.children) {
              const filteredChildren = filterMenu(item.children);
              if (filteredChildren.length) {
                return { ...item, children: filteredChildren };
              }
            }
            if (
              item.label.toLowerCase().includes(this.searchQuery.toLowerCase())
            ) {
              return item;
            }
            return null;
          })
          .filter((item) => item);
      };
      return filterMenu(this.menuTree);
    },
  },
};
</script>

<style scoped>
.menu {
  position: fixed;
  height: 100vh;
  width: 25%;
  left: 0;
  top: 10%;
  border-right: 1px solid #ececec;
  overflow: auto;
  transition: all 0.3s ease;
}
</style>
