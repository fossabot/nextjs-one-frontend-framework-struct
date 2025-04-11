import 'reflect-metadata';
import "./globals.css";
import { AppConfiguration } from '../common/constants/appConfiguration';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const appName = AppConfiguration.APP_NAME;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{appName}</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
