import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import LoginButton from "@/components/LoginButton";
import RegisterButton from "@/components/RegisterButton";
import Signout from "@/components/Signout";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col gap-4">
        <h1>Bienvenido a la aplicación</h1>
        {session?.user.name ? (
          <>
            <p>Bienvenido {session.user.name}</p>
            <Signout />
          </>
        ) : (
          <>
            <LoginButton />
            <RegisterButton />
          </>
        )}
      </div>
    </main>
  );
}
