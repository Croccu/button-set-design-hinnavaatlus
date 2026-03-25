import { useState } from 'react';

interface ColorSwatchProps {
  name: string;
  hex: string;
  bgColor: string;
  subtext?: string;
}

function ColorSwatch({ name, hex, bgColor, subtext }: ColorSwatchProps) {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden bg-white shadow-md">
      <div
        className="h-32 w-full"
        style={{ backgroundColor: bgColor }}
      />
      <div className="p-4 bg-white">
        <p className="font-semibold text-gray-900 mb-1">{name}</p>
        <p className="text-sm text-gray-900 mb-1">{hex}</p>
        {subtext && <p className="text-xs text-gray-500">{subtext}</p>}
      </div>
    </div>
  );
}

export function ColorPalette() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const lightModeColors = [
    { name: 'Background', hex: '#F9FAFB', bgColor: '#F9FAFB', subtext: 'bg-gray-50' },
    { name: 'Surface', hex: '#FFFFFF', bgColor: '#FFFFFF', subtext: 'bg-white' },
    { name: 'Border', hex: '#E5E7EB', bgColor: '#E5E7EB', subtext: 'border-gray-200' },
    { name: 'Border Hover', hex: '#93C5FD', bgColor: '#93C5FD', subtext: 'border-blue-300' },
    { name: 'Text Primary', hex: '#111827', bgColor: '#111827', subtext: 'text-gray-900' },
    { name: 'Text Secondary', hex: '#6B7280', bgColor: '#6B7280', subtext: 'text-gray-600' },
    { name: 'Text Tertiary', hex: '#9CA3AF', bgColor: '#9CA3AF', subtext: 'text-gray-500' },
    { name: 'Primary Blue', hex: '#2563EB', bgColor: '#2563EB', subtext: 'bg-blue-600' },
    { name: 'Primary Hover', hex: '#1D4ED8', bgColor: '#1D4ED8', subtext: 'bg-blue-700' },
    { name: 'Blue Accent', hex: '#93C3FD', bgColor: '#93C3FD', subtext: 'bg-blue-100' },
    { name: 'Success', hex: '#16A34A', bgColor: '#16A34A', subtext: 'text-green-600' },
    { name: 'Success BG', hex: '#DCFCE7', bgColor: '#DCFCE7', subtext: 'bg-green-50' },
    { name: 'Error', hex: '#DC2626', bgColor: '#DC2626', subtext: 'text-red-600' },
    { name: 'Error BG', hex: '#FEE2E2', bgColor: '#FEE2E2', subtext: 'bg-red-100' },
  ];

  const darkModeColors = [
    { name: 'Background', hex: '#111827', bgColor: '#111827', subtext: 'bg-gray-900' },
    { name: 'Surface', hex: '#1F2937', bgColor: '#1F2937', subtext: 'bg-gray-800' },
    { name: 'Surface Alt', hex: '#374151', bgColor: '#374151', subtext: 'bg-gray-700' },
    { name: 'Border', hex: '#374151', bgColor: '#374151', subtext: 'border-gray-700' },
    { name: 'Border Hover', hex: '#2563EB', bgColor: '#2563EB', subtext: 'border-blue-600' },
    { name: 'Text Primary', hex: '#FFFFFF', bgColor: '#FFFFFF', subtext: 'text-white' },
    { name: 'Text Secondary', hex: '#D1D5DB', bgColor: '#D1D5DB', subtext: 'text-gray-300' },
    { name: 'Text Tertiary', hex: '#9CA3AF', bgColor: '#9CA3AF', subtext: 'text-gray-400' },
    { name: 'Primary Blue', hex: '#3B82F6', bgColor: '#3B82F6', subtext: 'bg-blue-500' },
    { name: 'Primary Hover', hex: '#2563EB', bgColor: '#2563EB', subtext: 'bg-blue-600' },
    { name: 'Blue Accent', hex: '#1E3A8A', bgColor: '#1E3A8A', subtext: 'bg-blue-900' },
    { name: 'Success', hex: '#22C55E', bgColor: '#22C55E', subtext: 'text-green-500' },
    { name: 'Success BG', hex: '#14532D', bgColor: '#14532D', subtext: 'bg-green-900/30' },
    { name: 'Error', hex: '#EF4444', bgColor: '#EF4444', subtext: 'text-red-400' },
    { name: 'Error BG', hex: '#7F1D1D', bgColor: '#7F1D1D', subtext: 'bg-red-900' },
  ];

  const colors = mode === 'light' ? lightModeColors : darkModeColors;

  return (
    <div className="space-y-8">
      <section className="bg-[#2d3748] rounded-xl p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">{mode === 'light' ? 'Light Mode Colors' : 'Dark Mode Colors'}</h2>

          {/* Mode Toggle */}
          <div className="flex gap-2 bg-[#1a202c] p-1 rounded-lg">
            <button
              onClick={() => setMode('light')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                mode === 'light'
                  ? 'bg-[#2563eb] text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Light Mode
            </button>
            <button
              onClick={() => setMode('dark')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                mode === 'dark'
                  ? 'bg-[#2563eb] text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Dark Mode
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {colors.map((color) => (
            <ColorSwatch
              key={color.hex + color.name}
              name={color.name}
              hex={color.hex}
              bgColor={color.bgColor}
              subtext={color.subtext}
            />
          ))}
        </div>
      </section>

      {/* Color Usage Examples */}
      <section className="bg-[#2d3748] rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Usage</h2>

        <div className="space-y-6">
          <div className="bg-[#1a202c] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Background Colors</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p><span className="text-[#60a5fa]">Black (#000000)</span> - Deep backgrounds</p>
              <p><span className="text-[#60a5fa]">Dark Grey (#1a202c)</span> - Primary background</p>
              <p><span className="text-[#60a5fa]">Dark Grey 2 (#2d3748)</span> - Card/section backgrounds</p>
            </div>
          </div>

          <div className="bg-[#1a202c] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Primary Colors</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p><span className="text-[#60a5fa]">Blue (#2563eb)</span> - Primary buttons, links</p>
              <p><span className="text-[#60a5fa]">Blue Dark (#1e40af)</span> - Button hover states</p>
              <p><span className="text-[#60a5fa]">Light Blue (#60a5fa)</span> - Secondary text, accents</p>
            </div>
          </div>

          <div className="bg-[#1a202c] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Text Colors</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p><span className="text-[#60a5fa]">White (#ffffff)</span> - Primary text</p>
              <p><span className="text-[#60a5fa]">Light Gray (#a0aec0)</span> - Secondary text</p>
              <p><span className="text-[#60a5fa]">Gray (#718096)</span> - Tertiary text, labels</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
