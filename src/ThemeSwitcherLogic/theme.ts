// theme.ts

export type Theme = 'theme1' | 'theme2' | 'theme3';

// Set theme in localStorage and apply to document
export const setTheme = (theme: Theme): void => {
  // Save to localStorage
  localStorage.setItem('theme', theme);
  
  // Set the theme on the document element
  document.documentElement.setAttribute('data-theme', theme);
  
  // Add transition class for smooth change
  document.documentElement.classList.add('theme-transition');
  setTimeout(() => {
    document.documentElement.classList.remove('theme-transition');
  }, 300);
};

// Get saved theme from localStorage or return default
export const getSavedTheme = (): Theme => {
  const savedTheme = localStorage.getItem('theme') as Theme | null;
  return savedTheme || 'theme1';
};

// Initialize theme on page load
export const initTheme = (): void => {
  const savedTheme = getSavedTheme();
  setTheme(savedTheme);
};

// Theme transition CSS (add to your main CSS)
/*
.theme-transition {
  transition: 
    background-color 0.3s,
    color 0.3s,
    border-color 0.3s;
}
*/