export function getTheme() {
    const json = localStorage.getItem('theme');

    if (!json) {
      return null;
    }
  
    const user = JSON.parse(json);
  
    return user ?? null;
}