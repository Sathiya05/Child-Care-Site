document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
<footer class="w-full bg-pink-200 text-gray-800 dark:text-gray-200">
  <div class="max-w-7xl mx-auto px-4 py-14 grid gap-10
              grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">

    <!-- Brand -->
    <div>
      <a href="index.html" class="flex items-center space-x-2 rtl:space-x-reverse">
       
        <span class="text-pink-600 dark:text-pink-600 text-xl font-bold">
          Groww<span class="text-pink-600 dark:text-pink-600">Care</span>
        </span>
      </a>
      <p class="mt-3 text-sm text-gray-600 dark:text-gray-800">
        Nurturing young minds with love, care, and early childhood education.
      </p>

      <!-- Social -->
      <div class="mt-5 flex gap-3">
        <a class="w-9 h-9 grid place-items-center rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-pink-100 dark:hover:bg-pink-900 text-gray-700 dark:text-gray-300 hover:text-pink-600">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a class="w-9 h-9 grid place-items-center rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-pink-100 dark:hover:bg-pink-900 text-gray-700 dark:text-gray-300 hover:text-pink-600">
          <i class="fab fa-instagram"></i>
        </a>
        <a class="w-9 h-9 grid place-items-center rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-pink-100 dark:hover:bg-pink-900 text-gray-700 dark:text-gray-300 hover:text-pink-600">
          <i class="fab fa-twitter"></i>
        </a>
      </div>
    </div>

    <!-- Programs -->
    <div>
      <h3 class="text-lg font-semibold text-gray-800 dark:text-pink-600 mb-3">Our Programs</h3>
      <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-800">
        <li class="hover:text-pink-600 dark:hover:text-pink-400 cursor-pointer">Infant Care (0-1 years)</li>
        <li class="hover:text-pink-600 dark:hover:text-pink-400 cursor-pointer">Toddler Program (1-3 years)</li>
        <li class="hover:text-pink-600 dark:hover:text-pink-400 cursor-pointer">Preschool (3-5 years)</li>
        <li class="hover:text-pink-600 dark:hover:text-pink-400 cursor-pointer">After School Care</li>
      </ul>
    </div>

    <!-- Quick Links -->
    <div>
      <h3 class="text-lg font-semibold text-gray-800 dark:text-pink-600 mb-3">Quick Links</h3>
      <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-800">
        <li><a href="index.html" class="hover:text-pink-600 dark:hover:text-pink-400">Home</a></li>
        <li><a href="about.html" class="hover:text-pink-600 dark:hover:text-pink-400">About </a></li>
        <li><a href="programs.html" class="hover:text-pink-600 dark:hover:text-pink-400">Services</a></li>
        <li><a href="contact.html" class="hover:text-pink-600 dark:hover:text-pink-400">Contact </a></li>
      </ul>
    </div>

    <!-- Resources -->
    <div>
      <h3 class="text-lg font-semibold text-gray-800 dark:text-pink-600 mb-3">Resources</h3>
      <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-800">
        <li class="hover:text-pink-600 dark:hover:text-pink-400 cursor-pointer">Parent Handbook</li>
        <li class="hover:text-pink-600 dark:hover:text-pink-400 cursor-pointer">Daily Schedule</li>
        <li class="hover:text-pink-600 dark:hover:text-pink-400 cursor-pointer">Nutrition Menu</li>
        <li class="hover:text-pink-600 dark:hover:text-pink-400 cursor-pointer">FAQ</li>
      </ul>
    </div>

    <!-- Newsletter -->
    <div>
      <h3 class="text-lg font-semibold text-gray-800 dark:text-pink-600 mb-3">Join Our Newsletter</h3>
      <p class="text-sm text-gray-600 mb-3 dark:text-gray-800">
        Get parenting tips, updates, and childcare insights.
      </p>

      <form class="flex flex-col gap-2">
        <input type="email"
          placeholder="Enter your email"
          class="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600
                 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent">
        <button
          class="px-4 py-2 rounded-lg bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white font-medium transition-colors">
          Subscribe
        </button>
      </form>
      
    
    </div>
  </div>

  <!-- Bottom -->
  <div class="border-t border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row gap-3 
                justify-between text-sm text-gray-600 dark:text-gray-800">

      <p>© 2024 GrowwCare Child Daycare. All rights reserved.</p>

      <div class="flex gap-4">
        <a class="hover:text-pink-600 dark:hover:text-pink-400 cursor-pointer">Privacy Policy</a>
        <a class="hover:text-pink-600 dark:hover:text-pink-400 cursor-pointer">Terms of Service</a>
        <a class="hover:text-pink-600 dark:hover:text-pink-400 cursor-pointer">Careers</a>
      </div>
    </div>
  </div>
</footer>
`;

  // Add event listeners for newsletter form
  const newsletterForm = footer.querySelector('form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput.value) {
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
      }
    });
  }

  // Add hover effects for list items
  const listItems = footer.querySelectorAll('li[class*="hover"]');
  listItems.forEach(item => {
    item.addEventListener('click', () => {
      // Add your navigation logic here
      console.log('Clicked:', item.textContent);
    });
  });

  // Add click handlers for bottom links
  const bottomLinks = footer.querySelectorAll('.border-t a');
  bottomLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Clicked footer link:', link.textContent);
    });
  });
});