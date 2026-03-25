import { useState } from 'react';
import { Button } from './Button';

export function ButtonShowcase() {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  return (
    <div className="space-y-16">
      {/* Primary Buttons */}
      <section className="bg-[#2d3748] rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Primary Buttons</h2>
        <p className="text-gray-400 mb-8">Used for main call-to-action elements like "Register" or "Submit"</p>

        <div className="space-y-8">
          {/* Size Variants */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Sizes</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="sm">Small Button</Button>
              <Button variant="primary" size="md">Medium Button</Button>
              <Button variant="primary" size="lg">Large Button</Button>
            </div>
          </div>

          {/* States */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">States</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <p className="text-sm text-gray-400 mb-3">Default</p>
                <Button variant="primary">Registreeru</Button>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-3">Hover (hover over button)</p>
                <Button variant="primary">Registreeru</Button>
                <p className="text-xs text-gray-500 mt-2">Hover to see effect</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-3">Pressed/Active</p>
                <Button
                  variant="primary"
                  isActive={activeButton === 'primary-active'}
                  onMouseDown={() => setActiveButton('primary-active')}
                  onMouseUp={() => setActiveButton(null)}
                  onMouseLeave={() => setActiveButton(null)}
                >
                  Registreeru
                </Button>
                <p className="text-xs text-gray-500 mt-2">Click and hold</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-3">Disabled/Inactive</p>
                <Button variant="primary" disabled>Registreeru</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Buttons */}
      <section className="bg-[#2d3748] rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Secondary Buttons</h2>
        <p className="text-gray-400 mb-8">Used for secondary actions with bordered outline style</p>

        <div className="space-y-8">
          {/* Size Variants */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Sizes</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary" size="sm">Small Button</Button>
              <Button variant="secondary" size="md">Medium Button</Button>
              <Button variant="secondary" size="lg">Large Button</Button>
            </div>
          </div>

          {/* States */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">States</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <p className="text-sm text-gray-400 mb-3">Default</p>
                <Button variant="secondary">Alusta teemat</Button>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-3">Hover (hover over button)</p>
                <Button variant="secondary">Alusta teemat</Button>
                <p className="text-xs text-gray-500 mt-2">Hover to see effect</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-3">Pressed/Active</p>
                <Button
                  variant="secondary"
                  isActive={activeButton === 'secondary-active'}
                  onMouseDown={() => setActiveButton('secondary-active')}
                  onMouseUp={() => setActiveButton(null)}
                  onMouseLeave={() => setActiveButton(null)}
                >
                  Alusta teemat
                </Button>
                <p className="text-xs text-gray-500 mt-2">Click and hold</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-3">Disabled/Inactive</p>
                <Button variant="secondary" disabled>Alusta teemat</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ghost/Tertiary Buttons */}
      <section className="bg-[#2d3748] rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Ghost/Tertiary Buttons</h2>
        <p className="text-gray-400 mb-8">Used for subtle actions like "Cancel" or tertiary navigation</p>

        <div className="space-y-8">
          {/* Size Variants */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Sizes</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="ghost" size="sm">Small Button</Button>
              <Button variant="ghost" size="md">Medium Button</Button>
              <Button variant="ghost" size="lg">Large Button</Button>
            </div>
          </div>

          {/* States */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">States</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <p className="text-sm text-gray-400 mb-3">Default</p>
                <Button variant="ghost">Logi sisse</Button>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-3">Hover (hover over button)</p>
                <Button variant="ghost">Logi sisse</Button>
                <p className="text-xs text-gray-500 mt-2">Hover to see effect</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-3">Pressed/Active</p>
                <Button
                  variant="ghost"
                  isActive={activeButton === 'ghost-active'}
                  onMouseDown={() => setActiveButton('ghost-active')}
                  onMouseUp={() => setActiveButton(null)}
                  onMouseLeave={() => setActiveButton(null)}
                >
                  Logi sisse
                </Button>
                <p className="text-xs text-gray-500 mt-2">Click and hold</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-3">Disabled/Inactive</p>
                <Button variant="ghost" disabled>Logi sisse</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="bg-[#2d3748] rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Usage Examples</h2>

        <div className="space-y-8">
          {/* Form Example */}
          <div className="bg-[#1a202c] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Form Actions</h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Submit</Button>
              <Button variant="secondary">Save Draft</Button>
              <Button variant="ghost">Cancel</Button>
            </div>
          </div>

          {/* Navigation Example */}
          <div className="bg-[#1a202c] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Navigation/Header</h3>
            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <Button variant="ghost" size="sm">Avaleht</Button>
                <Button variant="ghost" size="sm">Foorumid</Button>
                <Button variant="ghost" size="sm">Liikmed</Button>
              </div>
              <div className="flex gap-3">
                <Button variant="ghost" size="sm">Logi sisse</Button>
                <Button variant="primary" size="sm">Registreeru</Button>
              </div>
            </div>
          </div>

          {/* Action Group Example */}
          <div className="bg-[#1a202c] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Action Groups</h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary Action</Button>
              <Button variant="secondary">Secondary Action</Button>
              <Button variant="secondary">Another Option</Button>
              <Button variant="ghost">More...</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
