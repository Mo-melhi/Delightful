// Activity data with detailed descriptions and multiple images
const activityData = {
    'perge': {
        title: 'Perge, Aspendos, and Side Tour',
        date: 'Sunday, January 18th',
        badge: 'optional',
        description: `
            <h3>Explore Ancient Wonders</h3>
            <p>Perge is an ancient city that once served as the capital of the Pamphylia region. It is also known for its blend of historical and mystical touch of the Mediterranean region since it has been created by mixing Mediterranean roots with modern life in many areas. Aspendos is an ancient Greco-Roman city that was situated on the Eurymedon River about 16 km inland from the Mediterranean Sea. It is famous for having one of the best-preserved Roman theaters in the entire Mediterranean world. Side is a city that includes the modern resort town and the ruins of the ancient city. Imposing monuments of antiquity, such as the Roman bath and the columns of the Apollo temple by the sea..</p>
            <p><strong>Duration:</strong> Full day (approximately 8-9 hours)</p>
            <p><strong>What to bring:</strong> Comfortable walking shoes, sun protection, camera</p>
        `,
        images: [
            '1-1.jpg',
            '1-2.webp',
            '1-3.webp',
            '1-4.jpg'
        ]
    },
    'antalya-old-town': {
        title: 'Antalya Old Town Tour',
        date: 'Monday, January 19th',
        badge: 'optional',
        description: `
            <h3>Discover Historic Kaleiçi</h3>
            <p>Step into the heart of Antalya's historic quarter, Kaleiçi, where Ottoman-era architecture meets Mediterranean charm. This walking tour takes you through narrow cobblestone streets lined with beautifully restored houses, boutique hotels, and authentic restaurants.</p>
            
            <h4>Hadrian's Gate</h4>
            <p>Begin your journey at this magnificent Roman triumphal arch, built in 130 AD to honor Emperor Hadrian's visit. The gate's intricate marble carvings and three arches remain remarkably intact.</p>
            
            <h4>Old Harbor</h4>
            <p>Stroll down to the picturesque marina, where traditional wooden boats bob in crystal-clear waters. The harbor, surrounded by ancient city walls, offers stunning views and numerous cafes where you can enjoy Turkish tea.</p>
            
            <h4>Historic Mosques and Landmarks</h4>
            <p>Visit the Yivli Minaret Mosque, a symbol of Antalya with its distinctive fluted minaret, and explore other Ottoman-era buildings that showcase the city's rich Islamic heritage.</p>
            
            <p><strong>Duration:</strong> Half day (approximately 4 hours)</p>
            <p><strong>Includes:</strong> Walking tour guide, entrance to key sites</p>
            <p><strong>Perfect for:</strong> Photography enthusiasts, history lovers, culture seekers</p>
        `,
        images: [
            '2-1.jpg',
            '2-2.jpg',
            '2-3.jpg',
            '2-4.webp'
        ]
    },
    'aquarium': {
        title: 'Antalya Aquarium Tour',
        date: 'Tuesday, January 20th',
        badge: 'optional',
        description: `
            <h3>Dive into Marine Wonders</h3>
            <p>Experience one of the world's largest aquarium complexes, featuring the longest tunnel aquarium with a length of 131 meters and a width of 3 meters. This state-of-the-art facility offers an unforgettable journey through diverse marine ecosystems.</p>
            
            <h4>Tunnel Aquarium</h4>
            <p>Walk through the mesmerizing underwater tunnel surrounded by sharks, rays, and thousands of tropical fish. The 360-degree viewing experience makes you feel like you're walking on the ocean floor.</p>
            
            <h4>Tropical Reef</h4>
            <p>Explore vibrant coral reef ecosystems teeming with colorful fish, sea turtles, and exotic marine life from around the world. Learn about coral conservation and the importance of marine biodiversity.</p>
            
            <h4>Snow World & Ice Museum</h4>
            <p>Experience a unique contrast with the aquarium's Snow World, where you can enjoy sub-zero temperatures, ice sculptures, and even go sledding—a perfect escape from the Mediterranean heat!</p>
            
            <p><strong>Duration:</strong> 3-4 hours</p>
            <p><strong>Includes:</strong> Entrance ticket, guided tour of main exhibits</p>
            <p><strong>Highlights:</strong> Touch pools, feeding shows, educational presentations</p>
        `,
        images: [
            '3-1.jpg',
            '3-2.jpg',
            '3-3.jpg',
            '3-4.jpeg'
        ]
    },
    'tahtali': {
        title: 'Tahtalı Mountain and Phaselis Tour',
        date: 'Wednesday, January 21st',
        badge: 'optional',
        description: `
            <h3>Summit the Coastal Mountains</h3>
            <p>Experience breathtaking views from 2,365 meters above sea level as you ascend Tahtalı Mountain (Olympos Teleferik) via cable car. This tour combines mountain adventure with ancient history at the ruins of Phaselis.</p>
            
            <h4>Cable Car Journey</h4>
            <p>Enjoy a spectacular 12-minute cable car ride that climbs from sea level to the summit. The panoramic views of the Taurus Mountains, Mediterranean coastline, and surrounding landscape are simply unforgettable. On clear days, you can see for miles in every direction.</p>
            
            <h4>Summit Experience</h4>
            <p>At the top, explore viewing platforms, enjoy refreshments at the summit café, and take in the crisp mountain air. Winter visits offer the unique opportunity to experience snow while being just minutes away from the warm Mediterranean coast.</p>
            
            <h4>Phaselis Ancient City</h4>
            <p>Descend to explore the ruins of Phaselis, an ancient Lycian port city founded in the 7th century BC. Walk along the ancient harbor, through the agora, and see the well-preserved aqueduct and theater, all set against the stunning backdrop of pine forests and turquoise waters.</p>
            
            <p><strong>Duration:</strong> Full day (approximately 7-8 hours)</p>
            <p><strong>Includes:</strong> Cable car tickets, entrance to Phaselis, lunch</p>
            <p><strong>Note:</strong> Bring warm clothing for the summit and swimwear for the beach at Phaselis</p>
        `,
        images: [
            '4-1.jpg',
            '4-2.jpeg',
            '4-3.jpeg',
            '4-4.webp'
        ]
    },
    'waterfalls': {
        title: 'Düden and Kurşunlu Waterfalls Tour',
        date: 'Thursday, January 22nd',
        badge: 'optional',
        description: `
            <h3>Nature's Spectacular Display</h3>
            <p>Immerse yourself in the natural beauty of Antalya's most impressive waterfalls. This tour takes you to two distinct waterfall sites, each offering unique landscapes and photo opportunities.</p>
            
            <h4>Upper Düden Waterfall</h4>
            <p>Begin at the Upper Düden Waterfall, where you can walk behind the cascading water through natural caves. The park surrounding the falls features lush gardens, walking paths, and picnic areas. The roar of the water and the cool mist create a refreshing atmosphere.</p>
            
            <h4>Lower Düden Waterfall</h4>
            <p>Visit where the Düden River dramatically plunges 40 meters directly into the Mediterranean Sea from rocky cliffs. This spectacular sight is best viewed from a boat or the viewing platforms along the coast. The contrast of fresh water meeting the sea creates a stunning natural phenomenon.</p>
            
            <h4>Kurşunlu Waterfall Nature Park</h4>
            <p>Explore this hidden gem nestled in a pine forest. The 18-meter waterfall feeds into a series of small ponds and streams, creating a tranquil oasis. The park's wooden walkways wind through the forest, offering multiple viewpoints and the chance to spot local wildlife including turtles and various bird species.</p>
            
            <p><strong>Duration:</strong> Half day (approximately 5 hours)</p>
            <p><strong>Includes:</strong> Transportation, entrance fees, nature guide</p>
            <p><strong>Perfect for:</strong> Nature lovers, photographers, families</p>
        `,
        images: [
            '5-1.jpg',
            '5-2.webp',
            '5-3.jpg',
            '5-4.jpg'
        ]
    },
    'historical-peninsula': {
        title: 'Historical Peninsula Tour',
        date: 'Saturday, January 24th',
        badge: 'included',
        description: `
            <h3>Journey Through Byzantine and Ottoman Glory</h3>
            <p>Explore the heart of Old Istanbul, where East meets West. This comprehensive tour covers the most iconic landmarks of the Historical Peninsula, a UNESCO World Heritage Site that has served as the capital of three great empires.</p>
            
            <h4>Hagia Sophia</h4>
            <p>Marvel at this architectural masterpiece that has stood for over 1,500 years. Originally built as a Byzantine cathedral, later converted to a mosque, and then a museum, Hagia Sophia represents the layered history of Istanbul. Its massive dome, stunning mosaics, and impressive scale continue to inspire awe in visitors from around the world.</p>
            
            <h4>Blue Mosque (Sultan Ahmed Mosque)</h4>
            <p>Visit the only mosque in Turkey with six minarets, famous for its beautiful blue İznik tiles that adorn the interior walls. Built in the early 17th century, this active mosque welcomes visitors outside of prayer times to admire its harmonious proportions and serene atmosphere.</p>
            
            <h4>Topkapi Palace</h4>
            <p>Step into the opulent world of Ottoman sultans at their primary residence for nearly 400 years. Explore the Imperial Treasury with its priceless jewels, the Harem quarters, and the palace kitchens. The palace grounds offer stunning views of the Bosphorus and Golden Horn.</p>
            
            <h4>Basilica Cistern</h4>
            <p>Descend into this mysterious underground water reservoir built in the 6th century. Walk among 336 marble columns reflected in the shallow water, and discover the famous Medusa head columns. The atmospheric lighting and classical music create an otherworldly experience.</p>
            
            <h4>Hippodrome & German Fountain</h4>
            <p>Visit the ancient chariot racing stadium where Byzantine emperors entertained crowds of up to 100,000 spectators. See the Egyptian Obelisk, the Serpent Column, and other monuments that have stood for centuries.</p>
            
            <p><strong>Duration:</strong> Full day (approximately 8 hours)</p>
            <p><strong>Includes:</strong> Professional guide, entrance fees, lunch</p>
            <p><strong>This tour is included in your program fees</strong></p>
        `,
        images: [
            '6-1.jpg',
            '6-2.jpg',
            '6-3.jpg',
            '6-4.jpg'
        ]
    },
    'bosphorus': {
        title: 'Bosphorus Boat Tour',
        date: 'Sunday, January 25th',
        badge: 'included',
        description: `
            <h3>Sail Between Two Continents</h3>
            <p>Experience Istanbul from its most iconic perspective—the water. This full-day Bosphorus cruise takes you along the strait that divides Europe and Asia, offering unparalleled views of palaces, fortresses, and waterfront mansions.</p>
            
            <h4>The Bosphorus Strait</h4>
            <p>Cruise along this strategic waterway that has connected the Black Sea to the Mediterranean for millennia. The strait is approximately 30 kilometers long and varies in width from 700 meters to 3.5 kilometers. Its importance in world history cannot be overstated.</p>
            
            <h4>Palaces and Mansions</h4>
            <p>Admire the magnificent Dolmabahçe Palace, the last residence of Ottoman sultans, with its 285 rooms and 46 halls. See the elegant Beylerbeyi Palace on the Asian side, and countless historic wooden yalıs (waterfront mansions) that line both shores.</p>
            
            <h4>Fortresses and Bridges</h4>
            <p>Pass beneath the iconic Bosphorus Bridge and the Fatih Sultan Mehmet Bridge, engineering marvels that connect two continents. View the imposing Rumeli Fortress, built by Sultan Mehmed II before the conquest of Constantinople, and its counterpart Anadolu Fortress on the Asian shore.</p>
            
            <h4>Maiden's Tower</h4>
            <p>See this iconic lighthouse and former defense tower sitting on a small islet, the subject of numerous legends and a symbol of Istanbul.</p>
            
            <h4>Fishing Villages</h4>
            <p>Stop at charming Bosphorus villages like Ortaköy, known for its waterfront cafes and the beautiful Ortaköy Mosque. Experience local life and enjoy fresh seafood at traditional restaurants.</p>
            
            <p><strong>Duration:</strong> Full day (approximately 6-7 hours)</p>
            <p><strong>Includes:</strong> Boat cruise, lunch, professional guide</p>
            <p><strong>This tour is included in your program fees</strong></p>
            <p><strong>Highlights:</strong> Photo opportunities, fresh air, unique perspective of the city</p>
        `,
        images: [
            '7-1.jpg',
            '7-2.jpg',
            '7-3.jpg',
            '7-4.jpg'
        ]
    },
    'galata': {
        title: 'Taksim, Istiklal & Galata Tour',
        date: 'Monday, January 26th',
        badge: 'optional',
        description: `
            <h3>Experience Modern Istanbul's Heartbeat</h3>
            <p>Discover the vibrant, cosmopolitan side of Istanbul in the Beyoğlu district. This evening tour combines historic landmarks with contemporary culture, shopping, and dining experiences.</p>
            
            <h4>Taksim Square</h4>
            <p>Begin at Istanbul's most famous square, the symbolic heart of modern Turkey. See the Republic Monument and experience the energy of this bustling hub where locals and tourists converge.</p>
            
            <h4>Istiklal Street</h4>
            <p>Stroll down this iconic pedestrian avenue, one of the most famous streets in the world. The 1.4-kilometer street is lined with historic buildings housing international brands, local boutiques, art galleries, cinemas, theaters, libraries, cafes, and restaurants. Don't miss riding the nostalgic red tram that has been running since 1875.</p>
            
            <h4>Galata Tower</h4>
            <p>Ascend this 67-meter medieval stone tower built by the Genoese in 1348. From the observation deck, enjoy 360-degree panoramic views of Istanbul, the Golden Horn, and the Bosphorus. The tower has witnessed the entire history of Istanbul and remains one of the city's most recognizable landmarks.</p>
            
            <h4>Galata Bridge & Golden Horn</h4>
            <p>Walk across the famous Galata Bridge, where fishermen line the railings and restaurants occupy the lower level. The bridge connects the old city with the modern districts and offers stunning views, especially at sunset.</p>
            
            <h4>Dinner Experience</h4>
            <p>Conclude your evening with a delicious dinner at a traditional Turkish restaurant, sampling local specialties and enjoying live music or entertainment.</p>
            
            <p><strong>Duration:</strong> Evening tour (approximately 5-6 hours)</p>
            <p><strong>Includes:</strong> Galata Tower entrance, dinner, guide</p>
            <p><strong>Perfect for:</strong> Shopping, nightlife, cultural immersion</p>
        `,
        images: [
            '8-1.jpg',
            '8-2.jpg',
            '8-3.jpg',
            '8-4.jpg'
        ]
    },
    'mall': {
        title: 'Mall of Istanbul & Fun Park',
        date: 'Tuesday, January 27th',
        badge: 'optional',
        description: `
            <h3>Shop, Play, and Dine</h3>
            <p>Experience one of Europe's largest shopping and entertainment complexes. Mall of Istanbul offers a perfect blend of retail therapy, entertainment, and dining options under one roof.</p>
            
            <h4>Shopping Paradise</h4>
            <p>Explore over 350 stores featuring international luxury brands, Turkish designers, and everything in between. From fashion and accessories to electronics and home goods, you'll find it all in this modern shopping destination. The mall's architecture and interior design create a pleasant shopping atmosphere with natural light and spacious walkways.</p>
            
            <h4>MOI SKY</h4>
            <p>Visit the rooftop entertainment area featuring a Ferris wheel with climate-controlled cabins offering panoramic views of Istanbul. The observation wheel is one of the largest in Europe and provides a unique perspective of the city.</p>
            
            <h4>Entertainment Options</h4>
            <p>Enjoy various entertainment facilities including:</p>
            <ul>
                <li>State-of-the-art cinema complex with IMAX screens</li>
                <li>Bowling alley and arcade games</li>
                <li>Indoor theme park with rides and attractions</li>
                <li>Virtual reality experiences</li>
            </ul>
            
            <h4>Dining Experience</h4>
            <p>Choose from over 100 restaurants, cafes, and food court options offering cuisines from around the world. From fast food to fine dining, Turkish specialties to international favorites, there's something to satisfy every palate.</p>
            
            <p><strong>Duration:</strong> Afternoon/Evening (approximately 5-6 hours)</p>
            <p><strong>Includes:</strong> Transportation, dinner voucher, entertainment credits</p>
            <p><strong>Perfect for:</strong> Shopping enthusiasts, families, entertainment seekers</p>
        `,
        images: [
            '9-1.jpg',
            '9-2.jpg',
            '9-3.jpg',
            '9-4.jpg'
        ]
    },
    'traditional': {
        title: 'Traditional Clothes Wearing Day',
        date: 'Wednesday, January 28th',
        badge: 'free',
        description: `
            <h3>Dress Like Ottoman Royalty</h3>
            <p>Immerse yourself in Turkish culture by wearing traditional Ottoman costumes. This free day activity offers a unique opportunity to experience the grandeur of historical Turkish fashion and create unforgettable memories.</p>
            
            <h4>Ottoman Costume Experience</h4>
            <p>Choose from a wide selection of authentic Ottoman-era costumes including:</p>
            <ul>
                <li>Sultan and Sultana outfits with elaborate embroidery and jewels</li>
                <li>Janissary (Ottoman soldier) uniforms</li>
                <li>Traditional Turkish wedding attire</li>
                <li>Court official and noble costumes</li>
                <li>Folk costumes from different regions of Turkey</li>
            </ul>
            
            <h4>Professional Photography</h4>
            <p>Professional photographers will be available to capture your transformation. The photo sessions take place in settings decorated to resemble Ottoman palace interiors, complete with traditional furniture, carpets, and props. These photos make perfect souvenirs and social media content!</p>
            
            <h4>Cultural Context</h4>
            <p>Learn about the significance of different garments, the symbolism of colors and patterns, and the social hierarchy reflected in Ottoman fashion. Understand how clothing indicated one's position in society and the elaborate dress codes of the Ottoman court.</p>
            
            <h4>Free Time Activities</h4>
            <p>After your costume experience, enjoy free time to:</p>
            <ul>
                <li>Explore local markets and bazaars</li>
                <li>Visit nearby cafes and try Turkish coffee or tea</li>
                <li>Relax at your accommodation</li>
                <li>Plan your own adventures in the city</li>
            </ul>
            
            <p><strong>Duration:</strong> Flexible (costume rental available for 2-3 hours)</p>
            <p><strong>Note:</strong> This is a free day activity - participation is optional</p>
            <p><strong>Perfect for:</strong> Cultural enthusiasts, photography lovers, social media content creators</p>
        `,
        images: [
            '10-1.jpg',
            '10-2.jpg',
            '10-3.jpg',
            '10-4.jpg'
        ]
    },
    'spice-bazaar': {
        title: 'Spice Bazaar & Galata Bridge',
        date: 'Thursday, January 29th',
        badge: 'optional',
        description: `
            <h3>A Feast for the Senses</h3>
            <p>Embark on a sensory journey through one of Istanbul's most vibrant and aromatic markets. This tour combines the exotic atmosphere of the Spice Bazaar with the authentic charm of the Galata Bridge area.</p>
            
            <h4>Egyptian Bazaar (Spice Bazaar)</h4>
            <p>Step into this historic covered market, built in 1664 as part of the New Mosque complex. The L-shaped bazaar houses 85 shops bursting with colors and aromas:</p>
            <ul>
                <li>Exotic spices from around the world - saffron, sumac, cumin, and countless others</li>
                <li>Turkish delight (lokum) in every flavor and color imaginable</li>
                <li>Dried fruits, nuts, and traditional Turkish sweets</li>
                <li>Herbal teas and traditional remedies</li>
                <li>Handmade soaps, oils, and natural cosmetics</li>
                <li>Turkish coffee and tea sets</li>
            </ul>
            
            <h4>Shopping Tips and Tastings</h4>
            <p>Your guide will help you navigate the bazaar, explain the uses of different spices, and assist with bargaining. Sample various products and learn which items make the best souvenirs. Discover the stories behind traditional Turkish ingredients and their role in Turkish cuisine.</p>
            
            <h4>Rüstem Pasha Mosque</h4>
            <p>Visit this hidden gem near the Spice Bazaar, renowned for its exquisite İznik tiles. The mosque's interior is covered with some of the finest examples of 16th-century Ottoman tile work, featuring floral and geometric patterns in brilliant blues, greens, and reds.</p>
            
            <h4>Galata Bridge</h4>
            <p>Walk across this iconic double-decker bridge spanning the Golden Horn. The upper level is famous for its fishermen who line the railings day and night, while the lower level houses restaurants serving fresh seafood. The bridge offers spectacular views of the Old City, especially during sunset.</p>
            
            <h4>Dinner by the Golden Horn</h4>
            <p>Enjoy a traditional Turkish dinner at one of the restaurants under the Galata Bridge or nearby. Savor fresh fish, mezes (appetizers), and other local specialties while watching boats pass by and the city lights reflect on the water.</p>
            
            <p><strong>Duration:</strong> Afternoon/Evening (approximately 5-6 hours)</p>
            <p><strong>Includes:</strong> Guided bazaar tour, dinner, shopping assistance</p>
            <p><strong>Perfect for:</strong> Food lovers, souvenir hunters, cultural explorers</p>
        `,
        images: [
            '11-1.jpg', 
            '11-2.jpg',
            '11-3.jpg',
            '11-4.jpg'
        ]
    },
    'golden-horn': {
        title: 'Golden Horn & Yacht Tour',
        date: 'Friday, January 30th',
        badge: 'optional',
        description: `
            <h3>Farewell Cruise Under the Stars</h3>
            <p>Conclude your Turkish adventure with an elegant evening yacht cruise along the Golden Horn and Bosphorus. This special farewell dinner cruise offers a magical way to bid goodbye to Istanbul.</p>
            
            <h4>Private Yacht Experience</h4>
            <p>Board a comfortable private yacht equipped with both indoor and outdoor seating areas. The vessel features panoramic windows, a professional crew, and all the amenities needed for a memorable evening on the water.</p>
            
            <h4>Golden Horn Exploration</h4>
            <p>Sail along the historic Golden Horn, a natural harbor that has been Istanbul's primary waterway for centuries. See the historic neighborhoods of Fener and Balat with their colorful houses, ancient churches, and synagogues. Pass under the historic bridges connecting the European shores.</p>
            
            <h4>Bosphorus by Night</h4>
            <p>As evening falls, cruise into the Bosphorus Strait to witness the city transform under the glow of thousands of lights. The illuminated palaces, mosques, and bridges create a breathtaking spectacle. Watch as the sun sets behind the minarets and the city lights begin to twinkle.</p>
            
            <h4>Gourmet Farewell Dinner</h4>
            <p>Enjoy a specially prepared multi-course Turkish dinner featuring:</p>
            <ul>
                <li>Selection of hot and cold mezes (appetizers)</li>
                <li>Fresh grilled fish or meat main course</li>
                <li>Traditional Turkish desserts</li>
                <li>Unlimited soft drinks and Turkish tea/coffee</li>
                <li>Optional alcoholic beverages available</li>
            </ul>
            
            <h4>Live Entertainment</h4>
            <p>Experience traditional Turkish music and possibly a folklore show, creating the perfect atmosphere for your final evening. The combination of delicious food, beautiful views, and cultural entertainment ensures an unforgettable farewell.</p>
            
            <h4>Photo Opportunities</h4>
            <p>The yacht will make strategic stops at the best viewpoints for photography. Capture the illuminated Maiden's Tower, the bridges lit up against the night sky, and the glittering cityscape as your lasting memories of Istanbul.</p>
            
            <p><strong>Duration:</strong> Evening cruise (approximately 4 hours)</p>
            <p><strong>Includes:</strong> Private yacht rental, dinner, live entertainment, professional crew</p>
            <p><strong>Dress code:</strong> Smart casual</p>
            <p><strong>Perfect for:</strong> Romantic evenings, group celebrations, memorable farewells</p>
            <p><strong>Special note:</strong> This is your last evening in Istanbul - make it count!</p>
        `,
        images: [
            '12.jpg'
        ]
    }
};

let scrollPosition = 0;


document.addEventListener('DOMContentLoaded', function() {


    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.activity-card, .section-title');
    
    // Add reveal class initially
    revealElements.forEach(el => el.classList.add('reveal'));

    function checkReveal() {
        const triggerBottom = window.innerHeight * 0.85;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('active');
            }
        });
    }

    // Initial check
    checkReveal();
    
    // Check on scroll
    window.addEventListener('scroll', checkReveal);

    // Smooth Scroll for Anchor Links (Polyfill for Safari/older browsers)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Account for fixed header
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });


    // Modal Functionality
    const modal = document.getElementById('activityModal');
    const modalClose = document.querySelector('.modal-close');
    const activityCards = document.querySelectorAll('.activity-card');

    let currentSlide = 0;
    let totalSlides = 0;
    let carouselInterval;

    // Open modal when clicking activity card
    activityCards.forEach(card => {
        card.addEventListener('click', function() {
            const activityId = this.getAttribute('data-activity');
            openModal(activityId);
        });
    });

    // Close modal
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    function openModal(activityId) {
    const data = activityData[activityId];
    if (!data) return;

    // Populate modal content
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalDate').innerHTML = `<i class="far fa-calendar-alt"></i> ${data.date}`;
    document.getElementById('modalDescription').innerHTML = data.description;

    // Badge
    const badgeElement = document.getElementById('modalBadge');
    badgeElement.textContent = data.badge === 'optional' ? 'Optional Tour' :
                               data.badge === 'included' ? 'Included in Fees' : 'Free Day';
    badgeElement.className = `modal-badge ${data.badge}`;

    // Carousel
    setupCarousel(data.images);

    // 👉 Save current scroll position
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // 👉 Freeze body (no background scroll)
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.body.style.paddingRight = `${scrollbarWidth}px`; // avoid width jump

    // Show modal
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);

    // Start auto-advance
    startCarouselAutoplay();
}

function closeModal() {
    modal.classList.add('closing');   // 🚨 turn off transitions

    modal.classList.remove('active');
    stopCarouselAutoplay();

    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('closing');  // cleanup

        // your scroll restore logic here
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.width = '';
        document.body.style.paddingRight = '';
        window.scrollTo(0, scrollPosition);

    }, 10); // small timeout so the CSS can apply instantly
}

    function setupCarousel(images) {
        const carouselTrack = document.getElementById('carouselTrack');
        const carouselIndicators = document.getElementById('carouselIndicators');
        
        // Clear existing content
        carouselTrack.innerHTML = '';
        carouselIndicators.innerHTML = '';
        
        currentSlide = 0;
        totalSlides = images.length;

        // Create slides
        images.forEach((imageSrc, index) => {
            const slide = document.createElement('div');
            slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
            slide.innerHTML = `<img src="${imageSrc}" alt="Activity image ${index + 1}">`;
            carouselTrack.appendChild(slide);

            // Create indicator
            const indicator = document.createElement('div');
            indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
            indicator.addEventListener('click', () => {
                goToSlide(index);
                stopCarouselAutoplay();
                startCarouselAutoplay();
            });
            carouselIndicators.appendChild(indicator);
        });

    }

    function updateCarousel() {
        const slides = document.querySelectorAll('.carousel-slide');
        const indicators = document.querySelectorAll('.indicator');
        
       slides.forEach((slide, index) => {
            slide.classList.remove('active', 'fading');
            if (index === currentSlide) {
                slide.classList.add('active');
            }
        });
        
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }

    function goToSlide(index) {
        currentSlide = index;
        updateCarousel();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    // Carousel navigation buttons
    document.getElementById('nextBtn').addEventListener('click', () => {
        nextSlide();
        stopCarouselAutoplay();
        startCarouselAutoplay();
    });
    
    document.getElementById('prevBtn').addEventListener('click', () => {
        prevSlide();
        stopCarouselAutoplay();
        startCarouselAutoplay();
    });

    // Keyboard navigation for carousel
    document.addEventListener('keydown', function(e) {
        if (!modal.classList.contains('active')) return;
        
        if (e.key === 'ArrowRight') {
            nextSlide();
            stopCarouselAutoplay();
            startCarouselAutoplay();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
            stopCarouselAutoplay();
            startCarouselAutoplay();
        }
    });
    

    // Auto-advance carousel (optional)
    function startCarouselAutoplay() {
        stopCarouselAutoplay();
        carouselInterval = setInterval(nextSlide, 3500);
    }

    function stopCarouselAutoplay() {
        if (carouselInterval) {
            clearInterval(carouselInterval);
        }
    }

    // Pause autoplay on hover
    modal.addEventListener('mouseenter', stopCarouselAutoplay);
    modal.addEventListener('mouseleave', startCarouselAutoplay);

});
 