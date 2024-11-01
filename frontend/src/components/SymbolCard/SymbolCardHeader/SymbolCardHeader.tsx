import './symbolCardHeader.css';
import arrowDown from '@/assets/down.png';
import arrowUp from '@/assets/up.png';

type SymbolCardHeaderProps = {
  id: string;
  trend: string | null;
};

const SymbolCardHeader = ({ id, trend }: SymbolCardHeaderProps) => {
  return (
    <header className="symbolCard__header">
      <img src={trend === 'UP' ? arrowUp : arrowDown} className="symbolCard__arrowIcon" />
      {id}
    </header>
  );
};

export default SymbolCardHeader;
