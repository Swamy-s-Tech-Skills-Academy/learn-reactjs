import { ChangeEvent, useState } from 'react';
import './App.css'

type Hero = {
  id: number;
  name: string;
}

function App() {

  const [hero, setHero] = useState<Hero>({
    id: 1,
    name: 'Batman',
  });

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHero({ ...hero, name: e.target.value });
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

      <div className="flex flex-col gap-2 mt-3 border-t">
        <label>Hero Name:</label>
        <input type="text" placeholder='Hero name'
          className="border border-gray-300 rounded-lg p-2 w-1/4"
          value={hero.name}
          onChange={handleNameChange}
        />
      </div>
    </div>
  )
}

export default App;
