import styles from '../../styles/contact-form.module.css';
import { useState, useEffect } from 'react';
import Notification from '../ui/notification';

async function sendContactData(contactDetails) {
	const response = await fetch('/api/contact', {
		method: 'POST',
		body: JSON.stringify(contactDetails),
		headers: { 'Content-Type': 'application/json' },
	});

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || 'Something went wrong!');
	}
}

export default function ContactForm() {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');
	const [requestStatus, setRequestStatus] = useState();
	const [requestError, setRequestError] = useState();

	async function handleFormSubmit(event) {
		event.preventDefault();

		setRequestStatus('pending');

		try {
			await sendContactData({ email, name, message });
			setRequestStatus('success');
			setEmail('');
			setName('');
			setMessage('');
		} catch (error) {
			setRequestError(error.message);
			setRequestStatus('error');
		}
	}

	let notification;

	switch (requestStatus) {
		case 'pending':
			notification = {
				title: 'Sending message...',
				message: 'Your message is on its way!',
				status: 'pending',
			};

			break;
		case 'success':
			notification = {
				title: 'Success!',
				message: 'Message sent successfully!',
				status: 'success',
			};

			break;
		case 'error':
			notification = {
				title: 'Error!',
				message: requestError || 'Message failed to send!',
				status: 'error',
			};

			break;
		default:
			notification = null;
			break;
	}

	useEffect(() => {
		if (requestStatus === 'success' || requestStatus === 'error') {
			const timer = setTimeout(() => {
				setRequestStatus(null);
				setRequestError(null);
			}, 3000);

			return () => clearTimeout(timer);
		}
	}, [requestStatus]);

	return (
		<section className={styles.contact}>
			<h1>How can I help you?</h1>
			<form className={styles.form} onSubmit={handleFormSubmit}>
				<div className={styles.controls}>
					<div className={styles.control}>
						<label htmlFor="email">Your Email</label>
						<input
							type="email"
							id="email"
							required
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className={styles.control}>
						<label htmlFor="name">Your Name</label>
						<input type="text" id="name" required value={name} onChange={e => setName(e.target.value)} />
					</div>
				</div>
				<div className={styles.control}>
					<label htmlFor="message">Your Message</label>
					<textarea
						id="message"
						rows="5"
						required
						value={message}
						onChange={e => setMessage(e.target.value)}
					></textarea>
				</div>
				<div className={styles.actions}>
					<button>Send Message</button>
				</div>
			</form>
			{notification && (
				<Notification title={notification.title} message={notification.message} status={notification.status} />
			)}
		</section>
	);
}
