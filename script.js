//Subscription form
function openForm() {
  document.getElementById("myForm").style.display = "block"
}

function closeForm() {
  document.getElementById("myForm").style.display = "none"
}

//language change
function changeLanguage(language) {
  const jsonPath = 'home-json/'

  fetch(jsonPath + language + '.json')
      .then(response => response.json())
      .then(data => {
          document.getElementById('nav-about').textContent = data.nav_about
          document.getElementById('nav-all-items').textContent = data.nav_all_items
          document.getElementById('nav-linux').textContent = data.nav_linux
          document.getElementById('nav-android').textContent = data.nav_android
          document.getElementById('nav-windows').textContent = data.nav_windows
          document.getElementById('nav-categories').textContent = data.nav_categories
          document.getElementById('nav-tutorials').textContent = data.nav_tutorials
          document.getElementById('nav-news').textContent = data.nav_news
          document.getElementById('nav-tools').textContent = data.nav_tools
          document.getElementById('nav-pricing').textContent = data.nav_pricing
          document.getElementById('nav-technology').textContent = data.nav_technology
          document.getElementById('nav-training').textContent = data.nav_training
          document.getElementById('nav-docs').textContent = data.nav_docs
          document.getElementById('nav-courses').textContent = data.nav_courses
          document.getElementById('nav-webinar').textContent = data.nav_webinar
          document.getElementById('subscribe-button').textContent = data.subscribe_button
          document.getElementById('subscribe-title').textContent = data.subscribe_title
          document.getElementById('subscribe-email').textContent = data.subscribe_email
          document.getElementById('subscribe-password').textContent = data.subscribe_password
          document.getElementById('subscribe-submit').textContent = data.subscribe_submit
          document.getElementById('subscribe-close').textContent = data.subscribe_close
          document.getElementById('search-section').textContent = data.search_placeholder
          document.getElementById('copyright').textContent = data.footer_reserved
          document.getElementById('copyright').textContent = data.footer_build_by
          
          const buttons = document.querySelectorAll('#language-buttons button');
          buttons.forEach(button => {
            if (button.id === language) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    });
}
