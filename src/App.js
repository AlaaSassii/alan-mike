import React , {useState , useEffect} from 'react' ; 
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';
function App() {
  const [cart , setCart] = useState([]) ;  
  const [menuItems , setMenuItems] = useState([]) ; 
  useEffect(() => {
    alanBtn({
        key: '0370a264f7b1bef476d2c3bfe46df9342e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: (commandData) => {
          if(commandData.command === 'show menu')
          setMenuItems(commandData.data) 
        
        }
    });
  }, []);
  return (
    <div className="App">
      {
        menuItems.map(item => {
          const {name , price , category} = item ; 
          return (
            <li>
              {name} - {category} - {price}$
              <button>add to cart</button>
            </li>
          )
        })
      }
      <h1>Cart</h1>
      {
        cart.map(cartItem => {
          const {name , price , category} = cartItem ; 
          return (
            <li>
              {name} - {category} - {price}$
            </li>
          )
        })
      }
    </div>
  );
}

export default App;
