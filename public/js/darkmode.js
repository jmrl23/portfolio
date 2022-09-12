function loadTheme() {
  try {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))
      return document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('dark')
  } catch (_error) {}
}

function setTheme(key) {
  try {
    if (typeof key === 'undefined') {
      localStorage.removeItem('theme')
      return loadTheme()
    }
    const validKeys = ['light', 'dark']
    if (!validKeys.includes(key)) return
    localStorage.setItem('theme', key)
    loadTheme()
  } catch (_error) {}
}

(function() {
  loadTheme()
})()