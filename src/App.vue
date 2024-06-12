<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light sticky-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">API Documentation</router-link>
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
             <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/chm">Link</router-link>
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
        <router-link v-if="!isAuthenticated" class="ms-3 text-secondary text-decoration-none" to="/login"
          >Login / Signin</router-link
        >
        <a v-else class="ms-3 nav-link text-secondary text-decoration-none" href="#" @click="logout">Logout</a>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      isAuthenticated: !!localStorage.getItem("authToken"),
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("authToken");
      this.isAuthenticated = false;
      this.$router.push("/");
    },
  },
  watch: {
    // Watch for changes in localStorage to update isAuthenticated
    $route() {
      this.isAuthenticated = !!localStorage.getItem("authToken");
    },
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

::after,
::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}

li {
    list-style: none;
}

h1 {
    font-weight: 600;
    font-size: 1.5rem;
}

body {
    font-family: 'Poppins', sans-serif;
}
</style>
