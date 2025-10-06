// Product data array
const products = [
    { id: "fc-1888", name: "flux capacitor" },
    { id: "fc-2050", name: "power laces" },
    { id: "fs-1987", name: "time circuits" },
    { id: "ac-2000", name: "low voltage reactor" },
    { id: "jj-1969", name: "warp equalizer" }
];

// Populate product select options
document.addEventListener('DOMContentLoaded', function() {
    const productSelect = document.getElementById('product-name');
    
    // Clear any existing options except the first one
    while (productSelect.children.length > 1) {
        productSelect.removeChild(productSelect.lastChild);
    }
    
    // Add product options to select element
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1);
        productSelect.appendChild(option);
    });
    
    // Set current year in footer
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
});