// Create the Models
jsModel = monaco.editor.createModel("","javascript")
htmlModel = monaco.editor.createModel("<h1>Welcome to ICode</h1> ","html")
cssModel = monaco.editor.createModel("h1 { color: black;}","css")

// settings
editor_settings = {
    theme: "vs-dark",
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