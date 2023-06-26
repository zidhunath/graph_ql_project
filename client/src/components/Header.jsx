import logo from './assets/logo.png'
export default function Header(){
    return (
       <nav className='navbar bg-light mb-4 p-0'>    
            <div className="container"> 
            <a className='navbar-band' href='/'></a>
                <div className="d-flex">  
                    <img src={logo} className="mr-2" alt="" />  
                </div>
                <div>   
                    ProjectMgmt
                </div>
            </div>
       </nav>
    )
}