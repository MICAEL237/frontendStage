import DroitePage from "./droite";

import RegisterForm from "./form";
import NavRegister from "./nav";



export default function Rgister(){

  return(
    <div className="max-w-310 h-162.5 bg-white mx-42 my-2 ">
      <NavRegister/>
      <div className="w-full h-150.5 flex justify-between ">
        <DroitePage/>
        <RegisterForm/>
      </div>
    </div>
  )
}