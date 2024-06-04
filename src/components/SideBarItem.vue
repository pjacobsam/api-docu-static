<template>
  <div class="menu-item" :class="{ expanded: expanded }">
    <div class="label" @click="toggleMenu()" :style="{paddingLeft: depth * 20 + 20 + 'px'}">
      <div>
        <i v-if="icon" :class="`bi bi-${icon}`"></i>
        <router-link :to="route" v-if="route" class="text-decoration-none">{{ label }}</router-link>
        <span v-else>{{label}}</span>
      </div>
      <div class="right" v-if="data">
        <i class="bi bi-chevron-down expand" :class="{ expanded: expanded }"></i>
      </div>
    </div>
    <div
      class="items-container"
      v-show="showChildren"
      ref="container"
      :style="{ height: containerHeight }"
    >
      <side-bar-item
        v-for="(item, index) in data"
        :key="index"
        :label="item.label"
        :route="item.route"
        :icon="item.icon"
        :depth="depth + 1"
        :data="item.children"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBarItem",
  props: {
    label: {
      type: String,
      required: true,
    },
    route:{
        type:String,
        required: true
    },
    icon: {
      type: String,
    },
    depth: {
      type: Number,
      required: true,
    },
    data: {
      type: Array,
    },
  },
  data() {
    return {
      showChildren: false,
      expanded: false,
      containerHeight: 0,
    };
  },
  methods: {
    toggleMenu() {
      //   this.showChildren = !this.showChildren;
      this.expanded = !this.expanded;
      if (!this.showChildren) {
        this.showChildren = true;
        this.$nextTick(() => {
          this.containerHeight = this.$refs["container"].scrollHeight + "px";
          setTimeout(() => {
            this.containerHeight = "fit-content";
            this.$refs["container"].style.overflow = "visible";
          }, 300);
        });
      } else {
        this.containerHeight = this.$refs["container"].scrollHeight + "px";
        this.$refs["container"].style.overflow = "hidden";
        setTimeout(() => {
          this.containerHeight = 0 + "px";
        }, 10);
        setTimeout(() => {
          this.showChildren = false;
        }, 300);
      }
    },
  },
};
</script>

<style scoped>
.menu-item {
  position: relative;
  width: 100%;
}

.menu-item .label:hover {
  background-color: #deedff;
  cursor: pointer;
}

.menu-item .label {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  white-space: nowrap;
  user-select: none;
  height: 50px;
  padding: 0 20px;
  box-sizing: border-box;
  color: #6a6a6a;
  transition: all 0.3s ease;
}

.menu-item .label a {
  color: #6a6a6a;
}

.menu-item .label div {
  display: flex;
  align-items: center;
  gap: 10px;
}

.menu-item .label i {
  font-size: 20px;
  color: #6a6a6a;
  transition: all 0.3s ease;
}

.menu-item .label i.expand {
  font-size: 16px;
  color: #cacaca;
}
.menu-item .label i.expand.expanded {
  transform: rotate(180deg);
}
.menu-item .item-container {
  width: 100%;
  overflow: hidden;
  transition: height 0.3s ease;
}
</style>
