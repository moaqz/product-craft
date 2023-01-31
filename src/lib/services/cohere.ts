import { PUBLIC_COHERE_API_KEY } from '$env/static/public';

const commonBodyData = {
	model: 'command-xlarge-20221108',
	k: 0,
	p: 0.75,
	frequency_penalty: 0,
	presence_penalty: 0,
	num_generations: 5,
	stop_sequences: [],
	return_likelihoods: 'NONE'
};

const commonHeaderData = {
	Authorization: `BEARER ${PUBLIC_COHERE_API_KEY}`,
	'Content-Type': 'application/json',
	'Cohere-Version': '2022-12-06'
};

export async function getDescription({
	description,
	keywords,
	brand
}: {
	description: string;
	keywords: string;
	brand?: string;
}) {
	const prompt = `Write a creative product description for a ${description} ${
		brand && 'named ' + brand
	}, with the keywords ${keywords}.
  `;

	try {
		const promise = await fetch('https://api.cohere.ai/generate', {
			method: 'POST',
			headers: commonHeaderData,
			body: JSON.stringify({
				prompt,
				max_tokens: 100,
				temperature: 0.8,
				...commonBodyData
			})
		});

		const response = await promise.json();

		return response.generations;
	} catch (error) {
		console.error('GetDescription', error);
		return;
	}
}

export async function getFeatureBenefits({ description }: { description: string }) {
	const prompt = `
    Convert the following product feature into a list of benefits, using a numbered format. Also, make sure that the list doesn't contain any repeating items. The product feature is: ${description}
  `;

	try {
		const promise = await fetch('https://api.cohere.ai/generate', {
			method: 'POST',
			headers: commonHeaderData,
			body: JSON.stringify({
				prompt,
				max_tokens: 200,
				temperature: 0.4,
				...commonBodyData
			})
		});

		const response = await promise.json();

		return response.generations;
	} catch (error) {
		console.error('getFeatureBenefits', error);
		return;
	}
}
