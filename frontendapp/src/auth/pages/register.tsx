
"use client"
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [specialite, setspe] = useState("");
  const [tel, settel] = useState("");
  const [password, setpass] = useState("");
  const [role, setrole] = useState("");

  const HandleFunction = async (e: SubmitEvent) => {
    e.preventDefault();
    try {
      await axios.post('api/v1/users/', {name, email, specialite, tel,password, role})
    } catch (error) {
      console.error(error, "register page")
    }
  };

  return (
    <form action="register.jsx" method="post" className="">
      <input
      className="bg-blue"
        type="text"
        name="name"
        value={name}
        onChange={(e) => setname(e.target.value)}
        placeholder="Entrer le nom de L'enseignant."
        required
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
        placeholder="Entrer l'email de L'enseignant."
        required
      />
      <input
        type="text"
        name="specialite"
        value={specialite}
        onChange={(e) => setspe(e.target.value)}
        placeholder="Entrer la specialite de L'enseignant."
        required
      />
      <input
        type="text"
        name="tel"
        value={tel}
        onChange={(e) => settel(e.target.value)}
        placeholder="Entrer le numero de telephone de L'enseignant."
        required
      />
      <input
        type="text"
        name="password"
        value={password}
        onChange={(e) => setpass(e.target.value)}
        placeholder="Entrer le mots de passe de L'enseignant."
        required
      />
      <input
        type="number"
        name="id_role"
        value={role}
        onChange={(e) => setrole(e.target.value)}
        placeholder="Entrer le role (1 pour admin et 2 pour enseignant simple)"
        required
      />

      <input type="submit" value={'Enregistrer'}  />
    </form>
  );
}
