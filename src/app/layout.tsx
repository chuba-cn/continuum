import type { Metadata } from "next";
import { Nunito_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { dark } from "@clerk/themes"; 

const nunitoSans = Nunito_Sans({ variable: "--font-sans" });

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Continuum",
  description: "An AI-Powered code editor built for the browser",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        theme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${nunitoSans.variable} ${plexMono.variable} antialiased`}
        >
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <header>
              <SignedOut>
                <SignInButton />
                <SignUpButton>
                  <button className="bg-primary text-primary-foreground">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>

              <SignedIn>
                <UserButton />
              </SignedIn>
            </header>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
