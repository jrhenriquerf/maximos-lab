# Publicação final

## Objetivo

Conferir todos os pontos técnicos, visuais e funcionais antes de considerar o projeto publicado oficialmente.

## Quando usar

Use na etapa final, depois de DNS, GitHub Pages, Cloudflare, SEO e ferramentas contratadas estarem configuradas.

## Pré-requisitos

- Site aprovado internamente.
- Domínio final configurado.
- HTTPS ativo.
- Conteúdo final aplicado.
- Ferramentas contratadas instaladas.

## Passo a passo

1. Abra o site pelo domínio final.
2. Teste navegação principal.
3. Clique em todos os links internos.
4. Clique em todos os links externos.
5. Teste botão de WhatsApp.
6. Teste formulário, se existir.
7. Verifique imagens em desktop e mobile.
8. Confira favicon no navegador.
9. Confira title e meta description no código.
10. Confira Open Graph usando preview ou compartilhamento controlado.
11. Teste responsividade em mobile.
12. Confirme que HTTPS está ativo.
13. Confirme que domínio com e sem `www` funciona conforme estratégia.
14. Valide Analytics, Pixel, GTM ou Clarity se contratados.
15. Rode Lighthouse final.
16. Registre data e versão publicada.

## Como validar

1. Site deve abrir sem erros pelo domínio final.
2. Navegador deve mostrar cadeado/HTTPS.
3. Botões de contato devem abrir destino correto.
4. Formulários devem ter comportamento esperado.
5. Preview do WhatsApp deve mostrar título, descrição e imagem.
6. Ferramentas de medição devem receber dados.

## Problemas comuns

- **WhatsApp com número errado:** revisar links `wa.me`.
- **Imagem quebrada:** conferir caminhos relativos e publicação de assets.
- **Preview sem imagem:** revisar `og:image` absoluto.
- **Formulário sem backend:** deixar claro se é apenas layout ou integrar solução.
- **Domínio alternativo falha:** revisar DNS e redirecionamentos.

## Checklist final

- [ ] Links conferidos.
- [ ] WhatsApp conferido.
- [ ] Formulários conferidos.
- [ ] Imagens conferidas.
- [ ] SEO conferido.
- [ ] Open Graph conferido.
- [ ] Favicon conferido.
- [ ] Responsividade conferida.
- [ ] Domínio conferido.
- [ ] HTTPS conferido.
- [ ] Analytics/Pixel/Clarity conferidos, se contratados.
- [ ] Lighthouse final executado.
