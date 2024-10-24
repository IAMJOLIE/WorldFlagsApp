import logo_dark from '../assets/logo_dark.png'
import logo_light from '../assets/logo_light.png'
import moon_dark from '../assets/moon-bordered.svg'
import moon_light from '../assets/moon.svg'


const Navbar = ({ theme, setTheme}) => {
    const toggle_mode = () =>{
        theme == 'light' ? setTheme('dark ') : setTheme('light')
      }
    

    return ( 
    <nav className='navbar'>  
    <div className='item-placering'>

    
    <h1>The Flag App</h1>
    <img className='logo' src={theme == 'light' ? logo_dark : logo_light} alt="techover-logo" />
    <div className='dark-mode' onClick={()=>{toggle_mode()}}>    
    <img className='moon' src={theme == 'light' ? moon_dark: moon_light} 
    alt="dark mode toggle"  /> 
    <p>{theme == 'light' ? 'LIGHT MODE': 'DARK MODE'}  </p>
    </div>  
    </div> 
    </nav>
     );
}
 
export default Navbar;