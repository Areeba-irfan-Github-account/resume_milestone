// Function to toggle the visibility of a section
function toggleSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
        if (section.style.display === "none") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }
}

// Add event listeners to buttons for toggling sections
document.getElementById('toggle-skills')?.addEventListener('click', () => {
    toggleSection('skills');
});

document.getElementById('toggle-education')?.addEventListener('click', () => {
    toggleSection('education');
});

document.getElementById('toggle-experience')?.addEventListener('click', () => {
    toggleSection('work-experience');
});
