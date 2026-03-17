// Lista de presentes com imagens reais de produtos
const gifts = [
    { name: 'Jogo de Talheres', value: 180, available: true, image: 'https://images.unsplash.com/photo-1633504498282-65189dc99557?w=300&h=300&fit=crop' },
    { name: 'Conjunto de Pratos', value: 250, available: false, image: 'https://images.unsplash.com/photo-1558163250-62987a71f81a?w=300&h=300&fit=crop' },
    { name: 'Liquidificador Philco Power', value: 300, available: true, image: 'https://images.unsplash.com/photo-1585237672814-8f85a8118bf6?w=300&h=300&fit=crop' },
    { name: 'Cafeteira Espresso Nespresso', value: 400, available: true, image: 'https://images.unsplash.com/photo-1765897110863-48255c931c16?w=300&h=300&fit=crop' },
    { name: 'Aspirador Robô Inteligente', value: 1200, available: false, image: 'https://images.unsplash.com/photo-1647940990395-967898eb0d65?w=300&h=300&fit=crop' },
    { name: 'Jogo de Cama 300 fios Premium', value: 200, available: true, image: 'https://images.unsplash.com/photo-1728614669329-29e10a0698ea?w=300&h=300&fit=crop' },
    { name: 'Panela Inox 5 peças', value: 150, available: true, image: 'https://images.unsplash.com/photo-1604414499020-f9ac575bc5ec?w=300&h=300&fit=crop' },
    { name: 'Ferro de Passar a Vapor', value: 200, available: false, image: 'https://images.unsplash.com/photo-1662221156544-3355c817ed74?w=300&h=300&fit=crop' },
    { name: 'Ventilador de Teto 127V', value: 120, available: true, image: 'https://images.unsplash.com/photo-1647485894914-539cd6430260?w=300&h=300&fit=crop' },
    { name: 'Chaleira Elétrica Haüskraft', value: 70, available: true, image: 'https://images.unsplash.com/photo-1650940925927-f4a30c930a4d?w=300&h=300&fit=crop' },
    { name: 'Air Fryer Mondial 6L', value: 350, available: true, image: 'https://images.unsplash.com/photo-1695089028114-ce28248f0ab9?w=300&h=300&fit=crop' },
    { name: 'Jogo de Copos de Cristal 12 peças', value: 100, available: false, image: 'https://images.unsplash.com/photo-1549127024-5f213d45604a?w=300&h=300&fit=crop' },
    { name: 'Micro-ondas 25L Electrolux', value: 350, available: true, image: 'https://images.unsplash.com/photo-1693786229416-2dd310137f18?w=300&h=300&fit=crop' },
    { name: 'Forno Elétrico Convector 40L', value: 500, available: true, image: 'https://images.unsplash.com/photo-1740479783122-d19bfc60c3c0?w=300&h=300&fit=crop' },
    { name: 'Luminária Inteligente RGB LED', value: 150, available: true, image: 'https://images.unsplash.com/photo-1585128719715-46776b56a0d1?w=300&h=300&fit=crop' },
    { name: 'Smart TV 43\" Samsung', value: 1200, available: false, image: 'https://images.unsplash.com/photo-1646861039459-fd9e3aabf3fb?w=300&h=300&fit=crop' },
    { name: 'Almofadas Decorativas (jogo 4)', value: 80, available: true, image: 'https://images.unsplash.com/photo-1633439446662-68e86adc2a6c?w=300&h=300&fit=crop' },
    { name: 'Cortina Blackout Sala', value: 120, available: true, image: 'https://images.unsplash.com/photo-1539208175673-6b9149754096?w=300&h=300&fit=crop' },
    { name: 'Tapete Persa 200x300cm', value: 300, available: true, image: 'https://images.unsplash.com/photo-1660394585016-508f949df960?w=300&h=300&fit=crop' },
    { name: 'Quadro Arte Moldura Vidro', value: 150, available: true, image: 'https://images.unsplash.com/photo-1552832036-5ce6f9568f9f?w=300&h=300&fit=crop' },
    { name: 'Prateleiras Flutuantes (3)', value: 100, available: true, image: 'https://images.unsplash.com/photo-1624993116516-21c8416a0052?w=300&h=300&fit=crop' },
    { name: 'Máquina de Lavar 11kg', value: 1800, available: true, image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=300&h=300&fit=crop' },
    { name: 'Geladeira Frost Free 475L', value: 2000, available: true, image: 'https://images.unsplash.com/photo-1536353284924-9220c464e262?w=300&h=300&fit=crop' },
    { name: 'Espelho Veneziano Decorativo', value: 90, available: true, image: 'https://images.unsplash.com/photo-1656797590428-653803a957fd?w=300&h=300&fit=crop' },
    { name: 'Cabideiro Parede Design', value: 50, available: true, image: 'https://images.unsplash.com/photo-1532185825713-1e3ecd119b8f?w=300&h=300&fit=crop' },
];

// Carregar estado do localStorage
function loadGiftsState() {
    const saved = localStorage.getItem('chosenGifts');
    if (saved) {
        const chosen = JSON.parse(saved);
        gifts.forEach(gift => {
            if (chosen.includes(gift.name)) {
                gift.available = false;
            }
        });
    }
}

// Salvar estado no localStorage
function saveGiftsState() {
    const chosen = gifts.filter(gift => !gift.available).map(gift => gift.name);
    localStorage.setItem('chosenGifts', JSON.stringify(chosen));
}

// Renderizar lista de presentes
function renderGifts() {
    const list = document.getElementById('gifts-list');
    list.innerHTML = '';
    gifts.forEach(gift => {
        const item = document.createElement('div');
        item.className = `gift-item ${gift.available ? '' : 'unavailable'}`;
        item.innerHTML = `
            <div class="gift-image-container">
                <img src="${gift.image}" alt="${gift.name}" class="gift-image">
            </div>
            <h4>${gift.name}</h4>
            <p>R$ ${gift.value.toLocaleString('pt-BR')}</p>
        `;
        if (gift.available) {
            item.addEventListener('click', () => openModal(gift));
        }
        list.appendChild(item);
    });
}

// Abrir modal de pagamento
function openModal(gift) {
    document.getElementById('selected-gift').textContent = gift.name;
    document.getElementById('selected-value').textContent = gift.value;
    document.getElementById('payment-modal').style.display = 'block';
}

// Fechar modal
function closeModal() {
    document.getElementById('payment-modal').style.display = 'none';
    // Resetar para o estado inicial do modal
    document.getElementById('modal-form').style.display = 'block';
    document.getElementById('modal-success').style.display = 'none';
}

// Confirmar pagamento
function confirmPayment() {
    const name = document.getElementById('selected-gift').textContent;
    const gift = gifts.find(g => g.name === name);
    if (gift) {
        gift.available = false;
        saveGiftsState();
        renderGifts();
    }
    // Mostrar tela de sucesso
    document.getElementById('modal-form').style.display = 'none';
    document.getElementById('modal-success').style.display = 'block';
}

// Cancelar pagamento
function cancelPayment() {
    closeModal();
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    loadGiftsState();
    renderGifts();
    
    document.querySelector('.close').addEventListener('click', closeModal);
    document.getElementById('confirm-payment').addEventListener('click', confirmPayment);
    document.getElementById('cancel-payment').addEventListener('click', cancelPayment);
    document.getElementById('close-success').addEventListener('click', closeModal);
    
    // Fechar modal clicando fora
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('payment-modal');
        if (event.target === modal) {
            closeModal();
        }
    });
});