import { memo } from 'react';
import './performanceInfo.css';
import { ReactComponent as UpArrow } from '@/assets/up-arrow.svg';
import { ReactComponent as DownArrow } from '@/assets/down-arrow.svg';
import ListItem from '@/components/ListItem';
import { showShortenedAmount } from '@/helpers/currency';

type TrendLabelProps = {
  volume: number;
  change: number;
};

const VolumeLabel = ({ volume, change }: TrendLabelProps) => {
  const arrow = change > 1 ? <UpArrow /> : <DownArrow />;
  return <ListItem Icon={arrow} label={showShortenedAmount(volume)} />;
};
export default memo(VolumeLabel);
