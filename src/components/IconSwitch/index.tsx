import React from 'react';

interface IconSwitchProps {
  icon: string;
  onSwitch: () => void;
}

export const IconSwitch: React.FC<IconSwitchProps> = ({ icon, onSwitch }) => (
  <span className="material-icons icon-switch" onClick={onSwitch}>
    {icon}
  </span>
);
