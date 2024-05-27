import Link from 'next/link'

export default function Header() {
	const linksArr = ['units', 'yes', 'three', 'test']

	return (
		<header>
			{linksArr.map((link) => (
				<Link
					key={link}
					href={`/${link}`}>
					{link}
				</Link>
			))}
		</header>
	)
}
