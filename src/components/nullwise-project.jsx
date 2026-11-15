import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function NullwiseProject({ channelUrl }) {
  return (
    <article className="game-project nullwise-project">
      <div className="nullwise-cover" role="img" aria-label="Типографическая обложка nullwise с формулой Эйлера">
        <span className="nullwise-cover-label">МАТЕМАТИКА</span>
        <div className="nullwise-cover-center">
          <span className="nullwise-formula" aria-hidden="true">e<sup>iπ</sup> + 1 = 0</span>
          <span className="nullwise-wordmark">nullwise<span>.</span></span>
        </div>
        <span className="nullwise-cover-footer">ОБРАЗОВАТЕЛЬНЫЙ КАНАЛ</span>
      </div>
      <div className="game-notes">
        <h3>nullwise<span className="orange">.</span></h3>
        <p>Мой образовательный канал о математике.</p>
        <ul className="project-chips" aria-label="Направление проекта">
          <li>Математика</li><li>Образование</li>
        </ul>
        {channelUrl && <div className="project-actions"><Button asChild className="nullwise-link"><a href={channelUrl} target="_blank" rel="noreferrer">Открыть канал <ArrowUpRight size={17}/></a></Button></div>}
      </div>
    </article>
  );
}
