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
          homeTitle: "WE'RE MODERN BUSINESS",
          homesubtitle: "Design Makes",
          homesubtitle2: "Anything Possible",
          btnSentence: "Get in Touch",
          player: "Watch Video",
          cardTitle: "The Best Solution For Your Company",
          cardSubTitle: "Lorem Ipsum is simply dummy text of the printing.",
          readNow: "Read Now",
          lowerCardTitle: "Provide Solution by Our Expert",
          lowerCardSubtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting.",
          listOne: "Talk more about your project",
          listTwo: "We help businesses grow fast",
          listThree: "Change the way for business",
          lowerCardTitle2: "All Seo and Online Marketing Needs",
          feature: "Features",
          contactUs: "Contact Me To Get Your Work Done",
          may: "May",
          pplrNewsTitle: "Teamwork as a team is the best way to",
          pplrNewsTitle2: "How to surviving on the great industry age",
          lowerTitle: "Let's Talk",
          lowerSubtTitle: "About Your Next Project",
          blogTitle: "The real deal",
          blogText: "As strategic partners in our clients' businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.",
          blogText2: "We are visual storytellers in appealing and captivating ways.By combining business and marketing strategies, we inspire audiences to take action and drive real results.",
          pplrCategories: "Popular Categories",
          cardTItle: "Design",
          cardSubTitle: "Lorem Ipsum is simply dummy.Lorem Ipsum is simply dummy.",
          blogsTitle: "Boosts Your Website Traffic!",
          projects: "Projects",
          clients: "Clients",
          calendarTitle: "Schedule Events",
          calendarSubTitle: "Social Media Strategies",
          profTeam: "Professional Team",
          personName: "Blade Reeves",
          personJob: "Graphic Design",
          personName2: "Sophie Khanna",
          personJob2: "Web Developer",
          ContactUs: "Contact Us !",
          helperText: "Hi, I'm Amanda. Need help? Use the form below or email me at",
          name: "Name",
          email: "Email",
          message: "Message",
          contactInfo: "Contact Info",
          callUs: "Call us",
          moreLinks: "More Links",
          helpCenter: "Help Center",
          myAcc: "My Account",
          Contact: "Contact",
          privacy: "Privacy",
          copyright: "Copyright",
          emailUs: "Email Us",
          allRights: "All Rights Reserved.",
          btnText: "Send my message",
          joinUs: "Join Us Now !",
          Email: "Email",
          Password: "Password",
          signup: "Sign Up",
          login: "Log In Now!",
          remember: "Remember Me"
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
          homeTitle: "МЫ СОВРЕМЕННЫЙ БИЗНЕС",
          homesubtitle: "Дизайн делает",
          homesubtitle2: "Все возможное",
          btnSentence: "Связаться",
          player: "Смотреть Видео",
          cardTitle: "Лучшее Решение Для Вашей Компании",
          cardSubTitle: "Lorem Ipsum это просто макет печатного текста.",
          readNow: "Читать Сейчас",
          lowerCardTitle: "Предоставьте Решение Нашим Экспертом",
          lowerCardSubtitle: "Lorem Ipsum это просто макет печатного и версточного текста.",
          listOne: "Расскажите подробнее о своем проекте",
          listTwo: "Мы помогаем бизнесу быстро расти",
          listThree: "Измените подход к бизнесу",
          lowerCardTitle2: "Все потребности в SEO и Интернет-маркетинге",
          feature: "Функции",
          contactUs: "Свяжитесь Со Мной, Чтобы Выполнить Вашу Работу",
          may: "Май",
          pplrNewsTitle: "Работа в команде лучший способ для",
          pplrNewsTitle2: "Как выжить в эпоху великой индустрии",
          lowerTitle: "Давайте Поговорим",
          lowerSubtTitle: "О Вашем Следующем Проекте",
          blogTitle: "Реальная Сделка",
          blogText: "Являясь стратегическими партнерами в бизнесе наших клиентов, мы готовы принять любую задачу как свою собственную. Решение реальных проблем требует сочувствия и сотрудничества, и мы стремимся по-новому взглянуть на каждую возможность. Мы делаем дизайн и технологии более доступными и даем вам инструменты для измерения успеха.",
          blogText2: "Мы являемся визуальными рассказчиками привлекательными и увлекательными способами. Объединив бизнес- и маркетинговые стратегии, мы вдохновляем аудиторию на действия и добиваемся реальных результатов.",
          pplrCategories: "Популярные Категории",
          cardTItle: "Дизайн",
          cardSubTitle: "Lorem Ipsum просто пустышка. Lorem Ipsum просто пустышка.",
          blogsTitle: "Увеличивает Посещаемость Вашего Сайта!",
          projects: "Проекты",
          clients: "Клиенты",
          calendarTitle: "Планировать События",
          calendarSubTitle: "Стратегии Cоциальных Cетей",
          profTeam: "Профессиональная Команда",
          personName: "Блейд Ривз",
          personJob: "График Дизайн",
          personName2: "София Кханна",
          personJob2: "Веб Программист",
          ContactUs: "Свяжитесь С Нами!",
          helperText: "Привет, я Аманда. Нужна помощь? Используйте форму ниже или напишите мне по адресу",
          name: "Имя",
          email: "Почта",
          message: "Сообщения",
          contactInfo: "Контактная Информация",
          callUs: "Звоните нам",
          moreLinks: "Больше Ссылок",
          helpCenter: "Центр Помощи",
          myAcc: "Мой Аккаунт",
          Contact: "Контакт",
          privacy: "Конфиденциальность",
          copyright: "Авторские права",
          emailUs: "По почте",
          allRights: "Все Права Защищены.",
          btnText: "Отправить мое сообщение",
          joinUs: "Присоединяйтесь к нам сейчас!",
          Email: "Почта",
          Password: "Пароль",
          signup: "Зарегистрироваться",
          login: "Войдите сейчас!",
          remember: "Запомнить меня"
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
