import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeProject, setActiveProject] = useState(0);

  const services = [
    {
      icon: 'Building2',
      title: 'Строительство домов',
      description: 'Полный цикл строительства от фундамента до крыши',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: 'Hammer',
      title: 'Ремонт и отделка',
      description: 'Качественный ремонт любой сложности',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'Wrench',
      title: 'Реконструкция',
      description: 'Модернизация и обновление зданий',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'Ruler',
      title: 'Проектирование',
      description: 'Разработка архитектурных решений',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const projects = [
    {
      before: 'https://cdn.poehali.dev/projects/a8c662e3-99ad-40bb-a7ee-280a6df689a9/files/00caea05-c090-4fb1-ac4e-cf937527e56b.jpg',
      after: 'https://cdn.poehali.dev/projects/a8c662e3-99ad-40bb-a7ee-280a6df689a9/files/f5db21d7-6890-40d9-a74b-c220d36a7172.jpg',
      title: 'Реконструкция фасада',
      location: 'Москва, ЦАО'
    },
    {
      before: 'https://cdn.poehali.dev/projects/a8c662e3-99ad-40bb-a7ee-280a6df689a9/files/00caea05-c090-4fb1-ac4e-cf937527e56b.jpg',
      after: 'https://cdn.poehali.dev/projects/a8c662e3-99ad-40bb-a7ee-280a6df689a9/files/f5db21d7-6890-40d9-a74b-c220d36a7172.jpg',
      title: 'Капитальный ремонт',
      location: 'Санкт-Петербург'
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-600 via-purple-600 to-blue-600">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
            Строим будущее
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-2xl mx-auto">
            Профессиональное строительство и ремонт любой сложности. 
            Качество, проверенное временем.
          </p>
          <a href="tel:+79056387149" className="text-2xl md:text-3xl font-bold text-white mb-8 inline-block hover:scale-105 transition-transform">
            +7 (905) 638-71-49
          </a>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-orange-600 hover:bg-orange-50 shadow-xl hover:scale-105 transition-transform">
              <Icon name="Phone" className="mr-2" size={20} />
              Заказать звонок
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent text-white border-white hover:bg-white/10 shadow-xl hover:scale-105 transition-transform">
              <Icon name="FolderOpen" className="mr-2" size={20} />
              Портфолио
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={40} className="text-white/80" />
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр строительных работ от профессионалов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Портфолио работ
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Наглядная демонстрация качества наших работ
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="flex justify-center gap-4 mb-6">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveProject(index)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all ${
                      activeProject === index
                        ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg scale-105'
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                  >
                    Проект {index + 1}
                  </button>
                ))}
              </div>

              <Card className="overflow-hidden shadow-2xl border-0">
                <CardContent className="p-0">
                  <div 
                    className="relative w-full h-[500px] cursor-col-resize select-none"
                    onMouseMove={handleMouseMove}
                  >
                    <img
                      src={projects[activeProject].after}
                      alt="После"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    
                    <div 
                      className="absolute inset-0 overflow-hidden"
                      style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    >
                      <img
                        src={projects[activeProject].before}
                        alt="До"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>

                    <div 
                      className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl"
                      style={{ left: `${sliderPosition}%` }}
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                        <div className="flex gap-1">
                          <Icon name="ChevronLeft" size={16} className="text-gray-600" />
                          <Icon name="ChevronRight" size={16} className="text-gray-600" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold">
                      ДО
                    </div>
                    <div className="absolute top-6 right-6 bg-gradient-to-r from-orange-500 to-purple-500 text-white px-4 py-2 rounded-full font-semibold">
                      ПОСЛЕ
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                    <h3 className="text-2xl font-bold mb-2">{projects[activeProject].title}</h3>
                    <p className="text-gray-600 flex items-center gap-2">
                      <Icon name="MapPin" size={16} />
                      {projects[activeProject].location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-orange-600 via-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-white mb-4">
                Свяжитесь с нами
              </h2>
              <p className="text-xl text-white/90">
                Оставьте заявку и получите бесплатную консультацию
              </p>
            </div>

            <Card className="backdrop-blur-lg bg-white/10 border-white/20 shadow-2xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      className="bg-white/90 border-0 text-lg py-6"
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel"
                      placeholder="Телефон" 
                      className="bg-white/90 border-0 text-lg py-6"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email"
                      placeholder="Email" 
                      className="bg-white/90 border-0 text-lg py-6"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Опишите ваш проект" 
                      className="bg-white/90 border-0 text-lg min-h-32"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-lg py-6 bg-white text-orange-600 hover:bg-orange-50 shadow-xl hover:scale-105 transition-transform"
                  >
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-white/20 grid md:grid-cols-3 gap-6 text-center">
                  <div className="text-white">
                    <Icon name="Phone" size={32} className="mx-auto mb-2 opacity-90" />
                    <a href="tel:+79056387149" className="font-semibold hover:underline">+7 (905) 638-71-49</a>
                  </div>
                  <div className="text-white">
                    <Icon name="Mail" size={32} className="mx-auto mb-2 opacity-90" />
                    <p className="font-semibold">info@build.ru</p>
                  </div>
                  <div className="text-white">
                    <Icon name="MapPin" size={32} className="mx-auto mb-2 opacity-90" />
                    <p className="font-semibold">Москва, ул. Строителей 1</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-4">© 2024 СтройПрофи. Все права защищены.</p>
          <p className="text-gray-400">Профессиональное строительство с гарантией качества</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;