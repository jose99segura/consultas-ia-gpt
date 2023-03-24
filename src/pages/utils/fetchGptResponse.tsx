import axios from 'axios';

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-wbGovFuxse9K5xrLrj4fIhe0",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();

const API_URL = 'https://api.openai.com/v1/';

const fetchGptResponse = async (prompt: string) => {
  const response = await axios.post(API_URL + 'completions', {
    model: "text-davinci-003",
    prompt,
    max_tokens: 60,
    n: 1,
    stop: ['\n']
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer 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`
    }
  });

  return response.data.choices[0].text;
}

export default fetchGptResponse;
