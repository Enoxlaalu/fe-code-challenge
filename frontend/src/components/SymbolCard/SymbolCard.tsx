import './symbolCard.css';
import { useAppSelector } from '@/hooks/redux';
import SymbolCardHeader from '@/components/SymbolCard/SymbolCardHeader';
import SymbolCardBody from '@/components/SymbolCard/SymbolCardBody';
import { memo, useRef } from 'react';

type SymbolCardProps = {
  id: string;
  onClick: (symbolId: string) => void;
  price: number;
  activeSymbol: string | null;
};

const SymbolCard = memo(({ id, onClick, price, activeSymbol }: SymbolCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { trend, companyName, industry, marketCap } = useAppSelector(
    (state) => state.stocks.entities[id]
  );

  const handleOnClick = () => {
    onClick(id);
  };

  const getClassName = () => {
    let className = 'symbolCard';

    if (activeSymbol) {
      if (activeSymbol === id) className = className + ' symbolCard--active';
      if (activeSymbol !== id) className = className + ' symbolCard--nonactive';
    }

    const prevPrice = Number(ref.current?.dataset.price);
    const increasePercent = (100 * (price - prevPrice)) / prevPrice;

    if (price > prevPrice) {
      if (increasePercent >= 25) {
        className = className + ' symbolCard--shake';
      }

      className = className + ' symbolCard--green';
    }
    if (price < Number(ref.current?.dataset.price)) {
      className = className + ' symbolCard--red';
    }

    return className;
  };

  return (
    <div ref={ref} data-price={price} onClick={handleOnClick} className={getClassName()}>
      <SymbolCardHeader id={id} trend={trend} />
      <SymbolCardBody
        companyName={companyName}
        price={price}
        industry={industry}
        marketCap={marketCap}
      />
    </div>
  );
});

export default SymbolCard;

SymbolCard.displayName = 'SymbolCard';
