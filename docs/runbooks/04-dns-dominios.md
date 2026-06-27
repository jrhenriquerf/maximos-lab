# DNS e domínios

## Objetivo

Padronizar registros DNS para domínios, subdomínios e GitHub Pages em projetos da Maximos Lab.

## Quando usar

Use sempre que configurar domínio apex, `www`, subdomínios de campanhas, links na bio ou landing pages publicadas no GitHub Pages.

## Pré-requisitos

- Domínio ativo.
- DNS administrado na Cloudflare ou provedor equivalente.
- Repositório GitHub Pages configurado.
- Domínio final definido no arquivo `CNAME` do projeto.

## Passo a passo

1. Defina se o site será publicado no domínio apex, no `www` ou em subdomínio.
2. Para domínio apex (`exemplo.com.br`), crie registros A apontando para GitHub Pages:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. Para `www`, crie um CNAME apontando para `usuario.github.io`.
4. Para subdomínios, crie CNAME apontando para `usuario.github.io`.
5. Exemplos recomendados:
   - `@ -> A -> IPs GitHub`
   - `www -> CNAME -> usuario.github.io`
   - `imersao -> CNAME -> usuario.github.io`
   - `links -> CNAME -> usuario.github.io`
6. No GitHub Pages, configure exatamente o domínio que será usado.
7. Durante validação inicial, deixe registros como **DNS Only** na Cloudflare.
8. Aguarde propagação DNS.
9. Depois da validação e HTTPS funcionando, avalie se deve manter DNS Only ou usar Proxied.
10. Evite misturar múltiplos destinos para o mesmo host.

## Como validar

1. Use `dig`, `nslookup` ou ferramenta web para verificar registros.
2. Confirme que o host final resolve para GitHub Pages.
3. Acesse o domínio com e sem `https://`.
4. Confirme que não há loop de redirecionamento.
5. Verifique DNS Check no GitHub Pages.

## Problemas comuns

- **Apex sem registros A:** domínio raiz não abre.
- **www sem CNAME:** versão com www falha.
- **Subdomínio com CNAME errado:** GitHub Pages não valida.
- **Proxied durante validação:** pode impedir certificado do Pages.
- **Propagação parcial:** alguns locais resolvem e outros não; aguarde.

## Checklist final

- [ ] Apex configurado, se usado.
- [ ] `www` configurado, se usado.
- [ ] Subdomínios configurados, se usados.
- [ ] Registros GitHub Pages corretos.
- [ ] DNS Only usado na validação inicial.
- [ ] GitHub Pages validado.
- [ ] HTTPS ativo.
