document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  navbar.innerHTML = `
<nav class=" fixed top-0 left-0 w-full z-50 bg-pink-200 shadow-md transition-all duration-300">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between h-16">

      <!-- Logo -->
      <a href="index.html" class="flex items-center space-x-2 rtl:space-x-reverse">
        <span class="text-pink-600 dark:text-pink-600 text-xl font-bold">
          Groww<span class="text-pink-600 dark:text-pink-600">Care</span>
        </span>
      </a>

      <!-- Desktop Nav -->
      <div class="hidden xl:flex flex-1 justify-center space-x-4 rtl:space-x-reverse items-center">

        <!-- Home Dropdown -->
        <div class="relative">
          <button id="homeBtn" class="flex items-center space-x-1 text-gray-800 dark:text-black px-3 py-2 rounded-lg hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
            Home <i class="fas fa-chevron-down text-xs"></i>
          </button>
          <div id="homeMenu" class="hidden absolute mt-2 w-48 bg-white dark:bg-pink-200 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
            <a href="index.html" class="home-link block px-4 py-2 text-gray-700 dark:text-black hover:bg-pink-50 dark:hover:bg-pink-300 hover:text-pink-600">Home 1</a>
            <a href="home2.html" class="home-link block px-4 py-2 text-gray-700 dark:text-black hover:bg-pink-50 dark:hover:bg-pink-300 hover:text-pink-600">Home 2</a>
          </div>
        </div>

        <a href="about.html" class="nav-link px-3 py-2 text-gray-800 dark:text-black hover:text-pink-800 dark:hover:text-pink-400 transition-colors">About</a>
        <a href="services.html" class="nav-link px-3 py-2 text-gray-800 dark:text-black hover:text-pink-600 dark:hover:text-pink-400 transition-colors">Services</a>
        <a href="programs.html" class="nav-link px-3 py-2 text-gray-800 dark:text-black hover:text-pink-600 dark:hover:text-pink-400 transition-colors">Programs</a>
        <a href="contact.html" class="nav-link px-3 py-2 text-gray-800 dark:text-black hover:text-pink-600 dark:hover:text-pink-400 transition-colors">Contact</a>

        <!-- Dashboard Dropdown -->
        <div class="relative">
          <button id="dashBtn" class="flex items-center space-x-1 px-3 py-2 text-gray-800 dark:text-black hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
            Dashboard <i class="fas fa-chevron-down text-xs"></i>
          </button>
          <div id="dashMenu" class="hidden absolute mt-2 w-48 bg-white dark:bg-pink-200  rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
            <a href="user.html" class="block px-4 py-2 text-gray-700 dark:text-black hover:bg-pink-50 dark:hover:bg-pink-300 hover:text-pink-600">User</a>
            <a href="admin.html" class="block px-4 py-2 text-gray-700 dark:text-black hover:bg-pink-50 dark:hover:bg-pink-300 hover:text-pink-600">Admin</a>
          </div>
        </div>

        <a href="login.html" class="px-4 py-2 bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white font-medium rounded-lg transition-colors">
          Login
        </a>
        <a href="signup.html" class="px-4 py-2 bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white font-medium rounded-lg transition-colors">
          Sign Up
        </a>
      </div>

      <!-- Right Controls - Desktop -->
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
        <!-- RTL -->
        <button id="rtlToggle" class="hidden xl:block text-sm font-semibold px-3 py-1 bg-gray-100 dark:bg-pink-300 text-gray-800 dark:text-pink-800 rounded hover:bg-gray-200 dark:hover:bg-pink-400">
          RTL
        </button>

        <!-- Dark Mode Toggle -->
        <button id="darkToggle" class="hidden xl:block text-xl text-gray-800 dark:text-pink-800">
          <i id="darkIcon" class="fas fa-moon"></i>
        </button>

        <!-- Mobile Button with Hamburger/Close Icon -->
        <button id="mobileBtn" class="xl:hidden text-2xl text-gray-800 dark:text-pink-800">
          <i id="mobileIcon" class="fas fa-bars"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div id="mobileMenu" class="xl:hidden hidden flex flex-col space-y-2 py-4 border-t border-gray-200 dark:border-pink-300">
      
      <!-- Mobile Home Dropdown -->
      <div class="relative">
        <button id="mobileHomeBtn" class="w-full flex items-center justify-between px-3 py-2 text-gray-800 dark:text-black hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
          <span>Home</span>
          <i id="mobileHomeIcon" class="fas fa-chevron-down text-xs"></i>
        </button>
        <div id="mobileHomeMenu" class="hidden mt-2 ml-4 w-full rounded-lg py-2">
          <a href="index.html" class="home-link block px-4 py-2 text-gray-700 dark:text-black hover:bg-pink-50 dark:hover:bg-pink-300 hover:text-pink-600 rounded">Home 1</a>
          <a href="home2.html" class="home-link block px-4 py-2 text-gray-700 dark:text-black hover:bg-pink-50 dark:hover:bg-pink-300 hover:text-pink-600 rounded">Home 2</a>
        </div>
      </div>

      <a href="about.html" class="px-3 py-2 text-gray-800 dark:text-black hover:text-pink-800 dark:hover:text-pink-400 transition-colors">About</a>
      <a href="services.html" class="px-3 py-2 text-gray-800 dark:text-black hover:text-pink-600 dark:hover:text-pink-400 transition-colors">Services</a>
      <a href="programs.html" class="px-3 py-2 text-gray-800 dark:text-black hover:text-pink-600 dark:hover:text-pink-400 transition-colors">Programs</a>
      <a href="contact.html" class="px-3 py-2 text-gray-800 dark:text-black hover:text-pink-600 dark:hover:text-pink-400 transition-colors">Contact</a>
      
      <!-- Mobile Dashboard Dropdown -->
      <div class="relative">
        <button id="mobileDashBtn" class="w-full flex items-center justify-between px-3 py-2 text-gray-800 dark:text-black hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
          <span>Dashboard</span>
          <i id="mobileDashIcon" class="fas fa-chevron-down text-xs"></i>
        </button>
        <div id="mobileDashMenu" class="hidden mt-2 ml-4 w-full rounded-lg py-2">
          <a href="user.html" class="block px-4 py-2 text-gray-700 dark:text-black hover:bg-pink-50 dark:hover:bg-pink-300 hover:text-pink-600 rounded">User</a>
          <a href="admin.html" class="block px-4 py-2 text-gray-700 dark:text-black hover:bg-pink-50 dark:hover:bg-pink-300 hover:text-pink-600 rounded"> Admin</a>
        </div>
      </div>

      <div class="flex flex-col space-y-2 pt-4 border-t border-gray-200 dark:border-pink-300">
        <a href="login.html" class="px-4 py-2 bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white font-medium rounded-lg text-center transition-colors">
          Login
        </a>
        <a href="signup.html" class="px-4 py-2 bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white font-medium rounded-lg text-center transition-colors">
          Sign Up
        </a>
        
        <!-- Mobile Toggle Buttons -->
        <div class="flex space-x-2 mt-4">
          <button id="mobileRtlToggle" class="flex-1 text-sm font-semibold px-3 py-2 bg-gray-100 dark:bg-pink-300 text-gray-800 dark:text-pink-800 rounded hover:bg-gray-200 dark:hover:bg-pink-400">
            RTL
          </button>
          <button id="mobileDarkToggle" class="flex-1 text-sm font-semibold px-3 py-2 bg-gray-100 dark:bg-pink-300 text-gray-800 dark:text-pink-800 rounded hover:bg-gray-200 dark:hover:bg-pink-400">
            <i id="mobileDarkIcon" class="fas fa-moon"></i> Theme
          </button>
        </div>
      </div>
    </div>

  </div>
</nav>
`;

  /* ===============================
     ACTIVE NAV LINK HIGHLIGHT
  =============================== */
  const currentPage = window.location.pathname.split("/").pop();
  console.log('Current page:', currentPage); // For debugging

  // Get all elements that need highlighting
  const homeBtn = document.getElementById("homeBtn");
  const mobileHomeBtn = document.getElementById("mobileHomeBtn");
  const homeLinks = document.querySelectorAll(".home-link");
  const allNavLinks = document.querySelectorAll("a[href]");
  const navButtons = [homeBtn, mobileHomeBtn].filter(btn => btn); // Remove null values

  // Define home pages (pages where Home button should be active)
  const homePages = ['', 'index.html', 'home.html', 'home1.html', 'home2.html', './', '/'];
  
  // Check if current page is any home page
  const isHomePageActive = homePages.includes(currentPage);

  // FIRST: Remove all active classes from everything
  allNavLinks.forEach(link => {
    link.classList.remove("text-pink-600", "font-bold");
  });
  
  navButtons.forEach(btn => {
    if (btn) btn.classList.remove("text-pink-600", "font-bold");
  });

  // SECOND: Add active classes based on current page

  // 1. Make Home buttons bold pink when on any home page
  if (isHomePageActive) {
    navButtons.forEach(btn => {
      if (btn) btn.classList.add("text-pink-600", "font-bold");
    });
  }

  // 2. Highlight the specific home link that matches current page
  homeLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    if (href === currentPage || 
        (currentPage === '' && href === 'index.html') ||
        (currentPage === 'index.html' && href === 'index.html') ||
        (currentPage === 'home1.html' && href === 'index.html') ||
        (currentPage === 'home2.html' && href === 'home2.html')) {
      link.classList.add("text-pink-600", "font-bold");
    }
  });

  // 3. Handle other nav links (About, Services, etc.)
  allNavLinks.forEach(link => {
    // Skip logo (first link with image/span)
    if (link.querySelector('img') || link.querySelector('span')?.classList.contains('text-xl')) {
      return;
    }
    
    // Skip home links (already handled)
    if (link.classList.contains('home-link')) return;
    
    const href = link.getAttribute('href');
    
    // Skip empty links and home pages
    if (!href || homePages.includes(href)) return;
    
    // Highlight exact matches for other pages
    if (href === currentPage) {
      link.classList.add("text-pink-600", "font-bold");
    }
  });

  /* ===============================
     DESKTOP DROPDOWNS
  =============================== */
  const homeMenu = document.getElementById("homeMenu");
  const dashBtn = document.getElementById("dashBtn");
  const dashMenu = document.getElementById("dashMenu");

  homeBtn?.addEventListener("click", e => {
    e.stopPropagation();
    homeMenu.classList.toggle("hidden");
    dashMenu.classList.add("hidden");
  });

  dashBtn?.addEventListener("click", e => {
    e.stopPropagation();
    dashMenu.classList.toggle("hidden");
    homeMenu.classList.add("hidden");
  });

  /* ===============================
     MOBILE DROPDOWNS
  =============================== */
  const mobileHomeMenu = document.getElementById("mobileHomeMenu");
  const mobileHomeIcon = document.getElementById("mobileHomeIcon");
  const mobileDashMenu = document.getElementById("mobileDashMenu");
  const mobileDashIcon = document.getElementById("mobileDashIcon");

  mobileHomeBtn?.addEventListener("click", e => {
    e.stopPropagation();
    const isHidden = mobileHomeMenu.classList.toggle("hidden");
    mobileHomeIcon.className = isHidden ? "fas fa-chevron-down text-xs" : "fas fa-chevron-up text-xs";
    mobileDashMenu.classList.add("hidden");
    mobileDashIcon.className = "fas fa-chevron-down text-xs";
  });

  mobileDashBtn?.addEventListener("click", e => {
    e.stopPropagation();
    const isHidden = mobileDashMenu.classList.toggle("hidden");
    mobileDashIcon.className = isHidden ? "fas fa-chevron-down text-xs" : "fas fa-chevron-up text-xs";
    mobileHomeMenu.classList.add("hidden");
    mobileHomeIcon.className = "fas fa-chevron-down text-xs";
  });

  /* ===============================
     MOBILE MENU TOGGLE WITH HAMBURGER/CLOSE ICON
  =============================== */
  const mobileBtn = document.getElementById("mobileBtn");
  const mobileIcon = document.getElementById("mobileIcon");
  const mobileMenu = document.getElementById("mobileMenu");

  mobileBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    const isHidden = mobileMenu.classList.toggle("hidden");
    
    // Toggle between hamburger and close icons
    if (isHidden) {
      mobileIcon.className = "fas fa-bars";
    } else {
      mobileIcon.className = "fas fa-times";
      
      // Close all mobile dropdowns when opening menu
      mobileHomeMenu?.classList.add("hidden");
      mobileDashMenu?.classList.add("hidden");
      if (mobileHomeIcon) mobileHomeIcon.className = "fas fa-chevron-down text-xs";
      if (mobileDashIcon) mobileDashIcon.className = "fas fa-chevron-down text-xs";
    }
  });

  // Close mobile menu when clicking a link (optional)
  const mobileLinks = mobileMenu?.querySelectorAll('a');
  mobileLinks?.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add("hidden");
      mobileIcon.className = "fas fa-bars";
      
      // Close all mobile dropdowns
      mobileHomeMenu?.classList.add("hidden");
      mobileDashMenu?.classList.add("hidden");
      if (mobileHomeIcon) mobileHomeIcon.className = "fas fa-chevron-down text-xs";
      if (mobileDashIcon) mobileDashIcon.className = "fas fa-chevron-down text-xs";
    });
  });

  /* ===============================
     CLOSE DROPDOWNS WHEN CLICKING OUTSIDE
  =============================== */
  document.addEventListener("click", (e) => {
    // Don't close if clicking inside mobile menu or mobile button
    if (mobileMenu?.contains(e.target) || mobileBtn?.contains(e.target)) {
      return;
    }
    
    homeMenu?.classList.add("hidden");
    dashMenu?.classList.add("hidden");
    mobileHomeMenu?.classList.add("hidden");
    mobileDashMenu?.classList.add("hidden");
    if (mobileHomeIcon) mobileHomeIcon.className = "fas fa-chevron-down text-xs";
    if (mobileDashIcon) mobileDashIcon.className = "fas fa-chevron-down text-xs";
    
    // Close mobile menu when clicking outside
    if (!mobileBtn?.contains(e.target)) {
      mobileMenu?.classList.add("hidden");
      if (mobileIcon) mobileIcon.className = "fas fa-bars";
    }
  });

  /* ===============================
     DARK MODE - FIXED FOR DEFAULT LIGHT THEME
  =============================== */
  const darkToggle = document.getElementById("darkToggle");
  const mobileDarkToggle = document.getElementById("mobileDarkToggle");
  const darkIcon = document.getElementById("darkIcon");
  const mobileDarkIcon = document.getElementById("mobileDarkIcon");
  
  // FORCE LIGHT THEME BY DEFAULT - Remove any saved dark theme
  localStorage.setItem('theme', 'light');
  document.documentElement.classList.remove('dark');
  
  function updateThemeIcons(isDark) {
    if (darkIcon) {
      darkIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }
    if (mobileDarkIcon) {
      mobileDarkIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }
  }
  
  // Initialize with light theme
  updateThemeIcons(false);

  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    
    if (isDark) {
      localStorage.setItem('theme', 'dark');
      updateThemeIcons(true);
    } else {
      localStorage.setItem('theme', 'light');
      updateThemeIcons(false);
    }
  }

  darkToggle?.addEventListener('click', toggleTheme);
  mobileDarkToggle?.addEventListener('click', toggleTheme);
 
  
  /* ===============================
     RTL MODE
  =============================== */
  const rtlToggle = document.getElementById("rtlToggle");
  const mobileRtlToggle = document.getElementById("mobileRtlToggle");

  function toggleRTL() {
    document.documentElement.dir =
      document.documentElement.dir === "rtl" ? "ltr" : "rtl";
  }

  rtlToggle?.addEventListener("click", toggleRTL);
  mobileRtlToggle?.addEventListener("click", toggleRTL);

});