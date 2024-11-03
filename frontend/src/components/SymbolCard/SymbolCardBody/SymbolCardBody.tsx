import './symbolCardBody.css';
import SymbolCardPrice from '@/components/SymbolCard/SymbolCardPrice';
import { Stock } from '@/store/stocksSlice';
import SymbolCardList from '@/components/SymbolCard/SymbolCardList';

export type SymbolCardBodyProps = {
  price: number;
} & Pick<Stock, 'companyName' | 'industry' | 'marketCap'>;

const SymbolCardBody = ({ price, ...rest }: SymbolCardBodyProps) => {
  return (
    <div className="symbolCard__body">
      <SymbolCardPrice price={price} />
      <SymbolCardList {...rest} />
    </div>
  );
};

export default SymbolCardBody;
