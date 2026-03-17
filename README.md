# Presentes de Casamento - Monalisa e João Vitor

Um site responsivo e moderno para lista de presentes de casamento, totalmente em frontend e hospedado no GitHub Pages.

## 🎁 Características

- ✨ **Design Moderno**: Layout responsivo com cores vivas (branco e azul)
- 🎨 **Tipografia Premium**: Google Fonts (Playfair Display, Montserrat, Cormorant Garamond)
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- 🖼️ **Fotos ao Fundo**: Suporte para múltiplas fotos de casal
- 💳 **QR Code de Pagamento**: Modal para exibir QR code de pagamento via PIX
- 🎯 **Presentes Dinâmicos**: Alguns presentes marcados como indisponíveis (simulando já escolhidos)
- 💾 **Persistência Local**: Estado salvo no `localStorage` do navegador
- 🔒 **Apenas Frontend**: Sem necessidade de backend

## 🚀 Como Usar

### Instalação Local

1. Clone ou baixe este repositório
2. Abra `index.html` no navegador

### Adicionar QR Code

Coloque seu arquivo PNG do QR code em:
```
images/qr-code.png
```

### Adicionar Fotos de Casal

Coloque suas fotos em:
```
images/foto1.jpg
images/foto2.jpg
images/foto3.jpg
```

Você pode ajustar as imagens no arquivo `styles.css` se desejar usar diferentes fotos ou URLs.

### Personalizar Lista de Presentes

Edite o arquivo `script.js` para adicionar, remover ou modificar presentes:

```javascript
const gifts = [
    { name: 'Seu Presente', value: 100, available: true, icon: '🎁' },
    // ... mais presentes
];
```

## 📦 Estrutura do Projeto

```
presentes_casamento/
├── index.html          # Estrutura HTML
├── styles.css          # Estilos e tipografia
├── script.js           # Lógica JavaScript
├── README.md           # Este arquivo
├── .gitignore          # Arquivo para Git
└── images/            # Pasta para imagens
    ├── qr-code.png    # QR code de pagamento
    └── fotos...       # Fotos do casal
```

## 🌐 Hospedagem no GitHub Pages

### Passo 1: Criar repositório
1. Acesse [github.com](https://github.com)
2. Crie um novo repositório público
3. Nomeie como: `seu-usuario.github.io` (opcional, para aparecer em seu perfil)

### Passo 2: Upload dos arquivos
1. Clone o repositório
2. Coloque os arquivos do projeto na raiz da pasta do repositório
3. Commit e push

### Passo 3: Ativar GitHub Pages
1. Vá para Settings do repositório
2. No menu esquerdo, selecione "Pages"
3. Em "Source", escolha o branch (geralmente `main`)
4. Clique em "Save"

### Passo 4: Acessar seu site
Seu site estará disponível em:
- Se repositório é `seu-usuario.github.io`: `https://seu-usuario.github.io`
- Se repositório tem outro nome: `https://seu-usuario.github.io/nome-do-repo`

## 🎨 Personalização de Cores

Para alterar as cores principais, edite no `styles.css`:

- Cor Azul Primária: `#0066cc` ou `#0099ff`
- Cor Secundária: `#1a3a52`
- Cor do Fundo Claro: `#f0f8ff`

## 💾 Como Funciona a Persistência

Quando um presente é marcado como "Pagamento Realizado", o estado é salvo em `localStorage`:

```javascript
localStorage.getItem('chosenGifts')  // Recupera presentes escolhidos
localStorage.setItem('chosenGifts', JSON.stringify(chosen))  // Salva novo estado
```

O usuário pode resetar o estado do navegador limpando cookies/dados locais.

## 📱 Responsividade

- **Desktop**: Grid de 3-4 colunas
- **Tablet**: Grid de 2 colunas
- **Mobile**: 1 coluna

## 🛠️ Tecnologias Utilizadas

- HTML5 semântico
- CSS3 (Grid, Flexbox, Gradientes, Animações)
- JavaScript Vanilla (sem dependências)

## 📝 Notas Importantes

- As fotos de fundo no exemplo usam URLs do [Unsplash](https://unsplash.com) (Creative Commons)
- Você pode substituir por suas próprias fotos
- O QR code é obrigatório para a funcionalidade de pagamento

---

**Casamento**: 20/03/2026  
**Noivos**: Monalisa & João Vitor  
**Criado com ❤️**