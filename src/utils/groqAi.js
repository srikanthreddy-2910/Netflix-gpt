import Groq from "groq-sdk";
import { Gpt_Key } from "./constants";

const client = new Groq({
  apiKey: Gpt_Key,
  dangerouslyAllowBrowser: true,
});

export default client;
