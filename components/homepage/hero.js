import Image from 'next/image';
import styles from '../../styles/hero.module.css';

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.image}>
				<Image src="/images/site/burak.jpg" alt="An image showing Burak" width={300} height={300} />
			</div>
			<h1>Hi I'm Burak</h1>
			<p>I blog about ...</p>
		</section>
	);
}
