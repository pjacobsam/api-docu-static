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
        <input type="text" class="form-control w-75 mx-auto">
      </div>
      <ul class="sidebar-nav">
        <li class="sidebar-item">
          <a href="#" class="sidebar-link">
            <!-- <i class="bi bi-person"></i>
            <span>Profile</span> -->
          </a>
        </li>
        <li class="sidebar-item">
          <router-link to="/" class="sidebar-link">
            <i class="bi bi-list-task"></i>
            <span>Introduction</span>
          </router-link>
        </li>
        <li class="sidebar-item">
          <a
            href="#"
            class="sidebar-link has-dropdown collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#auth"
            aria-expanded="false"
            aria-controls="auth"
          >
            <i class="bi bi-shield-lock"></i>
            <span>IRCC</span>
          </a>
          <ul
            id="auth"
            class="sidebar-dropdown list-unstyled collapse"
            data-bs-parent="#sidebar"
          >
            <li class="sidebar-item">
              <router-link to="/bch/partner/ircc/documents" class="sidebar-link">Documents</router-link>
            </li>
          </ul>
        </li>
        <li class="sidebar-item">
          <a
            href="#"
            class="sidebar-link has-dropdown collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#cna"
            aria-expanded="false"
            aria-controls="cna"
          >
            <i class="bi bi-shield-lock"></i>
            <span>CNA</span>
          </a>
          <ul
            id="cna"
            class="sidebar-dropdown list-unstyled collapse"
            data-bs-parent="#sidebar"
          >
            <li class="sidebar-item">
              <router-link to="/bch/partner/cna/documents" class="sidebar-link">Documents</router-link>
            </li>
          </ul>
        </li>
        <!-- <li class="sidebar-item">
          <a
            href="#"
            class="sidebar-link has-dropdown collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#multi"
            aria-expanded="false"
            aria-controls="multi"
          >
            <i class="bi bi-columns"></i>
            <span>Multi Level</span>
          </a>
          <ul
            id="multi"
            class="sidebar-dropdown list-unstyled collapse"
            data-bs-parent="#sidebar"
          >
            <li class="sidebar-item">
              <a
                href="#"
                class="sidebar-link collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#multi-two"
                aria-expanded="false"
                aria-controls="multi-two"
              >
                Two Links
              </a>
              <ul
                id="multi-two"
                class="sidebar-dropdown list-unstyled collapse"
              >
                <li class="sidebar-item">
                  <a href="#" class="sidebar-link">Link 1</a>
                </li>
                <li class="sidebar-item">
                  <a href="#" class="sidebar-link">Link 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </li> -->
        <!-- <li class="sidebar-item">
          <a href="#" class="sidebar-link">
            <i class="bi bi-bell"></i>
            <span>Notification</span>
          </a>
        </li>
        <li class="sidebar-item">
          <a href="#" class="sidebar-link">
            <i class="bi bi-gear"></i>
            <span>Setting</span>
          </a>
        </li> -->
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
export default {
  name: "SideBar",
  mounted() {
    const hamburger = document.querySelector("#toggle-btn");

    hamburger.addEventListener("click", function () {
      document.querySelector("#sidebar").classList.toggle("expand");
    });
  },
};
</script>

<style scoped>

.wrapper {
    display: flex;
    height: calc(100vh - 56px);
    position: sticky;
    left:0;
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
    transition: all .25s ease-in-out;
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
    color: #FFF;
}

.sidebar-logo {
    margin: auto 0;
}

.sidebar-logo a {
    color: #FFF;
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
    padding: .625rem 1.625rem;
    color: #FFF;
    display: block;
    font-size: 0.9rem;
    white-space: nowrap;
    border-left: 3px solid transparent;
}

.sidebar-link i {
    font-size: 1.1rem;
    margin-right: .75rem;
}

a.sidebar-link:hover {
    background-color: rgba(255, 255, 255, .075);
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

#sidebar:not(.expand) .sidebar-item:hover .has-dropdown+.sidebar-dropdown {
    display: block;
    max-height: 15em;
    width: 100%;
    opacity: 1;
}

#sidebar.expand .sidebar-link[data-bs-toggle="collapse"]::after {
    border: solid;
    border-width: 0 .075rem .075rem 0;
    content: "";
    display: inline-block;
    padding: 2px;
    position: absolute;
    right: 1.5rem;
    top: 1.4rem;
    transform: rotate(-135deg);
    transition: all .2s ease-out;
}

#sidebar.expand .sidebar-link[data-bs-toggle="collapse"].collapsed::after {
    transform: rotate(45deg);
    transition: all .2s ease-out;
}
</style>
