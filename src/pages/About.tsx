import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const stats = [
    { number: '500+', label: 'Завершенных проектов', icon: 'CheckCircle2' },
    { number: '15', label: 'Лет на рынке', icon: 'Award' },
    { number: '50+', label: 'Специалистов', icon: 'Users' },
    { number: '98%', label: 'Довольных клиентов', icon: 'Heart' }
  ];

  const team = [
    {
      name: 'Александр Петров',
      role: 'Генеральный директор',
      image: 'https://cdn.poehali.dev/projects/a8c662e3-99ad-40bb-a7ee-280a6df689a9/files/79a4c4bb-647b-48b5-8367-eb39b1bc74ab.jpg',
      description: '20 лет опыта в строительстве'
    },
    {
      name: 'Мария Соколова',
      role: 'Главный архитектор',
      image: 'https://cdn.poehali.dev/projects/a8c662e3-99ad-40bb-a7ee-280a6df689a9/files/79a4c4bb-647b-48b5-8367-eb39b1bc74ab.jpg',
      description: 'Более 100 реализованных проектов'
    },
    {
      name: 'Дмитрий Иванов',
      role: 'Прораб',
      image: 'https://cdn.poehali.dev/projects/a8c662e3-99ad-40bb-a7ee-280a6df689a9/files/79a4c4bb-647b-48b5-8367-eb39b1bc74ab.jpg',
      description: 'Специалист по сложным объектам'
    }
  ];

  const values = [
    {
      icon: 'Shield',
      title: 'Надежность',
      description: 'Гарантия на все виды работ и строгое соблюдение сроков',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: 'Zap',
      title: 'Качество',
      description: 'Используем только проверенные материалы и технологии',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'TrendingUp',
      title: 'Инновации',
      description: 'Следим за новейшими трендами в строительстве',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'Handshake',
      title: 'Честность',
      description: 'Прозрачное ценообразование без скрытых платежей',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-600 via-purple-600 to-blue-600">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            О компании
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            15 лет создаем пространства мечты для наших клиентов
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-fade-in">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
                  Наша история
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  СтройПрофи была основана в 2009 году группой профессионалов, объединенных общей целью — создавать качественные строительные объекты, которые служат поколениями.
                </p>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  За 15 лет работы мы выросли от небольшой команды до одной из ведущих строительных компаний региона. Наши проекты можно увидеть по всей стране.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Мы постоянно развиваемся, внедряем новые технологии и поддерживаем высочайшие стандарты качества во всем, что делаем.
                </p>
              </div>
              <div className="relative animate-scale-in">
                <img 
                  src="https://cdn.poehali.dev/projects/a8c662e3-99ad-40bb-a7ee-280a6df689a9/files/79a4c4bb-647b-48b5-8367-eb39b1bc74ab.jpg"
                  alt="Команда СтройПрофи"
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Наши достижения
            </h2>
            <p className="text-xl text-gray-600">
              Цифры, которыми мы гордимся
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="text-center border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-purple-500 flex items-center justify-center">
                    <Icon name={stat.icon as any} size={32} className="text-white" />
                  </div>
                  <div className="text-5xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-600 font-medium">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
              Наши ценности
            </h2>
            <p className="text-xl text-gray-600">
              Принципы, которыми мы руководствуемся
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden"
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon name={value.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
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
              Наша команда
            </h2>
            <p className="text-xl text-gray-600">
              Профессионалы своего дела
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card 
                key={index}
                className="group border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-orange-600 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-orange-600 via-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-6">
              Готовы начать проект?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Свяжитесь с нами сегодня и получите бесплатную консультацию
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-white text-orange-600 hover:bg-orange-50 shadow-xl hover:scale-105 transition-transform">
                <Icon name="Phone" className="mr-2" size={20} />
                Заказать звонок
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent text-white border-white hover:bg-white/10 shadow-xl hover:scale-105 transition-transform">
                <Icon name="Mail" className="mr-2" size={20} />
                Написать нам
              </Button>
            </div>
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

export default About;
