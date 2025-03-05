import './App.css'

function App() {

  const hero = {
    id: 1,
    name: 'Batman',
  };

  return (
    <div className='container mt-5 mx-auto'>
      <h2 className='text-2xl'>Details</h2>

      <div>
        <span className='font-bold'>ID:</span> {hero.id}
      </div>
      <div className='space-x-2'>
        <span className='font-bold'>Name:</span>
        <span className='uppercase'>{hero.name}</span>
      </div>

      <div className='flex flex-col gap-2 mt-3 border-t'>
        <label>Hero name:</label>
        <input type='text' placeholder='Hero Name please' className='border border-gray-300 rounded-lg p-2 w-1/4' />
      </div>

    </div>
  )
}

export default App
