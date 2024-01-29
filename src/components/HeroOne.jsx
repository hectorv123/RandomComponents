import Logo from "/logo.svg";

function HeroOne() {
  return (
   <>

   <div className="flex justify-center  ">

    <div className="my-auto w-1/2 sm:1/4 md:w-1/4 ml-2  ">
        <h1 className=" font-bold text-4xl">Easy Form </h1>
        <h1 className=" font-bold text-4xl">Endpoints</h1>


        <p className="mt-4">Form ackend platform for designers and developers</p>


        <div className="flex  mt-4  ">
            <button className=" bg-sky-600 py-2 px-4 rounded-md  text-white whitespace-nowrap">Get Code</button>
            <p className="my-auto  ml-2 text-sm font-light whitespace-nowrap"> See how it works</p>

        </div>

        

    </div>




    <div className="w-1/2 sm:1/4 md:w-1/4 ml-4 mr-2">
        <img src={Logo}/>
    </div>


   </div>
   
   
   
   
   
   
   
   
   
   
   
   
   
</>
  )
}

export default HeroOne