import { Link } from 'react-router-dom';
import { TiInfoLarge } from 'react-icons/ti';
import { NewsType } from '../types';
import '../styles/card.css';

type CardProps = {
  notice: NewsType,
};

function Card({ notice }: CardProps) {
  return (
    <article>
      <h1
        data-testId={ `card-title-${notice.id}` }
      >
        { notice.titulo }
      </h1>
      <p
        data-testId={ `card-text-${notice.id}` }
      >
        {notice.introducao}
      </p>
      <span
        data-testId={ `card-date-${notice.id}` }
      >
        {notice.diffDays === 0 ? 'hoje' : `${notice.diffDays} dia(s) atrás`}
      </span>
      <Link to={ notice.link } data-testid={ `know-more-${notice.id}` }>
        <TiInfoLarge />
      </Link>
    </article>
  );
}
export default Card;
