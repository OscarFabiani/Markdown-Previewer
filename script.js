//Setting variables
const editor = document.getElementById('editor');
const editorWrapper = document.getElementById('editor-wrapper');
const editorBar = document.getElementById('editor-bar');
const editorResize = document.getElementById('editor-resize');
const previewer = document.getElementById('previewer');
const previewerWrapper = document.getElementById('previewer-wrapper');
const previewerBar = document.getElementById('previewer-bar');
const previewerResize = document.getElementById('previewer-resize');


function updateText() {
  //This function updates the text within the prewiewer element to reflect the editor element.
  let newText = editor.value;
  previewer.innerHTML = marked(newText, {gfm: true, breaks: true});
}

function expandEditor() {
  //This function effectively expands the editor element to the viewport's height and width by adding css classes.
  editorResize.textContent = 'Contract';
  editorWrapper.classList.add('expand');
  editorBar.classList.add('expand');
  editor.classList.add('expand');
  editorResize.removeEventListener('click', expandEditor);
  editorResize.addEventListener('click', contractEditor);
  previewer.innerHTML = '';
  editor.removeEventListener('input', updateText);
}

function contractEditor() {
  //This function effectively contractes the editor element to it's orginal height and width by removing all css classes.
  editorResize.textContent = 'Expand';
  editorWrapper.classList = '';
  editorBar.classList = '';
  editor.classList = '';
  editorResize.addEventListener('click', expandEditor);
  editor.addEventListener('input', updateText);
  updateText();
}

function expandPreviewer() {
  //This function effectively expands the previewer element to the viewport's height and width by adding css classes.
  previewerResize.textContent = 'Contract';
  previewerWrapper.classList.add('expand');
  previewerBar.classList.add('expand');
  previewer.classList.add('expand');
  previewerResize.removeEventListener('click', expandPreviewer);
  previewerResize.addEventListener('click', contractPreviewer);
}

function contractPreviewer() {
  //This function effectively contractes the editor element to it's orginal height and width by removing all css classes.
  previewerResize.textContent = 'Expand';
  previewerWrapper.classList = '';
  previewerBar.classList = '';
  previewer.classList = '';
  previewerResize.addEventListener('click', expandPreviewer);
}

//Setting event listeners and updating text on load
window.addEventListener('load', contractEditor);
window.addEventListener('load', contractPreviewer);

//Setting default text
let defaultText = `# Welcome to my Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)`

//Populating editor with default text
editor.value = defaultText;

