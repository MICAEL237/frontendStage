
"use client"
import { useState } from "react";
import axios from "axios";
import { Phone, User, Mail, Book, UserKey, LockKeyhole } from "lucide-react";



export default function RegisterForm() {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [specialite, setspe] = useState("")
  const [tel, settel] = useState("");
  const [passeword, setpass] = useState("")
  const [id_role, setrole] = useState("")
  // const IdForm = document.getElementById('form')

  const HandleFunction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/v1/users/', {name, email, specialite, tel,passeword, id_role})
      // e.currentTarget.reset()
      setname('')
     setemail('')
     setspe('')
     setpass('')
     settel('')
     setrole('')

    } catch (error) {
      console.error(error, "register page")
    }
     


  };

  return (
    <form onSubmit={HandleFunction} id="form" method="post" className="flex flex-col w-1/2 h-full gap-6 bg-[#ffffff] p-4 items-center justify-center  rounded-b-2xl shadow-lg">
      <h1 className="w-full text-3xl text-center font-black antialiased opacity-85 ">Enregistrer un  Enseignant ici...</h1>
      <div className="w-full h-20 relative flex items-center justify-center">
        <User className="absolute left-4"/>
        <input
       
         className="w-full h-full rounded-2xl pl-12 outline-none shadow-md"
        type="text"
        name="name"
        value={name}
        onChange={(e) => setname(e.target.value)}
        placeholder="Entrer le nom de L'enseignant."
        required
      />
      </div>
    <div className="w-full h-20 relative flex items-center justify-center">
        <Mail className="absolute left-4"/>
        <input className="w-full h-full  rounded-2xl pl-12 outline-none shadow-md"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
        placeholder="Entrer l'email de L'enseignant."
        required
      />
    </div>
      

      <div className="w-full h-20 relative flex items-center justify-center">
        <Book className="absolute left-4"/>
        <input className="w-full h-full  rounded-2xl pl-12 outline-none shadow-md"
        type="text"
        name="specialite"
        value={specialite}
        onChange={(e) => setspe(e.target.value)}
        placeholder="Entrer la specialite de L'enseignant."
        required
         />
       
      </div>

      
      <div className="w-full h-20 relative flex items-center justify-center shadow-md">
        <Phone className="absolute left-4"/>
        <input className="w-full h-full  rounded-2xl pl-12 outline-none"
        type="text"
        name="tel"
        value={tel}
        onChange={(e) => settel(e.target.value)}
        placeholder="Entrer le numero de telephone de L'enseignant."
        required
      />
       
      </div>

      <div className="w-full h-20 relative flex items-center justify-center shadow-md">
        <LockKeyhole className="absolute left-4"/>
        <input className="w-full h-full  rounded-2xl pl-12 outline-none"
        type="password"
        name="passeword"
        value={passeword}
        onChange={(e) => setpass(e.target.value)}
        placeholder="Entrer le mots de passe de L'enseignant."
        required
      />
       
      </div>

      
      <div className="w-full h-20 relative flex items-center justify-center shadow-md">
        <UserKey className="absolute left-4"/>
        <input className="w-full h-full  rounded-2xl pl-12 outline-none"
       type="number"
        name="id_role"
        value={id_role}
        onChange={(e) => setrole(e.target.value)}
        placeholder="Entrer le role (1 pour admin et 2 pour enseignant simple)"
        required
        />
      </div>
      
      
      <div className="w-full h-20 relative flex items-center justify-center shadow-xl">
       
        <input  type="submit" value={'Enregistrer'}   className="text-center text-white cursor-pointer w-full h-full  rounded-2xl  outline-none bg-[#0066FF]" />
        
      </div>
    
    </form>
  );
}
