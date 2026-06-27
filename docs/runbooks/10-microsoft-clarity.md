# Microsoft Clarity

## Objetivo

Configurar Microsoft Clarity para análise de comportamento, gravações de sessão e mapas de calor em projetos da Maximos Lab.

## Quando usar

Use quando o cliente quer entender cliques, rolagem, pontos de abandono, usabilidade e comportamento real dos visitantes.

## Pré-requisitos

- Conta Microsoft ou login aprovado pelo cliente.
- Domínio publicado.
- Aprovação do cliente para ferramenta de comportamento.
- Política de privacidade revisada quando necessário.

## Passo a passo

1. Acesse `https://clarity.microsoft.com`.
2. Crie um projeto para o domínio do cliente.
3. Copie o script de instalação.
4. Insira o script no site, normalmente antes de `</head>`.
5. Alternativamente, instale via GTM.
6. Publique o site.
7. Acesse o domínio em janela anônima.
8. Aguarde o Clarity detectar atividade.
9. Depois de algumas visitas, confira gravações.
10. Verifique mapas de calor quando houver dados suficientes.
11. Revise configurações de privacidade e mascaramento.

## Como validar

1. O painel do Clarity deve indicar que o script foi detectado.
2. Deve aparecer pelo menos uma sessão após teste.
3. As gravações devem carregar sem dados sensíveis visíveis.
4. Heatmaps devem começar a ser gerados após tráfego suficiente.

## Problemas comuns

- **Projeto sem dados:** script ausente, cache ou pouco tráfego.
- **Instalação duplicada:** remover duplicidade manual/GTM.
- **Dados sensíveis aparecendo:** configurar mascaramento ou remover ferramenta de páginas sensíveis.
- **Cliente sem acesso:** convidar e-mail do cliente.

## Checklist final

- [ ] Projeto Clarity criado.
- [ ] Script instalado.
- [ ] Sessão de teste registrada.
- [ ] Heatmaps habilitados.
- [ ] Privacidade revisada.
- [ ] Cliente recebeu acesso, se contratado.
