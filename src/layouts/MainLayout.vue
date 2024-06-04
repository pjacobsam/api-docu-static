<template>
  
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >Disabled</a
            >
          </li>
        </ul>
        <router-link class="ms-3 nav-link" to="/login">Login / Signin</router-link>
      </div>
    </div>
  </nav>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <SideBar />
      </div>
      <div class="col-md-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue"

export default {
  name: "MainLayout",
  components:{
    SideBar
  },
  data() {
  },
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

.markdown-content th, .markdown-content td {
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
