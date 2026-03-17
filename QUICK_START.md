# 🚀 Guia Rápido - Primeiros Passos

## ✅ O que já está pronto

- ✨ Site totalmente responsivo e bonito
- 🎨 Design moderno com cores vivas (azul e branco)
- 📋 Lista de 15 presentes com ícones emojis
- 💾 Sistema de persistência no navegador
- 🔒 Totalmente em Frontend (apenas HTML/CSS/JS)

## 📋 O que você precisa fazer

### 1️⃣ **Adicionar seu QR Code**
   - Gerencie seu QR Code (PIX, Pagamento, etc)
   - Salve como `images/qr-code.png`
   - O site exibirá automaticamente quando clicar em um presente

### 2️⃣ **Adicionar Fotos do Casal**
   - Tire fotos bonitas suas com seu parceiro(a)
   - Salve 3 fotos em `images/`:
     - `foto1.jpg` - Primeira foto
     - `foto2.jpg` - Segunda foto
     - `foto3.jpg` - Terceira foto
   - Elas aparecerão ao fundo do site

### 3️⃣ **Personalizar a Lista de Presentes** (Opcional)
   Abra o arquivo `script.js` e edit a lista:
   ```javascript
   const gifts = [
       { name: 'Seu Presente', value: 100, available: true, icon: '🎁' },
   ];
   ```
   
   **Emojis populares para presentes:**
   - 🍽️ Prato, 🥘 Panela, ☕ Café, 🛏️ Cama
   - 🧺 Roupa, 💎 Joias, 🖼️ Quadro, 🕯️ Vela

### 4️⃣ **Escolher Presentes "Já Escolhidos"** (Opcional)
   Mude `available: false` para marcar presentes já selecionados:
   ```javascript
   { name: 'Liquidificador', value: 120, available: false, icon: '🥤' },
   ```

### 5️⃣ **Hospedar no GitHub Pages**
   Siga as instruções em `GITHUB_PAGES.md`. Resumo:
   - Crie repositório no Github
   - Faça upload dos arquivos
   - Ative Pages nas configurações
   - Pronto! Seu site estará online

## 🎨 Cores Principais

Se quiser mudar as cores, edite o `styles.css`:

- **Azul Primário**: `#0066cc` → mude para sua cor favorita
- **Azul Secundário**: `#0099ff` → para variação
- **Text Escuro**: `#1a3a52` → para o texto

## 📱 Testar Localmente

Antes de subir para GitHub:
1. Abra `index.html` no seu navegador
2. Teste a responsividade (aperte F12)
3. Clique em um presente para testar o modal
4. Simule um pagamento (botão verde)

## 🔗 Arquivos Úteis

| Arquivo | Função |
|---------|--------|
| `index.html` | Estrutura do site |
| `styles.css` | Cores, fontes, layout |
| `script.js` | Lista de presentes, funcionalidades |
| `README.md` | Documentação completa |
| `GITHUB_PAGES.md` | Guia para GitHub Pages |
| `DOWNLOAD_IMAGENS.html` | Baixar imagens de exemplo |

## ❓ Perguntas Comuns

**P: Posso mudar os nomes dos presentes?**
R: Sim! Edite `script.js` na lista `gifts`.

**P: Como adicionar mais presentes?**
R: Copie um objeto da lista e adicione um novo com nome, valor, disponibilidade e ícone.

**P: O sistema de pagamento funciona?**
R: Não, é apenas visual. Quando clica em "Pagamento Realizado", apenas marca como escolhido. O QR code é um link estático seu.

**P: Meus dados são salvos?**
R: Sim! No navegador do usuário via `localStorage`. Limpar dados do navegador apaga tudo.

**P: Posso compartilhar o link?**
R: Sim! Depois de hospedar no GitHub Pages, seu link fica público e pode ser compartilhado no WhatsApp, Instagram, etc.

## 🎯 Próximos Passos Recomendados

1. [ ] Adicione `qr-code.png` em `images/`
2. [ ] Adicione `foto1.jpg`, `foto2.jpg`, `foto3.jpg` em `images/`
3. [ ] Teste o site localmente (abra `index.html`)
4. [ ] Customize a lista de presentes em `script.js` se desejar
5. [ ] Criate repositório no GitHub
6. [ ] Faça upload de todos os arquivos
7. [ ] Ative GitHub Pages
8. [ ] Compartilhe o link com seus convidados! 🎉

---

**Precisa de ajuda?** Confira `README.md` ou `GITHUB_PAGES.md`

**Bom Casamento! 💍**