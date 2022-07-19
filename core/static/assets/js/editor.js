var htmlCode = [
	'<h1>I am a headline made with HTML</h1>',
	'<p id="demo">And I am a simple text paragraph. The color of this text is styled with CSS. Click the button below to chage my color through the power of JavaScript.</p>',
	'<button type="button" onclick="Green()">Change the text color above to green</button>',
    '<button type="button" onclick="Red()">Change the text color above to red</button>',
    '<button type="button" onclick="Blue()">Change the text color above to blue</button>'
].join('\n');

var cssCode = [
	'body {',
	'	font-family: sans-serif;',
	'	text-align: center;',
	'	padding: 3rem;',
	'	font-size: 1.125rem;',
	'	line-height: 1.5;',
	'	transition: all 725ms ease-in-out;',
    '}',
    '',
    'h1 {',
    '	font-size: 2rem;',
    '	font-weight: bolder;',
    '	margin-bottom: 1rem;',
    '}',
    '',
    'p {',
    '	margin-bottom: 1rem;',
    '	color: tomato;',
    '}',
    '',
    'button {',
    '	cursor: pointer;',
    '	appearance: none;',
    '	border-radius: 4px;',
    '	font-size: 1.25rem;',
    '	padding: 0.75rem 1rem;',
    '	border: 1px solid navy;',
    '	background-color: dodgerblue;',
    '	color: white;',
    'margin-top: 10px;',
    '}'
].join('\n');

var jsCode = [
	'function Green() {',
    '  document.getElementById("demo").style.color = "green";',
	'}',
    '',
    'function Blue() {',
    '  document.getElementById("demo").style.color = "blue";',
	'}',
    '',
    'function Red() {',
    '  document.getElementById("demo").style.color = "red";',
	'}'
].join('\n');

// Create the Models
jsModel = monaco.editor.createModel(jsCode, "javascript")
htmlModel = monaco.editor.createModel(htmlCode, "html")
cssModel = monaco.editor.createModel(cssCode, "css")

// settings
editor_settings = {
    theme: "vs",
    lineNumbers: 'on',
    glyphMargin: false,
    vertical: '100vh',
    horizontal: '100vh',
    verticalScrollbarSize: 10,
    horizontalScrollbarSize: 10,
    readOnly: false,
    automaticLayout: true,
    minimap: {
        enabled: false
    },
    lineHeight: 19,
    model: htmlModel // The model that will be displayed once the page loads
}

// create the editor
var editor = monaco.editor.create(document.getElementById('CodeBlock'), editor_settings);

// update the output field
editor.onDidChangeModelContent((event)=>{
    const timeout = setTimeout( () => {
        frame.srcdoc = `
            <html>
                <body>
                    ${htmlModel.getValue()}
                </body>
                <style>
                    ${cssModel.getValue()}
                </style>
                <script>
                    ${jsModel.getValue()}
                </script>
            </html>
          `
          console.log(frame.srcdoc)
    }, 250)
})

// called by buttons to Change the model being used now
function change(wantedModel){
      editor.saveViewState()
    editor.setModel(wantedModel)
}

// makes buttons functional
document.addEventListener('DOMContentLoaded', () => {
    frame = document.getElementById('output')
    document.querySelector('#change_html').addEventListener('click', () => change(htmlModel))
    document.querySelector('#change_css').addEventListener('click', () => change(cssModel))
    document.querySelector('#change_js').addEventListener('click', () =>    change(jsModel))
    // initialize the HTML for output IFrame
    frame.srcdoc = `
    <html>
        <body>
            ${htmlModel.getValue()}
        </body>
        <style>
            ${cssModel.getValue()}
        </style>
        <script>
            ${jsModel.getValue()}
        </script>
    </html>
    ` 
})