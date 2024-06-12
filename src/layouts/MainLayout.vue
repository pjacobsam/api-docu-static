<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col d-flex p-0">
        <SideBar />
        <div class="ps-4" style="overflow-y: scroll; width: 100%;">
          <div class="row">
            <div class="col-11">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="col-md-9">
      </div> -->
    </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";

export default {
  name: "MainLayout",
  components: {
    SideBar,
  },
  data() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.markdown-content table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0; /* Optional: adds some spacing around the table */
}

.markdown-content th,
.markdown-content td {
  border: 1px solid #ddd;
  padding: 8px;
}

.markdown-content th {
  background-color: #f2f2f2;
  text-align: left; /* Optional: aligns text to the left in header cells */
}

.markdown-content tr:nth-child(even) {
  background-color: #f9f9f9; /* Optional: adds zebra striping to the table rows */
}

.markdown-content tr:hover {
  background-color: #f1f1f1; /* Optional: adds a hover effect to table rows */
}

.markdown-content h1,
.markdown-content h2,
.markdown-content h3,
.markdown-content h4,
.markdown-content h5,
.markdown-content h6 {
  margin-top: 25px; /* Adjust the value as needed */
  text-decoration: underline;
}

.markdown-content h1 {
  margin-top: 15px; /* More space for the main heading */
  text-decoration: none;
}
</style>
