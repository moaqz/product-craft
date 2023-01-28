import { PUBLIC_COHERE_API_KEY } from '$env/static/public';

interface Props {
	description: string;
}

export async function getFeatureBenefits({ description }: Props) {
	const prompt = `
    Convert the following product feature into a list of benefits, using a numbered format. Also, make sure that the list doesn't contain any repeating items. The product feature is: ${description}
  `;

	const data = {
		model: 'command-xlarge-20221108',
		prompt,
		max_tokens: 200,
		temperature: 0.4,
		k: 0,
		p: 0.75,
		frequency_penalty: 1,
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
