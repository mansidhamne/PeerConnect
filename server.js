// // // node --version # Should be >= 18
// // // npm install @google/generative-ai

// // const {
// //     GoogleGenerativeAI,
// //     HarmCategory,
// //     HarmBlockThreshold,
// //   } = require("@google/generative-ai");
  
// //   const MODEL_NAME = "gemini-1.5-pro-latest";
// //   const API_KEY = "AIzaSyD5HXqENGxoVDvZiw3nU23Pj-eqj2pTTFA";
  
// //   async function runChat() {
// //     const genAI = new GoogleGenerativeAI(API_KEY);
// //     const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  
// //     const generationConfig = {
// //       temperature: 1,
// //       topK: 0,
// //       topP: 0.95,
// //       maxOutputTokens: 8192,
// //     };
  
// //     const safetySettings = [
// //       {
// //         category: HarmCategory.HARM_CATEGORY_HARASSMENT,
// //         threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
// //       },
// //       {
// //         category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
// //         threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
// //       },
// //       {
// //         category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
// //         threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
// //       },
// //       {
// //         category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
// //         threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
// //       },
// //     ];
  
// //     const chat = model.startChat({
// //       generationConfig,
// //       safetySettings,
// //       history: [
// //         {
// //           role: "user",
// //           parts: [{ text: "hello"}],
// //         },
// //         {
// //           role: "model",
// //           parts: [{ text: "Hello! 👋 How can I help you today?"}],
// //         },
// //         {
// //           role: "user",
// //           parts: [{ text: "what is 2+2"}],
// //         },
// //         {
// //           role: "model",
// //           parts: [{ text: "2 + 2 equals **4**."}],
// //         },
// //       ],
// //     });
  
// //     const result = await chat.sendMessage("whatsupppp");
// //     const response = result.response;
// //     console.log(response.text());
// //   }
  
// //   runChat();

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = 3001;

// // Placeholder function to simulate response generation (replace with actual AI integration
// function generateResponse(prompt) {
//   const responses = {
//     "hello": "Hello!  How can I help you today?",
//     "what is 2+2": "2 + 2 equals **4**.",
//     "whatsupppp": "Hey there! What would you like to chat about today?"
//   }
//   return responses[prompt] || "I'm still learning, how can I help you?";
// }

// // Parse incoming JSON data
// app.use(bodyParser.json());
// app.use(cors());

// // Endpoint to handle POST requests for chat messages
// app.post('/studygpt', (req, res) => {
//   const { message } = req.body;
//   const response = generateResponse(message);
//   res.json({ message: response });
// });

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");

const app = express();
const port = 3001;

const MODEL_NAME = "gemini-1.5-pro-latest";
const API_KEY = "AIzaSyD5HXqENGxoVDvZiw3nU23Pj-eqj2pTTFA";

// Initialize GoogleGenerativeAI
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: MODEL_NAME });

// Placeholder function to simulate response generation (replace with actual AI integration)
async function generateResponse(prompt) {
  try {
    const chat = model.startChat({
      generationConfig: {
        temperature: 1,
        topK: 0,
        topP: 0.95,
        maxOutputTokens: 8192,
      },
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
      ],
      history: [{ role: "user", parts: [{ text: prompt }] }],
    });

    const result = await chat.sendMessage(prompt);
    return result.response.text();
  } catch (error) {
    console.error(error);
    return "Oops! Something went wrong. Try again later.";
  }
}

// Parse incoming JSON data
app.use(bodyParser.json());
app.use(cors());

// Endpoint to handle POST requests for chat messages
app.post('/studygpt', async (req, res) => {
  const { message } = req.body;
  const response = await generateResponse(message);
  res.json({ message: response });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


