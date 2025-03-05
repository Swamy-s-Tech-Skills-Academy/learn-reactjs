import './App.css'

function App() {

  const hero = {
    id: 1,
    name: 'Batman',
  };

  return (
    <div className="container mt-5 mx-auto">
      <h2 className='text-2xl'>Details</h2>
      <h1>Hero: {hero.name}</h1>
    </div>
  )
}

export default App;
