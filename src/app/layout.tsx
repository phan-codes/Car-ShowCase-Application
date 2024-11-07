import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Car ShowCase | Get Your Nice Car In Our Collection',
	description: 'A web app for showcasing cars and their price list',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
