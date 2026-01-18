import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Globe',
      title: 'Дизайн сайтов',
      description: 'Создаем современные и функциональные веб-сайты для игровых проектов и студий'
    },
    {
      icon: 'Palette',
      title: 'Иллюстрация',
      description: 'Разрабатываем уникальные иллюстрации для MMORPG, персонажей и игровых локаций'
    },
    {
      icon: 'Sword',
      title: 'Логотипы для MMORPG',
      description: 'Создаем запоминающиеся логотипы и брендинг для игровых вселенных'
    }
  ];

  const portfolio = [
    {
      title: 'FANTASY PORTAL',
      image: 'https://cdn.poehali.dev/projects/8acc7a0a-b687-4899-ac92-57a2e84d06ed/files/ed8072ac-8b80-4013-b9a3-d55077e4fe9c.jpg'
    },
    {
      title: 'DRAGON LOGO',
      image: 'https://cdn.poehali.dev/projects/8acc7a0a-b687-4899-ac92-57a2e84d06ed/files/4c5691a6-cde9-4173-a1d0-4bc911c934bc.jpg'
    },
    {
      title: 'CHARACTER ART',
      image: 'https://cdn.poehali.dev/projects/8acc7a0a-b687-4899-ac92-57a2e84d06ed/files/564670bf-1ddd-4e92-9f38-539fe22bdfe9.jpg'
    },
    {
      title: 'GAME UI',
      image: 'https://cdn.poehali.dev/projects/8acc7a0a-b687-4899-ac92-57a2e84d06ed/files/47fd9d0e-326b-4046-a107-05612b579698.jpg'
    },
    {
      title: 'CASTLE SCENE',
      image: 'https://cdn.poehali.dev/projects/8acc7a0a-b687-4899-ac92-57a2e84d06ed/files/e6178e00-a4bc-41c3-89e6-ae880843a11c.jpg'
    },
    {
      title: 'GUILD SITE',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format'
    },
    {
      title: 'BATTLE SCENE',
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&auto=format'
    },
    {
      title: 'EPIC DESIGN',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                NEXUS
              </span>
            </div>
            
            <div className="hidden md:flex gap-8">
              {['home', 'portfolio', 'services', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'ГЛАВНАЯ'}
                  {section === 'portfolio' && 'ПОРТФОЛИО'}
                  {section === 'services' && 'УСЛУГИ'}
                  {section === 'about' && 'О СТУДИИ'}
                  {section === 'contact' && 'КОНТАКТЫ'}
                </button>
              ))}
            </div>

            <Button>
              Начать проект
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://cdn.poehali.dev/projects/8acc7a0a-b687-4899-ac92-57a2e84d06ed/files/75cebc3c-2ea1-4c73-b1f7-84e4b02277b4.jpg)',
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: 0.3
          }}
        />
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow" 
            style={{ animationDelay: '1.5s', transform: `translateY(${scrollY * 0.2}px)` }} 
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div 
            className="max-w-4xl mx-auto text-center animate-fade-in"
            style={{ transform: `translateY(${scrollY * 0.15}px)` }}
          >
            <h1 className="text-6xl md:text-9xl font-heading font-black mb-8 leading-tight uppercase">
              <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-glow">
                NEXUS STUDIO
              </span>
            </h1>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('portfolio')}
              >
                <span className="relative z-10">Смотреть работы</span>
                <Icon name="ArrowRight" className="ml-2 relative z-10" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('contact')}
              >
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-32 relative bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-heading font-bold mb-4 uppercase">Наши работы</h2>
            <p className="text-xl text-muted-foreground">Проекты, которыми мы гордимся</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {portfolio.map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:z-10"
                style={{ 
                  clipPath: index % 3 === 0 ? 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' : 
                            index % 3 === 1 ? 'polygon(0 0, 100% 0, 85% 100%, 0 100%)' : 
                            'polygon(0 15%, 100% 0, 100% 100%, 0 100%)',
                  height: index % 4 === 0 || index % 4 === 3 ? '320px' : '280px'
                }}
              >
                <div className="relative w-full h-full">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div>
                      <h3 className="text-lg font-heading font-bold text-foreground uppercase leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon name="ArrowUpRight" size={20} className="text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-32 bg-card/30 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-heading font-bold mb-4 uppercase">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный цикл создания игровых проектов</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl font-heading font-bold mb-4 uppercase">О студии</h2>
              <p className="text-xl text-muted-foreground">Команда профессионалов с опытом в игровой индустрии</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  NEXUS — это команда опытных дизайнеров, иллюстраторов и разработчиков, специализирующихся на создании визуального контента для MMORPG игр.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Мы понимаем уникальные требования игровой индустрии и создаем решения, которые помогают проектам выделиться на конкурентном рынке.
                </p>
                <div className="grid grid-cols-3 gap-6 pt-6">
                  <div>
                    <div className="text-4xl font-heading font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Проектов</div>
                  </div>
                  <div>
                    <div className="text-4xl font-heading font-bold text-primary mb-2">5+</div>
                    <div className="text-sm text-muted-foreground">Лет опыта</div>
                  </div>
                  <div>
                    <div className="text-4xl font-heading font-bold text-primary mb-2">20+</div>
                    <div className="text-sm text-muted-foreground">Клиентов</div>
                  </div>
                </div>
              </div>
              
              <Card className="bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30 p-8">
                <CardContent className="p-0 space-y-4">
                  {['Индивидуальный подход', 'Опыт в игровой индустрии', 'Современные технологии', 'Поддержка 24/7'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <Icon name="Check" size={16} className="text-primary" />
                      </div>
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-card/30 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-heading font-bold mb-4 uppercase">Начнем работу?</h2>
              <p className="text-xl text-muted-foreground mb-12">
                Свяжитесь с нами, чтобы обсудить ваш проект
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">hello@nexus.studio</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MessageCircle" size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">Telegram</h3>
                  <p className="text-muted-foreground">@nexus_studio</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">Телефон</h3>
                  <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                </CardContent>
              </Card>
            </div>
            
            <Button 
              size="lg"
            >
              <span className="relative z-10">Связаться с нами</span>
              <Icon name="Send" className="ml-2 relative z-10" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" size={20} className="text-white" />
              </div>
              <span className="text-xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                NEXUS
              </span>
            </div>
            
            <p className="text-muted-foreground text-sm">
              © 2026 NEXUS Studio. Все права защищены.
            </p>
            
            <div className="flex gap-4">
              {['Github', 'Twitter', 'Linkedin', 'Instagram'].map((social) => (
                <button 
                  key={social}
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group"
                >
                  <Icon name={social} size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;