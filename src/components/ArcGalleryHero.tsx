import { useEffect, useState } from 'react';

type Video = {
  id: string;
  thumbnail: string;
  title: string;
  duration: string;
  views: string;
};

type ArcGalleryHeroProps = {
  videos: Video[];
  startAngle?: number;
  endAngle?: number;
  radiusLg?: number;
  radiusMd?: number;
  radiusSm?: number;
  cardSizeLg?: number;
  cardSizeMd?: number;
  cardSizeSm?: number;
  className?: string;
};

const ArcGalleryHero = ({
  videos,
  startAngle = -110,
  endAngle = 110,
  radiusLg = 340,
  radiusMd = 280,
  radiusSm = 200,
  cardSizeLg = 180,
  cardSizeMd = 150,
  cardSizeSm = 120,
  className = '',
}: ArcGalleryHeroProps) => {
  const [dimensions, setDimensions] = useState({
    radius: radiusLg,
    cardSize: cardSizeLg,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDimensions({ radius: radiusSm, cardSize: cardSizeSm });
      } else if (width < 1024) {
        setDimensions({ radius: radiusMd, cardSize: cardSizeMd });
      } else {
        setDimensions({ radius: radiusLg, cardSize: cardSizeLg });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [radiusLg, radiusMd, radiusSm, cardSizeLg, cardSizeMd, cardSizeSm]);

  const count = Math.max(videos.length, 2);
  const step = (endAngle - startAngle) / (count - 1);

  return (
    <section className={`relative overflow-hidden bg-background min-h-screen flex flex-col ${className}`}>
      <div
        className="relative mx-auto"
        style={{
          width: '100%',
          height: dimensions.radius * 1.2,
        }}
      >
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
          {videos.map((video, i) => {
            const angle = startAngle + step * i;
            const angleRad = (angle * Math.PI) / 180;
            const x = Math.cos(angleRad) * dimensions.radius;
            const y = Math.sin(angleRad) * dimensions.radius;

            return (
              <div
                key={video.id}
                className="absolute opacity-0 animate-fade-in-up"
                style={{
                  width: dimensions.cardSize,
                  height: dimensions.cardSize * 0.75,
                  left: `calc(50% + ${x}px)`,
                  bottom: `${y}px`,
                  transform: `translate(-50%, 50%)`,
                  animationDelay: `${i * 100}ms`,
                  animationFillMode: 'forwards',
                  zIndex: count - i,
                }}
              >
                <div
                  className="rounded-xl shadow-xl overflow-hidden ring-1 ring-border bg-card transition-transform hover:scale-105 w-full h-full cursor-pointer group"
                  style={{ transform: `rotate(${angle / 4}deg)` }}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="block w-full h-full object-cover"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                      {video.duration}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center px-6 -mt-40 md:-mt-52 lg:-mt-64">
        <div className="text-center max-w-3xl px-6 opacity-0 animate-fade-in" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
          <div className="inline-block mb-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-foreground flex items-center gap-3">
              <span className="text-red-600">Рустам</span>
              <span className="bg-red-600 text-white px-4 py-2 rounded-lg">Tube</span>
            </h1>
          </div>
          <p className="mt-6 text-xl text-muted-foreground">
            Моя личная видеоплатформа для хранения и просмотра видео
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold">
              Смотреть видео
            </button>
            <button className="w-full sm:w-auto px-8 py-3 rounded-full border-2 border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200 font-semibold">
              Загрузить видео
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArcGalleryHero;