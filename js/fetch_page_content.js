function fetchPageContent() {
    const sections = ['about', 'event', 'contact', 'gifts', 'gallery'];
    
    sections.forEach(section => {
      fetch(`../html/${section}.html`)
        .then(response => response.text())
        .then(html => {
          document.querySelector(`#${section}`).innerHTML = html;
        })
        .catch(error => console.error(`Error fetching ${section} content:`, error));
    });
  }