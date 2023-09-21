const themes = document.querySelectorAll('[name="theme"]');

const storeTheme = (theme) => {
    localStorage.setItem("theme" , theme)
}

const loadTheme = () => {
    const activeTheme = localStorage.getItem("theme");
    themes.forEach((theme) => {
        if(theme.id === activeTheme) {
            theme.checked = true;
        }
    })
}

themes.forEach((theme) => {
    theme.addEventListener("click" , () => {
        storeTheme(theme.id);
    })
})

document.onload = loadTheme();