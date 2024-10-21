document.querySelector('input[type="button"]').addEventListener('click', function() {
    // Get the dropdown element
    const colorSelect = document.getElementById('colorSelect');
    
    // Get the selected option index
    const selectedIndex = colorSelect.selectedIndex;
    
    // Check if any option is selected (default -1 if none)
    if (selectedIndex !== -1) {
        // Remove the selected option
        colorSelect.remove(selectedIndex);
    }
});
