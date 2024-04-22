// document.addEventListener("DOMContentLoaded", function() {
  var toc = document.getElementById('toc');
  var headings = document.querySelectorAll('article h1');
  console.log(headings);
  var tocList = document.createElement('ul');

  headings.forEach(function(heading, index) {
    // Ensure each heading has an ID
    console.log(heading);
    var id = heading.parentElement.id || `heading-${index}`;
    heading.id = id;

    // Create a link for the ToC
    var link = document.createElement('a');
    link.textContent = heading.textContent;
    link.href = `#${id}`;

    var listItem = document.createElement('li');
    listItem.appendChild(link);
    tocList.appendChild(listItem);
  });

  toc.appendChild(tocList);
// });