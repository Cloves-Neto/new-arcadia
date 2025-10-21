
document.addEventListener('DOMContentLoaded', () => {
    const loadComponent = (name) => {
        const placeholder = document.getElementById(`${name}-placeholder`);
        if (!placeholder) {
            console.error(`Placeholder for component ${name} not found.`);
            return;
        }

        const baseUrl = 'src/components';

        // Fetch and inject HTML
        fetch(`${baseUrl}/${name}/${name}.html`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch HTML for component ${name}`);
                }
                return response.text();
            })
            .then(html => {
                // Create a temporary container to parse the HTML
                const temp = document.createElement('div');
                temp.innerHTML = html.trim();
                
                // Replace the placeholder with the loaded content's first element
                const componentElement = temp.firstChild;
                if (componentElement) {
                    placeholder.replaceWith(componentElement);
                } else {
                     console.error(`No valid HTML element found for component ${name}`);
                }
            })
            .catch(error => console.error(`Error loading component ${name}:`, error));

        // Create and append CSS link
        const cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.href = `${baseUrl}/${name}/${name}.css`;
        document.head.appendChild(cssLink);
    };

    loadComponent('header');
    loadComponent('footer');
});
