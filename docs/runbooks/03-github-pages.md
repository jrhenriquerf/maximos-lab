# GitHub Pages

## Objetivo

Publicar sites estáticos da Maximos Lab usando GitHub Pages com domínio customizado e HTTPS.

## Quando usar

Use para landing pages, páginas institucionais, portfólios, links na bio, templates estáticos e projetos sem backend.

## Pré-requisitos

- Conta GitHub com acesso ao repositório.
- Arquivos do site prontos (`index.html`, `styles.css`, assets e scripts).
- Domínio ou subdomínio definido.
- DNS planejado na Cloudflare ou provedor equivalente.

## Passo a passo

1. Crie um repositório no GitHub para o projeto.
2. Suba os arquivos do site para a branch principal, normalmente `main`.
3. Verifique se existe um `index.html` na raiz ou na pasta configurada.
4. Acesse **Settings > Pages**.
5. Em **Build and deployment**, selecione a origem desejada.
6. Escolha a branch, normalmente `main`, e a pasta `/root` ou `/docs` conforme o projeto.
7. Salve a configuração.
8. Aguarde o GitHub gerar a URL `usuario.github.io/repositorio`.
9. Em **Custom domain**, informe o domínio ou subdomínio final.
10. Salve para o GitHub criar ou atualizar o arquivo `CNAME`.
11. Confirme que o arquivo `CNAME` contém apenas o domínio customizado, sem `https://` e sem caminho.
12. Configure DNS conforme o runbook de DNS.
13. Aguarde o status **DNS Check Successful**.
14. Ative **Enforce HTTPS** quando a opção ficar disponível.
15. Acesse o domínio final em janela anônima e teste navegação.

## Como validar

1. A página deve abrir pela URL do GitHub Pages.
2. O domínio customizado deve abrir o mesmo site.
3. Em Settings > Pages, o DNS Check deve estar aprovado.
4. **Enforce HTTPS** deve estar ativo.
5. O arquivo `CNAME` deve estar versionado no repositório.

## Problemas comuns

- **DNS Check in Progress:** aguarde propagação e confirme registros DNS.
- **Enforce HTTPS indisponível:** GitHub ainda não emitiu certificado; aguarde e deixe DNS Only na Cloudflare.
- **Cloudflare Proxied atrapalhando validação:** troque temporariamente para DNS Only.
- **CNAME com URL completa:** o arquivo deve conter apenas o domínio, como `www.exemplo.com.br`.
- **Site 404:** conferir branch, pasta de publicação e existência de `index.html`.

## Checklist final

- [ ] Repositório criado.
- [ ] Arquivos publicados na branch correta.
- [ ] Pages ativado.
- [ ] Domínio customizado configurado.
- [ ] Arquivo CNAME correto.
- [ ] DNS Check Successful.
- [ ] Enforce HTTPS ativo.
- [ ] Site acessível pelo domínio final.
