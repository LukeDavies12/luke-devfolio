import './writing.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto px-4 py-8 lg:w-1/2">
          {children}
        </div>
      </body>
    </html>
  );
}
