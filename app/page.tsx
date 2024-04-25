import Image from "next/image";
import { auth, currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import Banner from './components.tsx/banner';


export default async function Page() {
  // const { userId } : { userId: string | null } = auth();


  return (

        <>
        <video className="videoBkg" poster="https://www.sicontis.com/codepen/cpc-spacing/ski.png" preload="true" autoPlay muted loop>
    <source src="https://www.sicontis.com/codepen/cpc-spacing/skiing.mp4" type="video/mp4"/>
  </video>
  
  <div className="hero-section">
    <h1>Do</h1>
    <h1>something</h1>
    <h1>different</h1>
    <h1>today.</h1>
    <p>Try it.<br/>
    You got this. 
    </p>
  
    <button>See what you can do. </button>
  </div>
  

      </>
  );
}

