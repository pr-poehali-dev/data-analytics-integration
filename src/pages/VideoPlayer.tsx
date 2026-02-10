import { useParams, useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

const VideoPlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const allVideos = [
    {
      id: "1",
      thumbnail: "/freepik__enhance__98192.png",
      title: "Как создать свой видеохостинг",
      duration: "12:45",
      views: "1.2K",
      description: "В этом видео я показываю, как создать собственную платформу для видео с нуля. Разбираем архитектуру, выбор технологий и основные компоненты.",
      uploadDate: "2 дня назад",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
      id: "2",
      thumbnail: "/LS.png",
      title: "Обзор новых технологий",
      duration: "8:30",
      views: "850",
      description: "Обзор самых интересных технологий 2024 года, которые изменят индустрию разработки.",
      uploadDate: "5 дней назад",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    },
    {
      id: "3",
      thumbnail: "/freepik__a-closeup-shot-features-a-glossy-purple-crossshape__48873.png",
      title: "Дизайн интерфейсов 2024",
      duration: "15:20",
      views: "2.1K",
      description: "Современные подходы к дизайну пользовательских интерфейсов. Тренды, инструменты и лучшие практики.",
      uploadDate: "1 неделю назад",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
      id: "4",
      thumbnail: "/freepik__the-style-is-3d-model-with-octane-render-volumetri__57555.png",
      title: "3D моделирование для начинающих",
      duration: "20:15",
      views: "3.5K",
      description: "Полное руководство по 3D моделированию с нуля до продвинутого уровня.",
      uploadDate: "2 недели назад",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    {
      id: "5",
      thumbnail: "/eqirGoRIJPaIMgEUeliWpNxeFmI.jpg",
      title: "Путешествие по Азии",
      duration: "25:40",
      views: "5K",
      description: "Влог о путешествии по удивительным местам Азии. Культура, еда, достопримечательности.",
      uploadDate: "3 недели назад",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
    },
    {
      id: "6",
      thumbnail: "/ultra-detailed_close-up_side_profile_of_a_dark-skinned_model_wearing_futuristic_chrome_wraparound_s_ps17q5ms2ptu5t6bdru6_2.png",
      title: "Футуристическая мода",
      duration: "10:05",
      views: "1.8K",
      description: "Обзор футуристических трендов в моде и аксессуарах.",
      uploadDate: "1 месяц назад",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
    }
  ];

  const currentVideo = allVideos.find(v => v.id === id) || allVideos[0];
  const relatedVideos = allVideos.filter(v => v.id !== currentVideo.id).slice(0, 4);

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
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => navigate('/catalog')}>
              <Icon name="Grid3x3" size={20} />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => navigate('/upload')}>
              <Icon name="Upload" size={20} />
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div 
              className="aspect-video bg-black rounded-xl overflow-hidden relative group cursor-pointer"
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(isPlaying ? false : true)}
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                src={currentVideo.videoUrl}
                poster={currentVideo.thumbnail}
                className="w-full h-full object-contain"
                onEnded={() => setIsPlaying(false)}
              />
              {(!isPlaying || showControls) && (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity">
                  <button className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition-all group-hover:scale-110">
                    <Icon name={isPlaying ? "Pause" : "Play"} size={32} className="text-white ml-1" />
                  </button>
                </div>
              )}
            </div>

            <div>
              <h1 className="text-2xl font-bold mb-2">{currentVideo.title}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span>{currentVideo.views} просмотров</span>
                <span>•</span>
                <span>{currentVideo.uploadDate}</span>
              </div>

              <Card className="p-4">
                <p className="text-sm leading-relaxed">{currentVideo.description}</p>
              </Card>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold text-lg">Похожие видео</h2>
            <div className="space-y-3">
              {relatedVideos.map(video => (
                <Card 
                  key={video.id}
                  className="p-3 cursor-pointer hover:bg-accent transition-colors"
                  onClick={() => navigate(`/watch/${video.id}`)}
                >
                  <div className="flex gap-3">
                    <div className="relative w-40 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm line-clamp-2 mb-1">{video.title}</h3>
                      <p className="text-xs text-muted-foreground">{video.views} просмотров</p>
                      <p className="text-xs text-muted-foreground">{video.uploadDate}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VideoPlayer;