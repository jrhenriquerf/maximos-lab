# Google Search Console

## Objetivo

Configurar o Google Search Console para acompanhar indexação, sitemaps e presença orgânica dos sites publicados pela Maximos Lab.

## Quando usar

Use em sites institucionais, portfólios, blogs, landing pages estratégicas e qualquer projeto que dependa de tráfego orgânico.

## Pré-requisitos

- Domínio publicado ou em fase final de DNS.
- Acesso ao DNS na Cloudflare.
- Conta Google do cliente ou conta autorizada.
- Sitemap pronto quando aplicável.

## Passo a passo

1. Acesse `https://search.google.com/search-console`.
2. Clique em adicionar propriedade.
3. Escolha entre **Domínio** e **Prefixo do URL**.
4. Recomende **Domínio** para cobrir http, https, www e subdomínios.
5. Copie o registro TXT fornecido pelo Search Console.
6. Acesse Cloudflare > DNS.
7. Crie um registro TXT no domínio raiz com o valor fornecido.
8. Aguarde alguns minutos e clique em verificar no Search Console.
9. Depois de validado, acesse **Sitemaps**.
10. Envie `sitemap.xml`, se o projeto tiver sitemap.
11. Use a inspeção de URL para solicitar indexação da página principal.
12. Repita para páginas estratégicas, se necessário.

## Como validar

1. A propriedade deve aparecer como verificada.
2. O TXT deve estar visível no DNS público.
3. O sitemap deve aparecer como enviado e lido.
4. A inspeção de URL deve reconhecer a página publicada.

## Problemas comuns

- **Verificação falha:** DNS TXT ainda não propagou ou foi criado no host errado.
- **Sitemap não encontrado:** conferir URL, nome do arquivo e publicação.
- **URL bloqueada:** revisar robots.txt e meta robots.
- **Propriedade prefixo limitada:** usar propriedade Domínio quando possível.

## Checklist final

- [ ] Propriedade criada.
- [ ] Tipo Domínio usado quando possível.
- [ ] TXT criado na Cloudflare.
- [ ] Propriedade verificada.
- [ ] Sitemap enviado.
- [ ] Indexação solicitada para páginas principais.
