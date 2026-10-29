# Sphinx configuration for the openFDA Drug Safety Developer Guide
project = "openFDA Drug Safety Developer Guide"
author = "Archana Panda"
copyright = "2026, Archana Panda. Licensed under CC BY 4.0"
language = "en"

extensions = [
    "sphinx_copybutton",
    "sphinxext.opengraph",
]

html_theme = "furo"
html_title = "openFDA Drug Safety Developer Guide"
html_static_path = ["_static"]
html_baseurl = "https://archanacontent.github.io/openfda-drug-safety-guide/"
html_show_sourcelink = False
html_copy_source = False

html_css_files = ["custom.css", "vendor/driver.css", "tour.css"]
html_js_files = [
    ("default-dark.js", {"priority": 100}),
    "vendor/driver.js.iife.js",
    "tour.js",
    "charts.js",
]

ogp_site_url = "https://archanacontent.github.io/openfda-drug-safety-guide/"
ogp_image = "https://archanacontent.github.io/openfda-drug-safety-guide/_static/og.png"
ogp_description_length = 200
ogp_enable_meta_description = True

html_theme_options = {
    "source_repository": "https://github.com/archanacontent/openfda-drug-safety-guide",
    "source_branch": "main",
    "source_directory": "docs/",
    "top_of_page_buttons": [],
    "light_css_variables": {
        "color-brand-primary": "#24104f",
        "color-brand-content": "#5a2bc2",
        "color-brand-visited": "#5a2bc2",
        "color-background-primary": "#ffffff",
        "color-background-secondary": "#f7f5fc",
        "color-sidebar-background": "#f4f1fa",
        "color-highlighted-background": "#ece4ff",
        "font-stack": "'IBM Plex Sans', system-ui, -apple-system, sans-serif",
        "font-stack--monospace": "'IBM Plex Mono', ui-monospace, Menlo, monospace",
        "font-stack--headings": "'IBM Plex Sans', system-ui, -apple-system, sans-serif",
    },
    "dark_css_variables": {
        "color-brand-primary": "#d9caff",
        "color-brand-content": "#b9a0ff",
        "color-brand-visited": "#b9a0ff",
        "color-background-primary": "#120a24",
        "color-background-secondary": "#170e2e",
        "color-sidebar-background": "#160c2e",
        "color-highlighted-background": "#2a1a52",
        "color-code-background": "#1c1236",
    },
}

pygments_style = "friendly"
pygments_dark_style = "monokai"
