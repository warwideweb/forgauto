// PartForge — App Logic

// Placeholder Parts Data
const parts = [
    {
        id: 1,
        title: "Universal Drone Motor Mount",
        category: "drone",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop",
        seller: "DroneBuilder",
        email: "dronebuilder@example.com",
        description: "Universal motor mount compatible with 2204-2306 motors. Designed for 5\" racing quads. Includes vibration dampening slots.",
        format: "STL",
        size: "2.4 MB",
        downloads: 234
    },
    {
        id: 2,
        title: "Tesla-Style Phone Mount",
        category: "automotive",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        seller: "AutoParts3D",
        email: "autoparts@example.com",
        description: "Minimalist phone mount for car vents. Ball joint design allows 360° rotation. Fits phones up to 6.7 inches.",
        format: "STL, STEP",
        size: "1.8 MB",
        downloads: 567
    },
    {
        id: 3,
        title: "Raspberry Pi 4 Case",
        category: "electronics",
        price: 2.99,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
        seller: "MakerSteve",
        email: "steve@makerspace.com",
        description: "Compact case for Raspberry Pi 4 with GPIO access and ventilation slots. Snap-fit design, no screws needed.",
        format: "STL",
        size: "890 KB",
        downloads: 1205
    },
    {
        id: 4,
        title: "Planetary Gear Set",
        category: "mechanical",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
        seller: "GearHead",
        email: "gearhead@example.com",
        description: "5:1 ratio planetary gearbox. Printable with standard FDM printer. Designed for NEMA 17 stepper motors.",
        format: "STL, STEP",
        size: "4.2 MB",
        downloads: 892
    },
    {
        id: 5,
        title: "Modular Cable Management",
        category: "home",
        price: 1.99,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        seller: "CleanDesk",
        email: "cleandesk@example.com",
        description: "Snap-together cable clips for desk organization. Set includes straight, corner, and T-junction pieces.",
        format: "STL",
        size: "1.2 MB",
        downloads: 2341
    },
    {
        id: 6,
        title: "RC Car Suspension Arms",
        category: "hobby",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=400&h=300&fit=crop",
        seller: "RCMaster",
        email: "rcmaster@example.com",
        description: "Replacement suspension arms for 1/10 scale RC cars. Compatible with Traxxas Slash. Reinforced design.",
        format: "STL",
        size: "3.1 MB",
        downloads: 445
    },
    {
        id: 7,
        title: "GoPro FPV Mount",
        category: "drone",
        price: 2.49,
        image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=400&h=300&fit=crop",
        seller: "FPVPilot",
        email: "fpvpilot@example.com",
        description: "30° tilted GoPro mount for FPV drones. TPU recommended for crash resistance. Fits Hero 8-12.",
        format: "STL",
        size: "560 KB",
        downloads: 1123
    },
    {
        id: 8,
        title: "Arduino Project Box",
        category: "electronics",
        price: 1.49,
        image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=400&h=300&fit=crop",
        seller: "ElectronicsMaker",
        email: "em@example.com",
        description: "Customizable project enclosure for Arduino Uno. Features lid with snap fit and ventilation holes.",
        format: "STL, STEP",
        size: "1.5 MB",
        downloads: 876
    },
    {
        id: 9,
        title: "Timing Belt Pulley Set",
        category: "mechanical",
        price: 4.49,
        image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=300&fit=crop",
        seller: "CNCBuilder",
        email: "cnc@example.com",
        description: "GT2 timing pulleys in various teeth counts (16T, 20T, 36T). For CNC and 3D printer builds.",
        format: "STL, STEP",
        size: "2.8 MB",
        downloads: 654
    },
    {
        id: 10,
        title: "Dashboard Phone Holder",
        category: "automotive",
        price: 3.49,
        image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=300&fit=crop",
        seller: "CarMods3D",
        email: "carmods@example.com",
        description: "Low-profile dashboard mount. Uses 3M adhesive base. Spring-loaded grip fits any phone.",
        format: "STL",
        size: "980 KB",
        downloads: 432
    },
    {
        id: 11,
        title: "Desk Headphone Stand",
        category: "home",
        price: 2.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
        seller: "DeskSetup",
        email: "desk@example.com",
        description: "Minimalist headphone stand with cable management. Weighted base for stability.",
        format: "STL",
        size: "2.1 MB",
        downloads: 1567
    },
    {
        id: 12,
        title: "RC Plane Servo Mounts",
        category: "hobby",
        price: 1.99,
        image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=400&h=300&fit=crop",
        seller: "AeroRC",
        email: "aero@example.com",
        description: "Universal servo mounts for 9g servos. Set of 4 with different angles for control surfaces.",
        format: "STL",
        size: "450 KB",
        downloads: 234
    }
];

// Placeholder Designers Data
const designers = [
    {
        id: 1,
        name: "Alex Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
        title: "Mechanical Engineer & 3D Designer",
        email: "alex@designstudio.com",
        rate: "$45/hr",
        projects: 127,
        rating: 4.9,
        tags: ["Mechanical", "Automotive", "Prototyping"],
        bio: "10+ years in product design. Specialized in functional mechanical parts and automotive components. I work with Fusion 360 and SolidWorks.",
        portfolio: [
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=300&h=300&fit=crop"
        ]
    },
    {
        id: 2,
        name: "Sarah Miller",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
        title: "Industrial Designer",
        email: "sarah@creativeparts.io",
        rate: "$55/hr",
        projects: 89,
        rating: 5.0,
        tags: ["Consumer Products", "Enclosures", "Artistic"],
        bio: "Former Apple contractor. I design beautiful, functional parts that look as good as they work. Expertise in consumer electronics enclosures.",
        portfolio: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
        ]
    },
    {
        id: 3,
        name: "Mike Rodriguez",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
        title: "Drone & RC Specialist",
        email: "mike@dronepartspro.com",
        rate: "$35/hr",
        projects: 213,
        rating: 4.8,
        tags: ["Drones", "FPV", "RC", "Hobby"],
        bio: "FPV pilot turned designer. I've designed parts for thousands of pilots. Specializing in mounts, frames, and functional RC components.",
        portfolio: [
            "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=300&h=300&fit=crop"
        ]
    },
    {
        id: 4,
        name: "Emily Watson",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
        title: "Rapid Prototyper",
        email: "emily@protofast.design",
        rate: "$50/hr",
        projects: 156,
        rating: 4.9,
        tags: ["Prototyping", "Startups", "Fast Turnaround"],
        bio: "I help startups go from idea to physical prototype in days, not weeks. 48-hour turnaround on most projects. SLA and FDM expertise.",
        portfolio: [
            "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=300&h=300&fit=crop"
        ]
    },
    {
        id: 5,
        name: "James Park",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
        title: "Automotive Parts Designer",
        email: "james@autofab.design",
        rate: "$60/hr",
        projects: 78,
        rating: 4.7,
        tags: ["Automotive", "Carbon Fiber", "Performance"],
        bio: "Ex-Tesla engineer. I design parts that can handle real-world stress. Specialize in automotive, especially EV and performance applications.",
        portfolio: [
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop"
        ]
    },
    {
        id: 6,
        name: "Lisa Tanaka",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
        title: "Electronics Enclosure Expert",
        email: "lisa@enclosurelab.com",
        rate: "$40/hr",
        projects: 198,
        rating: 4.9,
        tags: ["Electronics", "Enclosures", "IoT"],
        bio: "I design enclosures that protect your electronics and look professional. Waterproof, snap-fit, and custom solutions for any project.",
        portfolio: [
            "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop"
        ]
    }
];

// State
let currentCategory = 'all';
let currentView = 'home';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderParts();
    renderDesigners();
});

// View Navigation
function showView(view) {
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.view === view) {
            link.classList.add('active');
        }
    });

    // Update views
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(view + 'View').classList.add('active');

    // Show/hide hero
    document.getElementById('hero').style.display = view === 'home' ? 'block' : 'none';

    currentView = view;
}

// Render Parts
function renderParts(filteredParts = parts) {
    const grid = document.getElementById('partsGrid');
    grid.innerHTML = filteredParts.map(part => `
        <div class="part-card" onclick="openPartModal(${part.id})">
            <img src="${part.image}" alt="${part.title}" class="part-image">
            <div class="part-info">
                <h3 class="part-title">${part.title}</h3>
                <div class="part-meta">
                    <span class="part-category">${capitalizeFirst(part.category)}</span>
                    <span class="part-price">$${part.price.toFixed(2)}</span>
                </div>
                <p class="part-seller">by ${part.seller}</p>
            </div>
        </div>
    `).join('');
}

// Render Designers
function renderDesigners() {
    const grid = document.getElementById('designersGrid');
    grid.innerHTML = designers.map(designer => `
        <div class="designer-card" onclick="openDesignerModal(${designer.id})">
            <div class="designer-header">
                <img src="${designer.avatar}" alt="${designer.name}" class="designer-avatar">
                <div class="designer-info">
                    <h3>${designer.name}</h3>
                    <p>${designer.title}</p>
                </div>
            </div>
            <div class="designer-stats">
                <span><strong>${designer.projects}</strong> projects</span>
                <span><strong>${designer.rating}</strong> ⭐</span>
            </div>
            <div class="designer-rate">${designer.rate}</div>
            <div class="designer-tags">
                ${designer.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Filter by Category
function filterCategory(category) {
    currentCategory = category;
    if (category === 'all') {
        renderParts();
    } else {
        renderParts(parts.filter(p => p.category === category));
    }
}

// Search
function handleSearch(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
}

function performSearch() {
    const query = document.getElementById('heroSearch').value.toLowerCase();
    if (!query) {
        renderParts();
        return;
    }
    const filtered = parts.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    );
    renderParts(filtered);
}

// Sort
function sortParts() {
    const sort = document.getElementById('sortFilter').value;
    let sorted = [...parts];
    
    if (currentCategory !== 'all') {
        sorted = sorted.filter(p => p.category === currentCategory);
    }

    switch (sort) {
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'popular':
            sorted.sort((a, b) => b.downloads - a.downloads);
            break;
        default:
            sorted.sort((a, b) => b.id - a.id);
    }
    
    renderParts(sorted);
}

// Part Modal
function openPartModal(id) {
    const part = parts.find(p => p.id === id);
    if (!part) return;

    const modal = document.getElementById('partModal');
    const body = document.getElementById('modalBody');

    body.innerHTML = `
        <img src="${part.image}" alt="${part.title}" class="modal-image">
        <h2 class="modal-title">${part.title}</h2>
        <p class="modal-category">${capitalizeFirst(part.category)} • by ${part.seller}</p>
        <div class="modal-price">$${part.price.toFixed(2)}</div>
        <p class="modal-description">${part.description}</p>
        <div class="modal-details">
            <div class="detail-item">
                <span class="detail-label">Format</span>
                <span class="detail-value">${part.format}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">File Size</span>
                <span class="detail-value">${part.size}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Downloads</span>
                <span class="detail-value">${part.downloads}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Seller</span>
                <span class="detail-value">${part.seller}</span>
            </div>
        </div>
        <div class="modal-actions">
            <button class="btn btn-primary" onclick="buyPart(${part.id})">
                Buy Now — $${part.price.toFixed(2)}
            </button>
            <a href="mailto:${part.email}?subject=Question about: ${part.title}" class="btn btn-secondary">
                Contact Seller
            </a>
        </div>
    `;

    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('partModal').classList.remove('active');
}

// Designer Modal
function openDesignerModal(id) {
    const designer = designers.find(d => d.id === id);
    if (!designer) return;

    const modal = document.getElementById('designerModal');
    const body = document.getElementById('designerModalBody');

    body.innerHTML = `
        <div class="designer-modal-header">
            <img src="${designer.avatar}" alt="${designer.name}" class="designer-modal-avatar">
            <div class="designer-modal-info">
                <h2>${designer.name}</h2>
                <p>${designer.title}</p>
                <div class="designer-stats">
                    <span><strong>${designer.projects}</strong> projects</span>
                    <span><strong>${designer.rating}</strong> ⭐</span>
                </div>
                <div class="designer-rate" style="margin:0">${designer.rate}</div>
            </div>
        </div>
        <p class="modal-description">${designer.bio}</p>
        <h3 style="margin: 24px 0 16px;">Portfolio</h3>
        <div class="portfolio-grid">
            ${designer.portfolio.map(img => `
                <div class="portfolio-item">
                    <img src="${img}" alt="Portfolio work">
                </div>
            `).join('')}
        </div>
        <div class="designer-tags" style="margin-bottom: 24px;">
            ${designer.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <div class="modal-actions">
            <a href="mailto:${designer.email}?subject=Design Project Inquiry" class="btn btn-primary">
                Hire ${designer.name.split(' ')[0]} — ${designer.rate}
            </a>
            <a href="mailto:${designer.email}" class="btn btn-secondary">
                Send Message
            </a>
        </div>
    `;

    modal.classList.add('active');
}

function closeDesignerModal() {
    document.getElementById('designerModal').classList.remove('active');
}

// Buy Part (placeholder for Stripe integration)
function buyPart(id) {
    const part = parts.find(p => p.id === id);
    if (!part) return;

    // TODO: Replace with Stripe checkout
    alert(`Stripe checkout coming soon!\n\nPart: ${part.title}\nPrice: $${part.price.toFixed(2)}\n\nFor now, contact the seller directly.`);
}

// Handle Listing Form
function handleListing(event) {
    event.preventDefault();
    
    // TODO: Replace with actual upload to Cloudflare R2 + Stripe for listing fee
    alert('Listing submission coming soon!\n\nWe\'re setting up payments and file storage.\nCheck back shortly!');
}

// Close modals on outside click
document.getElementById('partModal').addEventListener('click', (e) => {
    if (e.target.id === 'partModal') closeModal();
});

document.getElementById('designerModal').addEventListener('click', (e) => {
    if (e.target.id === 'designerModal') closeDesignerModal();
});

// Escape key closes modals
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
        closeDesignerModal();
    }
});

// Utility
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
