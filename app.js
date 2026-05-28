/* -------------------------------------------------------------------------
   D' MERHY BOUTIQUE - LÓGICA DE INTERACTIVIDAD & CATÁLOGO DINÁMICO
   Enfoque: Rendimiento Ultra-Optimizado, Transiciones de Lujo y SEO
   ------------------------------------------------------------------------- */

/* =========================================================================
   1. CONFIGURACIÓN PERSONALIZADA PARA MATHIAS
   Edita aquí tus enlaces principales y dirección. Ya he colocado tus datos reales
   para que funcione de inmediato, pero puedes modificarlos cuando desees.
   ========================================================================= */
const CONFIG_MATHIAS = {
    // <!-- Mathias, coloca el link de Instagram aquí -->
    instagram: "https://www.instagram.com/merhyboutique/",
    
    // <!-- Mathias, llena tu dirección aquí -->
    ubicacion: "https://www.google.com/maps/place/D'+Merhy+Boutique/@-0.3414867,-78.4801948,3a,75y/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgIC-9fzflQE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAPNQkAGAXAPG3I6SRqp9C6N8mMy5WR1LUQRCWl-pT04aYo8oMpg2e3Uwqq_IaO3oN6Ht7akNY5AR_J-PpIOW84hcLNAxdjOmzSZJH3RaXot-tuCIyVDyKyO-uSGCSGe1rddnkcAcA6otBA%3Dw86-h114-k-no!7i1340!8i1785!4m7!3m6!1s0x91d5a36047307631:0xf06a226951f3a145!8m2!3d-0.3415436!4d-78.4800978!10e5!16s%2Fg%2F11jzlr28ws?entry=ttu&g_ep=EgoyMDI2MDUyNi4wIKXMDSoASAFQAw%3D%3D",
    
    // Teléfono de contacto privado (con código de país)
    whatsappNumber: "593995199498",
    
    // Texto descriptivo de la dirección que aparecerá en el footer
    direccionTexto: "San Rafael, Valle de los Chillos, D' Merhy Boutique (Quito, Ecuador)"
};

/* =========================================================================
   2. ARRAY DE OBJETOS `productos` (ARQUITECTURA ESCALABLE)
   Define las piezas exclusivas. Si deseas agregar más coronas en el futuro,
   solo agrégalas a este array y el catálogo se actualizará automáticamente.
   ========================================================================= */
const productos = [
    {
        id: "imperial-aurelia",
        nombre: "Corona Imperial Aurelia",
        coleccion: "Colección Imperial",
        subtitulo: "Corona para Quinceañeras",
        imagen: "images/corona-quinceanera.png",
        materiales: "Espléndida tiara esculpida a mano en plata de ley con baño de oro de 24 quilates. Adornada con cristales de cuarzo seleccionados por su pureza celestial, zafiros blancos corte marquesa y circonias cúbicas premium engastadas en microfiligrana.",
        precio: 1450, // Valor oculto para futura fase de carrito
        detallesExclusivos: "Cada faceta de esta pieza ha sido pulida de manera artesanal durante más de 80 horas de trabajo continuo en nuestro taller."
    },
    {
        id: "nupcial-beatrice",
        nombre: "Tiara Nupcial Beatrice",
        coleccion: "Colección Nupcial",
        subtitulo: "Tiara de Novia Exclusiva",
        imagen: "images/tiara-novia.png",
        materiales: "Delicada tiara de novia cincelada en platino de alta pureza y oro blanco de 18 quilates. Decorada con perlas naturales cultivadas en agua dulce con brillo nacarado de grado AAA e incrustaciones de diamantes sintéticos seleccionados a mano por su destello excepcional.",
        precio: 1890,
        detallesExclusivos: "Diseñada para reflejar la gracia de la realeza clásica con una estructura ligera y anatómica que garantiza máxima comodidad durante la ceremonia."
    },
    {
        id: "gala-vittoria",
        nombre: "Corona de Gala Vittoria",
        coleccion: "Colección Galas",
        subtitulo: "Corona de Certamen e Impacto",
        imagen: "images/corona-gala.png",
        materiales: "Imponente corona de gala elaborada con una estructura simétrica de oro amarillo satinado. Cuenta con gemas semipreciosas facetadas en corte brillante, rodeadas de una aureola de cristales Swarovski que capturan la luz desde cualquier ángulo.",
        precio: 2400,
        detallesExclusivos: "Una obra maestra de presencia escénica insuperable. Ideal para certámenes de alta costura, galas prestigiosas y editoriales de moda."
    },
    {
        id: "nupcial-cristal",
        nombre: "Tiara de Cristal Aureum",
        coleccion: "Colección Nupcial",
        subtitulo: "Tiara de Cristal de Roca",
        imagen: "images/tiara-cristal.png",
        materiales: "Espectacular tiara cincelada a mano con delicados hilos de oro blanco y platino, engastada con cristales de roca de transparencia absoluta y circonias cúbicas corte brillante seleccionadas por su brillo hipnótico.",
        precio: 2150,
        detallesExclusivos: "Una pieza que emana luz pura y ligereza celestial, diseñada para novias que buscan una combinación refinada de tradición y modernidad."
    },
    {
        id: "imperial-isabella",
        nombre: "Corona Reina Isabella",
        coleccion: "Colección Imperial",
        subtitulo: "Corona Imperial de Gala",
        imagen: "images/corona-reina.png",
        materiales: "Corona cerrada de estilo imperial clásico elaborado con una base de plata fina con baño de oro amarillo satinado de 24K, enriquecida con gemas semipreciosas talladas artesanalmente y engastes de precisión.",
        precio: 2900,
        detallesExclusivos: "Una pieza imponente de simetría y majestad inigualables, esculpida a mano a lo largo de varias semanas para eventos de máxima distinción y elegancia."
    },
    {
        id: "gala-esmeralda",
        nombre: "Tiara Esmeralda Royale",
        coleccion: "Colección Galas",
        subtitulo: "Edición Especial Esmeralda",
        imagen: "images/tiara-esmeralda.png",
        materiales: "Exclusiva tiara de gala en oro blanco de 18K, decorada con circonias de corte marquesa que envuelven tres espectaculares gemas de cristal esmeralda pulidas individualmente por orfebres expertos.",
        precio: 2600,
        detallesExclusivos: "El contraste de las esmeraldas intensas y el oro blanco crea una corona de presencia cautivadora y sofisticación sin parangón en la alta costura."
    }
];

/* =========================================================================
   3. INICIALIZACIÓN DE LA APLICACIÓN AL CARGAR EL DOM
   ========================================================================= */
document.addEventListener("DOMContentLoaded", () => {
    inyectarEnlacesMathias();
    renderizarCatalogo();
    inicializarNavegacionScroll();
    inicializarMenuMovil();
    inicializarModal();
    inicializarScrollReveal();
    asegurarVideoAutoplay();
});

/* =========================================================================
   4. INYECCIÓN DINÁMICA DE ENLACES DE CONTROL (MATHIAS)
   Inyecta los datos de contacto y mapas de forma segura en el HTML vacío.
   ========================================================================= */
function inyectarEnlacesMathias() {
    const instagramLink = document.getElementById("instagram-link");
    const locationLink = document.getElementById("location-link");

    if (instagramLink) {
        instagramLink.setAttribute("href", CONFIG_MATHIAS.instagram);
        // Si el link de Instagram está vacío en la configuración, muestra un texto sutil
        if (!CONFIG_MATHIAS.instagram) {
            instagramLink.style.opacity = "0.5";
            instagramLink.querySelector("span").textContent = "Enlace de Instagram Próximamente";
        }
    }

    if (locationLink) {
        locationLink.setAttribute("href", CONFIG_MATHIAS.ubicacion);
        const spanText = locationLink.querySelector("span");
        if (spanText) {
            spanText.textContent = CONFIG_MATHIAS.direccionTexto;
        }
        if (!CONFIG_MATHIAS.ubicacion) {
            locationLink.style.opacity = "0.5";
            spanText.textContent = "Dirección no configurada";
        }
    }
}

/* =========================================================================
   5. RENDERIZADO DEL CATÁLOGO DE ULTRA LUJO
   Inyecta de forma eficiente las tarjetas de producto en el contenedor vacío.
   ========================================================================= */
function renderizarCatalogo() {
    const contenedor = document.getElementById("catalogo-container");
    if (!contenedor) return;

    // Generar las tarjetas usando Template Literals
    const htmlTarjetas = productos.map(producto => {
        return `
            <article class="product-card" data-id="${producto.id}">
                <div class="product-image-container">
                    <span class="collection-tag">${producto.coleccion}</span>
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image" loading="lazy">
                </div>
                <div class="product-details">
                    <h3 class="product-title">${producto.nombre}</h3>
                    <p class="product-materials">${producto.materiales}</p>
                    <button class="btn-card-action" data-id="${producto.id}">Solicitar Pieza Exclusiva</button>
                </div>
            </article>
        `;
    }).join("");

    contenedor.innerHTML = htmlTarjetas;

    // Añadir manejadores de clics a las tarjetas y botones
    const tarjetas = contenedor.querySelectorAll(".product-card");
    tarjetas.forEach(tarjeta => {
        const id = tarjeta.getAttribute("data-id");
        
        // Clic en la tarjeta abre el detalle en modal
        tarjeta.addEventListener("click", (e) => {
            // Evitar doble evento si se hace clic directo en el botón de acción
            if (e.target.classList.contains("btn-card-action")) return;
            abrirModalDetalle(id);
        });

        // Clic en el botón directo abre también el modal
        const botonAction = tarjeta.querySelector(".btn-card-action");
        if (botonAction) {
            botonAction.addEventListener("click", () => {
                abrirModalDetalle(id);
            });
        }
    });
}

/* =========================================================================
   6. NAVEGACIÓN Y EFECTOS DE SCROLL (SUAVE & PREMIUM)
   ========================================================================= */
function inicializarNavegacionScroll() {
    const header = document.getElementById("main-header");
    const links = document.querySelectorAll(".nav-link, #cta-scroll");

    // Efecto de barra de navegación al hacer scroll (Añade fondo sólido y sombra)
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        // Resaltar sección activa en barra de navegación
        actualizarLinkActivoMenu();
    });

    // Desplazamiento Suave (Scroll Suave)
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            if (targetId === "#") {
                window.scrollTo({ top: 0, behavior: "smooth" });
                return;
            }

            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                // Cerrar menú móvil si está abierto
                const navMenu = document.getElementById("nav-menu");
                const navToggle = document.getElementById("menu-toggle");
                if (navMenu && navMenu.classList.contains("active")) {
                    navMenu.classList.remove("active");
                    navToggle.classList.remove("active");
                }

                // Calcular posición compensando la altura de la navbar
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
}

// Función para actualizar el enlace del menú según la sección actual en pantalla
function actualizarLinkActivoMenu() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    const headerHeight = document.getElementById("main-header").offsetHeight + 20;

    let currentSectionId = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
            link.classList.add("active");
        }
    });
}

/* =========================================================================
   7. CONTROL DE MENÚ MÓVIL RESPONSIVE
   ========================================================================= */
function inicializarMenuMovil() {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("nav-menu");

    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {
        toggle.classList.toggle("active");
        menu.classList.toggle("active");
    });

    // Cerrar el menú automáticamente al hacer clic en cualquier enlace (UX Excelente)
    const navLinks = menu.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            toggle.classList.remove("active");
            menu.classList.remove("active");
        });
    });

    // Ajustar menú al redimensionar pantalla para prevenir inconsistencias de renderizado
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768 && menu.classList.contains("active")) {
            toggle.classList.remove("active");
            menu.classList.remove("active");
        }
    });
}

/* =========================================================================
   8. CONTROL DE VENTANA MODAL DE DETALLE PREMIUM
   Abre una vista suntuosa del producto y genera el enlace WhatsApp dinámico.
   ========================================================================= */
let modalOverlay;
let modalCloseBtn;

function inicializarModal() {
    modalOverlay = document.getElementById("product-modal");
    modalCloseBtn = document.getElementById("modal-close-btn");

    if (!modalOverlay || !modalCloseBtn) return;

    // Cerrar con botón
    modalCloseBtn.addEventListener("click", cerrarModalDetalle);

    // Cerrar al hacer clic fuera del contenedor modal (en el overlay)
    modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) {
            cerrarModalDetalle();
        }
    });

    // Cerrar al presionar la tecla Esc
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modalOverlay.classList.contains("open")) {
            cerrarModalDetalle();
        }
    });
}

function abrirModalDetalle(productoId) {
    const producto = productos.find(p => p.id === productoId);
    if (!producto) return;

    // Encontrar elementos del modal
    const modalImg = document.getElementById("modal-product-img");
    const modalTitle = document.getElementById("modal-product-title");
    const modalCollection = document.getElementById("modal-product-collection");
    const modalMaterials = document.getElementById("modal-product-materials");
    const actionContainer = document.getElementById("modal-action-container");

    if (!modalImg || !modalTitle || !modalCollection || !modalMaterials || !actionContainer) return;

    // Rellenar información con transición suave
    modalImg.setAttribute("src", producto.imagen);
    modalImg.setAttribute("alt", producto.nombre);
    modalTitle.textContent = producto.nombre;
    modalCollection.textContent = `${producto.coleccion} — ${producto.subtitulo}`;
    modalMaterials.innerHTML = `
        <strong>Composición & Diseño:</strong><br>${producto.materiales}<br><br>
        <strong>Sello de Atelier:</strong><br>${producto.detallesExclusivos}
    `;

    // Crear Mensaje Personalizado de WhatsApp de Ultra-Lujo
    const mensajeWhatsapp = `Hola D' Merhy Boutique. Deseo agendar una asesoría privada para solicitar información personalizada sobre la pieza exclusiva: *${producto.nombre}* (${producto.subtitulo}) de la *${producto.coleccion}*. Quedo atento a su respuesta para coordinar los detalles.`;
    const whatsappUrl = `https://wa.me/${CONFIG_MATHIAS.whatsappNumber}?text=${encodeURIComponent(mensajeWhatsapp)}`;

    // Inyectar el botón de acción exclusivo
    actionContainer.innerHTML = `
        <a href="${whatsappUrl}" target="_blank" class="btn-modal-action">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="svg-icon">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            <span>Solicitar Asesoría de Lujo</span>
        </a>
    `;

    // Prevenir el scroll en el body de fondo mientras el modal está abierto
    document.body.style.overflow = "hidden";

    // Abrir Modal
    modalOverlay.classList.add("open");
}

function cerrarModalDetalle() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove("open");
    
    // Devolver el scroll al body de fondo
    document.body.style.overflow = "";
}

/* =========================================================================
   9. EFECTO SCROLL REVEAL (ANIMACIÓN AL DESPLAZARSE)
   Revela las tarjetas del catálogo con una transición elegante al entrar en el viewport.
   ========================================================================= */
function inicializarScrollReveal() {
    const cards = document.querySelectorAll(".product-card");
    const philosophySection = document.querySelector(".philosophy-section");

    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal");
                    // Dejar de observar la tarjeta una vez animada
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        cards.forEach(card => {
            observer.observe(card);
        });

        // Revelar también de forma elegante la sección de filosofía
        if (philosophySection) {
            philosophySection.style.opacity = "0";
            philosophySection.style.transition = "opacity 1.5s var(--transition-slow)";
            
            const philosophyObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = "1";
                        observer.unobserve(entry.target);
                    }
                });
            }, { root: null, threshold: 0.1 });

            philosophyObserver.observe(philosophySection);
        }
    } else {
        // Fallback para navegadores antiguos
        cards.forEach(card => {
            card.classList.add("reveal");
        });
    }
}

/* =========================================================================
   10. SOPORTE DE REPRODUCCIÓN AUTOMÁTICA EN SAFARI (iOS)
   Fuerza la reproducción del video en segundo plano en dispositivos Apple.
   ========================================================================= */
function asegurarVideoAutoplay() {
    const video = document.getElementById("hero-video");
    if (video) {
        // Ejecución inmediata con fallback
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Autoplay asistido de Safari ejecutado. Toque de pantalla requerido en modo ahorro:", error);
                
                // Fallback: reproducir al hacer el primer toque en la pantalla
                document.body.addEventListener("click", () => {
                    video.play();
                }, { once: true });
            });
        }
    }
}
