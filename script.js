'use strict';

// Esta versión carga el validador de teléfonos por internet.
const MaderaPhone = {
  parse(input, country) {
    return window.libphonenumber.parsePhoneNumberFromString(input, {
      defaultCountry: country,
      extract: false
    });
  },

  countries: [
    { iso: 'AG', name: 'Antigua y Barbuda', flag: '🇦🇬', dial: '1', example: '2684641234' },
    { iso: 'AR', name: 'Argentina', flag: '🇦🇷', dial: '54', example: '91123456789' },
    { iso: 'BS', name: 'Bahamas', flag: '🇧🇸', dial: '1', example: '2423591234' },
    { iso: 'BB', name: 'Barbados', flag: '🇧🇧', dial: '1', example: '2462501234' },
    { iso: 'BZ', name: 'Belice', flag: '🇧🇿', dial: '501', example: '6221234' },
    { iso: 'BO', name: 'Bolivia', flag: '🇧🇴', dial: '591', example: '71234567' },
    { iso: 'BR', name: 'Brasil', flag: '🇧🇷', dial: '55', example: '11961234567' },
    { iso: 'CA', name: 'Canadá', flag: '🇨🇦', dial: '1', example: '5062345678' },
    { iso: 'CL', name: 'Chile', flag: '🇨🇱', dial: '56', example: '221234567' },
    { iso: 'CO', name: 'Colombia', flag: '🇨🇴', dial: '57', example: '3211234567' },
    { iso: 'CR', name: 'Costa Rica', flag: '🇨🇷', dial: '506', example: '83123456' },
    { iso: 'CU', name: 'Cuba', flag: '🇨🇺', dial: '53', example: '51234567' },
    { iso: 'DM', name: 'Dominica', flag: '🇩🇲', dial: '1', example: '7672251234' },
    { iso: 'DO', name: 'República Dominicana', flag: '🇩🇴', dial: '1', example: '8092345678' },
    { iso: 'EC', name: 'Ecuador', flag: '🇪🇨', dial: '593', example: '991234567' },
    { iso: 'SV', name: 'El Salvador', flag: '🇸🇻', dial: '503', example: '70123456' },
    { iso: 'GD', name: 'Granada', flag: '🇬🇩', dial: '1', example: '4734031234' },
    { iso: 'GT', name: 'Guatemala', flag: '🇬🇹', dial: '502', example: '51234567' },
    { iso: 'GY', name: 'Guyana', flag: '🇬🇾', dial: '592', example: '6091234' },
    { iso: 'HT', name: 'Haití', flag: '🇭🇹', dial: '509', example: '34101234' },
    { iso: 'HN', name: 'Honduras', flag: '🇭🇳', dial: '504', example: '91234567' },
    { iso: 'JM', name: 'Jamaica', flag: '🇯🇲', dial: '1', example: '8762101234' },
    { iso: 'MX', name: 'México', flag: '🇲🇽', dial: '52', example: '2221234567' },
    { iso: 'NI', name: 'Nicaragua', flag: '🇳🇮', dial: '505', example: '81234567' },
    { iso: 'PA', name: 'Panamá', flag: '🇵🇦', dial: '507', example: '61234567' },
    { iso: 'PY', name: 'Paraguay', flag: '🇵🇾', dial: '595', example: '961456789' },
    { iso: 'PE', name: 'Perú', flag: '🇵🇪', dial: '51', example: '912345678' },
    { iso: 'KN', name: 'San Cristóbal y Nieves', flag: '🇰🇳', dial: '1', example: '8697652917' },
    { iso: 'LC', name: 'Santa Lucía', flag: '🇱🇨', dial: '1', example: '7582845678' },
    { iso: 'VC', name: 'San Vicente y las Granadinas', flag: '🇻🇨', dial: '1', example: '7844301234' },
    { iso: 'SR', name: 'Surinam', flag: '🇸🇷', dial: '597', example: '7412345' },
    { iso: 'TT', name: 'Trinidad y Tobago', flag: '🇹🇹', dial: '1', example: '8682911234' },
    { iso: 'US', name: 'Estados Unidos', flag: '🇺🇸', dial: '1', example: '2015550123' },
    { iso: 'UY', name: 'Uruguay', flag: '🇺🇾', dial: '598', example: '94231234' },
    { iso: 'VE', name: 'Venezuela', flag: '🇻🇪', dial: '58', example: '4121234567' }
  ]
};

const initialFurniture = [
  {
    id: 'f1',
    title: 'Mesa Comedor Estilo Industrial 6 Sillas',
    carpenter: 'Taller Madera Fuerte',
    category: 'Mesas',
    price: '420.00',
    currency: '$',
    phone: '51987654321',
    location: 'Miraflores, Lima',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80',
    description: 'Mesa maciza en madera de pino oregon tratado con patas de fierro electrostático negro.'
  },
  {
    id: 'f2',
    title: 'Clóset / Armario de 4 Puertas en Roble',
    carpenter: 'Ebanistería San José',
    category: 'Armarios',
    price: '2,400.00',
    currency: 'S/',
    phone: '51912345678',
    location: 'Surco, Lima',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80',
    description: 'Amplio clóset moderno con divisiones ajustables, cajones con correderas telescópicas.'
  },
  {
    id: 'f3',
    title: 'Repostero de Cocina Integral a Medida',
    carpenter: 'Cocinas & Diseños Madera',
    category: 'Cocinas',
    price: 'A consultar',
    currency: '',
    phone: '51955512345',
    location: 'San Borja, Lima',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    description: 'Fabricación completa de muebles altos y bajos para cocina en melamina pesada.'
  },
  {
    id: 'f4',
    title: 'Restauración de Muebles Antiguos y Tallados',
    carpenter: 'Restauraciones El Maestro',
    category: 'Restauracion',
    price: 'Presupuesto gratis',
    currency: '',
    phone: '51944498765',
    location: 'Centro Histórico',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80',
    description: 'Servicio técnico especializado en recuperar la vida de sillas, roperos y mesas antiguas.'
  }
];

// MaderaCraft v2. Perfiles y datos locales; no utiliza un servidor.

const $ = id => document.getElementById(id);

const icon = name =>
  `<svg aria-hidden="true"><use href="#i-${name}"/></svg>`;

const escapeHTML = value =>
  String(value ?? '').replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[character]));

const normalizeText = value =>
  String(value ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();

const categoryData = [
  { id: 'all', name: 'Todos', icon: 'grid' },
  { id: 'Mesas', name: 'Mesas y comedores', icon: 'table' },
  { id: 'Armarios', name: 'Armarios y clósets', icon: 'wardrobe' },
  { id: 'Cocinas', name: 'Cocinas', icon: 'kitchen' },
  { id: 'A medida', name: 'A medida', icon: 'ruler' },
  { id: 'Restauracion', name: 'Restauración', icon: 'restore' }
];

const categories = categoryData.slice(1).map(category => category.id);

const currencies = [
  ['S/', 'Soles · PEN'],
  ['$', 'Dólares · USD'],
  ['€', 'Euros · EUR'],
  ['ARS', 'Pesos argentinos · ARS'],
  ['BOB', 'Bolivianos · BOB'],
  ['BRL', 'Reales · BRL'],
  ['CAD', 'Dólares canadienses · CAD'],
  ['CLP', 'Pesos chilenos · CLP'],
  ['COP', 'Pesos colombianos · COP'],
  ['CRC', 'Colones · CRC'],
  ['CUP', 'Pesos cubanos · CUP'],
  ['DOP', 'Pesos dominicanos · DOP'],
  ['GTQ', 'Quetzales · GTQ'],
  ['HNL', 'Lempiras · HNL'],
  ['MXN', 'Pesos mexicanos · MXN'],
  ['NIO', 'Córdobas · NIO'],
  ['PYG', 'Guaraníes · PYG'],
  ['UYU', 'Pesos uruguayos · UYU'],
  ['VES', 'Bolívares · VES']
];

const statusNames = {
  pending: 'Pendiente',
  accepted: 'Aceptado',
  progress: 'En elaboración',
  completed: 'Completado',
  rejected: 'Rechazado',
  cancelled: 'Cancelado'
};

const transitions = {
  pending: ['accepted', 'rejected', 'cancelled'],
  accepted: ['progress'],
  progress: ['completed'],
  completed: [],
  rejected: [],
  cancelled: []
};

let furnitureList = [];
let orders = [];
let userProfile = null;
let currentView = 'catalog';
let selectedRole = 'client';
let selectedCategory = 'all';
let editingId = null;
let referenceImage = '';
let imageEpoch = 0;
let imageBusy = false;
let noticeTimer;
let confirmCallback = null;
let storageAvailable = true;

const temporaryStore = new Map();

// Almacenamiento

function readStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    storageAvailable = false;
    return temporaryStore.get(key) ?? null;
  }
}

function parseStored(key, fallback) {
  try {
    return JSON.parse(readStorage(key) ?? 'null') ?? fallback;
  } catch {
    return fallback;
  }
}

function storeValue(key, value) {
  const serialized = JSON.stringify(value);

  try {
    localStorage.setItem(key, serialized);
    temporaryStore.set(key, serialized);
    return 'saved';
  } catch (error) {
    if (storageAvailable && error.name === 'QuotaExceededError') {
      return 'full';
    }

    storageAvailable = false;
    temporaryStore.set(key, serialized);
    return 'temporary';
  }
}

function removeStorage(key) {
  temporaryStore.delete(key);

  try {
    localStorage.removeItem(key);
  } catch {
    storageAvailable = false;
  }
}

// Validación y utilidades

function safeImage(value, allowData = false) {
  const source = String(value ?? '');

  if (
    allowData &&
    /^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(source) &&
    source.length < 3000000
  ) {
    return source;
  }

  try {
    const url = new URL(source);
    return ['https:', 'http:'].includes(url.protocol) ? url.href : '';
  } catch {
    return '';
  }
}

function countryBy(iso) {
  return MaderaPhone.countries.find(country => country.iso === iso);
}

function phoneInfo(value, country, legacy = false) {
  if (country && !countryBy(country)) return null;

  let input = String(value ?? '').trim();

  if (!/^[+\d\s().-]+$/.test(input)) return null;

  if (input.startsWith('00')) {
    input = '+' + input.slice(2);
  }

  if (legacy && !input.startsWith('+')) {
    input = '+' + input;
  }

  try {
    const parsed = MaderaPhone.parse(input, country);

    if (
      !parsed ||
      parsed.ext ||
      !parsed.isValid() ||
      !countryBy(parsed.country) ||
      (country && parsed.country !== country)
    ) {
      return null;
    }

    return {
      phone: parsed.number.slice(1),
      country: parsed.country,
      national: parsed.nationalNumber,
      formatted: parsed.formatInternational()
    };
  } catch {
    return null;
  }
}

function keyFor(role, phone) {
  return role + ':' + phone;
}

function ownKey() {
  return userProfile
    ? keyFor(userProfile.role, userProfile.phone)
    : null;
}

function canPublish() {
  return userProfile?.role === 'carpenter';
}

function isClient() {
  return userProfile?.role === 'client';
}

function text(value, max = 2000) {
  return String(value ?? '').trim().slice(0, max);
}

function normalizedProfile(raw) {
  if (!raw || !['client', 'carpenter'].includes(raw.role)) return null;

  const phone = phoneInfo(raw.phone, raw.country, true);
  if (!phone) return null;

  if (raw.role === 'client') {
    const name = text(raw.name, 120);

    return name
      ? {
          role: 'client',
          name,
          phone: phone.phone,
          country: phone.country
        }
      : null;
  }

  const location = text(raw.location, 180);
  const desc = text(raw.desc);

  return location && desc
    ? {
        role: 'carpenter',
        workshop: text(raw.workshop, 120) || 'Carpintero Independiente',
        phone: phone.phone,
        country: phone.country,
        location,
        desc
      }
    : null;
}

function normalizedFurniture(raw, index) {
  if (!raw || !categories.includes(raw.category)) return null;

  const phone = phoneInfo(raw.phone, null, true);
  const title = text(raw.title, 120);
  const carpenter = text(raw.carpenter, 120);

  if (!phone || !title || !carpenter) return null;

  const id = text(raw.id, 120) || 'legacy_' + index;
  const ownerKey = keyFor('carpenter', phone.phone);

  return {
    id,
    title,
    carpenter,
    phone: phone.phone,
    country: phone.country,
    ownerKey:
      raw.ownerKey === ownerKey
        ? ownerKey
        : id.startsWith('f_')
          ? ownerKey
          : 'demo',
    category: raw.category,
    price: text(raw.price, 80) || 'A consultar',
    currency: currencies.some(currency => currency[0] === raw.currency)
      ? raw.currency
      : '',
    location: text(raw.location, 180),
    image: safeImage(raw.image),
    description: text(raw.description),
    createdAt: typeof raw.createdAt === 'string' ? raw.createdAt : null
  };
}

function normalizedOrder(raw) {
  if (
    !raw ||
    typeof raw !== 'object' ||
    !statusNames[raw.status] ||
    !categories.includes(raw.category)
  ) {
    return null;
  }

  const client = phoneInfo(raw.clientPhone, null, true);
  const target = phoneInfo(raw.targetPhone, null, true);

  if (
    !client ||
    !target ||
    !text(raw.id, 120) ||
    !text(raw.title, 120) ||
    !Number.isFinite(raw.budget) ||
    raw.budget <= 0
  ) {
    return null;
  }

  return {
    id: text(raw.id, 120),
    ownerKey: keyFor('client', client.phone),
    targetKey: keyFor('carpenter', target.phone),
    clientName: text(raw.clientName, 120),
    clientPhone: client.phone,
    targetName: text(raw.targetName, 120),
    targetPhone: target.phone,
    title: text(raw.title, 120),
    category: raw.category,
    description: text(raw.description),
    location: text(raw.location, 180),
    budget: raw.budget,
    currency: currencies.some(currency => currency[0] === raw.currency)
      ? raw.currency
      : '$',
    image: safeImage(raw.image, true),
    status: raw.status,
    createdAt: text(raw.createdAt, 40),
    updatedAt: text(raw.updatedAt, 40)
  };
}

function loadData() {
  const saved = parseStored('mc_furniture', initialFurniture);

  furnitureList = (Array.isArray(saved) ? saved : initialFurniture)
    .map(normalizedFurniture)
    .filter(Boolean);

  const storedOrders = parseStored('mc_orders', []);

  orders = (Array.isArray(storedOrders) ? storedOrders : [])
    .map(normalizedOrder)
    .filter(Boolean);

  userProfile = normalizedProfile(
    parseStored('mc_user_profile', null)
  );
}

// Mensajes y ventanas

function showNotice(message) {
  clearTimeout(noticeTimer);
  $('notice').textContent = message;
  $('notice').hidden = false;

  noticeTimer = setTimeout(() => {
    $('notice').hidden = true;
  }, 6000);
}

function setError(id, message, field) {
  $(id).textContent = message;
  $(id).hidden = false;

  if (field) {
    $(field).setAttribute('aria-invalid', 'true');
    $(field).focus();
  }
}

function clearError(id) {
  $(id).textContent = '';
  $(id).hidden = true;
}

function openDialog(id) {
  const dialog = $(id);
  if (dialog.open) return;

  if (typeof dialog.showModal === 'function') {
    dialog.showModal();
  } else {
    dialog.setAttribute('open', '');
  }

  document.body.classList.add('dialog-open');
}

function closeDialog(id) {
  const dialog = $(id);

  if (typeof dialog.close === 'function') {
    dialog.close();
  } else {
    dialog.removeAttribute('open');
  }

  if (!document.querySelector('dialog[open]')) {
    document.body.classList.remove('dialog-open');
  }
}

function confirmAction(title, description, label, callback) {
  confirmCallback = callback;
  $('confirmTitle').textContent = title;
  $('confirmDescription').textContent = description;
  $('confirmAccept').textContent = label;

  openDialog('confirmDialog');
  $('confirmCancel').focus();
}

// Navegación y perfiles

function allowedViews() {
  return canPublish()
    ? ['catalog', 'mine', 'publish', 'received']
    : isClient()
      ? ['catalog', 'order']
      : ['catalog'];
}

function renderNav() {
  const labels = {
    catalog: ['Ver publicaciones', 'grid'],
    mine: ['Mis publicaciones', 'folder'],
    publish: ['Publicar trabajo', 'plus'],
    order: ['Hacer pedido', 'ruler'],
    received: ['Pedidos recibidos', 'order']
  };

  $('mainNav').replaceChildren();

  for (const view of allowedViews()) {
    const button = document.createElement('button');

    button.type = 'button';
    button.dataset.view = view;
    button.innerHTML =
      icon(labels[view][1]) + escapeHTML(labels[view][0]);

    if (view === currentView) {
      button.setAttribute('aria-current', 'page');
    }

    button.addEventListener('click', () => {
      if (view === 'publish') resetPublish();
      switchView(view);
    });

    $('mainNav').append(button);
  }
}

function updateAccount() {
  $('userBadge').hidden = !userProfile;

  if (userProfile) {
    const name = canPublish()
      ? userProfile.workshop
      : userProfile.name;

    $('badgeName').textContent = name;
    $('badgeRole').textContent = canPublish() ? 'Carpintero' : 'Cliente';
    $('avatar').textContent = name.slice(0, 2).toUpperCase();
  }

  $('authLabel').textContent = userProfile ? 'Cerrar sesión' : 'Ingresar';

  $('authButton')
    .querySelector('use')
    .setAttribute('href', userProfile ? '#i-logout' : '#i-user');

  $('heroAction').innerHTML =
    (canPublish() ? 'Mostrar mi trabajo' : 'Crear mi pedido') +
    icon('arrow');

  $('publishForm')
    .querySelectorAll('input,select,textarea,button')
    .forEach(element => {
      element.disabled = !canPublish();
    });

  $('orderForm')
    .querySelectorAll('input,select,textarea,button')
    .forEach(element => {
      element.disabled = !isClient();
    });

  renderNav();
}

function switchView(view) {
  if (!allowedViews().includes(view)) {
    showNotice('Esta sección no está disponible para tu perfil.');
    return false;
  }

  if (currentView === 'publish' && view !== 'publish' && editingId) {
    resetPublish();
  }

  currentView = view;

  document.querySelectorAll('.view').forEach(section => {
    section.hidden = section.id !== 'view-' + view;
  });

  renderNav();

  if (view === 'catalog') renderCatalog();
  if (view === 'mine') renderMine();
  if (view === 'publish') updateWorkshopInfo();

  if (view === 'order') {
    renderWorkshopOptions();
    renderOrders();
  }

  if (view === 'received') renderOrders();

  window.scrollTo({ top: 0, behavior: 'instant' });
  return true;
}

function selectRole(role) {
  if (!['client', 'carpenter'].includes(role)) return;

  selectedRole = role;

  for (const currentRole of ['client', 'carpenter']) {
    const field = $(
      currentRole === 'client' ? 'clientFields' : 'carpenterFields'
    );

    field.hidden = currentRole !== role;
    field.disabled = currentRole !== role;

    document
      .querySelector(`[data-role="${currentRole}"]`)
      .setAttribute('aria-pressed', String(currentRole === role));
  }

  clearError('authError');
}

function updatePhoneHint() {
  const country = countryBy($('phoneCountry').value);

  $('dialPrefix').textContent = '+' + country.dial;
  $('profilePhone').placeholder = country.example || 'Tu número nacional';

  $('phoneHint').textContent =
    `Número nacional de ${country.name}, sin repetir +${country.dial}. ` +
    'También puedes pegar el número completo con +.';
}

function openAuth(role = 'client') {
  selectRole(role);
  clearError('authError');
  openDialog('authDialog');
}

function saveProfile(event) {
  event.preventDefault();
  clearError('authError');

  const required = selectedRole === 'client'
    ? ['clientName', 'profilePhone']
    : ['workshopLocation', 'workshopDescription', 'profilePhone'];

  for (const id of required) {
    if (!$(id).value.trim()) {
      return setError(
        'authError',
        'Completa los campos obligatorios.',
        id
      );
    }
  }

  const phone = phoneInfo(
    $('profilePhone').value,
    $('phoneCountry').value
  );

  if (!phone) {
    return setError(
      'authError',
      'Revisa el número y el país elegido. Escribe el número nacional o el internacional con +.',
      'profilePhone'
    );
  }

  if (!$('authForm').checkValidity()) {
    $('authForm').reportValidity();
    return;
  }

  const profile = selectedRole === 'client'
    ? {
        role: 'client',
        name: text($('clientName').value, 120),
        phone: phone.phone,
        country: phone.country
      }
    : {
        role: 'carpenter',
        workshop:
          text($('workshopName').value, 120) ||
          'Carpintero Independiente',
        phone: phone.phone,
        country: phone.country,
        location: text($('workshopLocation').value, 180),
        desc: text($('workshopDescription').value)
      };

  const saved = storeValue('mc_user_profile', profile);

  if (saved === 'full') {
    return setError(
      'authError',
      'No hay espacio para guardar el perfil. Libera espacio del navegador y vuelve a intentar.'
    );
  }

  userProfile = profile;

  resetPublish();
  resetOrder();
  updateAccount();
  switchView('catalog');
  closeDialog('authDialog');

  showNotice(
    saved === 'temporary'
      ? 'Ingresaste. El perfil solo durará mientras esta página esté abierta.'
      : `Ingresaste como ${selectedRole === 'client' ? 'cliente' : 'carpintero'}.`
  );
}

function logout() {
  userProfile = null;
  removeStorage('mc_user_profile');

  resetPublish();
  resetOrder();

  $('authForm').reset();
  $('phoneCountry').value = 'PE';

  updatePhoneHint();
  selectRole('client');
  updateAccount();
  switchView('catalog');
  openAuth();
}

// Catálogo

function formatPrice(item) {
  const price = String(item.price ?? 'A consultar');

  return /^(S\/|\$|€|[A-Z]{3}\s)/.test(price) || !/[0-9]/.test(price)
    ? price
    : (item.currency ? item.currency + ' ' : '') + price;
}

function categoryName(id) {
  return categoryData.find(category => category.id === id)?.name || id;
}

function money(amount, currency) {
  return `${currency} ${Number(amount).toLocaleString('es-PE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}

function dateText(value) {
  const date = new Date(value);

  return Number.isNaN(date.getTime())
    ? 'Fecha no disponible'
    : date.toLocaleDateString('es-PE', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
}

function addImage(parent, url, alt) {
  if (!url) return;

  const image = document.createElement('img');
  image.src = url;
  image.alt = alt;
  image.loading = 'lazy';
  image.referrerPolicy = 'no-referrer';

  image.addEventListener('error', () => image.remove(), { once: true });
  parent.prepend(image);
}

function renderCategoryTiles() {
  $('categoryTiles').innerHTML = categoryData.map(category => {
    const count = category.id === 'all'
      ? furnitureList.length
      : furnitureList.filter(post => post.category === category.id).length;

    return `
      <button
        class="category-tile"
        data-category="${escapeHTML(category.id)}"
        aria-pressed="${selectedCategory === category.id}"
      >
        <span class="cat-icon">${icon(category.icon)}</span>
        <strong>${escapeHTML(category.name)}</strong>
        <small>${count} ${count === 1 ? 'publicación' : 'publicaciones'}</small>
      </button>
    `;
  }).join('');
}

function makeButton(label, className, handler) {
  const button = document.createElement('button');

  button.type = 'button';
  button.className = className;
  button.innerHTML = label;
  button.addEventListener('click', handler);

  return button;
}

function makePostCard(item, manage = false) {
  const own = canPublish() && item.ownerKey === ownKey();
  const card = document.createElement('article');

  card.className = 'work-card';
  card.dataset.postId = item.id;

  card.innerHTML = `
    <div class="work-image">
      <span class="image-placeholder">${icon('table')}</span>
      <span class="work-tag">
        ${escapeHTML(categoryName(item.category))}
      </span>
    </div>

    <div class="work-content">
      <p class="work-shop">
        ${icon('hammer')}
        ${escapeHTML(item.carpenter)}
        ${own ? '<span class="own-badge">Tu publicación</span>' : ''}
      </p>
      <h3>${escapeHTML(item.title)}</h3>
      <p class="work-description">${escapeHTML(item.description)}</p>
      <p class="work-location">
        ${icon('pin')}${escapeHTML(item.location)}
      </p>
    </div>

    <div class="work-bottom">
      <span class="work-price">
        <small>Precio / presupuesto</small>
        ${escapeHTML(formatPrice(item))}
      </span>
    </div>
  `;

  addImage(card.querySelector('.work-image'), item.image, item.title);

  const actions = document.createElement('div');
  actions.className = 'work-actions';

  if (manage && own) {
    actions.append(
      makeButton(
        icon('edit') + ' Editar',
        'button secondary small',
        () => editPost(item.id)
      ),
      makeButton(
        icon('trash') + ' Eliminar',
        'button secondary small',
        () => requestDelete(item.id)
      )
    );
  } else if (isClient()) {
    actions.append(
      makeButton(
        'Pedir a este taller ' + icon('arrow'),
        'button primary small',
        () => startOrderFor(item.phone)
      ),
      makeButton(
        icon('phone') + ' Contactar',
        'button secondary small',
        () => contactWorkshop(item)
      )
    );
  } else if (!userProfile) {
    actions.append(
      makeButton(
        'Hacer un pedido',
        'button secondary small',
        () => openAuth('client')
      )
    );
  }

  if (actions.children.length) card.append(actions);

  return card;
}

function renderCatalog() {
  renderCategoryTiles();

  const query = normalizeText($('searchInput').value);

  let result = furnitureList.filter(post =>
    (selectedCategory === 'all' || post.category === selectedCategory) &&
    normalizeText(
      [post.title, post.description, post.carpenter, post.location].join(' ')
    ).includes(query)
  );

  if ($('sortSelect').value === 'title') {
    result = [...result].sort((a, b) => a.title.localeCompare(b.title, 'es'));
  }

  $('catalogGrid').replaceChildren(
    ...result.map(post => makePostCard(post))
  );

  $('catalogEmpty').hidden = result.length > 0;
  $('catalogCount').textContent = `${furnitureList.length} trabajos para explorar`;

  $('resultsTitle').textContent =
    `${selectedCategory === 'all'
      ? 'Todas las publicaciones'
      : categoryName(selectedCategory)} · ${result.length}`;

  $('clearFilters').hidden = selectedCategory === 'all' && !query;
}

function clearFilters() {
  selectedCategory = 'all';
  $('searchInput').value = '';
  $('sortSelect').value = 'recent';
  renderCatalog();
}

// Publicaciones propias

function renderMine() {
  if (!canPublish()) return;

  const mine = furnitureList.filter(post => post.ownerKey === ownKey());

  $('myGrid').replaceChildren(
    ...mine.map(post => makePostCard(post, true))
  );

  $('myEmpty').hidden = mine.length > 0;

  const pending = orders.filter(order =>
    order.targetKey === ownKey() && order.status === 'pending'
  ).length;

  $('myStats').innerHTML = `
    <div class="stat-item">
      <strong>${mine.length}</strong>
      <span>Publicaciones de tu taller</span>
    </div>
    <div class="stat-item">
      <strong>${pending}</strong>
      <span>Pedidos pendientes</span>
    </div>
  `;
}

function resetPublish() {
  editingId = null;
  $('publishForm').reset();

  clearError('publishError');

  $('publishHeading').textContent = 'Publicar trabajo';
  $('publishSubmit').textContent = 'Publicar trabajo';
  $('pubCurrency').value = 'S/';
  $('postPreview').replaceChildren();
  $('postPreview').hidden = true;

  if (canPublish()) {
    $('pubLocation').value = userProfile.location;
  }
}

function updateWorkshopInfo() {
  if (!canPublish()) return;

  $('profileWorkshop').textContent = userProfile.workshop;
  $('profileLocation').textContent = userProfile.location;

  $('workshopPhoneLabel').textContent =
    phoneInfo(userProfile.phone, null, true)?.formatted ||
    '+' + userProfile.phone;

  if (!editingId && !$('pubLocation').value) {
    $('pubLocation').value = userProfile.location;
  }
}

function editPost(id) {
  const post = furnitureList.find(item =>
    item.id === id && item.ownerKey === ownKey()
  );

  if (!canPublish() || !post) return;

  resetPublish();
  editingId = id;

  $('publishHeading').textContent = 'Editar publicación';
  $('publishSubmit').textContent = 'Guardar cambios';

  const fields = {
    pubTitle: 'title',
    pubCategory: 'category',
    pubLocation: 'location',
    pubDesc: 'description',
    pubPrice: 'price',
    pubCurrency: 'currency',
    pubImageURL: 'image'
  };

  for (const [input, key] of Object.entries(fields)) {
    $(input).value = post[key] || 'S/';
  }

  updatePostPreview();
  switchView('publish');
}

function requestDelete(id) {
  const post = furnitureList.find(item =>
    item.id === id && item.ownerKey === ownKey()
  );

  if (!canPublish() || !post) return;

  confirmAction(
    '¿Eliminar publicación?',
    `«${post.title}» se retirará del catálogo. Los pedidos existentes se conservarán.`,
    'Eliminar',
    () => {
      const candidate = furnitureList.find(item =>
        item.id === id && item.ownerKey === ownKey()
      );

      if (!canPublish() || !candidate) return;

      const updated = furnitureList.filter(item => item !== candidate);
      const saved = storeValue('mc_furniture', updated);

      if (saved === 'full') {
        showNotice('No se pudo guardar el cambio. Inténtalo de nuevo.');
        return;
      }

      furnitureList = updated;
      renderMine();
      renderCatalog();

      showNotice(
        'Publicación eliminada' +
        (saved === 'temporary' ? ' solo en esta sesión.' : '.')
      );
    }
  );
}

function updatePostPreview() {
  const url = safeImage($('pubImageURL').value);

  $('postPreview').replaceChildren();
  $('postPreview').hidden = !url;

  if (url) {
    addImage($('postPreview'), url, 'Vista previa de la publicación');
  }
}

function handlePublish(event) {
  event.preventDefault();
  if (!canPublish()) return;

  clearError('publishError');

  for (const id of [
    'pubTitle',
    'pubLocation',
    'pubDesc',
    'pubPrice',
    'pubImageURL'
  ]) {
    if (!$(id).value.trim()) {
      return setError(
        'publishError',
        'Completa los campos obligatorios.',
        id
      );
    }
  }

  if (!$('publishForm').checkValidity()) {
    $('publishForm').reportValidity();
    return;
  }

  const image = safeImage($('pubImageURL').value);

  if (!image) {
    return setError(
      'publishError',
      'Usa una dirección http o https de una imagen.',
      'pubImageURL'
    );
  }

  if (!categories.includes($('pubCategory').value)) {
    return setError(
      'publishError',
      'Selecciona una categoría válida.',
      'pubCategory'
    );
  }

  const price = text($('pubPrice').value, 80);

  if (/^-\s*\d/.test(price)) {
    return setError(
      'publishError',
      'El precio no puede ser negativo.',
      'pubPrice'
    );
  }

  const original = editingId
    ? furnitureList.find(post =>
        post.id === editingId && post.ownerKey === ownKey()
      )
    : null;

  if (editingId && !original) {
    return setError(
      'publishError',
      'Esta publicación no pertenece a tu perfil.'
    );
  }

  const post = {
    id: original?.id || 'f_' + newId(),
    ownerKey: ownKey(),
    carpenter: userProfile.workshop,
    phone: userProfile.phone,
    country: userProfile.country,
    title: text($('pubTitle').value, 120),
    category: $('pubCategory').value,
    location: text($('pubLocation').value, 180),
    description: text($('pubDesc').value),
    price,
    currency: /\d/.test(price) ? $('pubCurrency').value : '',
    image,
    createdAt: original?.createdAt || new Date().toISOString()
  };

  const updated = original
    ? furnitureList.map(item => item === original ? post : item)
    : [post, ...furnitureList];

  const saved = storeValue('mc_furniture', updated);

  if (saved === 'full') {
    return setError(
      'publishError',
      'No hay espacio para guardar. El formulario conserva tus datos.'
    );
  }

  furnitureList = updated;
  const wasEdit = Boolean(editingId);

  resetPublish();
  clearFilters();
  switchView('mine');

  showNotice(
    (wasEdit ? 'Cambios guardados.' : 'Trabajo publicado.') +
    (saved === 'temporary'
      ? ' Solo se conservará durante esta sesión.'
      : '')
  );
}

function newId() {
  return globalThis.crypto?.randomUUID?.() ||
    Date.now().toString(36) + '_' + Math.random().toString(36).slice(2);
}

// Pedidos

function workshops() {
  const map = new Map();

  for (const post of furnitureList) {
    if (!map.has(post.phone)) {
      map.set(post.phone, {
        phone: post.phone,
        name: post.carpenter,
        location: post.location
      });
    }
  }

  return Array.from(map.values())
    .sort((a, b) => a.name.localeCompare(b.name, 'es'));
}

function renderWorkshopOptions() {
  const previous = $('orderWorkshop').value;

  $('orderWorkshop').replaceChildren(
    new Option('Elige un taller…', '')
  );

  for (const workshop of workshops()) {
    $('orderWorkshop').add(
      new Option(
        `${workshop.name} · ${workshop.location}`,
        workshop.phone
      )
    );
  }

  if (workshops().some(workshop => workshop.phone === previous)) {
    $('orderWorkshop').value = previous;
  }
}

function startOrderFor(phone) {
  if (!isClient()) {
    openAuth('client');
    return;
  }

  switchView('order');
  $('orderWorkshop').value = phone;
  $('orderTitle').focus();
}

function resetOrder() {
  imageEpoch++;
  imageBusy = false;
  referenceImage = '';

  $('orderForm').reset();
  $('orderCurrency').value = 'S/';
  $('orderImagePreview').replaceChildren();
  $('orderImagePreview').hidden = true;
  $('removeReference').hidden = true;
  $('orderSubmit').disabled = !isClient();

  clearError('orderError');
}

function updateReferencePreview() {
  const source = referenceImage || safeImage($('orderImageURL').value);

  $('orderImagePreview').replaceChildren();
  $('orderImagePreview').hidden = !source;
  $('removeReference').hidden = !source;

  if (source) {
    addImage(
      $('orderImagePreview'),
      source,
      'Imagen referencial del mueble solicitado'
    );
  }
}

async function selectReference() {
  const epoch = ++imageEpoch;
  const file = $('orderImageFile').files[0];

  referenceImage = '';
  imageBusy = false;
  $('orderSubmit').disabled = !isClient();
  updateReferencePreview();

  if (!file) {
    imageBusy = false;
    $('orderSubmit').disabled = !isClient();
    updateReferencePreview();
    return;
  }

  if (
    !['image/jpeg', 'image/png', 'image/webp'].includes(file.type) ||
    file.size > 2 * 1024 * 1024
  ) {
    $('orderImageFile').value = '';

    setError(
      'orderError',
      'Elige una imagen JPG, PNG o WebP de hasta 2 MB.',
      'orderImageFile'
    );

    updateReferencePreview();
    return;
  }

  imageBusy = true;
  $('orderSubmit').disabled = true;

  try {
    const data = await new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

    const image = await new Promise((resolve, reject) => {
      const loadedImage = new Image();

      loadedImage.onload = () => resolve(loadedImage);
      loadedImage.onerror = reject;
      loadedImage.src = data;
    });

    if (epoch !== imageEpoch) return;

    const scale = Math.min(1, 1200 / Math.max(image.width, image.height));
    const canvas = document.createElement('canvas');

    canvas.width = Math.max(1, Math.round(image.width * scale));
    canvas.height = Math.max(1, Math.round(image.height * scale));

    const context = canvas.getContext('2d');
    context.fillStyle = '#fff';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    referenceImage = canvas.toDataURL('image/jpeg', 0.82);

    clearError('orderError');
    updateReferencePreview();
  } catch {
    if (epoch === imageEpoch) {
      $('orderImageFile').value = '';

      setError(
        'orderError',
        'No se pudo leer la imagen. Elige otro archivo.'
      );
    }
  } finally {
    if (epoch === imageEpoch) {
      imageBusy = false;
      $('orderSubmit').disabled = !isClient();
    }
  }
}

function handleOrder(event) {
  event.preventDefault();

  if (!isClient()) return false;

  if (imageBusy) {
    return setError(
      'orderError',
      'Espera a que termine de cargar la imagen.'
    );
  }

  clearError('orderError');

  for (const id of [
    'orderWorkshop',
    'orderTitle',
    'orderLocation',
    'orderDescription',
    'orderBudget'
  ]) {
    if (!$(id).value.trim()) {
      return setError(
        'orderError',
        'Completa los campos obligatorios del pedido.',
        id
      );
    }
  }

  const target = workshops().find(workshop =>
    workshop.phone === $('orderWorkshop').value
  );

  if (!target) {
    return setError(
      'orderError',
      'Selecciona un taller de la lista.',
      'orderWorkshop'
    );
  }

  const budget = Number($('orderBudget').value);

  if (!Number.isFinite(budget) || budget <= 0 || budget > 1e12) {
    return setError(
      'orderError',
      'Escribe un presupuesto mayor que cero y menor que un billón.',
      'orderBudget'
    );
  }

  if (
    !categories.includes($('orderCategory').value) ||
    !currencies.some(currency => currency[0] === $('orderCurrency').value)
  ) {
    return setError('orderError', 'Revisa la categoría y la moneda.');
  }

  if (!$('orderForm').checkValidity()) {
    $('orderForm').reportValidity();
    return false;
  }

  let image = referenceImage;

  if (!image && $('orderImageURL').value.trim()) {
    image = safeImage($('orderImageURL').value);

    if (!image) {
      return setError(
        'orderError',
        'Escribe una dirección http o https válida, o deja la imagen vacía.',
        'orderImageURL'
      );
    }
  }

  const order = {
    id: 'o_' + newId(),
    ownerKey: ownKey(),
    targetKey: keyFor('carpenter', target.phone),
    clientName: userProfile.name,
    clientPhone: userProfile.phone,
    targetName: target.name,
    targetPhone: target.phone,
    title: text($('orderTitle').value, 120),
    category: $('orderCategory').value,
    description: text($('orderDescription').value),
    location: text($('orderLocation').value, 180),
    budget,
    currency: $('orderCurrency').value,
    image,
    status: 'pending',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  const updated = [order, ...orders];
  const saved = storeValue('mc_orders', updated);

  if (saved === 'full') {
    return setError(
      'orderError',
      'No hay espacio para guardar el pedido. Quita la imagen o libera espacio; tus datos siguen en el formulario.'
    );
  }

  orders = updated;

  resetOrder();
  renderOrders();

  showNotice(
    saved === 'temporary'
      ? 'Pedido creado para esta sesión. Se perderá al recargar.'
      : 'Pedido guardado en este navegador. No se ha enviado a otro dispositivo.'
  );

  return true;
}

function changeOrderStatus(id, status) {
  const order = orders.find(item => item.id === id);

  if (!order || !transitions[order.status]?.includes(status)) {
    return false;
  }

  const authorized = status === 'cancelled'
    ? isClient() && order.ownerKey === ownKey()
    : canPublish() && order.targetKey === ownKey();

  if (!authorized) return false;

  const updated = orders.map(item =>
    item === order
      ? { ...item, status, updatedAt: new Date().toISOString() }
      : item
  );

  const saved = storeValue('mc_orders', updated);

  if (saved === 'full') {
    showNotice('No se pudo guardar el estado. Inténtalo de nuevo.');
    return false;
  }

  orders = updated;
  renderOrders();

  showNotice(
    `Estado actualizado: ${statusNames[status]}.` +
    (saved === 'temporary' ? ' Solo durante esta sesión.' : '')
  );

  return true;
}

function makeOrderCard(order, received) {
  const card = document.createElement('article');

  card.className = 'order-card';
  card.dataset.orderId = order.id;

  const counterpart = received
    ? `Cliente: ${order.clientName}`
    : `Taller: ${order.targetName}`;

  card.innerHTML = `
    <div>
      <h3>${escapeHTML(order.title)}</h3>

      <p class="order-subtitle">
        ${escapeHTML(counterpart)} · ${escapeHTML(dateText(order.createdAt))}
      </p>

      <p class="order-description">${escapeHTML(order.description)}</p>

      <div class="order-details">
        <span>
          Presupuesto:
          <strong>${escapeHTML(money(order.budget, order.currency))}</strong>
        </span>
        <span>Entrega: ${escapeHTML(order.location)}</span>
        <span>${escapeHTML(categoryName(order.category))}</span>
      </div>

      <div class="order-controls"></div>
    </div>

    <div class="order-side">
      <span class="status-badge" data-status="${order.status}">
        ${statusNames[order.status]}
      </span>
    </div>
  `;

  if (order.image) {
    addImage(
      card.querySelector('.order-side'),
      order.image,
      'Referencia del pedido ' + order.title
    );
  }

  const controls = card.querySelector('.order-controls');

  if (received) {
    const actions = transitions[order.status]
      .filter(status => status !== 'cancelled');

    const labels = {
      accepted: 'Aceptar pedido',
      rejected: 'Rechazar',
      progress: 'Comenzar elaboración',
      completed: 'Marcar completado'
    };

    for (const status of actions) {
      controls.append(
        makeButton(
          labels[status],
          'button ' + (status === 'rejected' ? 'secondary' : 'primary') + ' small',
          () => {
            if (status === 'rejected') {
              confirmAction(
                '¿Rechazar pedido?',
                order.title,
                'Rechazar',
                () => changeOrderStatus(order.id, status)
              );
            } else {
              changeOrderStatus(order.id, status);
            }
          }
        )
      );
    }

    controls.append(
      makeButton(
        icon('phone') + ' Contactar cliente',
        'button secondary small',
        () => contactOrder(order, true)
      )
    );
  } else {
    if (order.status === 'pending') {
      controls.append(
        makeButton(
          'Cancelar pedido',
          'button secondary small',
          () => confirmAction(
            '¿Cancelar pedido?',
            order.title,
            'Cancelar pedido',
            () => changeOrderStatus(order.id, 'cancelled')
          )
        )
      );
    }

    controls.append(
      makeButton(
        icon('phone') + ' Contactar taller',
        'button secondary small',
        () => contactOrder(order, false)
      )
    );
  }

  return card;
}

function renderOrders() {
  if (isClient()) {
    const mine = orders.filter(order => order.ownerKey === ownKey());

    $('clientOrders').replaceChildren(
      ...mine.map(order => makeOrderCard(order, false))
    );

    $('clientOrdersEmpty').hidden = mine.length > 0;
    $('clientOrdersCount').textContent =
      `${mine.length} ${mine.length === 1 ? 'pedido' : 'pedidos'}`;
  }

  if (canPublish()) {
    const received = orders.filter(order => order.targetKey === ownKey());

    $('receivedOrders').replaceChildren(
      ...received.map(order => makeOrderCard(order, true))
    );

    $('receivedEmpty').hidden = received.length > 0;

    const pending = received.filter(order =>
      order.status === 'pending'
    ).length;

    const active = received.filter(order =>
      ['accepted', 'progress'].includes(order.status)
    ).length;

    $('receivedStats').innerHTML = `
      <div class="stat-item">
        <strong>${pending}</strong>
        <span>Pendientes</span>
      </div>
      <div class="stat-item">
        <strong>${active}</strong>
        <span>En curso</span>
      </div>
      <div class="stat-item">
        <strong>${received.length}</strong>
        <span>Total de pedidos</span>
      </div>
    `;
  }
}

// Contacto por WhatsApp

function openWhatsApp(phone, message) {
  const parsed = phoneInfo(phone, null, true);
  if (!parsed) return;

  window.open(
    `https://wa.me/${parsed.phone}?text=${encodeURIComponent(message)}`,
    '_blank',
    'noopener,noreferrer'
  );
}

function contactWorkshop(post) {
  if (!isClient()) return;

  openWhatsApp(
    post.phone,
    `Hola ${post.carpenter}, soy ${userProfile.name}. Me interesa «${post.title}», publicado en MaderaCraft.`
  );
}

function contactOrder(order, received) {
  if (received && canPublish() && order.targetKey === ownKey()) {
    openWhatsApp(
      order.clientPhone,
      `Hola ${order.clientName}, te contacto desde ${userProfile.workshop} por tu pedido «${order.title}».`
    );
  }

  if (!received && isClient() && order.ownerKey === ownKey()) {
    openWhatsApp(
      order.targetPhone,
      `Hola ${order.targetName}, soy ${userProfile.name}. Quisiera conversar sobre mi pedido «${order.title}».`
    );
  }
}

// Inicio y eventos

function initialize() {
  for (const id of ['pubCategory', 'orderCategory']) {
    for (const category of categoryData.slice(1)) {
      $(id).add(new Option(category.name, category.id));
    }
  }

  for (const id of ['pubCurrency', 'orderCurrency']) {
    for (const [value, label] of currencies) {
      $(id).add(new Option(label, value));
    }
  }

  const sortedCountries = [...MaderaPhone.countries]
    .sort((a, b) => a.name.localeCompare(b.name, 'es'));

  for (const country of sortedCountries) {
    $('phoneCountry').add(
      new Option(
        `${country.flag} ${country.name} (+${country.dial})`,
        country.iso
      )
    );
  }

  $('phoneCountry').value = 'PE';

  updatePhoneHint();
  loadData();
  resetPublish();
  resetOrder();
  updateAccount();
  switchView('catalog');

  if (!userProfile) openAuth();

  $('brandButton').addEventListener('click', () => {
    switchView('catalog');
  });

  $('authButton').addEventListener('click', () => {
    userProfile ? logout() : openAuth();
  });

  $('closeAuth').addEventListener('click', () => {
    closeDialog('authDialog');
  });

  $('authDialog').addEventListener('close', () => {
    if (!document.querySelector('dialog[open]')) {
      document.body.classList.remove('dialog-open');
    }
  });

  $('confirmDialog').addEventListener('close', () => {
    confirmCallback = null;

    if (!document.querySelector('dialog[open]')) {
      document.body.classList.remove('dialog-open');
    }
  });

  document.querySelectorAll('[data-role]').forEach(button => {
    button.addEventListener('click', () => {
      selectRole(button.dataset.role);
    });
  });

  $('phoneCountry').addEventListener('change', updatePhoneHint);
  $('authForm').addEventListener('submit', saveProfile);
  $('publishForm').addEventListener('submit', handlePublish);
  $('orderForm').addEventListener('submit', handleOrder);

  $('heroAction').addEventListener('click', () => {
    if (canPublish()) {
      resetPublish();
      switchView('publish');
    } else if (isClient()) {
      switchView('order');
    } else {
      openAuth('client');
    }
  });

  $('categoryTiles').addEventListener('click', event => {
    const button = event.target.closest('[data-category]');

    if (button) {
      selectedCategory = button.dataset.category;
      renderCatalog();
    }
  });

  $('searchInput').addEventListener('input', renderCatalog);
  $('sortSelect').addEventListener('change', renderCatalog);
  $('clearFilters').addEventListener('click', clearFilters);

  document.querySelectorAll('[data-action]').forEach(button => {
    button.addEventListener('click', () => {
      if (button.dataset.action === 'clear-filters') {
        clearFilters();
      }

      if (button.dataset.action === 'new-post') {
        resetPublish();
        switchView('publish');
      }
    });
  });

  $('cancelPublish').addEventListener('click', () => {
    resetPublish();
    switchView('mine');
  });

  const presets = {
    table: initialFurniture[0].image,
    wardrobe: initialFurniture[1].image,
    kitchen: initialFurniture[2].image
  };

  document.querySelectorAll('[data-preset]').forEach(button => {
    button.addEventListener('click', () => {
      $('pubImageURL').value = presets[button.dataset.preset];
      updatePostPreview();
    });
  });

  $('pubImageURL').addEventListener('input', updatePostPreview);
  $('orderImageFile').addEventListener('change', selectReference);
  $('orderImageURL').addEventListener('input', updateReferencePreview);

  $('removeReference').addEventListener('click', () => {
    imageEpoch++;
    referenceImage = '';
    imageBusy = false;

    $('orderImageFile').value = '';
    $('orderImageURL').value = '';
    $('orderSubmit').disabled = !isClient();

    updateReferencePreview();
  });

  $('confirmCancel').addEventListener('click', () => {
    closeDialog('confirmDialog');
  });

  $('confirmAccept').addEventListener('click', () => {
    const callback = confirmCallback;
    closeDialog('confirmDialog');
    if (callback) callback();
  });

  for (const [form, error] of [
    ['authForm', 'authError'],
    ['publishForm', 'publishError'],
    ['orderForm', 'orderError']
  ]) {
    $(form).addEventListener('input', event => {
      event.target.removeAttribute('aria-invalid');
      clearError(error);
    });
  }

  window.addEventListener('storage', event => {
    if (
      !['mc_furniture', 'mc_orders', 'mc_user_profile', null]
        .includes(event.key)
    ) {
      return;
    }

    const previous = ownKey();
    loadData();

    if (previous !== ownKey()) {
      resetPublish();
      resetOrder();
      updateAccount();
      switchView('catalog');

      if (!userProfile) {
        openAuth();
      } else {
        closeDialog('authDialog');
      }
    } else if (
      currentView === 'publish' &&
      editingId &&
      !furnitureList.some(post =>
        post.id === editingId && post.ownerKey === ownKey()
      )
    ) {
      resetPublish();
      switchView('mine');
      showNotice('La publicación fue eliminada en otra pestaña.');
    }

    renderCatalog();

    if (currentView === 'mine') renderMine();
    if (currentView === 'order') renderWorkshopOptions();

    renderOrders();
  });
}

// Carga del validador de teléfonos

function loadPhoneValidator(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');

    const timer = setTimeout(() => {
      script.remove();
      reject(new Error('Tiempo de carga agotado'));
    }, 12000);

    script.src = url;
    script.async = true;

    script.onload = () => {
      clearTimeout(timer);

      if (window.libphonenumber?.parsePhoneNumberFromString) {
        resolve();
      } else {
        reject(new Error('Validador no disponible'));
      }
    };

    script.onerror = () => {
      clearTimeout(timer);
      script.remove();
      reject(new Error('No se pudo cargar el validador'));
    };

    document.head.append(script);
  });
}

async function startMaderaCraft() {
  const urls = [
    'https://cdn.jsdelivr.net/npm/libphonenumber-js@1.13.14/bundle/libphonenumber-max.js',
    'https://unpkg.com/libphonenumber-js@1.13.14/bundle/libphonenumber-max.js'
  ];

  if (!window.libphonenumber?.parsePhoneNumberFromString) {
    $('notice').textContent = 'Cargando MaderaCraft…';
    $('notice').hidden = false;

    for (const url of urls) {
      try {
        await loadPhoneValidator(url);
        break;
      } catch (_) {
        // Si falla el primer servidor, se intenta con el siguiente.
      }
    }
  }

  if (!window.libphonenumber?.parsePhoneNumberFromString) {
    $('notice').textContent =
      'No se pudo iniciar la app. Revisa tu conexión a internet y recarga la página.';

    $('notice').hidden = false;
    return;
  }

  $('notice').hidden = true;
  initialize();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startMaderaCraft, {
    once: true
  });
} else {
  startMaderaCraft();
}

/* PEGAR AL FINAL DEL SCRIPT.JS ACTUAL */
(() => {
  'use strict';

  const normalize = value =>
    String(value)
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();

  const widgets = [];
  let opened = null;

  const symbols = {
    'S/': 'S/',
    '$': '$',
    '€': '€',
    ARS: '$',
    BOB: 'Bs',
    BRL: 'R$',
    CAD: '$',
    CLP: '$',
    COP: '$',
    CRC: '₡',
    CUP: '$',
    DOP: 'RD$',
    GTQ: 'Q',
    HNL: 'L',
    MXN: '$',
    NIO: 'C$',
    PYG: '₲',
    UYU: '$',
    VES: 'Bs'
  };

  const categoryIcons = {
    Mesas: 'table',
    Armarios: 'wardrobe',
    Cocinas: 'kitchen',
    'A medida': 'ruler',
    Restauracion: 'restore'
  };

  const make = (tag, className, content) => {
    const node = document.createElement(tag);
    node.className = className;

    if (content !== undefined) {
      node.textContent = content;
    }

    return node;
  };

  function presentation(select, option) {
    const label =
      option?.textContent.trim() || 'Selecciona una opción';

    const value = option?.value || '';

    if (select.id === 'phoneCountry' && /^[A-Z]{2}$/.test(value)) {
      const name = label
        .replace(/^[^\p{L}]+/u, '')
        .replace(/\s*\(\+\d+\)$/, '');

      return {
        name,
        detail: 'País de tu número',
        code: label.match(/\+\d+/)?.[0] || '',
        flag: value
      };
    }

    if (/Currency$/.test(select.id) && value) {
      const [name, code] = label.split(' · ');

      return {
        name,
        code: code || value,
        symbol: symbols[value] || value
      };
    }

    if (/Category$/.test(select.id)) {
      return {
        name: label,
        icon: categoryIcons[value] || 'grid'
      };
    }

    if (select.id === 'orderWorkshop' && value) {
      const split = label.indexOf(' · ');

      return {
        name: split < 0 ? label : label.slice(0, split),
        detail: split < 0 ? 'Taller' : label.slice(split + 3),
        icon: 'hammer'
      };
    }

    return { name: label };
  }

  function renderContent(parent, data) {
    parent.replaceChildren();

    if (data.flag) {
      const badge = make('span', 'mc-mark mc-flag', data.flag);
      badge.setAttribute('aria-hidden', 'true');
      badge.dataset.country = data.flag;
      parent.append(badge);
    } else if (data.symbol || data.icon) {
      const badge = make('span', 'mc-mark', data.symbol || '');
      badge.setAttribute('aria-hidden', 'true');

      if (data.icon) {
        const svg = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'svg'
        );

        const use = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'use'
        );

        use.setAttribute('href', '#i-' + data.icon);
        svg.append(use);
        badge.append(svg);
      }

      parent.append(badge);
    }

    const copy = make('span', 'mc-copy');
    copy.append(make('span', 'mc-name', data.name));

    if (data.detail) {
      copy.append(make('span', 'mc-detail', data.detail));
    }

    parent.append(copy);

    if (data.code) {
      parent.append(make('span', 'mc-code', data.code));
    }
  }

  function enhance(select) {
    if (select.dataset.mcEnhanced) return;
    select.dataset.mcEnhanced = 'true';

    const wrapper = make('div', 'mc-select');
    const trigger = make('button', 'mc-trigger');

    trigger.type = 'button';
    trigger.id = select.id + '-trigger';
    trigger.setAttribute('aria-haspopup', 'listbox');
    trigger.setAttribute('aria-expanded', 'false');

    const labels = [...select.labels];

    const labelText = labels.map(label => {
      const copy = label.cloneNode(true);

      copy.querySelectorAll('select').forEach(node => {
        node.remove();
      });

      return copy.textContent.trim();
    }).join(' ') || 'Seleccionar';

    labels.forEach(label => {
      if (label.htmlFor === select.id) {
        label.htmlFor = trigger.id;
      }
    });

    const panel = make('div', 'mc-panel');
    panel.hidden = true;

    if (typeof panel.showPopover === 'function') {
      panel.setAttribute('popover', 'manual');
    }

    const searchWrap = make('div', 'mc-search-wrap');
    const search = make('input', 'mc-search');

    search.type = 'text';
    search.autocomplete = 'off';
    search.spellcheck = false;

    search.placeholder =
      select.id === 'phoneCountry'
        ? 'Buscar país o prefijo…'
        : /Currency$/.test(select.id)
          ? 'Buscar moneda o código…'
          : 'Buscar una opción…';

    search.setAttribute('aria-label', 'Buscar: ' + labelText);
    search.setAttribute('role', 'combobox');
    search.setAttribute('aria-autocomplete', 'list');
    search.setAttribute('aria-expanded', 'false');

    const list = make('div', 'mc-list');
    list.id = select.id + '-list';
    list.setAttribute('role', 'listbox');
    list.setAttribute('aria-label', labelText);

    trigger.setAttribute('aria-controls', list.id);
    search.setAttribute('aria-controls', list.id);

    const empty = make(
      'p',
      'mc-empty',
      'No encontramos coincidencias.'
    );

    empty.setAttribute('role', 'status');
    empty.hidden = true;

    const caption = make(
      'div',
      'mc-caption',
      select.id === 'phoneCountry'
        ? 'Países de América · Selecciona el de tu número'
        : 'Elige una opción para continuar'
    );

    searchWrap.append(search);
    panel.append(searchWrap, list, empty, caption);

    select.before(wrapper);
    wrapper.append(select, trigger, panel);

    select.classList.add('mc-native');
    select.tabIndex = -1;
    select.setAttribute('aria-hidden', 'true');
    select.focus = options => trigger.focus(options);

    let visible = [];
    let active = -1;
    let isOpen = false;

    function position() {
      if (!isOpen) return;

      const rect = trigger.getBoundingClientRect();

      if (!rect.width || !trigger.getClientRects().length) {
        return close(false);
      }

      const viewport = window.visualViewport;
      const leftEdge = viewport?.offsetLeft || 0;
      const topEdge = viewport?.offsetTop || 0;
      const width = viewport?.width || window.innerWidth;
      const height = viewport?.height || window.innerHeight;

      const panelWidth = Math.min(
        Math.max(rect.width, 260),
        width - 24
      );

      const below = topEdge + height - rect.bottom - 16;
      const above = rect.top - topEdge - 16;
      const upward = below < 230 && above > below;
      const available = Math.max(130, upward ? above : below);
      const maxHeight = Math.min(360, available);

      panel.style.width = panelWidth + 'px';
      panel.style.maxHeight = maxHeight + 'px';

      list.style.maxHeight =
        Math.max(40, maxHeight - 98) + 'px';

      panel.style.left = Math.max(
        leftEdge + 12,
        Math.min(rect.left, leftEdge + width - panelWidth - 12)
      ) + 'px';

      const actualHeight = panel.getBoundingClientRect().height;

      panel.style.top = Math.max(
        topEdge + 8,
        upward
          ? rect.top - actualHeight - 8
          : rect.bottom + 8
      ) + 'px';
    }

    function highlight(index, scroll = false) {
      active = index;

      [...list.children].forEach((row, i) => {
        row.classList.toggle('is-active', i === active);
      });

      const row = list.children[active];

      if (row) {
        search.setAttribute('aria-activedescendant', row.id);

        if (scroll) {
          const rowTop = row.offsetTop - list.offsetTop;

          if (rowTop < list.scrollTop) {
            list.scrollTop = rowTop;
          } else if (
            rowTop + row.offsetHeight >
            list.scrollTop + list.clientHeight
          ) {
            list.scrollTop =
              rowTop + row.offsetHeight - list.clientHeight;
          }
        }
      } else {
        search.removeAttribute('aria-activedescendant');
      }
    }

    function choose(option) {
      if (select.matches(':disabled') || option.disabled) return;

      select.value = option.value;

      select.dispatchEvent(
        new Event('input', { bubbles: true })
      );

      select.dispatchEvent(
        new Event('change', { bubbles: true })
      );

      close(true);
    }

    function renderList() {
      const query = normalize(search.value.trim());

      visible = [...select.options].filter(option =>
        !option.disabled &&
        !option.hidden &&
        normalize(
          option.textContent + ' ' + option.value
        ).includes(query)
      );

      list.replaceChildren();

      visible.forEach((option, index) => {
        const row = make('div', 'mc-option');

        row.id = select.id + '-option-' + index;
        row.setAttribute('role', 'option');
        row.setAttribute(
          'aria-selected',
          String(option.selected)
        );

        renderContent(row, presentation(select, option));

        const check = make(
          'span',
          'mc-check',
          option.selected ? '✓' : ''
        );

        check.setAttribute('aria-hidden', 'true');
        row.append(check);

        row.addEventListener('pointerdown', event => {
          event.preventDefault();
        });

        row.addEventListener('click', () => choose(option));

        list.append(row);
      });

      empty.hidden = visible.length > 0;

      highlight(
        visible.length
          ? Math.max(
              0,
              visible.findIndex(option => option.selected)
            )
          : -1
      );

      position();
    }

    function sync() {
      const disabled = select.matches(':disabled');

      if (trigger.disabled !== disabled) {
        trigger.disabled = disabled;
      }

      if (disabled && isOpen) {
        close(false);
      }

      const data = presentation(
        select,
        select.selectedOptions[0]
      );

      renderContent(trigger, data);
      trigger.append(make('span', 'mc-chevron'));

      trigger.setAttribute(
        'aria-label',
        labelText + ': ' + data.name +
        (data.code ? ' ' + data.code : '')
      );

      trigger.setAttribute(
        'aria-invalid',
        select.getAttribute('aria-invalid') || 'false'
      );

      if (isOpen) renderList();
    }

    function open() {
      if (select.matches(':disabled')) return;

      if (opened && opened !== widget) {
        opened.close(false);
      }

      if (isOpen) return;

      opened = widget;
      isOpen = true;
      search.value = '';
      panel.hidden = false;

      if (panel.hasAttribute('popover')) {
        panel.showPopover();
      }

      trigger.setAttribute('aria-expanded', 'true');
      search.setAttribute('aria-expanded', 'true');

      renderList();
      search.focus({ preventScroll: true });

      requestAnimationFrame(() => {
        position();
        highlight(active, true);
      });
    }

    function close(returnFocus = false) {
      if (!isOpen) return;

      isOpen = false;

      if (
        panel.hasAttribute('popover') &&
        panel.matches(':popover-open')
      ) {
        panel.hidePopover();
      }

      panel.hidden = true;

      trigger.setAttribute('aria-expanded', 'false');
      search.setAttribute('aria-expanded', 'false');
      search.removeAttribute('aria-activedescendant');

      if (opened === widget) opened = null;

      if (returnFocus) {
        trigger.focus({ preventScroll: true });
      }
    }

    const widget = {
      sync,
      close,
      position,
      wrapper,
      trigger
    };

    widgets.push(widget);

    trigger.addEventListener('click', () => {
      isOpen ? close(true) : open();
    });

    trigger.addEventListener('keydown', event => {
      if (
        ['ArrowDown', 'ArrowUp', 'Home', 'End']
          .includes(event.key)
      ) {
        event.preventDefault();
        open();

        if (event.key === 'End') {
          highlight(visible.length - 1, true);
        }

        if (event.key === 'Home') {
          highlight(0, true);
        }
      }
    });

    search.addEventListener('input', renderList);

    search.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        close(true);
      } else if (event.key === 'Tab') {
        close(true);
      } else if (event.key === 'Enter') {
        event.preventDefault();

        if (visible[active]) {
          choose(visible[active]);
        }
      } else if (
        ['ArrowDown', 'ArrowUp', 'Home', 'End']
          .includes(event.key)
      ) {
        event.preventDefault();

        let next =
          active + (event.key === 'ArrowUp' ? -1 : 1);

        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = visible.length - 1;

        highlight(
          visible.length
            ? Math.max(
                0,
                Math.min(visible.length - 1, next)
              )
            : -1,
          true
        );
      }
    });

    select.addEventListener('change', sync);

    select.addEventListener('invalid', event => {
      event.preventDefault();
      trigger.setAttribute('aria-invalid', 'true');
      trigger.focus();
    });

    for (const property of ['value', 'selectedIndex']) {
      const descriptor = Object.getOwnPropertyDescriptor(
        HTMLSelectElement.prototype,
        property
      );

      Object.defineProperty(select, property, {
        configurable: true,

        get() {
          return descriptor.get.call(this);
        },

        set(value) {
          descriptor.set.call(this, value);
          sync();
        }
      });
    }

    new MutationObserver(sync).observe(select, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true
    });

    select.form?.addEventListener('reset', () => {
      queueMicrotask(sync);
    });

    select.closest('dialog')?.addEventListener('close', () => {
      close(false);
    });

    sync();
  }

  function start() {
    if (document.documentElement.dataset.mcDesign) return;
    document.documentElement.dataset.mcDesign = 'classic';

    const hero = document.querySelector('.hero-copy');

    const searchRow = document.querySelector(
      '#view-catalog .search-row'
    );

    if (hero && searchRow) {
      hero.querySelector('h1').textContent =
        'Encuentra carpinteros y muebles artesanales cerca de ti';

      hero.querySelector('.eyebrow').textContent =
        'Directo del taller';

      hero.append(searchRow);
    }

    const tiles = document.getElementById('categoryTiles');

    if (tiles) {
      const compactCounts = () => {
        tiles.querySelectorAll('small').forEach(small => {
          const count = small.textContent.match(/^\d+/)?.[0];

          if (count && small.textContent !== count) {
            small.setAttribute(
              'aria-label',
              small.textContent
            );

            small.textContent = count;
          }
        });
      };

      new MutationObserver(compactCounts).observe(tiles, {
        childList: true,
        subtree: true
      });

      compactCounts();
    }

    document.querySelectorAll('select').forEach(enhance);

    document.addEventListener('pointerdown', event => {
      if (
        opened &&
        !opened.wrapper.contains(event.target)
      ) {
        opened.close(false);
      }
    });

    window.addEventListener('resize', () => {
      opened?.position();
    });

    window.addEventListener(
      'scroll',
      () => opened?.position(),
      true
    );

    window.visualViewport?.addEventListener('resize', () => {
      opened?.position();
    });

    window.visualViewport?.addEventListener('scroll', () => {
      opened?.position();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, {
      once: true
    });
  } else {
    start();
  }
})();
/* PEGAR AL FINAL DEL SCRIPT.JS ACTUAL */
(() => {
  'use strict';

  if (window.maderaContactosInstalados) return;
  window.maderaContactosInstalados = true;

  const chatIcon = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-4-.9L3 21l1.9-5.5a9 9 0 0 1-.9-4A8.5 8.5 0 0 1 12.5 3h.5a8.5 8.5 0 0 1 8 8v.5Z"/>
      <path d="M8 9h8M8 13h5"/>
    </svg>
  `;

  function contactLinks(phone, name, message) {
    const parsed = phoneInfo(phone, null, true);
    if (!parsed) return [];

    const chat = document.createElement('a');
    chat.className = 'button small mc-whatsapp';

    chat.href =
      `https://wa.me/${parsed.phone}?text=${encodeURIComponent(message)}`;

    chat.target = '_blank';
    chat.rel = 'noopener noreferrer';
    chat.innerHTML = chatIcon + ' WhatsApp';

    chat.setAttribute(
      'aria-label',
      `Chatear por WhatsApp con ${name}`
    );

    chat.title = `Abrir WhatsApp de ${name}`;

    const call = document.createElement('a');
    call.className = 'button secondary small mc-call';
    call.href = `tel:+${parsed.phone}`;
    call.innerHTML = icon('phone') + ' Llamar';

    call.setAttribute('aria-label', `Llamar a ${name}`);
    call.title = `Llamar al ${parsed.formatted}`;

    return [chat, call];
  }

  // Contactar al carpintero desde sus publicaciones.
  const originalPostCard = makePostCard;

  makePostCard = function (item, manage = false) {
    const card = originalPostCard(item, manage);

    if (!isClient()) return card;

    const actions = card.querySelector('.work-actions');
    if (!actions) return card;

    const request = actions.querySelector('button');

    if (request) {
      request.innerHTML =
        'Solicitar trabajo ' + icon('arrow');

      request.setAttribute(
        'aria-label',
        `Solicitar el trabajo: ${item.title}`
      );
    }

    const row = document.createElement('div');
    row.className = 'mc-contact-row';

    row.append(
      ...contactLinks(
        item.phone,
        item.carpenter,
        `Hola ${item.carpenter}, soy ${userProfile.name}. Me interesa tu publicación «${item.title}» en MaderaCraft. Quisiera consultar los detalles y la disponibilidad.`
      )
    );

    actions.replaceChildren();
    actions.classList.add('mc-contact-actions');

    if (request) actions.append(request);
    if (row.children.length) actions.append(row);

    return card;
  };

  // Contactar al cliente o al taller desde un pedido.
  const originalOrderCard = makeOrderCard;

  makeOrderCard = function (order, received) {
    const authorized = received
      ? canPublish() && order.targetKey === ownKey()
      : isClient() && order.ownerKey === ownKey();

    const card = originalOrderCard(order, received);

    if (!authorized) return card;

    const controls = card.querySelector('.order-controls');
    if (!controls) return card;

    // Conserva los botones para administrar el pedido.
    // Reemplaza el último botón de contacto anterior.
    controls.lastElementChild?.remove();

    const phone = received
      ? order.clientPhone
      : order.targetPhone;

    const name = received
      ? order.clientName
      : order.targetName;

    const message = received
      ? `Hola ${order.clientName}, soy de ${userProfile.workshop}. Vi tu pedido «${order.title}» en MaderaCraft, con un presupuesto de ${money(order.budget, order.currency)}. Quisiera conversar contigo sobre el trabajo.`
      : `Hola ${order.targetName}, soy ${userProfile.name}. Quisiera conversar sobre mi pedido «${order.title}» en MaderaCraft.`;

    controls.append(...contactLinks(phone, name, message));

    return card;
  };

  function startContacts() {
    if (!document.getElementById('mc-contact-styles')) {
      const style = document.createElement('style');
      style.id = 'mc-contact-styles';

      style.textContent = `
        .work-actions.mc-contact-actions {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 9px;
        }

        .mc-contact-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 8px;
        }

        .button.mc-whatsapp {
          background: #e8f6ed;
          color: #17683c;
          border: 1px solid #bcdcc8;
        }

        .button.mc-whatsapp:hover {
          background: #d4efdf;
        }

        .mc-contact-row .button {
          min-width: 0;
        }

        .mc-whatsapp svg,
        .mc-call svg {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
        }
      `;

      document.head.append(style);
    }

    if (document.getElementById('catalogGrid')) {
      renderCatalog();
    }

    if (document.getElementById('clientOrders')) {
      renderOrders();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener(
      'DOMContentLoaded',
      startContacts,
      { once: true }
    );
  } else {
    startContacts();
  }
})();
(() => {
  'use strict';

  if (window.maderaContactosEnTodas) return;
  window.maderaContactosEnTodas = true;

  const previousCard = makePostCard;

  makePostCard = function (item, manage = false) {
    const card = previousCard(item, manage);

    // Evita duplicar los botones si ya existen.
    if (card.querySelector('.mc-contact-row')) return card;

    const phone = phoneInfo(item.phone, null, true);
    if (!phone) return card;

    let actions = card.querySelector('.work-actions');

    if (!actions) {
      actions = document.createElement('div');
      actions.className = 'work-actions';
      card.append(actions);
    }

    actions.classList.add('mc-contact-actions');

    const name = userProfile?.role === 'carpenter'
      ? userProfile.workshop
      : userProfile?.name;

    const message =
      `Hola ${item.carpenter}. ` +
      (name ? `Soy ${name}. ` : '') +
      `Me interesa tu publicación «${item.title}» en MaderaCraft. Quisiera conversar contigo.`;

    const chat = document.createElement('a');
    chat.className = 'button small mc-whatsapp';

    chat.href =
      `https://wa.me/${phone.phone}?text=${encodeURIComponent(message)}`;

    chat.target = '_blank';
    chat.rel = 'noopener noreferrer';
    chat.textContent = 'WhatsApp';

    chat.setAttribute(
      'aria-label',
      `Chatear por WhatsApp con ${item.carpenter}`
    );

    const call = document.createElement('a');
    call.className = 'button secondary small mc-call';
    call.href = `tel:+${phone.phone}`;
    call.innerHTML = icon('phone') + ' Llamar';

    call.setAttribute(
      'aria-label',
      `Llamar a ${item.carpenter}`
    );

    const row = document.createElement('div');
    row.className = 'mc-contact-row';
    row.append(chat, call);

    actions.append(row);

    return card;
  };

  function refresh() {
    const style = document.createElement('style');

    style.textContent = `
      .work-actions.mc-contact-actions {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 9px;
      }

      .mc-contact-row {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 8px;
      }

      .button.mc-whatsapp {
        background: #e8f6ed;
        color: #17683c;
        border: 1px solid #bcdcc8;
      }

      .button.mc-whatsapp:hover {
        background: #d4efdf;
      }

      .mc-contact-row .button {
        min-width: 0;
      }
    `;

    document.head.append(style);

    renderCatalog();

    if (canPublish()) {
      renderMine();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', refresh, {
      once: true
    });
  } else {
    refresh();
  }
})();
(() => {
  'use strict';

  if (window.maderaContactosPorRol) return;
  window.maderaContactosPorRol = true;

  const previousPost = makePostCard;

  makePostCard = function (item, manage = false) {
    const card = previousPost(item, manage);

    // Las publicaciones del catálogo son de carpinteros.
    // Solo los clientes pueden contactar al autor.
    if (!isClient()) {
      card.querySelectorAll('.mc-contact-row').forEach(row => {
        row.remove();
      });

      const actions = card.querySelector('.work-actions');

      if (actions && !actions.children.length) {
        actions.remove();
      }
    }

    return card;
  };

  const previousOrder = makeOrderCard;

  makeOrderCard = function (order, received) {
    const allowed = received
      ? canPublish() && order.targetKey === ownKey()
      : isClient() && order.ownerKey === ownKey();

    // Un cliente no recibe ni toma pedidos de otros clientes.
    if (!allowed) {
      return document.createDocumentFragment();
    }

    return previousOrder(order, received);
  };

  function refreshRoles() {
    renderCatalog();

    if (canPublish()) {
      renderMine();
    }

    renderOrders();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', refreshRoles, {
      once: true
    });
  } else {
    refreshRoles();
  }
})();