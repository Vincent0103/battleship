import './style.css';
import DOM from './DOM.js';

window.addEventListener('DOMContentLoaded', () => {
  const page = DOM();
  const pageContainer = document.querySelector('.page-container');
  page.addContent().forEach((gridContainer) => {
    pageContainer.appendChild(gridContainer);
  });
});
