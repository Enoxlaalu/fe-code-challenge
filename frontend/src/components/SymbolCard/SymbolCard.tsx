import './symbolCard.css';
import { useAppSelector } from '@/hooks/redux';
import SymbolCardHeader from '@/components/SymbolCard/SymbolCardHeader';
import SymbolCardBody from '@/components/SymbolCard/SymbolCardBody';

type SymbolCardProps = {
  id: string;
  onClick: (symbolId: string) => void;
  price: number;
};

const SymbolCard = ({ id, onClick, price }: SymbolCardProps) => {
  const { trend, companyName, industry, marketCap } = useAppSelector(
    (state) => state.stocks.entities[id]
  );

  const handleOnClick = () => {
    onClick(id);
  };

  return (
    <div onClick={handleOnClick} className="symbolCard">
      <SymbolCardHeader id={id} trend={trend} />
      <SymbolCardBody
        companyName={companyName}
        price={price}
        industry={industry}
        marketCap={marketCap}
      />
    </div>
  );
};
export default SymbolCard;
