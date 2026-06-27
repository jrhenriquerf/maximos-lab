# Cloudflare

## Objetivo

Configurar a Cloudflare como camada de DNS, segurança e performance para projetos publicados pela Maximos Lab.

## Quando usar

Use quando o cliente tiver domínio próprio e o projeto precisar de controle DNS, HTTPS, redirecionamentos, performance ou preparação para ferramentas de validação.

## Pré-requisitos

- Domínio registrado e acessível no Registro.br ou registrador equivalente.
- Conta Cloudflare do cliente ou conta aprovada para administração.
- Acesso para alterar nameservers no registrador.
- Repositório/site já planejado para publicação.

## Passo a passo

1. Acesse `https://cloudflare.com` e crie ou entre na conta do cliente.
2. Clique em **Add a site** e informe o domínio raiz.
3. Escolha o plano adequado; para a maioria dos sites simples, o plano Free atende.
4. Revise os registros DNS importados automaticamente.
5. Copie os dois nameservers indicados pela Cloudflare.
6. Acesse o Registro.br e substitua os nameservers atuais pelos nameservers da Cloudflare.
7. Volte à Cloudflare e aguarde o status ficar **Active**.
8. Em **SSL/TLS**, configure o modo como **Full**.
9. Ative **Always Use HTTPS**.
10. Ative **Automatic HTTPS Rewrites**.
11. Em performance, ative **Brotli**.
12. Ative **HTTP/3**, se disponível.
13. Ative **Early Hints**, se disponível no plano.
14. Avalie **Auto Minify** para HTML/CSS/JS. Use com cuidado se o site tiver scripts sensíveis.
15. Para validação inicial do GitHub Pages, deixe registros relacionados ao Pages como **DNS Only**.
16. Depois que o GitHub Pages validar domínio e HTTPS, avalie se algum registro deve ficar **Proxied**.

## Como validar

1. Status do domínio na Cloudflare deve aparecer como **Active**.
2. Nameservers públicos devem apontar para Cloudflare.
3. O site deve abrir em `https://dominio.com.br`.
4. O navegador não deve exibir alerta de certificado.
5. As configurações de SSL/TLS devem estar em **Full**.

## Problemas comuns

- **Cloudflare não ativa:** nameservers ainda não foram trocados ou propagados.
- **Erro de certificado:** conferir modo SSL/TLS e HTTPS no GitHub Pages.
- **GitHub Pages não valida:** deixar DNS como **DNS Only** até a validação terminar.
- **Site abre sem www mas não com www:** criar registro CNAME para `www`.
- **Auto Minify quebrou layout/script:** desativar e testar novamente.

## Checklist final

- [ ] Domínio adicionado na Cloudflare.
- [ ] Nameservers alterados no registrador.
- [ ] Status Active confirmado.
- [ ] SSL/TLS configurado como Full.
- [ ] Always Use HTTPS ativado.
- [ ] Automatic HTTPS Rewrites ativado.
- [ ] Brotli ativado.
- [ ] HTTP/3 ativado, se disponível.
- [ ] Early Hints ativado, se disponível.
- [ ] DNS Only usado para validação inicial do GitHub Pages.
