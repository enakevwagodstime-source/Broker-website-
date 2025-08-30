// Open & close modals
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const withdrawBtn = document.getElementById('withdrawBtn');

const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const withdrawPage = document.getElementById('withdrawPage');
const bankTransferPage = document.getElementById('bankTransferPage');

const closeLogin = document.getElementById('closeLogin');
const closeRegister = document.getElementById('closeRegister');
const closeWithdraw = document.getElementById('closeWithdraw');
const closeBankTransfer = document.getElementById('closeBankTransfer');

// Show/hide
loginBtn.onclick = () => loginModal.classList.remove('hidden');
registerBtn.onclick = () => registerModal.classList.remove('hidden');
withdrawBtn.onclick = () => withdrawPage.classList.remove('hidden');

closeLogin.onclick = () => loginModal.classList.add('hidden');
closeRegister.onclick = () => registerModal.classList.add('hidden');
closeWithdraw.onclick = () => withdrawPage.classList.add('hidden');
closeBankTransfer.onclick = () => bankTransferPage.classList.add('hidden');

// Withdrawal method handling
document.querySelectorAll('.withdraw-option').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.dataset.method === 'bank') {
      withdrawPage.classList.add('hidden');
      bankTransferPage.classList.remove('hidden');
    } else {
      alert(`Selected withdrawal method: ${btn.innerText}`);
    }
  });
});

// Chatbox toggle
const chatIcon = document.getElementById('chatIcon');
const chatBox = document.getElementById('chatBox');
const closeChat = document.getElementById('closeChat');

chatIcon.onclick = () => chatBox.classList.remove('hidden');
closeChat.onclick = () => chatBox.classList.add('hidden');
