import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    slug: 'plataforma-chamados',
    title: 'Plataforma de Chamados',
    summary: 'Help desk corporativo para organizar solicitações, responsabilidades e acompanhamento operacional.',
    problem: 'Centralizar solicitações internas que dependiam de processos dispersos e dar visibilidade ao ciclo de atendimento.',
    solution: 'Aplicação web com autenticação, perfis de acesso, fluxo de estados, priorização, histórico e indicadores.',
    stack: ['Java 17', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Flyway', 'Docker'],
    highlights: ['Controle de acesso por perfil', 'Workflow de atendimento', 'Indicadores operacionais'],
    status: 'production',
  },
  {
    slug: 'netwatch-rn',
    title: 'NetWatch RN',
    summary: 'Monitoramento de disponibilidade e latência com dashboard e execução containerizada.',
    problem: 'Transformar verificações de conectividade em observabilidade simples, histórica e reproduzível.',
    solution: 'Aplicação Django que registra disponibilidade e latência, apresenta métricas e evolui com testes e CI.',
    stack: ['Python', 'Django', 'Docker', 'GitHub Actions'],
    highlights: ['Monitoramento por ping', 'Dashboard', 'Pipeline de testes'],
    status: 'mvp',
  },
  {
    slug: 'painel-autos',
    title: 'Painel de Autos',
    summary: 'Dashboard web para consulta, alimentação de dados e geração de relatórios.',
    problem: 'Reduzir etapas manuais na consolidação e visualização de informações operacionais.',
    solution: 'Interface restrita orientada a dados, relatórios e automação progressiva do fluxo de trabalho.',
    stack: ['Web', 'Dashboard', 'Automação', 'Relatórios'],
    highlights: ['Visualização centralizada', 'Relatórios PDF/Excel', 'Acesso controlado'],
    status: 'development',
  },
  {
    slug: 'vianux',
    title: 'ViaNux Tecnologia',
    summary: 'Iniciativa voltada à criação de soluções de software e infraestrutura para problemas reais.',
    problem: 'Estruturar serviços e produtos de tecnologia com identidade própria e foco em entrega prática.',
    solution: 'Marca que conecta desenvolvimento, automação e infraestrutura em soluções orientadas ao negócio.',
    stack: ['Software', 'APIs', 'Infraestrutura', 'Automação'],
    highlights: ['Produtos digitais', 'Soluções corporativas', 'Engenharia aplicada'],
    status: 'development',
  },
]
