import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
	const unitsArr = [
		['cm', 'centimeters'],
		['mm', 'millimeters'],
		['in', 'inches (1in = 96px = 2.54cm)'],
		['px', 'pixels (1px = 1/96th of 1in)'],
		['pt', 'points (1pt = 1/72 of 1in)'],
		['pc', 'picas (1pc = 12 pt)'],
		[
			'em',
			'Relative to the font-size of the element (2em means 2 times the size of the current font)',
		],
		['ex', 'Relative to the x-height of the current font (rarely used)'],
		['ch', 'Relative to the width of the "0" (zero)'],
		['rem', 'Relative to font-size of the root element'],
		['vw', 'Relative to 1% of the width of the viewport'],
		['vh', 'Relative to 1% of the height of the viewport'],
		['vmin', 'Relative to 1% of viewport&apos;s* smaller dimension'],
		['vmax', 'Relative to 1% of viewport&apos;s* larger dimension'],
		['%', 'Relative to the parent element'],
	]

	return (
		<main>
			<h1>CSS-3</h1>
			<div>
				{unitsArr.map((unit, i) => (
					<div key={i}>
						<p>{unit[0]}</p>
						<p>{unit[1]}</p>
					</div>
				))}
			</div>
		</main>
	)
}
