import { PUBLIC_COHERE_API_KEY } from '$env/static/public';

export async function getDescription(input: string) {
	const data = {
		model: 'command-xlarge-20221108',
		prompt: `Write a creative product description for ${input}`,
		max_tokens: 60,
		temperature: 0.9,
		k: 0,
		p: 0.75,
		frequency_penalty: 0,
		presence_penalty: 0,
		num_generations: 5,
		stop_sequences: [],
		return_likelihoods: 'NONE'
	};

	const response = await fetch('https://api.cohere.ai/generate', {
		method: 'POST',
		headers: {
			Authorization: `BEARER ${PUBLIC_COHERE_API_KEY}`,
			'Content-Type': 'application/json',
			'Cohere-Version': '2022-12-06'
		},
		body: JSON.stringify(data)
	}).then((res) => res.json());

	return response.generations;
}
