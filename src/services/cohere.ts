import { PUBLIC_COHERE_API_KEY } from "$env/static/public";
import type { Prompts, CohereReponse } from "#/types/index";

const PROMPTS: Prompts = {
  welcomeEmail:
    "Write a welcome email for new customers for a product based on the following description:",
  ad: "Create an ad for a product with the following description:",
};

export async function generateProductPrompt(
  description: string,
  option: string,
): Promise<CohereReponse[]> {
  const prompt = `${PROMPTS[option]} ${description}`;

  const response = await fetch("https://api.cohere.ai/generate", {
    method: "POST",
    headers: {
      Authorization: `BEARER ${PUBLIC_COHERE_API_KEY}`,
      "Content-Type": "application/json",
      "Cohere-Version": "2022-12-06",
    },
    body: JSON.stringify({
      prompt,
      max_tokens: 100,
      temperature: 0.1,
      model: "command-xlarge-20221108",
      k: 0,
      p: 0.75,
      frequency_penalty: 0,
      presence_penalty: 0,
      num_generations: 5,
      stop_sequences: [],
      return_likelihoods: "NONE",
    }),
  });

  if (!response.ok) {
    throw response;
  }

  const responseJson = await response.json();
  return responseJson.generations;
}
