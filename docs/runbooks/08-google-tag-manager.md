# Google Tag Manager

## Objetivo

Configurar o Google Tag Manager para centralizar instalação de tags como Analytics, Meta Pixel, Clarity e eventos de conversão.

## Quando usar

Use quando o projeto tiver múltiplas tags, campanhas pagas, eventos de conversão, pixels ou necessidade de manutenção sem alterar código toda vez.

## Pré-requisitos

- Conta Google do cliente ou autorizada.
- Domínio publicado ou em homologação.
- Aprovação sobre tags que serão instaladas.
- Acesso ao código do site.

## Passo a passo

1. Acesse `https://tagmanager.google.com`.
2. Crie uma conta para o cliente ou selecione uma existente.
3. Crie um container do tipo **Web**.
4. Copie o código do GTM para o `<head>`.
5. Copie o segundo trecho para logo após a abertura do `<body>`.
6. Publique o site com os trechos instalados.
7. No GTM, clique em **Preview**.
8. Informe a URL do site e conecte o modo de depuração.
9. Confirme que o container carregou.
10. Crie tags de Analytics, Pixel ou Clarity conforme contratado.
11. Teste cada tag no Preview.
12. Publique o container.

## Como validar

1. O Preview deve conectar ao site.
2. A tag do container deve disparar em todas as páginas.
3. Tags configuradas devem disparar nos eventos corretos.
4. A versão publicada deve aparecer no histórico do GTM.

## Problemas comuns

- **Preview não conecta:** código ausente, domínio errado ou bloqueio de navegador.
- **Trecho body ausente:** GTM pode funcionar parcialmente, mas não é o padrão recomendado.
- **Tag não dispara:** revisar trigger.
- **Container não publicado:** alterações ficam só em rascunho.
- **Tags duplicadas:** evitar instalar Analytics direto e também via GTM sem necessidade.

## Checklist final

- [ ] Conta GTM criada.
- [ ] Container Web criado.
- [ ] Código inserido no head.
- [ ] Código inserido após abertura do body.
- [ ] Preview testado.
- [ ] Tags necessárias configuradas.
- [ ] Container publicado.
