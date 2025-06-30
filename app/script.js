let version = 1.0;

function updateVersion() {
    version += 0.1;
    document.getElementById('version').textContent = version.toFixed(1);
    
    // Add animation effect
    const versionElement = document.getElementById('version');
    versionElement.style.transform = 'scale(1.2)';
    versionElement.style.color = '#764ba2';
    
    setTimeout(() => {
        versionElement.style.transform = 'scale(1)';
        versionElement.style.color = '#667eea';
    }, 200);
}

// Add some interactivity
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    
    container.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    container.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});
