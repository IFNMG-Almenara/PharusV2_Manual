import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const quickLinks = [
  {
    title: 'Manual para Organizadores',
    description:
      'Configura eventos, submissão, avaliação e programação em um fluxo completo.',
    to: '/docs/category/organizadores',
  },
  {
    title: 'Manual para Participantes',
    description:
      'Realiza inscrição, acompanha atividades e gerencia suas submissões.',
    to: '/docs/category/participantes',
  },
  {
    title: 'Manual para Avaliadores',
    description:
      'Acessa trabalhos distribuídos, aplica critérios e registra pareceres.',
    to: '/docs/category/avaliadores',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContent)}>
        <p className={styles.kicker}>Plataforma Oficial de Gestão de Eventos</p>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className={clsx('hero__subtitle', styles.subtitle)}>
          O Pharus centraliza inscrições, submissão de trabalhos, avaliação e
          certificados em um único ambiente.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/manual-pharus">
            Acessar Manual
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Manual Sistema Pharus 2.0`}
      description="Informações gerais sobre o Pharus e caminhos rápidos para o manual.">
      <HomepageHeader />
      <main className={styles.mainContent}>
        <section className={clsx('container', styles.section)}>
          <h2 className={styles.sectionTitle}>Visão geral</h2>
          <p>
            O Pharus é um sistema digital para apoiar a organização e execução
            de eventos acadêmicos, científicos, culturais e institucionais. A
            plataforma cobre todo o ciclo do evento: criação, inscrições,
            submissões, avaliação, programação, credenciamento e emissão de
            certificados.
          </p>
        </section>

        <section className={clsx('container', styles.section)}>
          <h2 className={styles.sectionTitle}>O que você pode fazer no sistema</h2>
          <div className={styles.infoGrid}>
            <article className={styles.infoCard}>
              <h3>Inscrições e atividades</h3>
              <p>
                Gerencie inscrições em eventos e atividades específicas com
                controle de vagas, confirmação e cancelamento.
              </p>
            </article>
            <article className={styles.infoCard}>
              <h3>Submissões e avaliação científica</h3>
              <p>
                Faça gestão completa de trabalhos com categorias temáticas,
                distribuição para avaliadores e critérios personalizáveis.
              </p>
            </article>
            <article className={styles.infoCard}>
              <h3>Programação, comunicação e certificados</h3>
              <p>
                Monte sessões e horários, mantenha participantes informados e
                emita certificados personalizados com agilidade.
              </p>
            </article>
          </div>
        </section>

        <section className={clsx('container', styles.section)}>
          <h2 className={styles.sectionTitle}>Sobre o desenvolvimento</h2>
          <p>
            O sistema é desenvolvido e mantido pelo LUANDA - Laboratório de
            Pesquisa, Desenvolvimento e Análise de Dados, vinculado ao Instituto
            Federal do Norte de Minas Gerais - Campus Almenara, unindo ensino,
            pesquisa e extensão em soluções reais para a comunidade acadêmica.
          </p>
        </section>

        <section className={clsx('container', styles.section)}>
          <h2 className={styles.sectionTitle}>Nossa missão</h2>
          <p>
            Democratizar a organização de eventos com uma plataforma acessível,
            robusta e eficiente, valorizando a produção científica, facilitando
            o trabalho dos organizadores e oferecendo uma experiência de
            excelência para todos os envolvidos.
          </p>
        </section>

        <section className={clsx('container', styles.section)}>
          <h2 className={styles.sectionTitle}>Escolha seu perfil</h2>
          <div className={styles.quickLinks}>
            {quickLinks.map(link => (
              <Link key={link.title} className={styles.quickLinkCard} to={link.to}>
                <h3>{link.title}</h3>
                <p>{link.description}</p>
                <span>Ler orientações</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}