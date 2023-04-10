import logo from './assets/logo.svg'
import { FaRegShareSquare, FaGithub } from "react-icons/fa";
function App() {


  return (
    <div>
      <header className="h-[256px] bg-[url('/img/cover.svg')] bg-cover bg-no-repeat">
        <div className="flex items-center justify-center w-full ">
          <img src={logo} alt="Logo do Blog" className='my-12 ' />
        </div>

      </header>
      <main className='max-w-4xl  mx-auto h-full '>
        <section className='px-5 py-8 flex gap-8 -mt-[80px] rounded-xl bg-base-profile shadow-xl'>
          <img className='w-[148px] object-cover rounded-xl' src="https://avatars.githubusercontent.com/u/8411016?s=96&v=4" alt="" />
          <div className='flex-1'>
            <header className='flex justify-between items-center'>
              <h1 className='text-3xl text-base-title'>Cameron Williamson</h1>
             
              <a href="#" className='text-brand text-xs uppercase flex gap-1 items-center'>Github <FaRegShareSquare /></a>
                
            </header>
            <p className='text-base-text text-base mt-2 mb-8'>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
            <span className='flex gap-8'>
              <a className='text-base text-base-subtitle flex gap-2 items-center lowercase' href=""><FaGithub className='text-base-label'/>Cameronw</a>
              <a className='text-base text-base-subtitle flex gap-2 items-center lowercase' href=""><FaGithub className='text-base-label'/>Cameronw</a>
              <a className='text-base text-base-subtitle flex gap-2 items-center lowercase' href=""><FaGithub className='text-base-label'/>Cameronw</a>
            </span>
          </div>
        </section>
      </main>
    </div>

  )
}

export default App
