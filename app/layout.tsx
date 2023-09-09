import './globals.css'
import type {Metadata} from 'next'
import Link from "next/link";


export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	                                   children,
                                   }: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
		<head>
			<title>Notes app</title>
		</head>
		<body>
		<main>
			<nav>
				<Link href="/">Home</Link>
				<Link href="/notes">Notes</Link>
			</nav>
            {children}
		</main>
		</body>
		</html>
	)
}