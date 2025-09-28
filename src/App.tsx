import React, { useState } from "react";
import type { FC, ReactNode } from "react";
import {
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Target,
  PieChart,
  Wallet,
  Settings2,
  MessageCircle,
  BadgeCheck,
  ChevronRight,
  Star,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

type Feature = {
  icon: ReactNode;
  title: string;
  desc: string;
};

type Plan = {
  name: string;
  price: string;
  desc: string;
  items: string[];
  featured?: boolean;
};

type FAQ = { q: string; a: string };

type Testimonial = {
  name: string;
  role: string;
  content: string;
  avatar: string;
};

const features: Feature[] = [
  { icon: <Target className="w-6 h-6" />, title: "O preço ideal para vender", desc: "Descubra o preço certo do seu produto ou serviço em segundos." },
  { icon: <PieChart className="w-6 h-6" />, title: "Sua margem de lucro real", desc: "Saiba exatamente quanto você está lucrando por venda." },
  { icon: <Wallet className="w-6 h-6" />, title: "Quantas unidades vender", desc: "Calcule quantas vendas precisa para bater sua meta de faturamento." },
  { icon: <BadgeCheck className="w-6 h-6" />, title: "Relatório em PDF", desc: "Receba um relatório organizado pronto para salvar e usar." },
  { icon: <Settings2 className="w-6 h-6" />, title: "Sem planilhas complicadas", desc: "Elimine a confusão das planilhas e sistemas caros." },
  { icon: <MessageCircle className="w-6 h-6" />, title: "Assistente com IA", desc: "Precificação inteligente que entrega clareza na hora." },
];

const plans: Plan[] = [
  { name: "Lucro Fácil", price: "R$ 67", desc: "Pagamento único, acesso vitalício", items: ["Assistente inteligente de precificação", "Relatório em PDF de cada cálculo", "Aula ensinando como usar o sistema", "Manual completo de uso", "Acesso vitalício", "Teste de 7 dias sem risco"], featured: true },
];

const faqs: FAQ[] = [
  { q: "Como funciona o Lucro Fácil?", a: "Você informa os custos, escolhe a margem de lucro, define a meta de vendas e o sistema calcula tudo em segundos." },
  { q: "Preciso de conhecimento técnico?", a: "Não! É super simples. Você recebe uma aula completa e manual de uso." },
  { q: "Funciona para qualquer tipo de produto?", a: "Sim! Serve para produtos físicos, digitais e serviços." },
  { q: "Posso testar antes de comprar?", a: "Sim! Você tem 7 dias de teste sem risco." },
  { q: "É pagamento único mesmo?", a: "Sim! Você paga R$ 67 uma vez e tem acesso vitalício." },
  { q: "Vou conseguir gerar os relatórios?", a: "Sim! O sistema gera automaticamente um PDF organizado para cada cálculo." },
];

const testimonials: Testimonial[] = [
  {
    name: "Maria Silva",
    role: "Dona de Loja Online",
    content: "Antes eu chutava os preços e às vezes nem sabia se estava lucrando. Com o Lucro Fácil descobri que estava perdendo dinheiro em vários produtos!",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
  },
  {
    name: "João Santos",
    role: "Prestador de Serviços",
    content: "Parei de usar planilhas complicadas. Agora em 2 minutos sei exatamente quanto cobrar e quanto vou lucrar. Simples demais!",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
  },
  {
    name: "Ana Costa",
    role: "Pequena Empreendedora",
    content: "O relatório em PDF é perfeito! Uso para apresentar preços pros clientes e fica super profissional. Vale cada centavo!",
    avatar: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
  }
];

const Navbar: FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="text-yellow-600 font-extrabold text-2xl tracking-tight">Lucro Fácil</div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#recursos" className="hover:text-yellow-600 transition-colors">Recursos</a>
            <a href="#como-funciona" className="hover:text-yellow-600 transition-colors">Como funciona</a>
            <a href="#planos" className="hover:text-yellow-600 transition-colors">Planos</a>
            <a href="#depoimentos" className="hover:text-yellow-600 transition-colors">Depoimentos</a>
            <a href="#entrar" className="text-yellow-600">Entrar</a>
            <a href="#cta" className="ml-2 inline-flex items-center rounded-full bg-yellow-600 px-4 py-2 text-white hover:bg-yellow-700 transition-colors">Começar</a>
          </nav>
          <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Abrir menu">
            {open ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-4 grid gap-3 text-sm">
            <a href="#recursos" className="hover:text-yellow-600 transition-colors" onClick={() => setOpen(false)}>Recursos</a>
            <a href="#como-funciona" className="hover:text-yellow-600 transition-colors" onClick={() => setOpen(false)}>Como funciona</a>
            <a href="#planos" className="hover:text-yellow-600 transition-colors" onClick={() => setOpen(false)}>Planos</a>
            <a href="#depoimentos" className="hover:text-yellow-600 transition-colors" onClick={() => setOpen(false)}>Depoimentos</a>
            <a href="#cta" className="inline-flex items-center rounded-full bg-yellow-600 px-4 py-2 text-white w-max" onClick={() => setOpen(false)}>Começar agora</a>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero: FC = () => (
  <section id="cta" className="bg-gradient-to-b from-white to-yellow-50/40">
    <div className="mx-auto max-w-6xl px-4 py-20 grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
          Pare de perder tempo e dinheiro com sistemas caros e <span className="text-yellow-600">planilhas confusas</span>
        </h1>
        <p className="mt-4 text-lg text-neutral-600 max-w-xl">
          Descubra o preço ideal do seu produto em segundos com o Lucro Fácil.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#planos" className="inline-flex items-center rounded-xl bg-yellow-600 px-5 py-3 text-white font-semibold shadow hover:bg-yellow-700 hover:shadow-lg transition-all">Quero meu acesso ao Lucro Fácil agora <ArrowRight className="ml-2 w-4 h-4"/></a>
        </div>
        <div className="mt-6 flex items-center gap-3 text-sm text-neutral-600">
          <CheckCircle2 className="w-4 h-4 text-green-600"/> Pagamento único de R$ 67
          <CheckCircle2 className="w-4 h-4 text-green-600"/> Teste de 7 dias sem risco
        </div>
      </div>
      <div className="relative">
        <img 
          src="https://i.postimg.cc/RCKqv1pF/image.png" 
          alt="Lucro Fácil - Interface do Sistema"
          className="mx-auto w-[90%] sm:w-[80%] h-auto object-contain"
        />
        <div className="absolute -bottom-6 -right-6 hidden sm:block">
          <div className="w-24 h-24 rounded-full bg-yellow-400/80 blur-2xl"/>
        </div>
      </div>
    </div>
  </section>
);

const Recursos: FC = () => (
  <section id="recursos" className="py-20">
    <div className="mx-auto max-w-6xl px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold tracking-tight">O Lucro Fácil é seu assistente de precificação com IA</h2>
        <p className="text-neutral-600 mt-2 max-w-2xl mx-auto">Elimina a complicação e entrega clareza. Com ele, você sabe em segundos:</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div key={i} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-yellow-50 text-yellow-600 grid place-content-center mb-4">{f.icon}</div>
            <h3 className="text-lg font-bold">{f.title}</h3>
            <p className="text-neutral-600 mt-2 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ComoFunciona: FC = () => {
  const steps = [
    { n: 1, title: "Você informa os custos", desc: "Digite os custos do produto/serviço que deseja precificar." },
    { n: 2, title: "Escolhe a margem de lucro", desc: "Defina qual margem de lucro deseja ter no seu produto." },
    { n: 3, title: "Define a meta de vendas", desc: "Se quiser, informe sua meta de faturamento para saber quantas vendas precisa." },
    { n: 4, title: "Recebe o resultado", desc: "O Lucro Fácil calcula tudo e gera um relatório em PDF em segundos." },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div className="rounded-3xl overflow-hidden border shadow bg-white">
          <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
            <div className="text-center text-orange-700">
              <MessageCircle className="w-16 h-16 mx-auto mb-4"/>
              <p className="text-sm font-medium">Demonstração do WhatsApp</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">Como funciona na prática</h2>
          <p className="text-neutral-600 mt-2 mb-8">Em menos de 2 minutos você já tem clareza total do seu preço.</p>
          <div className="grid gap-6">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-yellow-600 text-white grid place-content-center font-bold text-sm flex-shrink-0">{s.n}</div>
                <div>
                  <div className="font-semibold">{s.title}</div>
                  <div className="text-neutral-600 text-sm mt-1">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <a href="#planos" className="inline-flex items-center mt-8 text-yellow-700 font-semibold hover:text-yellow-800 transition-colors">
            Quero meu acesso agora <ChevronRight className="ml-1 w-4 h-4"/>
          </a>
        </div>
      </div>
    </section>
  );
};

const Planos: FC = () => (
  <section id="planos" className="py-20">
    <div className="mx-auto max-w-6xl px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold tracking-tight">Oferta Especial de Lançamento</h2>
        <p className="text-neutral-600 mt-2 max-w-2xl mx-auto">Hoje você pode acessar o Lucro Fácil por apenas:</p>
      </div>
      <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
        {plans.map((plan, i) => (
          <div key={i} className={`rounded-2xl border p-6 ${plan.featured ? 'ring-2 ring-yellow-500 bg-yellow-50/50' : 'bg-white'} hover:shadow-lg transition-all duration-300`}>
            {plan.featured && (
              <div className="text-center mb-4">
                <span className="inline-flex items-center rounded-full bg-yellow-600 px-3 py-1 text-xs font-medium text-white">
                  De R$ 137 por apenas
                </span>
              </div>
            )}
            <div className="text-center">
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-neutral-600 text-sm mt-1">{plan.desc}</p>
              <div className="mt-4 mb-6">
                <span className="text-3xl font-extrabold">{plan.price}</span>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              {plan.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0"/>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className={`w-full rounded-xl py-3 font-semibold transition-colors ${plan.featured ? 'bg-yellow-600 text-white hover:bg-yellow-700' : 'border border-yellow-300 text-yellow-700 hover:bg-yellow-50'}`}>
              Quero meu acesso ao Lucro Fácil agora
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Depoimentos: FC = () => (
  <section id="depoimentos" className="py-20 bg-neutral-50">
    <div className="mx-auto max-w-6xl px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold tracking-tight">Para quem é o Lucro Fácil?</h2>
        <p className="text-neutral-600 mt-2">Veja o que nossos clientes estão falando:</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, i) => (
          <div key={i} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400"/>
              ))}
            </div>
            <p className="text-neutral-700 text-sm leading-relaxed mb-4">"{testimonial.content}"</p>
            <div className="flex items-center gap-3">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-sm">{testimonial.name}</div>
                <div className="text-neutral-600 text-xs">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold tracking-tight">Perguntas frequentes</h2>
        <p className="text-neutral-600 mt-2">Tire suas dúvidas sobre o Lucro Fácil:</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border bg-white overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold">{faq.q}</span>
                {openIndex === i ? <ChevronUp className="w-5 h-5"/> : <ChevronDown className="w-5 h-5"/>}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4 text-neutral-600 text-sm">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA: FC = () => (
  <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-700">
    <div className="mx-auto max-w-4xl px-4 text-center text-white">
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
        Pronto para descobrir o preço certo e lucrar de verdade?
      </h2>
      <p className="mt-4 text-lg text-yellow-100 max-w-2xl mx-auto">
        O Lucro Fácil substitui planilhas, elimina confusão e corta custos. Você tem clareza, praticidade e lucro em segundos.
      </p>
      <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
        <a href="#planos" className="inline-flex items-center rounded-xl bg-white px-6 py-3 text-yellow-600 font-semibold shadow hover:bg-yellow-50 transition-colors">
          Quero meu acesso ao Lucro Fácil agora <ArrowRight className="ml-2 w-4 h-4"/>
        </a>
      </div>
    </div>
  </section>
);

const Footer: FC = () => (
  <footer className="bg-neutral-900 text-white py-12">
    <div className="mx-auto max-w-6xl px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="text-yellow-500 font-extrabold text-2xl tracking-tight mb-4">Lucro Fácil</div>
          <p className="text-neutral-400 text-sm">
            Descubra o preço ideal do seu produto em segundos.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Produto</h4>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li><a href="#recursos" className="hover:text-white transition-colors">Recursos</a></li>
            <li><a href="#planos" className="hover:text-white transition-colors">Planos</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Segurança</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Suporte</h4>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Treinamento</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Termos</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
        <p className="text-neutral-400 text-sm">
          © 2025 Lucro Fácil. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Recursos />
      <ComoFunciona />
      <Planos />
      <Depoimentos />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;