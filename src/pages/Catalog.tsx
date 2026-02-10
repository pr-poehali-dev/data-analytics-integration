import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Catalog = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'views' | 'duration'>('recent');

  const allVideos = [
    {
      id: "1",
      thumbnail: "/freepik__enhance__98192.png",
      title: "Как создать свой видеохостинг",
      duration: "12:45",
      views: "1.2K",
      uploadDate: "2 дня назад",
      viewsNum: 1200
    },
    {
      id: "2",
      thumbnail: "/LS.png",
      title: "Обзор новых технологий",
      duration: "8:30",
      views: "850",
      uploadDate: "5 дней назад",
      viewsNum: 850
    },
    {
      id: "3",
      thumbnail: "/freepik__a-closeup-shot-features-a-glossy-purple-crossshape__48873.png",
      title: "Дизайн интерфейсов 2024",
      duration: "15:20",
      views: "2.1K",
      uploadDate: "1 неделю назад",
      viewsNum: 2100
    },
    {
      id: "4",
      thumbnail: "/freepik__the-style-is-3d-model-with-octane-render-volumetri__57555.png",
      title: "3D моделирование для начинающих",
      duration: "20:15",
      views: "3.5K",
      uploadDate: "2 недели назад",
      viewsNum: 3500
    },
    {
      id: "5",
      thumbnail: "/eqirGoRIJPaIMgEUeliWpNxeFmI.jpg",
      title: "Путешествие по Азии",
      duration: "25:40",
      views: "5K",
      uploadDate: "3 недели назад",
      viewsNum: 5000
    },
    {
      id: "6",
      thumbnail: "/ultra-detailed_close-up_side_profile_of_a_dark-skinned_model_wearing_futuristic_chrome_wraparound_s_ps17q5ms2ptu5t6bdru6_2.png",
      title: "Футуристическая мода",
      duration: "10:05",
      views: "1.8K",
      uploadDate: "1 месяц назад",
      viewsNum: 1800
    },
    {
      id: "7",
      thumbnail: "/slide.png",
      title: "Презентация проекта",
      duration: "18:30",
      views: "920",
      uploadDate: "1 месяц назад",
      viewsNum: 920
    },
    {
      id: "8",
      thumbnail: "/freepik__abstract-digital-art-featuring-a-series-of-horizon__489.png",
      title: "Цифровое искусство",
      duration: "14:25",
      views: "2.7K",
      uploadDate: "2 месяца назад",
      viewsNum: 2700
    },
    {
      id: "9",
      thumbnail: "/abstract-blue-gradient.webp",
      title: "Градиенты в дизайне",
      duration: "9:10",
      views: "1.5K",
      uploadDate: "2 месяца назад",
      viewsNum: 1500
    },
    {
      id: "10",
      thumbnail: "/VkvvhXlWo3hEBzcqwTpjd_aa4bf9ee998f4ec0b17a8bf16fe3e9e2.jpg",
      title: "Архитектура будущего",
      duration: "22:50",
      views: "4.2K",
      uploadDate: "3 месяца назад",
      viewsNum: 4200
    },
    {
      id: "11",
      thumbnail: "/hyperrealistic_commercial_product_photography_of_luxury_chrome_sunglasses_on_male_model_extreme_chi_fanguv2w9zx489lcivwa_2.png",
      title: "Премиум товары",
      duration: "11:15",
      views: "990",
      uploadDate: "3 месяца назад",
      viewsNum: 990
    }
  ];

  const filteredVideos = allVideos
    .filter(video => 
      video.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'views') return b.viewsNum - a.viewsNum;
      if (sortBy === 'duration') {
        const aDuration = a.duration.split(':').reduce((acc, time) => (60 * acc) + +time, 0);
        const bDuration = b.duration.split(':').reduce((acc, time) => (60 * acc) + +time, 0);
        return bDuration - aDuration;
      }
      return parseInt(b.id) - parseInt(a.id);
    });

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="text-2xl font-black text-red-600">Рустам</span>
            <span className="text-2xl font-black bg-red-600 text-white px-3 py-1 rounded-lg">Tube</span>
          </button>
          
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Поиск видео..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Button 
            className="bg-red-600 hover:bg-red-700"
            onClick={() => navigate('/upload')}
          >
            <Icon name="Upload" size={20} className="mr-2" />
            Загрузить
          </Button>
        </div>
      </header>

      <main className="container py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Все видео</h1>
            <p className="text-muted-foreground">
              {filteredVideos.length} {filteredVideos.length === 1 ? 'видео' : 'видео'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Сортировать:</span>
            <Button
              variant={sortBy === 'recent' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSortBy('recent')}
              className={sortBy === 'recent' ? 'bg-red-600 hover:bg-red-700' : ''}
            >
              Недавние
            </Button>
            <Button
              variant={sortBy === 'views' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSortBy('views')}
              className={sortBy === 'views' ? 'bg-red-600 hover:bg-red-700' : ''}
            >
              Популярные
            </Button>
            <Button
              variant={sortBy === 'duration' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSortBy('duration')}
              className={sortBy === 'duration' ? 'bg-red-600 hover:bg-red-700' : ''}
            >
              Длительность
            </Button>
          </div>
        </div>

        {filteredVideos.length === 0 ? (
          <Card className="p-12 text-center">
            <Icon name="Search" size={48} className="mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-semibold mb-2">Видео не найдено</h3>
            <p className="text-muted-foreground">Попробуйте изменить поисковый запрос</p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVideos.map(video => (
              <Card 
                key={video.id}
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group"
                onClick={() => navigate(`/watch/${video.id}`)}
              >
                <div className="relative aspect-video bg-muted">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center">
                      <Icon name="Play" size={28} className="text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold line-clamp-2 mb-2 group-hover:text-red-600 transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{video.views} просмотров</span>
                    <span>•</span>
                    <span>{video.uploadDate}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Catalog;
