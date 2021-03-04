const goToHome = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const goToCourse = () => {
  window.scrollTo({
    top: document.getElementById('courses').offsetTop,
    behavior: 'smooth',
  });
};

const goToHighlights = () => {
  window.scrollTo({
    top: document.getElementById('highlights').offsetTop,
    behavior: 'smooth',
  });
};

const goToContact = () => {
  window.scrollTo({
    top: document.getElementById('contact').offsetTop,
    behavior: 'smooth',
  });
};

const goToWomenEmpowerment = () => {
  window.scrollTo({
    top: document.getElementById('women-empowerment').offsetTop,
    behavior: 'smooth',
  });
};

const goToOnlineFitness = () => {
  window.scrollTo({
    top: document.getElementById('online-fitness').offsetTop,
    behavior: 'smooth',
  });
};
const showPricing = (selectedElement, selectedPricing) => {
  document.querySelectorAll('.pricingTable').forEach((val) => {
    val.classList.add('hidden');
  });
  document.querySelectorAll('.tabs').forEach((val) => {
    val.classList.remove('bg-green-500');
    val.classList.remove('text-white');
  });
  document.getElementById(selectedPricing).classList.remove('hidden');
  document.getElementById(selectedElement).classList.add('bg-green-500');
  document.getElementById(selectedElement).classList.add('text-white');
};

const goToOnlinePricing = () => {
  showPricing('online', 'onlinePricing');
  window.scrollTo({
    top: document.getElementById('online-pricing').offsetTop,
    behavior: 'smooth',
  });
};

const goToWomenEmpowermentPricing = () => {
  showPricing('offline', 'offlinePricing');
  window.scrollTo({
    top: document.getElementById('online-pricing').offsetTop,
    behavior: 'smooth',
  });
};
