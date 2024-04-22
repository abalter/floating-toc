var toc = document.getElementById('toc');
var headings = document.querySelectorAll('article h1');
var tocList = document.createElement('ul');

headings.forEach(function (heading, index) {
    // Ensure each section has an ID
    var id = heading.parentElement.id || `section-${index}`;
    heading.parentElement.id = id;

    // Create a link for the ToC
    var link = document.createElement('a');
    link.textContent = heading.textContent;
    link.href = `#${id}`;
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor click behavior
        var target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });

    var listItem = document.createElement('li');
    listItem.appendChild(link);
    tocList.appendChild(listItem);
});

toc.appendChild(tocList);