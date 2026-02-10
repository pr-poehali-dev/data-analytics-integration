import ArcGalleryHero from "@/components/ArcGalleryHero";

const Index = () => {
  const videos = [
    {
      id: "1",
      thumbnail: "/freepik__enhance__98192.png",
      title: "Как создать свой видеохостинг",
      duration: "12:45",
      views: "1.2K"
    },
    {
      id: "2",
      thumbnail: "/LS.png",
      title: "Обзор новых технологий",
      duration: "8:30",
      views: "850"
    },
    {
      id: "3",
      thumbnail: "/freepik__a-closeup-shot-features-a-glossy-purple-crossshape__48873.png",
      title: "Дизайн интерфейсов 2024",
      duration: "15:20",
      views: "2.1K"
    },
    {
      id: "4",
      thumbnail: "/freepik__the-style-is-3d-model-with-octane-render-volumetri__57555.png",
      title: "3D моделирование для начинающих",
      duration: "20:15",
      views: "3.5K"
    },
    {
      id: "5",
      thumbnail: "/eqirGoRIJPaIMgEUeliWpNxeFmI.jpg",
      title: "Путешествие по Азии",
      duration: "25:40",
      views: "5K"
    },
    {
      id: "6",
      thumbnail: "/ultra-detailed_close-up_side_profile_of_a_dark-skinned_model_wearing_futuristic_chrome_wraparound_s_ps17q5ms2ptu5t6bdru6_2.png",
      title: "Футуристическая мода",
      duration: "10:05",
      views: "1.8K"
    },
    {
      id: "7",
      thumbnail: "/slide.png",
      title: "Презентация проекта",
      duration: "18:30",
      views: "920"
    },
    {
      id: "8",
      thumbnail: "/freepik__abstract-digital-art-featuring-a-series-of-horizon__489.png",
      title: "Цифровое искусство",
      duration: "14:25",
      views: "2.7K"
    },
    {
      id: "9",
      thumbnail: "/abstract-blue-gradient.webp",
      title: "Градиенты в дизайне",
      duration: "9:10",
      views: "1.5K"
    },
    {
      id: "10",
      thumbnail: "/VkvvhXlWo3hEBzcqwTpjd_aa4bf9ee998f4ec0b17a8bf16fe3e9e2.jpg",
      title: "Архитектура будущего",
      duration: "22:50",
      views: "4.2K"
    },
    {
      id: "11",
      thumbnail: "/hyperrealistic_commercial_product_photography_of_luxury_chrome_sunglasses_on_male_model_extreme_chi_fanguv2w9zx489lcivwa_2.png",
      title: "Премиум товары",
      duration: "11:15",
      views: "990"
    }
  ];

  return (
    <main className="relative min-h-screen bg-background">
      <ArcGalleryHero
        videos={videos}
        startAngle={20}
        endAngle={160}
        radiusLg={480}
        radiusMd={360}
        radiusSm={260}
        cardSizeLg={200}
        cardSizeMd={160}
        cardSizeSm={120}
        className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
      />
    </main>
  );
};

export default Index;