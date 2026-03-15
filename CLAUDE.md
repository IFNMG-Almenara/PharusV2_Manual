# CLAUDE.md — PharusV2_Manual

## Visão Geral

Manual de usuário do sistema **Pharus 2.0**, uma plataforma de gestão de eventos acadêmicos, científicos, culturais e institucionais. O site é construído com **Docusaurus v3** e publicado via GitHub Pages pela organização `IFNMG-Almenara`.

- URL de produção: `https://IFNMG-Almenara.github.io/PharusV2_Manual/`
- Idioma padrão: `pt-BR` (suporte a `en` também configurado)

---

## Comandos Essenciais

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento (http://localhost:3000)
npm run start

# Build de produção
npm run build

# Servir o build local
npm run serve

# Publicar no GitHub Pages
npm run deploy

# Limpar cache
npm run clear

# Verificar tipos TypeScript
npm run typecheck

# Gerar IDs de headings nos markdowns
npm run write-heading-ids

# Extrair strings para tradução
npm run write-translations
```

---

## Estrutura do Projeto

```
docs/manual/              # Conteúdo principal do manual
  introducao.md           # Página inicial do manual
  funcionalidades.md      # Catálogo de funcionalidades
  avaliador/              # Seção para avaliadores
  organizadores/          # Seção para organizadores
    Evento/
      CriarEvento.md
      Configurações Geriais do Evento/
      Outras Configurações/
        Avaliação/
        Programação/
        Submissões/
    images/               # Imagens da seção organizadores
  participantes/          # Seção para participantes
    images/               # Imagens da seção participantes

i18n/pt-BR/               # Traduções da interface
src/
  pages/                  # Páginas customizadas (React/MDX)
  components/             # Componentes React reutilizáveis
  css/custom.css          # Estilos globais customizados
static/img/               # Imagens estáticas (logo, favicon, etc.)
docusaurus.config.ts      # Configuração principal do Docusaurus
sidebars.ts               # Configuração das barras laterais
```

---

## Perfis de Usuário Documentados

| Perfil | Diretório | Descrição |
|---|---|---|
| Organizadores | `docs/manual/organizadores/` | Criação e configuração de eventos, submissões, avaliação, programação |
| Participantes | `docs/manual/participantes/` | Inscrição, acompanhamento e submissões |
| Avaliadores | `docs/manual/avaliador/` | Avaliação de trabalhos distribuídos |

---

## Convenções de Conteúdo

- Todos os arquivos Markdown usam **frontmatter YAML** com `title`, `description` e `sidebar_position`.
- Imagens ficam em pastas `images/` dentro da seção correspondente.
- Categorias de sidebar são definidas por arquivos `_category_.json`.
- O idioma de todo o conteúdo é **Português (pt-BR)**.
- Nomes de arquivos e pastas podem conter espaços e caracteres especiais (ex: `Configurações Geriais do Evento/`).

---

## Stack Tecnológica

- **Docusaurus** `^3.6.2` — framework de documentação
- **React** `^18` + **TypeScript** `~5.5`
- **MDX** `^3` — Markdown com suporte a JSX
- **Node.js** `>=18.0` (obrigatório)
- **Prism React Renderer** `^2.3` — highlight de código

---

## Deploy

O deploy é feito para o branch `gh-pages` via:

```bash
npm run deploy
```

Configurações relevantes em `docusaurus.config.ts`:
- `organizationName`: `IFNMG-Almenara`
- `projectName`: `PharusV2_Manual`
- `deploymentBranch`: `gh-pages`
