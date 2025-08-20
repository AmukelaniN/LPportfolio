document.querySelectorAll('.expand-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.parentElement.classList.toggle('expanded');
    });
});