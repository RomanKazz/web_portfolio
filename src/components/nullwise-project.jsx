import { ArrowUpRight, Instagram, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const covers = [
  {
    className: "nullwise-video-cubes",
    src: "nullwise-cubes.png",
    views: "6,8 млн",
    alt: "Обложка видео «Кубы считают π?»",
  },
  {
    className: "nullwise-video-galton",
    src: "nullwise-galton.png",
    views: "2,7 млн",
    alt: "Обложка видео «Доска Гальтона»",
  },
  {
    className: "nullwise-video-knight",
    src: "nullwise-knight.png",
    views: "1,9 млн",
    alt: "Обложка видео «Обход конём: вся доска?»",
  },
];

export function NullwiseProject() {
  return (
    <article className="game-project nullwise-project">
      <div className="nullwise-gallery" aria-label="Примеры видео nullwise">
        {covers.map(({ className, src, alt, views }) => (
          <div className={`nullwise-video ${className}`} key={className}>
            <img
              src={`${import.meta.env.BASE_URL}${src}`}
              alt={alt}
              loading="lazy"
              width="941"
              height="1672"
            />
            <div className="nullwise-views" aria-label={`${views} просмотров`}>
              <Eye size={15} aria-hidden="true" />
              <span>{views}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="game-notes nullwise-notes">
        <h3>
          nullwise<span className="orange">.</span>
        </h3>
        <p>
          Экспериментальный контент-проект о математике. Создавал видео с
          помощью <strong>Manim</strong>, <strong>Fish Audio</strong> и{" "}
          <strong>ИИ-агентов</strong>. Монтаж и финальную сборку делал в{" "}
          <strong>After Effects</strong>.
        </p>
        <div className="nullwise-results">
          <span className="nullwise-results-label">За месяц</span>
          <dl className="nullwise-stats">
            <div>
              <dt>просмотров</dt>
              <dd>20M+</dd>
            </div>
            <div>
              <dt>подписчиков</dt>
              <dd>20K+</dd>
            </div>
            <div>
              <dt>платформы</dt>
              <dd>3</dd>
            </div>
          </dl>
        </div>
        <ul className="project-chips" aria-label="Инструменты проекта">
          <li>Manim</li>
          <li>Fish Audio</li>
          <li>ИИ-агенты</li>
          <li>After Effects</li>
        </ul>
        <div className="project-actions">
          <Button asChild className="project-primary">
            <a
              href="https://www.youtube.com/@nullwise_ru"
              target="_blank"
              rel="noreferrer"
            >
              YouTube <ArrowUpRight size={17} />
            </a>
          </Button>
          <a
            className="text-link"
            href="https://www.instagram.com/nullwise_ru/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={18} /> Instagram <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </article>
  );
}
