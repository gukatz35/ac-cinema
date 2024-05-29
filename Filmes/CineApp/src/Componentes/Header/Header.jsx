import Navbar from "../Navbar/Navbar"



function Header() {
    return ( 
        <header className="flex bg-[#00BFFF] text-white p-4 mb-4 justify-between">
        <span> Olá, visitante!</span>
        <h1>Bem-vindo ao MeteFlix!</h1>
            <Navbar/>
            </header>

        
     );
}

export default Header;