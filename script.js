<script>
    document.addEventListener('DOMContentLoaded', () => {
        const portfolioTabs = document.querySelectorAll('#portfolio-tabs .nav-link');
        const portfolioContent = document.querySelectorAll('.tab-pane');

        portfolioTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-bs-target');
                portfolioContent.forEach(content => {
                    content.classList.remove('show', 'active');
                });
                document.querySelector(target).classList.add('show', 'active');
            });
        });
    });
</script>
