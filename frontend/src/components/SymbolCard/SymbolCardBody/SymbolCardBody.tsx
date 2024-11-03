import './symbolCardBody.css';
import SymbolCardPrice from '@/components/SymbolCard/SymbolCardPrice';
import { Stock } from '@/store/stocksSlice';
import SymbolCardList from '@/components/SymbolCard/SymbolCardList';

export type SymbolCardBodyProps = {
  price: number;
  showCardInfo: boolean;
} & Pick<Stock, 'companyName' | 'industry' | 'marketCap'>;

const SymbolCardBody = ({ price, showCardInfo, ...rest }: SymbolCardBodyProps) => {
  return (
    <div className="symbolCard__body">
      <SymbolCardPrice price={price} />
      {showCardInfo && <SymbolCardList {...rest} />}
    </div>
  );
};

export default SymbolCardBody;
