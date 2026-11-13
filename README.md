# La Venta Market — site institucional

Site estático (HTML/CSS/JS), sem build. Hospedagem gratuita no GitHub Pages.

## Estrutura
- `index.html`, `style.css`, `script.js` — a página
- `config.js` — **WhatsApp, e-mail, Instagram e CNPJ** (preencha quando tiver)
- `assets/logo.webp` — logo
- `CNAME` — domínio `laventamarket.com.br`

## Quando tiver WhatsApp e e-mail
Edite só o `config.js`, faça commit e push. Enquanto estiverem vazios, o formulário
avisa que o canal ainda não está disponível e o botão flutuante do WhatsApp fica oculto.

## Publicar no GitHub Pages
1. Crie um repositório no GitHub (ex.: `laventamarket`) e envie estes arquivos:
   ```bash
   git init
   git add .
   git commit -m "Site La Venta Market"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/laventamarket.git
   git push -u origin main
   ```
2. No repositório: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`** → Save.
3. Em **Custom domain** informe `laventamarket.com.br` e salve (o arquivo `CNAME` já está no projeto).

## DNS no Registro.br
Painel do Registro.br → seu domínio → **Editar zona DNS** (use "DNS do Registro.br"):

| Tipo | Nome | Valor |
|------|------|-------|
| A | (raiz, vazio) | 185.199.108.153 |
| A | (raiz, vazio) | 185.199.109.153 |
| A | (raiz, vazio) | 185.199.110.153 |
| A | (raiz, vazio) | 185.199.111.153 |
| CNAME | www | SEU_USUARIO.github.io. |

Confirme os IPs na documentação oficial do GitHub Pages antes de configurar.
A propagação leva de minutos a algumas horas. Depois, em Settings → Pages,
marque **Enforce HTTPS**.

## E-mail profissional (contato@laventamarket.com.br)
Opções: Google Workspace, Zoho Mail (tem plano gratuito) ou Microsoft 365. O provedor
indicará registros **MX/TXT** para adicionar na mesma zona DNS do Registro.br
(sem mexer nos registros A/CNAME do site).

## WhatsApp
Use um número exclusivo da empresa com o app **WhatsApp Business**. No `config.js`,
informe só dígitos com DDI: `5511999998888`.
