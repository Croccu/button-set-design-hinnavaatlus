import { ButtonShowcase } from './components/ButtonShowcase';
import { ColorPalette } from './components/ColorPalette';
import { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'buttons' | 'colors'>('buttons');

  return (
    <div className="min-h-screen bg-[#1a202c] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex gap-2 mb-8 bg-[#2d3748] p-2 rounded-lg w-fit">
          <button
            onClick={() => setActiveTab('buttons')}
            className={`px-6 py-2.5 rounded-md font-medium transition-all ${
              activeTab === 'buttons'
                ? 'bg-[#2563eb] text-white shadow-md'
                : 'text-gray-400 hover:text-white hover:bg-[#1a202c]'
            }`}
          >
            Buttons
          </button>
          <button
            onClick={() => setActiveTab('colors')}
            className={`px-6 py-2.5 rounded-md font-medium transition-all ${
              activeTab === 'colors'
                ? 'bg-[#2563eb] text-white shadow-md'
                : 'text-gray-400 hover:text-white hover:bg-[#1a202c]'
            }`}
          >
            Colors
          </button>
        </div>

        {/* Content */}
        {activeTab === 'buttons' ? <ButtonShowcase /> : <ColorPalette />}
      </div>
    </div>
  );
}
