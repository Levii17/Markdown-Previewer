function updatePreview() {
    let previewElement = document.getElementById("preview");
    let editorValue = document.getElementById("editor").value;
    let markedUpHTML = marked.parse(editorValue);
    previewElement.innerHTML = markedUpHTML;
}

function setDefault() {
    let defaultText = `# Markdown Previewer  
## This is a Markdown Previewer  
[Visit FreeCodeCamp](https://www.freecodecamp.org)  

Here is some \`inline code\`.

\`\`\`javascript
function greet() {
console.log("Hello, Markdown!");
}
\`\`\`

- List item one  
- List item two  

> This is a blockquote

![Luffy](https://imgs.search.brave.com/NsJ7jJGR20T-SWQ8C90IUd4roSYvDhVd4t6-WcDJVhs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvbHVm/ZnktMTIwMC14LTEy/MDAtcGljdHVyZS1s/eTZnZ2pxYWRvdG13/emowLmpwZw)

**This is bold text**
`;

    let editorField = document.getElementById("editor");
    let previewElement = document.getElementById("preview");
    editorField.value = defaultText;
    previewElement.innerHTML = marked.parse(defaultText);
}