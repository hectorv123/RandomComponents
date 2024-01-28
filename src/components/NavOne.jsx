import Logo from '/logo.svg'

function NavOne() {
  return (
   <>

   <header className="w-full flex justify-center h-16   my-auto">

    <nav className="flex  gap-[8vh] my-auto">

        <div className='my-auto'>
            <ul className="flex gap-[4vh]">
                <li className="text-gray-500 hover:text-black hover:border-b border-red-500  "> <a href="#"> DOCS </a> </li>
                <li className=" text-gray-500 hover:text-black hover:border-b border-red-500"> <a href="#"> BLOG </a></li>


            </ul>


        </div>


        <div className=" mx-0 md:mx-16 ">

            <img src={Logo} className="h-10 w-10"/>
        </div>



        <div className='my-auto'>

            <ul className="flex gap-[4vh]">
                <li className=" text-gray-500 hover:text-black hover:border-b border-red-500"><a href="#"> SIGN UP </a></li>
                <li className=" text-gray-500 hover:text-black hover:border-b border-red-500"><a href="#"> LOGIN </a></li>
            </ul>





        </div>

        




    </nav>




   </header>
   
   
   
   </>
  )
}

export default NavOne