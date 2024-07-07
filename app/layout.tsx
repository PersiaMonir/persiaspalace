import type { Metadata } from 'next';
import { Sen } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const SenFont = Sen({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Persia Monir',
	description: "Persia Monir's personal website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={SenFont.className}>
				<ThemeProvider attribute='class' defaultTheme='light'>
					<Header />
					{children}
					<Footer />
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
