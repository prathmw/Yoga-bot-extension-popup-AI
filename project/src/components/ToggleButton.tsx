import React, { useState } from 'react';

const SentenceEnhancerSwitch: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
    console.log('Sentence Enhancer is ' + (isOn ? 'Off' : 'On'));
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium text-gray-700">Enhancer {isOn ? 'On' : 'Off'}</span>
      <button
        onClick={handleToggle}
        className={`relative w-12 h-6 flex items-center rounded-full transition duration-300 ease-in-out
          ${isOn ? 'bg-green-500' : 'bg-gray-400'}`}
      >
        <span
          className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform
            ${isOn ? 'translate-x-6' : 'translate-x-1'}`}
        />
      </button>
    </div>
  );
};

export default SentenceEnhancerSwitch;
