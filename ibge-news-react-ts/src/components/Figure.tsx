import { NewsType } from '../types';
import Card from './Card';

type FigureProps = {
  notice: NewsType,
};

function Figure({ notice }: FigureProps) {
  return (
    <section>
      <Card notice={ notice } />
    </section>
  );
}

export default Figure;
