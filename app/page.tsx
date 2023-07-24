import Image from 'next/image'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  return (
    <main className="">
      <header className="bg-white text-black p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo da Empresa"
            className="w-10 h-10 mr-2"
          /> 
        </div>

        <nav className="flex space-x-4">
          <a href="/" className="hover:text-gray-900">Overview</a>
          <a href="/sobre" className="hover:text-gray-900">Projects</a>
          <a href="/contato" className="hover:text-gray-900">Contact</a>
        </nav>

        <div>
          <i className="fas fa-search text-2xl cursor-pointer hover:text-gray-900"></i>
        </div>
      </header>
      <div className='content'> 
        <div className='grid grid-cols-2 gap-4'>
          <section>
            teste
          </section>
          <section>
            teste 2
          </section>
        </div>
      </div>
    </main>
  )
}
