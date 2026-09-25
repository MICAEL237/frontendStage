"use client";

import { useState } from "react";
import axios from "axios";
import { Mail, Save, LockKeyhole } from "lucide-react";

export default function LoginForm() {
  const [email, setemail] = useState("");
  const [passeword, setpasseword] = useState("");

  const HandleFunction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const tokens = await axios.post("http://localhost:4000/api/v1/auth/", { email, passeword });
      const tg = tokens.data
      console.log(tg.token)
      e.currentTarget.reset();

    } catch (error) {
      console.log("error connexion", error);
    }
  };

  return (
    <form
      onSubmit={HandleFunction}
      method="post"
      className="flex flex-col w-1/2 h-full gap-6 bg-[#ffffff] p-4 items-center justify-center  rounded-b-2xl shadow-lg"
    >
              <h1 className="w-full text-4xl text-center font-black antialiased opacity-85 ">Connexion</h1>
              <h3 className="text-2xl text-blue-500 opacity-30">Accedez a votre espace de gestion des notes</h3>

      <div className="w-full h-20 relative flex items-center justify-center">
        <Mail className="absolute left-4"/>
        <input
          type="email"
          className="w-full h-full rounded-2xl pl-12 outline-none shadow-md"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Entrer votre email utilisateur"
        />
      </div>

      <div className="w-full h-20 relative flex items-center justify-center">
        <LockKeyhole className="absolute left-4"/> 
        <input
          type="password"
          className="w-full h-full rounded-2xl pl-12 outline-none shadow-md"
          value={passeword}
          onChange={(e) => setpasseword(e.target.value)}
          placeholder="Mot de passe"
        />
      </div>

      <div className="w-full h-16 relative flex items-center justify-center shadow-xl">
        <Save className="absolute left-4"/>
        <input
          type="submit"
          value={"Se connecter"}
          className="text-center text-white text-2xl cursor-pointer w-full h-full  rounded-2xl  outline-none bg-[#0066FF]"
        />
      </div>
    </form>
  );
}
