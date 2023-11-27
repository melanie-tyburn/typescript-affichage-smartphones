import './App.css'
import Smartphone from './Smartphone'
function App() {
 

  const smartphones = [
    {
      id : 0,
      brand : 'Samsung',
      color : 'white',
      ram : 16,
      isRecon : true
    },
    {
      id : 1,
      brand : 'Huawei',
      color : 'black',
      ram : 8,
      isRecon : true
    },
    {
      id : 2,
      brand : 'Apple',
      color : 'gold',
      ram : 24,
      isRecon : false
    },
  ]

  return (
    <>
      {smartphones.map((smartphone,index) => {
        return(
          <Smartphone {...smartphone} key={index} />
        )
      })}

    </>
  )
}

export default App
