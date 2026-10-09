// JavaScript original de wikiPlantas, separado del HTML.
/* BASE DE DATOS BOTÁNICA (14 plantas en 7 familias) */
        const PLANT_DATABASE = [
            {
                id: "p1",
                name: "Cannabis Sativa",
                scientificName: "Cannabis sativa L.",
                family: "Cannabaceae",
                description: "Planta herbácea anual originaria de las cordilleras del Himalaya. Reconocida por sus hojas palmaticompuestas con folíolos aserrados y rica producción de fitocannabinoides y terpenos en tricomas glandulares.",
                image: "https://images.unsplash.com/photo-1536939459926-301728717817?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: "p2",
                name: "Lúpulo",
                scientificName: "Humulus lupulus",
                family: "Cannabaceae",
                description: "Planta trepadora dioica cuyas flores femeninas (conos) contienen lupulina, sustancia rica en alfaácidos utilizada ancestralmente para estabilizar y aromatizar la cerveza.",
                image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: "p3",
                name: "Belladona",
                scientificName: "Atropa belladonna",
                family: "Solanaceae",
                description: "Especie perenne arbustiva caracterizada por sus flores acampanadas y bayas negras brillantes. Contiene alcaloides tropánicos como la atropina y la escopolamina.",
                image: "https://images.unsplash.com/photo-1592417817098-8f3d6ef23a28?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: "p4",
                name: "Solano de Flor Azul",
                scientificName: "Solanum dulcamara",
                family: "Solanaceae",
                description: "Liana leñosa de flores violetas con anteras amarillas brillantes en forma de cono, típica de zonas húmedas y ribereñas.",
                image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: "p5",
                name: "Cacto Asiento de Suegra",
                scientificName: "Echinocactus grusonii",
                family: "Cactaceae",
                description: "Cacto globoso adornado con espinas doradas prominentes. Adaptado a la aridez extrema mediante su tallo fotosintético y almacenamiento de reserva hídrica.",
                image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: "p6",
                name: "Nopal de Castilla",
                scientificName: "Opuntia ficus-indica",
                family: "Cactaceae",
                description: "Cactácea con cladodios aplanados ovales (pencas) que producen frutos suculentos conocidos como tunas. Clave en la ecología de zonas áridas.",
                image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: "p7",
                name: "Orquídea Vanda Azul",
                scientificName: "Vanda coerulea",
                family: "Orchidaceae",
                description: "Especie epífita icónica de flores azuladas reticuladas. Desarrolla raíces aéreas recubiertas de velamen para la absorción de humedad atmosférica.",
                image: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: "p8",
                name: "Vainilla Botánica",
                scientificName: "Vanilla planifolia",
                family: "Orchidaceae",
                description: "Única orquídea cultivada a gran escala para uso comestible e industrial. Trepadora de vainas aromáticas ricas en vanilina natural.",
                image: "https://images.unsplash.com/photo-1566809824323-88e0db88e5b2?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: "p9",
                name: "Lavanda Silvestre",
                scientificName: "Lavandula angustifolia",
                family: "Lamiaceae",
                description: "Arbusto aromático perenne con tallos espigados de flores violetas. Produce aceites esenciales con propiedades calmantes y antisépticas.",
                image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: "p10",
                name: "Menta Piperita",
                scientificName: "Mentha x piperita",
                family: "Lamiaceae",
                description: "Híbrido herbáceo caracterizado por sus hojas dentadas glabras y alto contenido de mentol en sus glándulas foliares.",
                image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: "p11",
                name: "Rosa Silvestre",
                scientificName: "Rosa canina",
                family: "Rosaceae",
                description: "Arbusto espinoso con flores de cinco pétalos rosados que dan lugar a frutos (escaramujos) excepcionalmente ricos en vitamina C.",
                image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: "p12",
                name: "Cerezal Japonés",
                scientificName: "Prunus serrulata",
                family: "Rosaceae",
                description: "Árbol caducifolio célebre por su floración efímera primaveral en tonos rosa pálido y blanco.",
                image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: "p13",
                name: "Girasol Silvestre",
                scientificName: "Helianthus annuus",
                family: "Asteraceae",
                description: "Planta herbácea con capítulos florales gigantescos formados por cientos de flores tubulares. Presenta heliotropismo en etapas juveniles.",
                image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: "p14",
                name: "Diente de León",
                scientificName: "Taraxacum officinale",
                family: "Asteraceae",
                description: "Especie perenne cosmopolita con capítulo amarillo brillante que se transforma en una infrutescencia plumosa (vilano) dispersada por el viento.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
            }
        ];

        /* Temas de la Comunidad */
        let COMMUNITY_TOPICS = [
            { id: "t1", title: "Encuestas Botánicas", icon: "📊", commentsCount: 2, desc: "Participa en sondeos comunitarios de cultivo y taxonomía." },
            { id: "t2", title: "Identificación de Especies Raras", icon: "🔍", commentsCount: 1, desc: "Publica fotos de plantas sin identificar para la comunidad." },
            { id: "t3", title: "Cultivo y Propagación", icon: "🌱", commentsCount: 0, desc: "Técnicas de esquejes, sustratos e hidroponía casera." },
            { id: "t4", title: "Propiedades Medicinales y Terpenos", icon: "🧪", commentsCount: 0, desc: "Discusión científica sobre fitoquímica y remedios naturales." }
        ];

        let COMMENTS_STORE = {
            "t1": [
                { author: "Carlos M.", text: "He votado por el humus de lombriz, la retención hídrica es excelente." },
                { author: "Sofía B.", text: "El guano de murciélago en floración marca una gran diferencia." }
            ],
            "t2": [
                { author: "Lucía P.", text: "¿Alguien reconoce esta especie de la montaña?" }
            ]
        };

        /* Estado */
        let favoritesList = JSON.parse(localStorage.getItem('wp_favorites')) || [];
        let userScore = parseInt(localStorage.getItem('wp_score')) || 0;
        let currentActiveRandomPlant = null;
        let selectedFamilyFilter = "ALL";

        document.addEventListener('DOMContentLoaded', () => {
            initTheme();
            initNavigation();
            renderCatalog();
            renderHerbario();
            renderCommunityTopics();
            initMinigame();
            initScanner();
            updateScoreDisplay();
        });

        /* 1. TEMA CLARO/OSCURO PERSISTENTE */
        function initTheme() {
            const savedTheme = localStorage.getItem('wp_theme') || 'light';
            setTheme(savedTheme);

            document.getElementById('themeToggleBtn').addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-bs-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                setTheme(newTheme);
            });
        }

        function setTheme(theme) {
            document.documentElement.setAttribute('data-bs-theme', theme);
            localStorage.setItem('wp_theme', theme);
            document.getElementById('themeIcon').textContent = theme === 'dark' ? '🌙' : '☀️';
        }

        /* 2. NAVEGACIÓN SPA */
        function initNavigation() {
            document.querySelectorAll('.nav-trigger').forEach(trigger => {
                trigger.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = trigger.getAttribute('data-target');
                    switchPage(targetId);

                    document.querySelectorAll('.offcanvas-body .nav-link-custom').forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('data-target') === targetId) link.classList.add('active');
                    });
                });
            });

            document.getElementById('globalSearchInput').addEventListener('input', (e) => {
                renderCatalog(e.target.value.toLowerCase().trim());
            });
        }

        function switchPage(pageId) {
            document.querySelectorAll('.page-view').forEach(p => p.classList.remove('active'));
            const targetPage = document.getElementById(pageId);
            if (targetPage) {
                targetPage.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            if (pageId === 'page-herbario') renderHerbario();
        }

        /* 3. PÁGINA 1: INICIO Y FILTRO POR FAMILIAS */
        function renderCatalog(searchQuery = "") {
            const grid = document.getElementById('plantCatalogGrid');
            grid.innerHTML = "";

            let filtered = PLANT_DATABASE;

            if (selectedFamilyFilter !== "ALL") {
                filtered = filtered.filter(p => p.family === selectedFamilyFilter);
            }

            if (searchQuery) {
                filtered = filtered.filter(p => 
                    p.name.toLowerCase().includes(searchQuery) ||
                    p.scientificName.toLowerCase().includes(searchQuery) ||
                    p.description.toLowerCase().includes(searchQuery) ||
                    p.family.toLowerCase().includes(searchQuery)
                );
            }

            document.getElementById('totalPlantsBadge').textContent = filtered.length;

            if (filtered.length === 0) {
                grid.innerHTML = `
                    <div class="col-12 text-center py-5">
                        <i class="fas fa-seedling fs-1 text-muted mb-3 d-block"></i>
                        <h4 class="text-muted">No se encontraron especies.</h4>
                    </div>
                `;
                return;
            }

            filtered.forEach(plant => {
                const isFav = favoritesList.includes(plant.id);
                const col = document.createElement('div');
                col.className = 'col-lg-4 col-md-6';
                col.innerHTML = `
                    <div class="plant-card">
                        <div class="plant-card-img-wrapper">
                            <img src="${plant.image}" alt="${plant.name}" class="plant-card-img">
                            <button class="favorite-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite('${plant.id}')" title="${isFav ? 'Quitar de favoritos' : 'Añadir a favoritos'}">
                                <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
                            </button>
                            <span class="family-tag bg-${plant.family}">${plant.family}</span>
                        </div>
                        <div class="card-body p-3 d-flex flex-column">
                            <h5 class="font-serif fw-bold mb-1">${plant.name}</h5>
                            <p class="small text-muted fst-italic mb-2">${plant.scientificName}</p>
                            <p class="small text-muted flex-grow-1">${plant.description}</p>
                        </div>
                    </div>
                `;
                grid.appendChild(col);
            });

            bindFamilyFilterEvents();
        }

        function bindFamilyFilterEvents() {
            const familyButtons = document.querySelectorAll('#familyFilterList .list-group-item');
            familyButtons.forEach(btn => {
                btn.onclick = () => {
                    familyButtons.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    selectedFamilyFilter = btn.getAttribute('data-family');
                    document.getElementById('currentCatalogTitle').textContent = 
                        selectedFamilyFilter === "ALL" ? "Catálogo General de Especies" : `Familia: ${selectedFamilyFilter}`;
                    renderCatalog();
                };
            });
        }

        function toggleFavorite(plantId) {
            if (favoritesList.includes(plantId)) {
                favoritesList = favoritesList.filter(id => id !== plantId);
            } else {
                favoritesList.push(plantId);
            }
            localStorage.setItem('wp_favorites', JSON.stringify(favoritesList));
            renderCatalog();
            renderHerbario();
        }

        /* 4. PÁGINA 2: MI HERBARIO (FAVORITOS) */
        function renderHerbario() {
            const container = document.getElementById('herbarioContainer');
            container.innerHTML = "";

            const favPlants = PLANT_DATABASE.filter(p => favoritesList.includes(p.id));

            if (favPlants.length === 0) {
                container.innerHTML = `
                    <div class="col-12">
                        <div class="empty-herbario">
                            <i class="fas fa-folder-open fs-1 mb-3 text-muted"></i>
                            <div class="empty-herbario-text">NO HAS AÑADIDO NINGUNA PLANTA A FAVORITOS</div>
                            <p class="text-muted mt-2">Explora el catálogo de Inicio y marca especies con el icono de corazón.</p>
                        </div>
                    </div>
                `;
                return;
            }

            favPlants.forEach(plant => {
                const col = document.createElement('div');
                col.className = 'col-lg-4 col-md-6';
                col.innerHTML = `
                    <div class="plant-card">
                        <div class="plant-card-img-wrapper">
                            <img src="${plant.image}" alt="${plant.name}" class="plant-card-img">
                            <button class="favorite-btn active" onclick="toggleFavorite('${plant.id}')" title="Quitar de favoritos">
                                <i class="fas fa-heart text-danger"></i>
                            </button>
                            <span class="family-tag bg-${plant.family}">${plant.family}</span>
                        </div>
                        <div class="card-body p-3 d-flex flex-column">
                            <h5 class="font-serif fw-bold mb-1">${plant.name}</h5>
                            <p class="small text-muted fst-italic mb-2">${plant.scientificName}</p>
                            <p class="small text-muted flex-grow-1">${plant.description}</p>
                        </div>
                    </div>
                `;
                container.appendChild(col);
            });
        }

        /* 5. PÁGINA 4: PORTAL COMUNITARIO */
        function renderCommunityTopics() {
            const grid = document.getElementById('communityTopicsGrid');
            grid.innerHTML = "";

            COMMUNITY_TOPICS.forEach(topic => {
                const col = document.createElement('div');
                col.className = 'col-md-6';
                col.innerHTML = `
                    <div class="community-card d-flex align-items-start gap-3" onclick="openCommunityThread('${topic.id}')">
                        <span class="fs-1">${topic.icon}</span>
                        <div class="flex-grow-1">
                            <div class="d-flex justify-content-between align-items-center mb-1">
                                <h5 class="font-serif fw-bold mb-0">${topic.title}</h5>
                                <span class="badge bg-success-subtle text-success border border-success-subtle rounded-pill">
                                    <i class="fas fa-comment-dots me-1"></i>${topic.commentsCount}
                                </span>
                            </div>
                            <p class="small text-muted mb-0">${topic.desc}</p>
                        </div>
                    </div>
                `;
                grid.appendChild(col);
            });

            document.getElementById('btnBackToCommunity').onclick = () => {
                document.getElementById('communityThreadView').style.display = 'none';
                document.getElementById('communityCategoryView').style.display = 'block';
            };
        }

        function openCommunityThread(topicId) {
            const topic = COMMUNITY_TOPICS.find(t => t.id === topicId);
            if (!topic) return;

            document.getElementById('communityCategoryView').style.display = 'none';
            document.getElementById('communityThreadView').style.display = 'block';

            document.getElementById('threadTitle').textContent = topic.title;
            document.getElementById('threadDesc').textContent = topic.desc;
            document.getElementById('threadIcon').textContent = topic.icon;

            const pollArea = document.getElementById('pollInteractiveArea');
            if (topic.id === 't1') {
                pollArea.classList.remove('d-none');
                setupPollEvents();
            } else {
                pollArea.classList.add('d-none');
            }

            renderComments(topicId);

            const form = document.getElementById('commentForm');
            form.onsubmit = (e) => {
                e.preventDefault();
                const author = document.getElementById('commentAuthor').value.trim();
                const text = document.getElementById('commentText').value.trim();

                if (author && text) {
                    if (!COMMENTS_STORE[topicId]) COMMENTS_STORE[topicId] = [];
                    COMMENTS_STORE[topicId].push({ author, text });
                    topic.commentsCount++;
                    renderCommunityTopics();
                    renderComments(topicId);
                    document.getElementById('commentText').value = "";
                }
            };
        }

        function renderComments(topicId) {
            const list = document.getElementById('commentsList');
            list.innerHTML = "";

            const comments = COMMENTS_STORE[topicId] || [];

            if (comments.length === 0) {
                list.innerHTML = `<p class="text-muted small fst-italic">Sé el primero en dejar un comentario.</p>`;
                return;
            }

            comments.forEach(c => {
                const card = document.createElement('div');
                card.className = 'p-3 rounded-3 bg-body-tertiary border';
                card.innerHTML = `
                    <div class="d-flex justify-content-between align-items-center mb-1">
                        <strong class="text-success"><i class="fas fa-user-leaf me-1"></i>${c.author}</strong>
                        <span class="small text-muted">Reciente</span>
                    </div>
                    <p class="mb-0 text-break">${c.text}</p>
                `;
                list.appendChild(card);
            });
        }

        function setupPollEvents() {
            const voteBtns = document.querySelectorAll('.vote-btn');
            const pollResults = document.getElementById('pollResults');
            voteBtns.forEach(btn => {
                btn.onclick = () => {
                    const opt = btn.getAttribute('data-option');
                    pollResults.innerHTML = `<div class="alert alert-success py-2 mb-0">¡Voto registrado para: <strong>${opt}</strong>!</div>`;
                };
            });
        }

        /* 6. PÁGINA 5: ESPECIE AL AZAR (MINI-JUEGO) */
        function initMinigame() {
            document.getElementById('btnGetRandomPlant').addEventListener('click', getRandomPlant);
            document.getElementById('btnCheckGuess').addEventListener('click', checkUserGuess);
            getRandomPlant();
        }

        function getRandomPlant() {
            const randomIndex = Math.floor(Math.random() * PLANT_DATABASE.length);
            currentActiveRandomPlant = PLANT_DATABASE[randomIndex];

            document.getElementById('randomPlantImg').src = currentActiveRandomPlant.image;
            document.getElementById('guessInput').value = "";
            document.getElementById('gameFeedback').innerHTML = "";
        }

        function normalizeString(str) {
            return str
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/[^a-z0-9\s]/g, "")
                .trim();
        }

        function checkUserGuess() {
            if (!currentActiveRandomPlant) return;

            const userInput = normalizeString(document.getElementById('guessInput').value);
            const feedbackBox = document.getElementById('gameFeedback');

            if (!userInput) {
                feedbackBox.innerHTML = `<div class="alert alert-warning">Escribe una respuesta.</div>`;
                return;
            }

            const targetName = normalizeString(currentActiveRandomPlant.name);
            const targetScientific = normalizeString(currentActiveRandomPlant.scientificName);
            const targetFamily = normalizeString(currentActiveRandomPlant.family);
            const targetDesc = normalizeString(currentActiveRandomPlant.description);

            const isCorrect = 
                userInput.includes(targetName) || targetName.includes(userInput) ||
                userInput.includes(targetScientific) ||
                userInput.includes(targetFamily) ||
                (userInput.length > 3 && targetDesc.includes(userInput));

            if (isCorrect) {
                userScore += 1;
                feedbackBox.innerHTML = `
                    <div class="alert alert-success">
                        <i class="fas fa-check-circle me-2"></i><strong>¡Correcto! (+1 Punto)</strong><br>
                        Era <strong>${currentActiveRandomPlant.name}</strong> (<em>${currentActiveRandomPlant.scientificName}</em>).
                    </div>
                `;
            } else {
                userScore -= 1;
                feedbackBox.innerHTML = `
                    <div class="alert alert-danger">
                        <i class="fas fa-times-circle me-2"></i><strong>Incorrecto (-1 Punto)</strong><br>
                        Era <strong>${currentActiveRandomPlant.name}</strong> (Familia: ${currentActiveRandomPlant.family}).
                    </div>
                `;
            }

            localStorage.setItem('wp_score', userScore);
            updateScoreDisplay();
        }

        function updateScoreDisplay() {
            document.getElementById('userScore').textContent = userScore;
        }

        /* 7. PÁGINA 6: IDENTIFICADOR IA */
        function initScanner() {
            const fileInput = document.getElementById('plantFileInput');
            const previewImg = document.getElementById('previewScanImg');
            const btnScan = document.getElementById('btnStartScan');

            fileInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(evt) {
                        previewImg.src = evt.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            });

            btnScan.addEventListener('click', runAIScan);
        }

        function runAIScan() {
            const laser = document.getElementById('laserLine');
            const status = document.getElementById('scanStatus');
            const familyResults = document.getElementById('familyMatchResults');
            const plantResults = document.getElementById('plantMatchResults');

            laser.style.display = 'block';
            status.textContent = "Estado: Analizando morfología foliar...";
            status.className = "badge bg-warning text-dark font-monospace px-3 py-2";

            setTimeout(() => {
                laser.style.display = 'none';
                status.textContent = "Estado: Escaneo completado";
                status.className = "badge bg-success text-light font-monospace px-3 py-2";

                const shuffled = [...PLANT_DATABASE].sort(() => 0.5 - Math.random());
                const topMatch = shuffled[0];
                const match2 = shuffled[1];
                const match3 = shuffled[2];

                familyResults.innerHTML = `
                    <div class="mb-2">
                        <div class="d-flex justify-content-between small font-weight-bold mb-1">
                            <span>1. ${topMatch.family}</span>
                            <span class="text-success fw-bold">94.2%</span>
                        </div>
                        <div class="progress" style="height: 8px;">
                            <div class="progress-bar bg-success" style="width: 94.2%"></div>
                        </div>
                    </div>
                    <div class="mb-2">
                        <div class="d-flex justify-content-between small mb-1">
                            <span>2. ${match2.family}</span>
                            <span>4.8%</span>
                        </div>
                        <div class="progress" style="height: 8px;">
                            <div class="progress-bar bg-info" style="width: 14.8%"></div>
                        </div>
                    </div>
                    <div class="mb-2">
                        <div class="d-flex justify-content-between small mb-1">
                            <span>3. ${match3.family}</span>
                            <span>1.0%</span>
                        </div>
                        <div class="progress" style="height: 8px;">
                            <div class="progress-bar bg-secondary" style="width: 5%"></div>
                        </div>
                    </div>
                `;

                plantResults.innerHTML = `
                    <div class="list-group">
                        <div class="list-group-item d-flex align-items-center gap-3 p-2">
                            <img src="${topMatch.image}" class="rounded" width="50" height="50" style="object-fit: cover;">
                            <div class="flex-grow-1">
                                <h6 class="mb-0 fw-bold">${topMatch.name}</h6>
                                <small class="text-muted fst-italic">${topMatch.scientificName}</small>
                            </div>
                            <span class="badge bg-success">Alta</span>
                        </div>
                        <div class="list-group-item d-flex align-items-center gap-3 p-2">
                            <img src="${match2.image}" class="rounded" width="50" height="50" style="object-fit: cover;">
                            <div class="flex-grow-1">
                                <h6 class="mb-0 fw-bold">${match2.name}</h6>
                                <small class="text-muted fst-italic">${match2.scientificName}</small>
                            </div>
                        </div>
                        <div class="list-group-item d-flex align-items-center gap-3 p-2">
                            <img src="${match3.image}" class="rounded" width="50" height="50" style="object-fit: cover;">
                            <div class="flex-grow-1">
                                <h6 class="mb-0 fw-bold">${match3.name}</h6>
                                <small class="text-muted fst-italic">${match3.scientificName}</small>
                            </div>
                        </div>
                    </div>
                `;

            }, 2000);
        }
