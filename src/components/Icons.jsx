import React from 'react';

const icons = Object.values(import.meta.glob('../assets/svg/*.svg', {
  eager: true,
  import: 'default',
  query: '?react'
}));


const Icons = () => {
  return (
    <div className="flex gap-4">
      {icons.map((Component , i) => (
        <Component  key={i} className="w-10 h-10 text-gray-500 stroke-white" />
      ))}
    </div>
  );
};

export default Icons;