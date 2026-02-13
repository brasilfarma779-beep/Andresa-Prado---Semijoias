
import React, { useState, useEffect, useRef } from 'react';
import { 
  ShoppingBag, 
  ShieldCheck, 
  Truck, 
  Award, 
  Users, 
  MessageCircle, 
  Instagram, 
  Star,
  ChevronRight,
  Menu,
  X,
  Phone,
  Gem,
  Heart,
  Lock
} from 'lucide-react';

// --- Types & Interfaces ---
interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price?: string;
}

interface Testimonial {
  id: number;
  name: string;
  text: string;
  role: string;
  image: string;
}

// --- Custom Hook for Reveal on Scroll ---
const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
};

// --- Components ---

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="serif italic">Andresa</span> <span className="font-light tracking-widest text-sm uppercase text-gold">Prado</span>
        </div>
        
        <div className="hidden md:flex space-x-8 items-center text-[11px] font-semibold uppercase tracking-[0.2em]">
          <a href="#inicio" className="hover:text-gold transition-colors">Início</a>
          <a href="#produtos" className="hover:text-gold transition-colors">Coleções</a>
          <a href="#sobre" className="hover:text-gold transition-colors">A Marca</a>
          <a href="#revenda" className="hover:text-gold transition-colors">Seja Revendedora</a>
          <a 
            href="https://wa.me/5500000000000" 
            className="bg-gold-gradient text-white px-6 py-2.5 rounded-full hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Phone size={14} />
            Falar no WhatsApp
          </a>
        </div>

        <button className="md:hidden text-gray-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white z-[60] py-20 px-10 space-y-8 flex flex-col items-center animate-fade-in">
          <button className="absolute top-6 right-6" onClick={() => setIsOpen(false)}><X size={32} /></button>
          <a href="#inicio" onClick={() => setIsOpen(false)} className="text-2xl font-light serif">Início</a>
          <a href="#produtos" onClick={() => setIsOpen(false)} className="text-2xl font-light serif">Coleções</a>
          <a href="#sobre" onClick={() => setIsOpen(false)} className="text-2xl font-light serif">A Marca</a>
          <a href="#revenda" onClick={() => setIsOpen(false)} className="text-2xl font-light serif text-gold">Revenda</a>
          <a 
            href="https://wa.me/5500000000000" 
            className="bg-gold-gradient text-white px-10 py-4 rounded-full text-center w-full shadow-lg font-bold uppercase tracking-widest text-sm"
          >
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-nude">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-10 reveal active">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold/30 rounded-full text-gold text-[10px] uppercase tracking-[0.3em] font-bold bg-white/50">
            <Gem size={12} /> Exclusividade & Elegância
          </div>
          <h1 className="text-5xl md:text-8xl leading-[1.1] text-gray-900 font-normal">
            Sua essência <br />
            <span className="serif italic text-gold">em cada detalhe.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed font-light">
            Semijoias de alta joalheria, banho em ouro 18k e design autoral. Elevando a autoestima da mulher que não abre mão da sofisticação.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href="https://wa.me/5500000000000" 
              className="bg-gray-900 text-white px-12 py-5 rounded-full flex items-center justify-center gap-3 hover:bg-black transition-all shadow-2xl group text-sm font-bold uppercase tracking-widest"
            >
              Comprar agora
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform text-gold" />
            </a>
            <a 
              href="#revenda" 
              className="border border-gray-300 bg-white/30 backdrop-blur px-12 py-5 rounded-full flex items-center justify-center gap-2 hover:border-gold hover:text-gold transition-all text-sm font-bold uppercase tracking-widest"
            >
              Quero Revender
            </a>
          </div>
        </div>
        <div className="relative lg:h-[80vh] flex items-center justify-center">
          <div className="absolute -top-10 -right-10 w-80 h-80 bg-gold opacity-10 blur-[100px] rounded-full animate-pulse"></div>
          <div className="relative z-10 w-full h-full max-h-[600px] lg:max-h-none rounded-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] hover:scale-[1.02] transition-transform duration-700">
            <img 
              src="https://images.unsplash.com/photo-1573408302382-9934f494699c?q=80&w=1974&auto=format&fit=crop" 
              alt="Modelo Andresa Prado" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <p className="text-xs uppercase tracking-[0.3em] font-bold opacity-80">Nova Coleção</p>
              <p className="serif text-3xl italic">Atemporal 2024</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

const Authority: React.FC = () => {
  const revealRef = useReveal();
  const stats = [
    { icon: <Award />, title: "Marca Própria", desc: "Design autoral exclusivo" },
    { icon: <ShieldCheck />, title: "Qualidade Premium", desc: "Banho 18k e Garantia" },
    { icon: <Truck />, title: "Envio Nacional", desc: "Entrega segura e rápida" },
    { icon: <Users />, title: "+5k Clientes", desc: "Mulheres transformadas" },
  ];

  return (
    <section className="py-24 bg-white" ref={revealRef}>
      <div className="max-w-7xl mx-auto px-6 reveal">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-5 hover-lift">
              <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-nude text-gold">
                {React.cloneElement(stat.icon as React.ReactElement, { size: 36, strokeWidth: 1.5 })}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm tracking-widest uppercase mb-1">{stat.title}</h3>
                <p className="text-xs text-gray-500 font-light">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 border-t border-gray-100 pt-16">
          <p className="text-center text-[10px] uppercase tracking-[0.5em] text-gray-400 mb-10 font-bold">Destaque na Mídia e Eventos</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-24 opacity-30 hover:opacity-100 transition-opacity duration-700">
            <span className="serif text-2xl font-bold italic tracking-tighter">G1 Notícias</span>
            <span className="font-bold text-xl tracking-widest">VOCÊ S/A</span>
            <span className="serif text-2xl italic font-light">Podcast Elas</span>
            <span className="font-semibold text-xl tracking-[0.2em]">VOGUE</span>
            <span className="serif text-2xl font-bold italic">Metrópoles</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Benefits: React.FC = () => {
  const revealRef = useReveal();
  const items = [
    { icon: <ShieldCheck />, title: "Durabilidade Real", desc: "Peças desenvolvidas com alta tecnologia de banho para brilhar por muito mais tempo." },
    { icon: <Heart />, title: "Eleve seu Visual", desc: "Acessórios estratégicos que transformam qualquer look básico em uma produção luxuosa." },
    { icon: <Lock />, title: "Compra 100% Segura", desc: "Plataforma blindada e suporte humanizado do início ao fim da sua jornada." },
    { icon: <Users />, title: "Atendimento VIP", desc: "Consultoria personalizada via WhatsApp para ajudar você na escolha perfeita." },
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden" ref={revealRef}>
      <div className="max-w-7xl mx-auto px-6 reveal">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold">Por que nos escolher?</span>
          <h2 className="text-4xl md:text-5xl serif">O diferencial que você <span className="italic">sente na pele.</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group">
              <div className="text-gold mb-8 group-hover:scale-110 transition-transform">
                {React.cloneElement(item.icon as React.ReactElement, { size: 40, strokeWidth: 1 })}
              </div>
              <h4 className="text-gray-900 font-bold mb-4 text-lg serif">{item.title}</h4>
              <p className="text-gray-500 font-light leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductSection: React.FC = () => {
  const revealRef = useReveal();
  const products: Product[] = [
    { id: 1, name: "Colar Riviera Royal", category: "Colares", image: "https://picsum.photos/seed/collier7/600/750" },
    { id: 2, name: "Brinco Pérola Shell Gold", category: "Brincos", image: "https://picsum.photos/seed/brinco2/600/750" },
    { id: 3, name: "Óculos Diamond 2024", category: "Óculos", image: "https://picsum.photos/seed/oculos3/600/750" },
    { id: 4, name: "Conjunto Infinito", category: "Conjuntos", image: "https://picsum.photos/seed/set1/600/750" },
  ];

  return (
    <section id="produtos" className="py-24 bg-white" ref={revealRef}>
      <div className="max-w-7xl mx-auto px-6 reveal">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl space-y-6">
            <h2 className="text-4xl md:text-6xl text-gray-900 leading-tight">
              Curadoria <span className="serif italic text-gold">Premium</span>
            </h2>
            <p className="text-gray-500 font-light text-xl leading-relaxed">
              Explore as peças que são desejo absoluto. Sofisticação que transita do dia para a noite com naturalidade.
            </p>
          </div>
          <a href="https://wa.me/5500000000000" className="group flex items-center gap-3 text-gray-900 uppercase tracking-widest text-xs font-bold border-b-2 border-gold pb-2 hover:text-gold transition-all">
            Ver Catálogo Completo
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col items-center text-center">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[30px] bg-gray-50 mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex flex-col gap-2 w-[80%]">
                   <a 
                    href={`https://wa.me/5500000000000?text=Olá! Tenho interesse no ${product.name}`}
                    className="bg-white text-gray-900 py-4 rounded-full shadow-xl text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-white transition-all flex items-center justify-center gap-2"
                   >
                    <ShoppingBag size={14} /> Quero esse
                   </a>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] text-gold uppercase tracking-[0.3em] font-bold">{product.category}</p>
                <h3 className="text-xl text-gray-900 serif font-medium group-hover:text-gold transition-colors">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection: React.FC = () => {
  const revealRef = useReveal();
  return (
    <section id="sobre" className="py-24 bg-nude overflow-hidden" ref={revealRef}>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center reveal">
        <div className="relative">
          <div className="absolute -z-10 top-0 left-0 w-full h-full border-[1px] border-gold/30 rounded-full translate-x-10 translate-y-10 animate-float"></div>
          <div className="rounded-t-[200px] overflow-hidden border-[15px] border-white shadow-2xl relative">
            <img src="https://picsum.photos/seed/designer9/800/1000" alt="Andresa Prado" className="w-full h-auto scale-105 hover:scale-100 transition-transform duration-1000" />
          </div>
          <div className="absolute -bottom-10 -right-6 bg-white p-10 rounded-3xl shadow-2xl max-w-xs border border-gray-100">
            <p className="serif italic text-2xl text-gray-900 leading-snug">"O luxo não é sobre o que você veste, mas como você se sente."</p>
            <div className="flex items-center gap-3 mt-6">
               <div className="h-[1px] w-8 bg-gold"></div>
               <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-black">Andresa Prado</p>
            </div>
          </div>
        </div>
        <div className="space-y-10 lg:pl-10">
          <div className="space-y-4">
            <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold">Nossa História</span>
            <h2 className="text-5xl md:text-7xl text-gray-900 leading-[1.1]">
              Autoridade <br />
              <span className="serif italic">em Sofisticação.</span>
            </h2>
          </div>
          <div className="space-y-8 text-gray-600 font-light leading-relaxed text-lg lg:text-xl">
            <p>
              A marca Andresa Prado nasceu da paixão por detalhes que transformam. Mais do que semijoias, criamos símbolos de poder e elegância para a mulher contemporânea.
            </p>
            <p>
              Cada coleção é fruto de uma curadoria rigorosa, garantindo que a qualidade técnica do banho 18k se encontre com o design atemporal das grandes joalherias.
            </p>
            <p className="font-medium text-gray-900 italic serif">
              Nossa missão é fazer você se sentir a melhor versão de si mesma, todos os dias.
            </p>
          </div>
          <div className="pt-6">
             <a href="#revenda" className="bg-gray-900 text-white px-10 py-5 rounded-full inline-flex items-center gap-3 hover:bg-black transition-all shadow-xl text-xs font-bold uppercase tracking-widest">
               Conheça nossa trajetória
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ResellerSection: React.FC = () => {
  const revealRef = useReveal();
  return (
    <section id="revenda" className="py-32 bg-gray-900 text-white relative overflow-hidden" ref={revealRef}>
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]"></div>
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 reveal">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-black">Oportunidade Exclusiva</span>
            <h2 className="text-5xl md:text-8xl serif italic leading-tight">Transforme sua paixão <br /> em um <span className="text-gold">negócio de luxo.</span></h2>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
            Seja uma consultora autorizada Andresa Prado. Trabalhe com uma marca de autoridade, receba suporte total e lucre com produtos que as mulheres amam.
          </p>
          
          <div className="grid md:grid-cols-3 gap-10 pt-10">
             {[
               { icon: <Award size={24} />, title: "Margem de Luxo", desc: "Lucratividade acima da média do mercado de acessórios." },
               { icon: <Users size={24} />, title: "Suporte 360º", desc: "Treinamentos, materiais de marketing e mentoria de vendas." },
               { icon: <ShoppingBag size={24} />, title: "Estoque VIP", desc: "Acesso prioritário a lançamentos e peças exclusivas." }
             ].map((item, idx) => (
               <div key={idx} className="bg-white/5 backdrop-blur-sm p-12 rounded-[40px] border border-white/10 hover:border-gold/50 transition-all duration-500 group text-left">
                  <div className="text-gold mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">{item.title}</h4>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>

          <div className="pt-16">
            <a 
              href="https://wa.me/5500000000000?text=Quero saber mais sobre a revenda!" 
              className="inline-flex items-center gap-4 bg-gold-gradient text-white px-16 py-6 rounded-full text-lg font-bold uppercase tracking-widest hover:shadow-[0_20px_60px_-15px_rgba(197,160,89,0.5)] transition-all transform hover:-translate-y-2"
            >
              Quero ser uma Revendedora
              <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials: React.FC = () => {
  const revealRef = useReveal();
  const reviews: Testimonial[] = [
    { id: 1, name: "Mariana Silva", role: "Cliente fiel", text: "As semijoias da Andresa são impecáveis. O brilho dura meses e o atendimento via WhatsApp é o melhor que já tive.", image: "https://i.pravatar.cc/150?u=mari" },
    { id: 2, name: "Fernanda Costa", role: "Revendedora", text: "Revender Andresa Prado mudou minha vida financeira. As peças se vendem sozinhas pela qualidade e beleza.", image: "https://i.pravatar.cc/150?u=fer" },
    { id: 3, name: "Camila Rocha", role: "Cliente", text: "Comprei para meu casamento e foi a melhor escolha. Sofisticado, elegante e recebi super rápido em casa.", image: "https://i.pravatar.cc/150?u=cami" },
  ];

  return (
    <section className="py-24 bg-white" ref={revealRef}>
      <div className="max-w-7xl mx-auto px-6 reveal">
        <div className="text-center mb-20 space-y-4">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold">Feedback</span>
          <h2 className="text-4xl md:text-5xl serif italic">Mulheres que brilham conosco</h2>
          <div className="flex justify-center gap-1.5 pt-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#C5A059" color="#C5A059" />)}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {reviews.map((review) => (
            <div key={review.id} className="bg-nude p-12 rounded-[50px] relative hover-lift group border border-gray-100/50">
              <div className="mb-8 flex items-center gap-5">
                <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full border-4 border-white shadow-xl group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm tracking-wide">{review.name}</h4>
                  <p className="text-[10px] text-gold uppercase tracking-widest font-black">{review.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic font-light leading-relaxed text-lg">"{review.text}"</p>
              <div className="absolute top-10 right-12 text-8xl text-gold/5 serif select-none font-black italic">“</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8 md:col-span-2">
            <div className="text-4xl font-bold">
              <span className="serif italic">Andresa</span> <span className="font-light tracking-widest text-lg uppercase text-gold">Prado</span>
            </div>
            <p className="text-gray-500 font-light max-w-sm leading-relaxed text-lg">
              Sua referência em semijoias premium. Transformando momentos em lembranças inesquecíveis através da sofisticação e do design.
            </p>
            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-full hover:bg-gold hover:text-white transition-all shadow-sm">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-full hover:bg-gold hover:text-white transition-all shadow-sm">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-8 uppercase tracking-[0.2em] text-[11px]">Navegação</h4>
            <ul className="space-y-4 text-gray-500 font-light text-sm">
              <li><a href="#produtos" className="hover:text-gold transition-colors">Nova Coleção</a></li>
              <li><a href="#sobre" className="hover:text-gold transition-colors">A Marca</a></li>
              <li><a href="#revenda" className="hover:text-gold transition-colors">Revenda</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Catálogo Digital</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Trocas e Devoluções</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-8 uppercase tracking-[0.2em] text-[11px]">Atendimento</h4>
            <ul className="space-y-5 text-gray-500 font-light text-sm">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-gold shrink-0 mt-1" />
                <span>(11) 99999-9999 <br /> <span className="text-[10px] opacity-60">WhatsApp Business</span></span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={16} className="text-gold shrink-0 mt-1" />
                <span>contato@andresaprado.com.br</span>
              </li>
              <li className="pt-4 border-t border-gray-100">
                <p className="text-[10px] uppercase font-bold tracking-widest">Horário de Atendimento</p>
                <p className="text-xs opacity-80 mt-1 italic">Seg à Sex: 09h — 18h</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-gray-100 text-center">
           <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-medium mb-4">
             © {new Date().getFullYear()} Andresa Prado Semijoias • CNPJ 00.000.000/0000-00
           </p>
           <div className="flex justify-center gap-4 opacity-30 grayscale scale-75">
              {/* Payment methods icons could go here */}
              <div className="w-10 h-6 bg-gray-300 rounded"></div>
              <div className="w-10 h-6 bg-gray-300 rounded"></div>
              <div className="w-10 h-6 bg-gray-300 rounded"></div>
           </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5500000000000" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 z-[100] bg-[#25D366] text-white p-5 rounded-full shadow-[0_20px_40px_-10px_rgba(37,211,102,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-white text-gray-900 px-4 py-2 rounded-xl text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Fale conosco agora!
      </span>
    </a>
  );
};

export default function App() {
  return (
    <div className="antialiased selection:bg-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Authority />
        <Benefits />
        <ProductSection />
        <AboutSection />
        <ResellerSection />
        <Testimonials />
        
        {/* Final CTA Section */}
        <section className="py-32 bg-nude relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-gold opacity-5 blur-[100px] rounded-full"></div>
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold opacity-5 blur-[100px] rounded-full"></div>
          <div className="max-w-5xl mx-auto px-6 text-center space-y-12 relative z-10">
            <div className="space-y-4">
               <span className="text-gold text-xs uppercase tracking-[0.5em] font-black">Convite Especial</span>
               <h2 className="text-5xl md:text-7xl serif italic leading-tight">Escolha brilhar hoje.</h2>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Descubra por que a marca Andresa Prado é a favorita das mulheres que buscam o equilíbrio perfeito entre tendência e tradição.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
              <a 
                href="https://wa.me/5500000000000" 
                className="bg-gray-900 text-white px-16 py-6 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center gap-4 shadow-2xl hover:shadow-black/30 group"
              >
                <MessageCircle size={24} className="text-gold" />
                Atendimento VIP WhatsApp
              </a>
            </div>
            <div className="flex justify-center items-center gap-8 pt-8 opacity-50">
               <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"><ShieldCheck size={14} className="text-gold"/> Compra Segura</div>
               <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"><Award size={14} className="text-gold"/> Garantia Vitalícia</div>
               <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"><Truck size={14} className="text-gold"/> Envio em 24h</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
