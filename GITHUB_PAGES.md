# Instruções de Hospedagem no GitHub Pages

## Passo a Passo para Colocar no GitHub Pages

### 1️⃣ Criar Repositório

1. Acesse [github.com](https://github.com)
2. Clique no **+** no canto superior direito
3. Selecione "New repository"
4. Nomeie o repositório (ex: `presentes-casamento` ou `seu-usuario.github.io`)
5. Defina como **Public**
6. Clique em "Create repository"

### 2️⃣ Upload dos Arquivos

#### Opção A: Usando Git (recomendado)

```bash
# Na pasta do projeto
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/seu-usuario/seu-repositorio.git
git push -u origin main
```

#### Opção B: Interface Web do GitHub

1. Abra o repositório criado
2. Clique em "Add file" > "Upload files"
3. Arraste os arquivos para a área de upload
4. Clique em "Commit changes"

### 3️⃣ Ativar GitHub Pages

1. Vá para o repositório
2. Clique em **Settings** (ou ⚙️)
3. No menu esquerdo, procure **Pages**
4. Em "Source", escolha:
   - **Branch**: `main` (ou `master`)
   - **Folder**: `/ (root)`
5. Clique em **Save**
6. Aguarde 1-2 minutos para o site ser deployado

### 4️⃣ Acessar seu Site

Seu site estará disponível em:

- Se o repositório é `seu-usuario.github.io`:
  ```
  https://seu-usuario.github.io
  ```

- Se tem outro nome:
  ```
  https://seu-usuario.github.io/nome-do-repositorio
  ```

A URL aparecerá na seção **Pages** das configurações.

## ✅ Próximos Passos

1. **Adicione o QR Code**: Coloque `qr-code.png` em `images/`
2. **Adicione Fotos**: Coloque `foto1.jpg`, `foto2.jpg`, `foto3.jpg` em `images/`
3. **Customize a Lista**: Edite `script.js` para adicionar seus presentes
4. **Atualize o Repositório**: Faça `git push` das mudanças

## 🔄 Como Atualizar depois

```bash
# Fazer mudanças nos arquivos locais
git add .
git commit -m "Descrição das mudanças"
git push
```

O site será atualizado automaticamente em poucos minutos!

## 🆘 Dúvidas Comuns

**P: Quando o site fica pronto?**
R: Geralmente alguns minutos. Se não aparecer, aguarde um pouco mais ou limpe o cache do navegador.

**P: Como mudar domínio customizado?**
R: Na seção Pages das configurações, há opção para "Custom domain". Você precisará de um domínio registrado.

**P: Posso manter privado?**
R: GitHub Pages requer repositório público. Se precisar privado, use outro serviço como Vercel ou Netlify.

---

**Dúvidas?** Confira a [documentação oficial do GitHub Pages](https://docs.github.com/en/pages)