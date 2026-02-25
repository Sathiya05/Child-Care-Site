/* ===============================
   DARK MODE - FIXED FOR PERSISTENCE ACROSS PAGES
   =============================== */

// This self-executing function runs BEFORE the page renders
// Place this at the VERY TOP of your navbar.js file, outside DOMContentLoaded
(function() {
  try {
    // Get theme from localStorage
    let theme = localStorage.getItem('theme');
    
    // If no theme saved or invalid, default to light
    if (theme !== 'dark' && theme !== 'light') {
      theme = 'light';
      localStorage.setItem('theme', 'light');
    }
    
    // Apply theme to HTML element immediately
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {
    // Fallback to light if anything fails
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
})();

// Main DOM Content Loaded event
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
        
        <!-- Login (RIGHT SIDE) -->
        <a href="login.html" class="hidden xl:block px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg transition-colors">
          Login
        </a>

        <!-- Sign Up (RIGHT SIDE) -->
        <a href="signup.html" class="hidden xl:block px-4 py-2 bg-white hover:bg-pink-300 text-black font-medium rounded-lg transition-colors">
          Sign Up
        </a>

      

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

       <!-- Mobile Login & Signup (SAME AS BEFORE ABOVE TOGGLES) -->
      <div class="flex flex-col space-y-2 pt-4 border-t border-gray-200">
        <a href="login.html" class="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg text-center transition-colors">
          Login
        </a>
        <a href="signup.html" class="px-4 py-2 bg-white hover:bg-pink-300 text-black font-medium rounded-lg text-center transition-colors">
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
     DARK MODE TOGGLE FUNCTIONALITY
  =============================== */
  const darkToggle = document.getElementById("darkToggle");
  const mobileDarkToggle = document.getElementById("mobileDarkToggle");
  const darkIcon = document.getElementById("darkIcon");
  const mobileDarkIcon = document.getElementById("mobileDarkIcon");

  function updateThemeIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    if (darkIcon) darkIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    if (mobileDarkIcon) mobileDarkIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
  }

  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcons();
  }

  // Set initial icons based on current theme
  updateThemeIcons();

  if (darkToggle) darkToggle.addEventListener('click', toggleTheme);
  if (mobileDarkToggle) mobileDarkToggle.addEventListener('click', toggleTheme);

  /* ===============================
     RTL MODE
  =============================== */
  const rtlToggle = document.getElementById("rtlToggle");
  const mobileRtlToggle = document.getElementById("mobileRtlToggle");

  function toggleRTL() {
    document.documentElement.dir = document.documentElement.dir === "rtl" ? "ltr" : "rtl";
  }

  if (rtlToggle) rtlToggle.addEventListener("click", toggleRTL);
  if (mobileRtlToggle) mobileRtlToggle.addEventListener("click", toggleRTL);

  /* ===============================
     DROPDOWNS & MOBILE MENU (your existing code)
  =============================== */
  const homeBtn = document.getElementById("homeBtn");
  const homeMenu = document.getElementById("homeMenu");
  const dashBtn = document.getElementById("dashBtn");
  const dashMenu = document.getElementById("dashMenu");

  function closeAllDropdowns() {
    if (homeMenu) homeMenu.classList.add('hidden');
    if (dashMenu) dashMenu.classList.add('hidden');
    if (mobileHomeMenu) mobileHomeMenu.classList.add('hidden');
    if (mobileDashMenu) mobileDashMenu.classList.add('hidden');
    if (mobileHomeIcon) mobileHomeIcon.className = 'fas fa-chevron-down text-xs';
    if (mobileDashIcon) mobileDashIcon.className = 'fas fa-chevron-down text-xs';
  }

  if (homeBtn && homeMenu) {
    homeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = homeMenu.classList.contains('hidden');
      closeAllDropdowns();
      if (isHidden) homeMenu.classList.remove('hidden');
    });
  }

  if (dashBtn && dashMenu) {
    dashBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = dashMenu.classList.contains('hidden');
      closeAllDropdowns();
      if (isHidden) dashMenu.classList.remove('hidden');
    });
  }

  const mobileHomeBtn = document.getElementById("mobileHomeBtn");
  const mobileHomeMenu = document.getElementById("mobileHomeMenu");
  const mobileHomeIcon = document.getElementById("mobileHomeIcon");
  const mobileDashBtn = document.getElementById("mobileDashBtn");
  const mobileDashMenu = document.getElementById("mobileDashMenu");
  const mobileDashIcon = document.getElementById("mobileDashIcon");

  if (mobileHomeBtn && mobileHomeMenu) {
    mobileHomeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = mobileHomeMenu.classList.contains('hidden');
      if (mobileDashMenu) mobileDashMenu.classList.add('hidden');
      if (mobileDashIcon) mobileDashIcon.className = 'fas fa-chevron-down text-xs';
      
      mobileHomeMenu.classList.toggle('hidden');
      mobileHomeIcon.className = isHidden ? 'fas fa-chevron-up text-xs' : 'fas fa-chevron-down text-xs';
    });
  }

  if (mobileDashBtn && mobileDashMenu) {
    mobileDashBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = mobileDashMenu.classList.contains('hidden');
      if (mobileHomeMenu) mobileHomeMenu.classList.add('hidden');
      if (mobileHomeIcon) mobileHomeIcon.className = 'fas fa-chevron-down text-xs';
      
      mobileDashMenu.classList.toggle('hidden');
      mobileDashIcon.className = isHidden ? 'fas fa-chevron-up text-xs' : 'fas fa-chevron-down text-xs';
    });
  }

  const mobileBtn = document.getElementById("mobileBtn");
  const mobileIcon = document.getElementById("mobileIcon");
  const mobileMenu = document.getElementById("mobileMenu");

  if (mobileBtn && mobileIcon && mobileMenu) {
    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      mobileIcon.className = isHidden ? 'fas fa-times' : 'fas fa-bars';
      
      if (!isHidden) {
        if (mobileHomeMenu) mobileHomeMenu.classList.add('hidden');
        if (mobileDashMenu) mobileDashMenu.classList.add('hidden');
        if (mobileHomeIcon) mobileHomeIcon.className = 'fas fa-chevron-down text-xs';
        if (mobileDashIcon) mobileDashIcon.className = 'fas fa-chevron-down text-xs';
      }
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileIcon.className = 'fas fa-bars';
      });
    });
  }

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.relative') && !e.target.closest('#mobileBtn') && 
        !e.target.closest('#mobileHomeBtn') && !e.target.closest('#mobileDashBtn')) {
      closeAllDropdowns();
    }
    
    if (mobileMenu && !mobileMenu.contains(e.target) && !mobileBtn?.contains(e.target)) {
      mobileMenu.classList.add('hidden');
      if (mobileIcon) mobileIcon.className = 'fas fa-bars';
    }
  });

  /* ===============================
     ACTIVE LINK HIGHLIGHT
  =============================== */
  const currentPage = window.location.pathname.split("/").pop() || 'index.html';
  const homePages = ['', 'index.html', 'home.html', 'home1.html', 'home2.html'];
  const isHomePage = homePages.includes(currentPage);

  document.querySelectorAll('.nav-link, .home-link, #homeBtn, #mobileHomeBtn, #dashBtn, #mobileDashBtn')
    .forEach(el => el?.classList.remove('text-pink-600', 'font-bold'));

  if (isHomePage) {
    if (homeBtn) homeBtn.classList.add('text-pink-600', 'font-bold');
    if (mobileHomeBtn) mobileHomeBtn.classList.add('text-pink-600', 'font-bold');
  }

  document.querySelectorAll('.home-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
      link.classList.add('text-pink-600', 'font-bold');
    }
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('text-pink-600', 'font-bold');
    }
  });
});