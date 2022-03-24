// REMOVE FOR INTERNAL ETENSION
const express = require('express')
const app = express()
const port = 8888

app.use(express.static('public'))
app.use(express.json({limit:'100mb'}))
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
// END REMOVE

let sampleRequestBodyForInput = 
{
  "step": {
    "path": "",
    "optional": false,
    "output": {
      "result": null,
      "elementResult": null,
      "verificationResults": [],
      "foundUrl": null,
      "postScreenshot": null,
      "preScreenshot": null,
      "displayScreenshotPath": null
    },
    "action": {
      "id": "1533082145693_X2LT2UKABZQ1B3J",
      "type": "INPUT",
      "value": "This is your input value"
    }
  }
}

let sampleOutput = {
  "updates": {
    "action": {
      "attributes": {
        "value": "Hello World"
      }
    }
  }
};

// EXTERNAL EXAMPLE
// EXTENSIONS ONLY SUPPORT POSTS
app.post('/', (req, res) => {
    console.log("POST" + req)
    
    // YOUR CODE HERE
    sampleOutput.updates.action.attributes.value = sampleRequestBodyForInput.step.action.value.toUpperCase()
    
    // END YOUR CODE
  
    res.status(200).send(sampleOutput)
})

// GETS CAN BE NICE FOR TESTING IF YOU DON'T NEED INPUTS 
app.get('/', (req, res) => {
    console.log("GET")
    res.status(200).send(sampleOutput)
})

// INTERNAL EXAMPLE TO CHANGE TEXT TO LOWER CASE FROM AN INPUT FIELD THAT ALREADY HAS A VALUE
// exports.helloWorld = (req, res) => {
//   let input = req.body.step.action.value || 'Ooops, forgot to pass action.value to the extension';
//   let result = {
//     "updates": {
//       "action": {
//         "attributes": {
//           "value": input.toLowerCase()
//         }
//       }
//   	}
//   };
//   res.status(200).send(result);
// };