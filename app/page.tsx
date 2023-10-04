import Image from "next/image";
import { MainLogin } from "./components/Buttons";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {

  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/chat")
  }

  return (
    
      <div className="max-w-xl mx-auto my-auto border rounded-l-3xl rounded-t-3xl p-10 mt-32 bg-slate-200">
        <h1 className="text-4xl font-semibold text-center">Zaloguj się do Tom<span className="text-teal-500">Chat </span></h1>
      <div className="mt-8">
        <MainLogin />
      </div>
      </div>

      
    
  );
}
