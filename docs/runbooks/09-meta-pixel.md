# Meta Pixel

## Objetivo

Configurar Meta Pixel para rastreamento de visitas e conversões quando o cliente pretende anunciar no Instagram ou Facebook.

## Quando usar

Use quando houver campanha paga, remarketing, captação de leads, venda de produtos ou intenção clara de mídia paga na Meta.

## Pré-requisitos

- Conta Business Manager ou Gerenciador de Eventos do cliente.
- Pixel criado ou permissão para criar.
- Política de privacidade revisada quando necessário.
- Definição dos eventos que serão usados.

## Passo a passo

1. Acesse o Gerenciador de Eventos da Meta.
2. Crie um novo Pixel ou selecione o Pixel do cliente.
3. Copie o código base do Pixel.
4. Escolha instalação manual ou via GTM.
5. Instale o evento base `PageView` em todas as páginas.
6. Configure evento `Lead` em clique de WhatsApp, envio de formulário ou página de obrigado, conforme projeto.
7. Publique o site ou container GTM.
8. Instale ou use o Meta Pixel Helper para teste.
9. Acesse o site e confirme disparo do `PageView`.
10. Execute a ação de conversão e confirme disparo do `Lead`.
11. Documente quais eventos foram configurados.

## Como validar

1. Meta Pixel Helper deve detectar o Pixel.
2. O Gerenciador de Eventos deve receber atividade.
3. `PageView` deve disparar ao abrir páginas.
4. `Lead` deve disparar apenas em ações de conversão definidas.

## Problemas comuns

- **Pixel não detectado:** código ausente ou bloqueado.
- **Evento duplicado:** tag instalada manualmente e via GTM ao mesmo tempo.
- **Lead dispara em toda página:** trigger configurado errado.
- **Cliente sem Business Manager:** orientar criação antes da campanha.
- **Bloqueadores de navegador:** testar em navegador limpo também.

## Checklist final

- [ ] Pixel criado ou selecionado.
- [ ] PageView instalado.
- [ ] Lead configurado, se contratado.
- [ ] Instalação manual ou GTM documentada.
- [ ] Meta Pixel Helper validado.
- [ ] Cliente informado sobre uso para anúncios.
