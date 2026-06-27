# Performance e Lighthouse

## Objetivo

Padronizar testes de performance e qualidade técnica antes da publicação ou entrega de projetos da Maximos Lab.

## Quando usar

Use antes da publicação final, após alterações relevantes de layout, quando adicionar scripts externos ou quando o cliente contratar otimização.

## Pré-requisitos

- Site publicado em URL acessível ou rodando em ambiente local estável.
- Imagens finais otimizadas.
- Scripts de analytics/pixel definidos.
- Navegador Chrome ou Edge instalado.

## Passo a passo

1. Abra o site no Chrome.
2. Acesse DevTools com `F12` ou botão direito > Inspecionar.
3. Abra a aba **Lighthouse**.
4. Selecione modo Mobile primeiro.
5. Marque Performance, Accessibility, Best Practices e SEO.
6. Rode o teste.
7. Repita em Desktop quando necessário.
8. Registre os principais problemas encontrados.
9. Otimize imagens grandes para WebP.
10. Use `loading="lazy"` em imagens fora da primeira dobra.
11. Remova scripts desnecessários.
12. Evite bibliotecas externas quando HTML/CSS/JS simples resolver.
13. Mantenha CSS limpo e sem animações pesadas.
14. Refaça o teste após ajustes.

## Metas Maximos Lab

- Performance acima de 90.
- Accessibility acima de 95.
- SEO acima de 95.
- Best Practices sem alertas críticos.

## Como validar

1. Lighthouse deve atingir as metas internas ou ter justificativa registrada.
2. Site deve carregar rápido no mobile.
3. Imagens não devem ter tamanho desproporcional.
4. Não deve haver erro crítico de acessibilidade.
5. SEO básico deve passar.

## Problemas comuns

- **Imagem hero pesada:** converter para WebP e redimensionar.
- **JavaScript excessivo:** remover dependências não essenciais.
- **Layout shift:** definir dimensões de imagens e áreas fixas.
- **Contraste baixo:** ajustar cores de texto e botões.
- **SEO baixo:** revisar title, meta description, canonical e alt.

## Checklist final

- [ ] Lighthouse Mobile executado.
- [ ] Lighthouse Desktop executado quando necessário.
- [ ] Performance acima de 90 ou justificativa registrada.
- [ ] Accessibility acima de 95.
- [ ] SEO acima de 95.
- [ ] Imagens em WebP quando possível.
- [ ] Lazy loading aplicado fora da primeira dobra.
- [ ] Scripts externos revisados.
