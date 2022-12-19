import styles from '../../styles/contact-form.module.css';
import { useState } from 'react';

export default function ContactForm() {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');

	function handleFormSubmit(event) {
		event.preventDefault();

		fetch('/api/contact', {
			method: 'POST',
			body: JSON.stringify({ email, name, message }),
			headers: { 'Content-Type': 'application/json' },
		});

		setEmail('');
		setName('');
		setMessage('');
	}

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
		</section>
	);
}
