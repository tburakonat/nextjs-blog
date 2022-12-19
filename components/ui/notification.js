import styles from '../../styles/notification.module.css';

function Notification(props) {
	const { title, message, status } = props;

	let statusStyles = '';

	if (status === 'success') {
		statusStyles = styles.success;
	}

	if (status === 'error') {
		statusStyles = styles.error;
	}

	const cssClasses = `${styles.notification} ${statusStyles}`;

	return (
		<div className={cssClasses}>
			<h2>{title}</h2>
			<p>{message}</p>
		</div>
	);
}

export default Notification;
