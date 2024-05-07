export function setTheme(theme: string) {
    localStorage.setItem('theme', JSON.stringify(theme));
}