function toggleInfo() {
    const moreInfo = document.getElementById('more-info');
    const button = document.querySelector('.gradient-button');
    
    if (moreInfo.classList.contains('hidden')) {
        moreInfo.classList.remove('hidden');
        button.textContent = 'SHOW LESS';
    } else {
        moreInfo.classList.add('hidden');
        button.textContent = 'LEARN MORE';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const logoContainer = document.querySelector('.logo-container');
    
    // Set the background image and its properties
    logoContainer.style.background = `
        linear-gradient(
            rgba(26, 26, 26, 0.85), 
            rgba(26, 26, 26, 0.85)
        ),
        url('prayer-image.jpg')
    `;
    logoContainer.style.backgroundSize = 'cover';
    logoContainer.style.backgroundPosition = 'center';
    logoContainer.style.backgroundRepeat = 'no-repeat';
}); 
