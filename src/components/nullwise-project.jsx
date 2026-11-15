import { ArrowUpRight, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const covers = [
  { className: 'nullwise-video-cubes', alt: 'Обложка видео «Кубы считают π?» — 6,8 млн просмотров' },
  { className: 'nullwise-video-galton', alt: 'Обложка видео «Доска Гальтона» — 2,7 млн просмотров' },
  { className: 'nullwise-video-knight', alt: 'Обложка видео «Обход конём — вся доска?» — 1,9 млн просмотров' },
];

export function NullwiseProject() {
  return (
    <article className="game-project nullwise-project">
      <div className="nullwise-gallery" aria-label="Примеры видео nullwise">
        {covers.map(({ className, alt }) => (
          <div className={`nullwise-video ${className}`} key={className}>
            <img src={`${import.meta.env.BASE_URL}nullwise-reference.jpg`} alt={alt} loading="lazy" width="1448" height="1086" />
          </div>
        ))}
      </div>
      <div className="game-notes nullwise-notes">
        <h3>nullwise<span className="orange">.</span></h3>
        <p>Экспериментальный контент-проект о математике. Создавал видео с помощью Manim, Fish Audio и ИИ-агентов. Монтаж и финальную сборку делал в After Effects.</p>
        <div className="nullwise-results">
          <span className="nullwise-results-label">За месяц</span>
          <dl className="nullwise-stats">
            <div><dt>просмотров</dt><dd>20M+</dd></div>
            <div><dt>подписчиков</dt><dd>20K+</dd></div>
            <div><dt>платформы</dt><dd>3</dd></div>
          </dl>
        </div>
        <ul className="project-chips" aria-label="Инструменты проекта">
          <li>Manim</li><li>Fish Audio</li><li>ИИ-агенты</li><li>After Effects</li>
        </ul>
        <div className="project-actions">
          <Button asChild className="nullwise-link"><a href="https://www.youtube.com/@nullwise_ru" target="_blank" rel="noreferrer">YouTube <ArrowUpRight size={17}/></a></Button>
          <a className="text-link" href="https://www.instagram.com/nullwise_ru/" target="_blank" rel="noreferrer"><Instagram size={18}/> Instagram <ArrowUpRight size={14}/></a>
        </div>
      </div>
    </article>
  );
}
