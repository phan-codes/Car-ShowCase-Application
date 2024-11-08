import type { Metadata } from 'next';
import './globals.css';
import { NavBar, Footer } from '@/components';

export const metadata: Metadata = {
	title: 'Car Hub | Get Your Nice Car In Our Collection',
	description: 'A web app for showcasing cars and their price list, discover the best cars in the world',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
