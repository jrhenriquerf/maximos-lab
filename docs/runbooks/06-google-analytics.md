# Google Analytics 4

## Objetivo

Configurar o Google Analytics 4 para medir acessos, origem de tráfego e comportamento básico dos visitantes nos projetos da Maximos Lab.

## Quando usar

Use quando o cliente precisa acompanhar visitas, campanhas, tráfego orgânico, conversões ou relatórios básicos de audiência.

## Pré-requisitos

- Conta Google do cliente ou conta autorizada.
- Domínio publicado ou ambiente de produção definido.
- Aprovação do cliente para coleta de dados.
- Política de privacidade revisada quando necessário.

## Passo a passo

1. Acesse `https://analytics.google.com`.
2. Crie uma conta ou selecione a conta do cliente.
3. Crie uma propriedade GA4.
4. Configure país, moeda e fuso horário adequados.
5. Crie um **Web Stream** para o domínio do projeto.
6. Copie o Measurement ID no formato `G-XXXXXXXXXX`.
7. Instale a tag diretamente no `<head>` ou via Google Tag Manager.
8. Se instalar diretamente, cole o script fornecido pelo GA4 em todas as páginas.
9. Se usar GTM, crie uma tag GA4 Configuration ou Google Tag adequada.
10. Publique a alteração no site.
11. Acesse o relatório **Realtime** e abra o site em janela anônima.
12. Confirme que o acesso aparece no GA4.

## Como validar

1. O Realtime deve mostrar pelo menos um usuário ativo.
2. O domínio exibido deve ser o domínio final do cliente.
3. Eventos básicos como `page_view` devem aparecer.
4. Verifique se a tag aparece apenas uma vez por página.

## Problemas comuns

- **Realtime vazio:** script não instalado, cache antigo ou bloqueio por navegador/extensão.
- **Measurement ID errado:** copiar novamente do Web Stream correto.
- **Tag duplicada:** remover instalação direta se estiver usando GTM.
- **Dados em propriedade errada:** confirmar conta e propriedade do cliente.
- **Cliente sem acesso:** adicionar e-mail do cliente na conta/propriedade.

## Checklist final

- [ ] Conta/propriedade criada.
- [ ] Web Stream criado.
- [ ] Measurement ID registrado internamente sem expor em local sensível.
- [ ] Tag instalada diretamente ou via GTM.
- [ ] Realtime validado.
- [ ] Cliente recebeu acesso, se contratado.
