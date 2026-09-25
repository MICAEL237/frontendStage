// import drapeau from "../register/assets/cmr.jpg";
import Image from "next/image";
import lycee from "../register/assets/lycee.png";

export default function DroitePage() {
  return (
    <div className="w-1/2 h-full relative  bg-black flex flex-col justify-center gap-64 items-center  rounded-b-2xl shadow-xl">
        <div className="w-full h-full opacity-10">
             <Image
            src={lycee}
            alt="photo lycee"
            // width={620}
            // height={602}

            loading="eager" 
            style={{ width: '100%', height: '100%' }}
            className="w-full-auto h-auto"
              
        />

        </div>
       

        <div className="absolute flex flex-col justify-between gap-64 opacity-100">
        <div className="flex flex-col justify-center gap-4 items-center text-white">
          {/* <Image src={drapeau} alt="image" width={150} height={150} /> */}
          <h1 className="font-semibold text-5xl antialiased">
            Lycee de l'Excellence
          </h1>
          <h3>Disciple - Travail - Succes</h3>
        </div>

        <p className="antialiased w-64 text-2xl font-medium font-sans self-start opacity-30 text-white">
          Une gestion moderne pour un meilleur suivi des performances.
        </p>
      </div>
     
    </div>
  );
}
