# SEO técnico básico

## Objetivo

Garantir que todo projeto publicado pela Maximos Lab tenha metadados técnicos mínimos para indexação, compartilhamento e aparência profissional.

## Quando usar

Use em landing pages, sites institucionais, portfólios, templates, páginas de links e qualquer página pública indexável.

## Pré-requisitos

- Título e descrição aprovados.
- URL final definida.
- Imagem Open Graph criada.
- Favicon criado.
- Lista de páginas do site definida.

## Passo a passo

1. Configure um `<title>` único por página.
2. Escreva uma meta description objetiva, com até cerca de 155 caracteres quando possível.
3. Adicione canonical com a URL final da página.
4. Configure Open Graph para WhatsApp, Facebook, LinkedIn e outros previews.
5. Configure Twitter Card.
6. Adicione favicon.
7. Configure `theme-color` coerente com a identidade visual.
8. Inclua `alt` descritivo em imagens relevantes.
9. Crie `robots.txt` para orientar rastreadores.
10. Crie `sitemap.xml` quando o site tiver múltiplas páginas.
11. Para landing page simples, sitemap é opcional; para site multipágina, é obrigatório/recomendado.
12. Valide o HTML final antes da publicação.

## Template HTML

```html
<title>{{TITLE}}</title>
<meta name="description" content="{{DESCRIPTION}}">
<link rel="canonical" href="{{URL}}">
<meta property="og:title" content="{{TITLE}}">
<meta property="og:description" content="{{DESCRIPTION}}">
<meta property="og:image" content="{{OG_IMAGE}}">
<meta property="og:url" content="{{URL}}">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/assets/favicon.ico">
```

## Como validar

1. Abra o código-fonte e confirme as tags no `<head>`.
2. Use ferramenta de preview Open Graph.
3. Compartilhe a URL em ambiente controlado do WhatsApp após publicação.
4. Rode Lighthouse e confira SEO.
5. Verifique `robots.txt` e `sitemap.xml` no navegador.

## Problemas comuns

- **Preview antigo no WhatsApp:** cache da plataforma; aguarde ou use depurador quando disponível.
- **Canonical errado:** corrigir para URL final com HTTPS.
- **OG image 404:** conferir caminho absoluto da imagem publicada.
- **Title genérico:** ajustar por página.
- **Alt ausente:** revisar imagens de conteúdo.

## Checklist final

- [ ] Title configurado.
- [ ] Meta description configurada.
- [ ] Canonical configurado.
- [ ] Open Graph configurado.
- [ ] Twitter Card configurado.
- [ ] Favicon configurado.
- [ ] Theme color configurado.
- [ ] Alt em imagens relevantes.
- [ ] Robots.txt criado.
- [ ] Sitemap.xml criado quando necessário.
