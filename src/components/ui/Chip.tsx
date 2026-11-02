import React from 'react';

interface ChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export const Chip: React.FC<ChipProps> = ({ label, active, onClick }) => {
  const ChipProps = {
    active: '',
    default: '',
  };

  return (
    <button type="button" onClick={onClick} aria-pressed={active}>
      {label}
    </button>
  );
};

export default Chip;