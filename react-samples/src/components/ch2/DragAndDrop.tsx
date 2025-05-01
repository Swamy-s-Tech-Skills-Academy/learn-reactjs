import React, { useState } from 'react';

interface DraggableItem {
  id: number;
  content: string;
  color: string;
}

const DragAndDrop = () => {
  const initialItems: DraggableItem[] = [
    { id: 1, content: 'Item 1', color: 'bg-blue-200' },
    { id: 2, content: 'Item 2', color: 'bg-green-200' },
    { id: 3, content: 'Item 3', color: 'bg-yellow-200' },
    { id: 4, content: 'Item 4', color: 'bg-pink-200' },
    { id: 5, content: 'Item 5', color: 'bg-purple-200' }
  ];

  const [items, setItems] = useState<DraggableItem[]>(initialItems);
  const [draggedItem, setDraggedItem] = useState<DraggableItem | null>(null);
  const [dropBoxItems, setDropBoxItems] = useState<DraggableItem[]>([]);

  // Handle drag start
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, item: DraggableItem) => {
    setDraggedItem(item);
    e.dataTransfer.setData('text/plain', item.id.toString());
    
    // Make the element semi-transparent when dragging
    if (e.currentTarget.classList) {
      setTimeout(() => {
        e.currentTarget.classList.add('opacity-50');
      }, 0);
    }
  };

  // Handle drag end
  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    if (e.currentTarget.classList) {
      e.currentTarget.classList.remove('opacity-50');
    }
  };

  // Handle drag over
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  // Handle drop onto the drop zone
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    
    if (draggedItem) {
      // Add to drop box if not already there
      if (!dropBoxItems.find(item => item.id === draggedItem.id)) {
        setDropBoxItems([...dropBoxItems, draggedItem]);
      }
    }
  };

  // Handle drop back to the original list
  const handleResetDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    // Do nothing - items remain in the original list
  };

  // Remove an item from the drop box
  const removeFromDropBox = (id: number) => {
    setDropBoxItems(dropBoxItems.filter(item => item.id !== id));
  };

  // Reset everything
  const handleReset = () => {
    setDropBoxItems([]);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Drag and Drop Example</h1>
      <p className="text-gray-600 mb-8">
        This component demonstrates how to implement drag and drop functionality in React.
        You can drag items from the list on the left to the drop zone on the right.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        {/* Source items */}
        <div
          className="p-4 border-2 border-gray-300 rounded-lg bg-gray-50 min-h-[300px]"
          onDragOver={handleDragOver}
          onDrop={handleResetDrop}
        >
          <h2 className="text-xl font-semibold mb-4">Draggable Items</h2>
          <p className="text-sm text-gray-500 mb-4">Drag these items to the drop zone →</p>
          <div className="space-y-3">
            {items.map(item => (
              <div
                key={item.id}
                className={`${item.color} p-4 rounded-lg shadow cursor-move transition-transform transform hover:scale-105 hover:shadow-md`}
                draggable
                onDragStart={(e) => handleDragStart(e, item)}
                onDragEnd={handleDragEnd}
              >
                <p className="font-medium">{item.content}</p>
                <p className="text-sm text-gray-600">Drag me!</p>
              </div>
            ))}
          </div>
        </div>

        {/* Drop zone */}
        <div
          className="p-4 border-2 border-dashed border-blue-300 rounded-lg bg-blue-50 min-h-[300px] flex flex-col"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <h2 className="text-xl font-semibold mb-4">Drop Zone</h2>
          <p className="text-sm text-gray-500 mb-4">← Drop items here</p>
          
          {dropBoxItems.length > 0 ? (
            <div className="space-y-3 flex-grow">
              {dropBoxItems.map(item => (
                <div
                  key={item.id}
                  className={`${item.color} p-4 rounded-lg shadow flex justify-between items-center`}
                >
                  <p className="font-medium">{item.content}</p>
                  <button
                    onClick={() => removeFromDropBox(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex-grow flex items-center justify-center text-gray-400 italic">
              Drop items here
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Reset
        </button>
      </div>

      <div className="mt-12 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">How It Works</h2>
        <p className="mb-4">
          This example uses the native HTML5 Drag and Drop API. Here are the key events used:
        </p>
        <table className="min-w-full border border-gray-300 mb-4">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Event</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>onDragStart</code></td>
              <td className="border border-gray-300 px-4 py-2">Triggered when the user starts dragging an element</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>onDragEnd</code></td>
              <td className="border border-gray-300 px-4 py-2">Triggered when the user has finished dragging</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>onDragOver</code></td>
              <td className="border border-gray-300 px-4 py-2">Triggered when a dragged item is over a drop target</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"><code>onDrop</code></td>
              <td className="border border-gray-300 px-4 py-2">Triggered when an item is dropped on a drop target</td>
            </tr>
          </tbody>
        </table>
        
        <p className="mb-4">
          For more complex drag and drop interactions, you may want to consider using libraries like:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li><a href="https://github.com/atlassian/react-beautiful-dnd" className="text-blue-600 hover:text-blue-800">react-beautiful-dnd</a></li>
          <li><a href="https://github.com/react-dnd/react-dnd" className="text-blue-600 hover:text-blue-800">react-dnd</a></li>
          <li><a href="https://dndkit.com/" className="text-blue-600 hover:text-blue-800">dnd kit</a></li>
        </ul>
      </div>
    </div>
  );
};

export default DragAndDrop;