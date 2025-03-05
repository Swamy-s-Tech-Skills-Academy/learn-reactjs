import './App.css'

function App() {

  const hero = {
    id: 1,
    name: 'Batman',
  };

  return (
    <div className="container mt-5 mx-auto">
      <h2 className='text-2xl'>Details</h2>
      <div>
        <span className="font-bold">ID:</span> {hero.id}
      </div>

      <div className="space-x-2">
        <span className="font-bold">Name:</span>
        <span className='uppercase'>{hero.name}</span>
      </div>
    </div>
  )
}

export default App;
