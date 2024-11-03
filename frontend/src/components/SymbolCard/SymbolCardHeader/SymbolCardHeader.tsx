import './symbolCardHeader.css';
import arrowDown from '@/assets/down.png';
import arrowUp from '@/assets/up.png';
import { memo } from 'react';

type SymbolCardHeaderProps = {
  id: string;
  trend: string | null;
};

const SymbolCardHeader = memo(({ id, trend }: SymbolCardHeaderProps) => {
  return (
    <header className="symbolCard__header">
      <img src={trend === 'UP' ? arrowUp : arrowDown} className="symbolCard__arrowIcon" />
      {id}
    </header>
  );
});

export default SymbolCardHeader;
