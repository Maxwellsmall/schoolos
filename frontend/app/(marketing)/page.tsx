import Hero from "@/components/Hero"
import Platform from "@/components/PlatfromTenancy"
import Dedicated from "@/components/Dedicated"
import CoreModules from "@/components/CoreModules"
import CampusLicensing from "@/components/CampusLicensing";
import Operations from "@/components/Operations";

export default function Home() {
  return (
   <>
   <Hero/>
   <Platform/>
   <Dedicated/>
   <CoreModules/>
   <Operations/>
   <CampusLicensing/>
   </>
  );
}
