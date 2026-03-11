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
            O Pharus é um sistema para gerenciar eventos acadêmicos e
            institucionais do início ao fim. Ele atende toda a jornada: criação
            do evento, inscrições, submissão de trabalhos, avaliação,
            publicação de programação e emissão de certificados.
          </p>
        </section>

        <section className={clsx('container', styles.section)}>
          <h2 className={styles.sectionTitle}>O que você pode fazer no sistema</h2>
          <div className={styles.infoGrid}>
            <article className={styles.infoCard}>
              <h3>Organizar eventos</h3>
              <p>
                Defina categorias, configure regras, monte programação e
                acompanhe inscritos em tempo real.
              </p>
            </article>
            <article className={styles.infoCard}>
              <h3>Gerenciar submissão e avaliação</h3>
              <p>
                Crie baremas, distribua trabalhos e mantenha o processo de
                avaliação estruturado e rastreável.
              </p>
            </article>
            <article className={styles.infoCard}>
              <h3>Acompanhar participantes</h3>
              <p>
                Facilite inscrições, comunicação e validação de certificados em
                um único painel.
              </p>
            </article>
          </div>
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