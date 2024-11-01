import ListItem from '@/components/ListItem';
import './symbolCardBody.css';
import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { ReactComponent as IndustryIcon } from '@/assets/industry.svg';
import { ReactComponent as MarketCapIcon } from '@/assets/market_cap.svg';
import SymbolCardPrice from '@/components/SymbolCard/SymbolCardPrice';
import { Stock } from '@/store/stocksSlice';
import { showShortenedAmount } from '@/helpers/currency';

type SymbolCardBodyProps = {
  price: number;
} & Pick<Stock, 'companyName' | 'industry' | 'marketCap'>;

const SymbolCardBody = ({ price, companyName, industry, marketCap }: SymbolCardBodyProps) => {
  const listItems = [
    {
      id: 'companyName',
      label: companyName,
      icon: CompanyIcon
    },
    {
      id: 'industry',
      label: industry,
      icon: IndustryIcon
    },
    {
      id: 'marketCap',
      label: showShortenedAmount(marketCap),
      icon: MarketCapIcon
    }
  ];

  return (
    <div className="symbolCard__body">
      <SymbolCardPrice price={price} />
      {listItems.map(({ id, label, icon }) => {
        const Icon = icon;
        return <ListItem key={id} Icon={<Icon />} label={label} spacing="space-between" />;
      })}
    </div>
  );
};

export default SymbolCardBody;
