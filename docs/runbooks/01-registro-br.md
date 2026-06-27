# Registro.br

## Objetivo

Padronizar o registro, a administração e a transferência operacional de domínios brasileiros usados em projetos da Maximos Lab.

## Quando usar

Use este runbook sempre que um projeto precisar de domínio próprio `.br`, alteração de titularidade, troca de nameservers ou verificação de administração no Registro.br.

## Pré-requisitos

- Nome de domínio escolhido e aprovado pelo cliente.
- CPF ou CNPJ do cliente disponível para o registro.
- E-mail administrativo do cliente confirmado.
- Acesso à conta do cliente no Registro.br ou acompanhamento em chamada.
- Confirmação se o domínio já existe ou será comprado.

## Passo a passo

1. Acesse `https://registro.br` e pesquise o domínio desejado.
2. Confirme com o cliente se o domínio deve ser registrado em CPF ou CNPJ.
3. Registre o domínio no CPF/CNPJ do cliente, nunca em conta pessoal da Maximos Lab.
4. Explique ao cliente que o domínio é um ativo dele e deve ficar sob titularidade dele.
5. Finalize o cadastro e pagamento conforme instruções do Registro.br.
6. Depois do registro, acesse a área do domínio.
7. Em **DNS**, escolha a opção de alterar servidores DNS quando for usar Cloudflare.
8. Cole os nameservers fornecidos pela Cloudflare exatamente como aparecem.
9. Salve a alteração e aguarde propagação.
10. Verifique se existe um **provedor de serviços** vinculado ao domínio.
11. Se houver provedor, confirme se ele ainda deve administrar o domínio.
12. Explique que remover provedor de serviços não altera DNS nem hospedagem por si só, mas pode afetar quem administra titularidade e configurações do domínio.
13. Se o CPF/CNPJ estiver vinculado a NEWFOLD/HostGator e isso impedir registro direto, confirme a titularidade e solicite remoção ou alteração do provedor quando necessário.
14. Registre no controle interno quem é o titular, e-mail administrativo e data de vencimento do domínio.

## Como validar

1. No Registro.br, confirme que o domínio aparece na conta/titularidade correta.
2. Confira se os nameservers exibidos são os mesmos informados pela Cloudflare.
3. Use um verificador de DNS público para confirmar a troca de NS.
4. Confirme com o cliente que ele recebeu e consegue acessar os e-mails administrativos.

## Problemas comuns

- **CPF vinculado a NEWFOLD/HostGator:** pode impedir administração direta no Registro.br. Confirme titularidade e solicite alteração/remoção do provedor.
- **Cliente registrou no CPF errado:** orientar ajuste de titularidade pelo fluxo do Registro.br.
- **Nameservers digitados com erro:** copiar novamente da Cloudflare e salvar.
- **Propagação lenta:** aguardar algumas horas; em alguns casos pode levar até 24-48h.
- **Cliente não tem acesso ao e-mail administrativo:** recuperar acesso antes de continuar.

## Checklist final

- [ ] Domínio registrado no CPF/CNPJ do cliente.
- [ ] E-mail administrativo confirmado.
- [ ] Vencimento do domínio registrado internamente.
- [ ] Nameservers alterados, se aplicável.
- [ ] Provedor de serviços verificado.
- [ ] Situações NEWFOLD/HostGator resolvidas, se existirem.
- [ ] Cliente orientado sobre propriedade do domínio.
