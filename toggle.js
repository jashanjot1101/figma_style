function toggleExpand(optionElement) {
    // Remove "expanded" class from all options
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('expanded');
    });
    // Add "expanded" class to the clicked option
    optionElement.classList.toggle('expanded');
}