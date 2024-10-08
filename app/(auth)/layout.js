import { redirect } from "next/navigation";
import "../globals.css";
import { auth } from "@/auth";

export const metadata = {
  title: " Accounting System | Login.",
  description: "Accounting System",
};

export default async function RootLayout({ children }) {


  const session = await auth();
  if (session) {
    redirect("/");
  }


  return (
    <html lang="en">
      <body className="flex flex-col h-screen justify-center items-center">
        {children}
      </body>
    </html>
  );
}
