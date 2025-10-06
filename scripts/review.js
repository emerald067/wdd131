document.addEventListener('DOMContentLoaded', function() {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    
    // Check if we have form data (indicating a real submission)
    const hasFormData = urlParams.has('product-name') || 
                       urlParams.has('rating') || 
                       urlParams.has('installation-date');
    
    if (hasFormData) {
        // This is a real form submission, increment the counter
        let reviewCount = localStorage.getItem('reviewCount');
        
        if (reviewCount === null) {
            reviewCount = 1;
        } else {
            reviewCount = parseInt(reviewCount) + 1;
        }
        
        localStorage.setItem('reviewCount', reviewCount);
        
        // Display submitted data
        displaySubmittedData(urlParams);
    }
    
    // Always display the current count
    const currentCount = localStorage.getItem('reviewCount') || 0;
    document.getElementById('counter').textContent = currentCount;
    
    // Set current year in footer
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
});

function displaySubmittedData(params) {
    const summaryDiv = document.getElementById('review-summary');
    
    let summaryHTML = '<ul>';
    
    // Product Name
    if (params.get('product-name')) {
        summaryHTML += `<li><strong>Product:</strong> ${params.get('product-name')}</li>`;
    }
    
    // Rating
    if (params.get('rating')) {
        const rating = params.get('rating');
        let stars = '';
        for (let i = 0; i < 5; i++) {
            stars += i < rating ? '★' : '☆';
        }
        summaryHTML += `<li><strong>Rating:</strong> ${stars} (${rating}/5)</li>`;
    }
    
    // Installation Date
    if (params.get('installation-date')) {
        const date = new Date(params.get('installation-date'));
        summaryHTML += `<li><strong>Installation Date:</strong> ${date.toLocaleDateString()}</li>`;
    }
    
    // Useful Features
    const features = params.getAll('useful-features');
    if (features.length > 0) {
        const featureNames = features.map(feature => {
            return feature.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ');
        });
        summaryHTML += `<li><strong>Useful Features:</strong> ${featureNames.join(', ')}</li>`;
    }
    
    // User Name
    if (params.get('user-name')) {
        summaryHTML += `<li><strong>Reviewer:</strong> ${params.get('user-name')}</li>`;
    }
    
    // Written Review (truncate if too long)
    if (params.get('written-review')) {
        const review = params.get('written-review');
        const truncatedReview = review.length > 100 ? review.substring(0, 100) + '...' : review;
        summaryHTML += `<li><strong>Review:</strong> "${truncatedReview}"</li>`;
    }
    
    summaryHTML += '</ul>';
    summaryDiv.innerHTML = summaryHTML;
}