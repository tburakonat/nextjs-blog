import { connectDatabase, insertDocument } from '../../helpers/db-utils';

export default async function handler(req, res) {
	switch (req.method) {
		case 'POST':
			const { email, name, message } = req.body;
			if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
				res.status(422).json({ message: 'Invalid input.' });
				return;
			}
			// Store it in a database
			const newMessage = {
				email,
				name,
				message,
			};

			let client;

			try {
				client = await connectDatabase();
			} catch (error) {
				res.status(500).json({ message: 'Connecting to the database failed!' });
				return;
			}

			try {
				await insertDocument(client, 'messages', newMessage);
				client.close();
			} catch (error) {
				res.status(500).json({ message: 'Inserting data failed!' });
				client.close();
				return;
			}

			res.status(201).json({ message: 'Successfully stored message!', message: newMessage });
			break;
		default:
			res.status(405).json({ message: 'Invalid request method.' });
			break;
	}
}
