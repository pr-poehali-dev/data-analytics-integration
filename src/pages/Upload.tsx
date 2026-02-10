import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Upload = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [video, setVideo] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !video) {
      toast({
        title: "Ошибка",
        description: "Заполните обязательные поля",
        variant: "destructive"
      });
      return;
    }

    setUploading(true);
    
    setTimeout(() => {
      setUploading(false);
      toast({
        title: "Успешно!",
        description: "Видео загружено на платформу"
      });
      navigate('/catalog');
    }, 2000);
  };

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
          </div>
        </div>
      </header>

      <main className="container max-w-3xl py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Загрузить видео</h1>
          <p className="text-muted-foreground">Добавьте новое видео на свою платформу</p>
        </div>

        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="video" className="text-base">Видеофайл *</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                <input
                  type="file"
                  id="video"
                  accept="video/*"
                  className="hidden"
                  onChange={(e) => setVideo(e.target.files?.[0] || null)}
                />
                <label htmlFor="video" className="cursor-pointer flex flex-col items-center gap-2">
                  <Icon name="Upload" size={40} className="text-muted-foreground" />
                  {video ? (
                    <div className="space-y-1">
                      <p className="font-medium">{video.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {(video.size / 1024 / 1024).toFixed(2)} МБ
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <p className="font-medium">Нажмите для выбора видео</p>
                      <p className="text-sm text-muted-foreground">или перетащите файл сюда</p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title" className="text-base">Название видео *</Label>
              <Input
                id="title"
                placeholder="Введите название"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-base">Описание</Label>
              <Textarea
                id="description"
                placeholder="Расскажите о вашем видео..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={5}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="thumbnail" className="text-base">Обложка видео</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                <input
                  type="file"
                  id="thumbnail"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => setThumbnail(e.target.files?.[0] || null)}
                />
                <label htmlFor="thumbnail" className="cursor-pointer flex flex-col items-center gap-2">
                  <Icon name="Image" size={32} className="text-muted-foreground" />
                  {thumbnail ? (
                    <p className="font-medium">{thumbnail.name}</p>
                  ) : (
                    <p className="text-sm text-muted-foreground">Выберите изображение для обложки</p>
                  )}
                </label>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button 
                type="submit" 
                className="flex-1 bg-red-600 hover:bg-red-700"
                disabled={uploading}
              >
                {uploading ? (
                  <>
                    <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                    Загрузка...
                  </>
                ) : (
                  <>
                    <Icon name="Upload" size={20} className="mr-2" />
                    Загрузить видео
                  </>
                )}
              </Button>
              <Button 
                type="button" 
                variant="outline"
                onClick={() => navigate('/catalog')}
              >
                Отмена
              </Button>
            </div>
          </form>
        </Card>
      </main>
    </div>
  );
};

export default Upload;
