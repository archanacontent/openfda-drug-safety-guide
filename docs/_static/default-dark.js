// Open in dark mode unless the visitor has already chosen a theme
try {
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "dark");
    if (document.body) document.body.dataset.theme = "dark";
  }
} catch (e) {}
