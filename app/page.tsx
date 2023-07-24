import Image from 'next/image'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  return (
    <main className="content">
      <header className="bg-white text-black p-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="logo">
            <img
              src="/logo.png"
              alt="Logo da Empresa"
              className="w-10 h-10"
            />
          </div>
        </div>

        <nav className="flex space-x-4">
          <a href="/" className="hover:bg-gray-300 py-1 px-2 rounded">Overview</a>
          <a href="/sobre" className="hover:bg-gray-300 py-1 px-2 rounded">Projects</a>
          <a href="/contato" className="hover:bg-gray-300 py-1 px-2 rounded">Contact</a>
        </nav>

        <div>
          <i className="fas fa-search text-2xl cursor-pointer hover:text-gray-300"></i>
        </div>
      </header>
      <div className='content-info text-black'>
        <div className='grid grid-cols-2 gap-4'>
          <section className='user-info'>
            <div className="profile-cover">
              <div className="cover-gradient"></div>
            </div>

            <div className="profile-info">
              <img src="/photo.jpg" alt="Imagem de Perfil" className="profile-picture" />
              <div className="user-info">
                Gian Lucas Quinhones Alves
              </div>
            </div>

          </section>
          <section>
            teste 2
          </section>
        </div>
      </div>
    </main>
  )
}
