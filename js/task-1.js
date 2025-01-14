// Slugify Function

function slugify(title) {
    let newTitle = title.toLowerCase();
    let slug = newTitle.replace(/ /g, '-');
    return slug;
}

function handleSlugify() {
    const title = document.getElementById('slugifyInput').value;
    const slug = slugify(title);
    document.getElementById('slugifyOutput').textContent = slug || "Please enter a valid title.";
}