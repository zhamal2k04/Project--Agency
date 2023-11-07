import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          home: "Home",
          about: "About",
          blog: "Blog",
          sale: "Sale",
          contact: "Contact Us",
          aboutUsTitle: "About Us",
          aboutUsText: `Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We've partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We're always looking forward to creating brands, products,
          and digital experiences that connect with our clients' audiences.` ,
          whatPeopleSay: "What People Say",
          commentName: "Sandra Robert",
          commentName2: "Oliver Charlotte",
          youtube: "YouTube",
          twitch: "Twitch",
          pplrNews: "Popular News",
          lorem: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",

        },
    },
      ru: {
        translation: {
          home: "Домой",
          about: "О нас",
          blog: "Блог",
          sale: "Распродажа",
          contact: "Связь с нами",
          aboutUsText: `Основанное в 2010 году, мы являемся креативным агентством, которое производит долгосрочные
          результаты для наших клиентов. Мы сотрудничаем со многими стартапами,
          корпорации и некоммерческие организации создают проекты, которые воплощают в жизнь
          влияние. Мы всегда с нетерпением ждем возможности создавать бренды, продукты,
          и цифровой опыт, который объединяет аудиторию наших клиентов.` ,
          aboutUsTitle: "О нас",
          whatPeopleSay: "Что говорят люди",
          commentName: "Сандра Роберт",
          commentName2: "Оливер Шарлотта",
          youtube: "Ютуб",
          twitch: "Твич",
          pplrNews: "Популярные Новости",
          lorem: "Lorem Ipsum — это просто текст-пустышка полиграфической и наборной индустрии. Лорем Ипсум был. Lorem Ipsum — это просто текст-пустышка полиграфической и наборной индустрии. Lorem Ipsum был. Lorem Ipsum — это просто фиктивный текст полиграфической и наборной индустрии. Лорем Ипсум был.",
          

        },
      },
    },
    lng: 'en', // Установите язык по умолчанию
    fallbackLng: 'ru', // Язык, который будет использоваться в случае отсутствия перевода
    interpolation: {
      escapeValue: false, // не убирайте это!
    },
  });

export default i18n;
