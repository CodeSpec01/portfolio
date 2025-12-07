export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer className="bg-red-500">This is a footer</footer>
      </body>
    </html>
  );
}
