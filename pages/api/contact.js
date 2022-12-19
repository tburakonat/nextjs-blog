export default function handler(req, res) {
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
			console.log(newMessage);
			res.status(201).json({ message: 'Successfully stored message!', message: newMessage });
			break;
		default:
			res.status(405).json({ message: 'Invalid request method.' });
			break;
	}
}
