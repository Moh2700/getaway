const express = require('express');
const app = express();
const PORT = 5500;

app.use(express.static('Getaway/index.html')); // Serve your HTML from the 'public' folder

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/Getaway');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


/*

let up = document.getElementById('GFG_UP');
        let down = document.getElementById('GFG_DOWN');
        let inputEl = document.createElement('input');

        inputEl.type = 'button';
        inputEl.value = "Click here";
        inputEl.addEventListener('click', function () {
            GFG_Fun('Parameter');
        });

        document.body.insertBefore(inputEl, down);
        up.innerHTML =
            'Click on button to pass the ' +
            'string parameter to the function';

        function GFG_Fun(parameter) {
            down.innerHTML = "String '" +
                parameter + "' Received";
        } 

 */

function replaceHTML (HTMLtag, Reptag, tagcontent)
{
   let strHTMLtag = document.getElementById(HTMLtag);
   let strReptag = document.createElement(Reptag);

   strReptag.TextContent = tagcontent;
   strHTMLtag.replaceWith(strReptag);
}