document.addEventListener('DOMContentLoaded', function () {

  let theme = 'light';
  if (localStorage.getItem('theme')) {
    if (localStorage.getItem('theme') === 'dark') {
      theme = 'dark';
    }
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme = 'dark';
  }

  /*
  And here is the edit to the second block of JS, plus related HTML. `theme_switch` toggles the theme, while `theme_OS` automatically updates the site's theme with changes to the OS theme.
  */

  function theme_apply() {
    'use strict';
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  }
  theme_apply();
  function theme_switch() {
    'use strict';
    if (theme === 'light') {
      theme = 'dark';
    } else {
      theme = 'light';
    }
    theme_apply();
  }
  const theme_OS = window.matchMedia('(prefers-color-scheme: light)');
  theme_OS.addEventListener('change', function (e) {
    'use strict';
    if (e.matches) {
      theme = 'light';
    } else {
      theme = 'dark';
    }
    theme_apply();
  });

  // add toggle button to account list
  const accountList = document.querySelector('#account ul');
  if (accountList) {
    const li = document.createElement('li');
    const btn = document.createElement('a');
    btn.id = 'theme-toggle';
    function updateToggleText() {
      btn.textContent = theme === 'dark' ? 'Light' : 'Dark';
    }
    updateToggleText();

    li.appendChild(btn);
    accountList.appendChild(li);

    btn.addEventListener('click', function () {
      theme_switch();
      updateToggleText();
    });
  }
});
