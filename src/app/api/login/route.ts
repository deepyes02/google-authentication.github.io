import { OAuth2Client } from "google-auth-library";
const client = new OAuth2Client();


export async function POST(request: Request) {
	const { credential, client_id } = await request.json();
	console.log(credential, client_id)
	try {
		const ticket = await client.verifyIdToken({
			idToken: credential,
			audience: client_id
		})
		const payload = ticket.getPayload();
		return new Response(JSON.stringify({ login: 1, data: payload }))
	}
	catch (error) {
		return new Response(JSON.stringify({ login: 0, data: error }))
	}
}
