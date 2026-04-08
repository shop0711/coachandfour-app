// app.js — Coach & Four Phase 2

// --- Home Menu Tiles ---
const HOME_MENU_TILES = [
    { type: 'iframe', target: 'https://www.shoten.co.jp/rel/searchbook/', color: '#00B7CE', icon: 'fa-solid fa-book',             en: 'BOOKS',           ja: '在庫検索・お取り置き' },
    { type: 'iframe', target: 'https://www.shoten.co.jp/rel/searchcd/',   color: '#E89558', icon: 'fa-solid fa-compact-disc',     en: 'CD&DVD/BD',       ja: '在庫検索・予約・ご注文' },
    { type: 'iframe', target: 'https://www.coachandfour.ne.jp/original/', color: '#78C06E', icon: 'fa-solid fa-gift',             en: 'BONUS ITEM',      ja: '特典付商品情報' },
    { type: 'iframe', target: 'https://www.coachandfour.ne.jp/books/books_ranking/', color: '#00B7CE', icon: 'fa-solid fa-crown', en: 'BOOKS RANKING',   ja: '書籍ランキング' },
    { type: 'iframe', target: 'https://www.coachandfour.ne.jp/music/album_ranking/', color: '#E89558', icon: 'fa-solid fa-crown', en: 'CD&DVD RANKING',  ja: 'CD・DVDランキング' },
    { type: 'iframe', target: 'https://www.coachandfour-shop.com/',       color: '#4A2F24', icon: 'fa-solid fa-cart-shopping',    en: 'WEB SHOP',        ja: 'オンラインショップ' },
    { type: 'iframe', target: 'https://www.coachandfour.ne.jp/event/',    color: '#E9546B', icon: 'fa-solid fa-calendar-check',   en: 'EVENT INFO',      ja: 'サイン会・インストアライブ' },
    { type: 'iframe', target: 'https://www.coachandfour.ne.jp/recruit/',  color: '#555555', icon: 'fa-solid fa-user-group',       en: 'RECRUIT',         ja: '採用情報（各都市）' },
    { type: 'tab',    target: 'store-screen',                             color: '#4A2F24', icon: 'fa-solid fa-map-location-dot', en: 'STORE INFO',      ja: '店舗一覧' }
];

// --- Data Driven Subpage Content ---
const SUBPAGE_DATA = {
    books: {
        title: "BOOKS",
        items: [
            { type: 'card', image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=600&auto=format&fit=crop', title: '在庫検索・お取り置き', tag: '', tagClass: '', text: 'お探しの書籍の在庫状況を確認し、お取り置きが可能です。' }
        ]
    },
    music: {
        title: "CD&DVD/BD",
        items: [
            { type: 'card', image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=600&auto=format&fit=crop', title: '在庫検索・予約・ご注文', tag: '', tagClass: '', text: '最新のCDやDVDの在庫確認、ご予約を承ります。' }
        ]
    },
    event: {
        title: "イベント情報",
        items: [
            { type: 'card', image: 'https://images.unsplash.com/photo-1458560871784-56d23406c091?q=80&w=600&auto=format&fit=crop', title: 'サイン会・インストアライブ', tag: '注目', tagClass: 'tag-event', text: '近日開催予定のイベントスケジュールです。' }
        ]
    },
    bonus: {
        title: "特典付商品情報",
        items: [
            { type: 'card', image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&auto=format&fit=crop', title: '限定商品一覧', tag: '限定', tagClass: 'tag-limited', text: 'コーチャンフォー限定の特典が付いた商品をご紹介します。' }
        ]
    },
    recruit: {
        title: "採用情報",
        items: [
            { type: 'card', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop', title: '各都市の採用情報', tag: '募集', tagClass: 'tag-new', text: '店舗スタッフ・社員の募集要項をご覧いただけます。' }
        ]
    },
    rank_book: {
        title: "BOOKS RANKING",
        items: [
            { type: 'ranking', items: [ { rank: 1, title: 'ベストセラー小説A', artist: '著者A' }, { rank: 2, title: '話題のビジネス書', artist: '著者B' } ] }
        ]
    },
    rank_cd: {
        title: "CD&DVD RANKING",
        items: [
            { type: 'ranking', items: [ { rank: 1, title: '大ヒットシングル', artist: 'アーティストA' }, { rank: 2, title: '話題の映画DVD', artist: '監督B' } ] }
        ]
    }
};

// --- Marche Tab Content ---
const MARCHE_CONTENT = [
    {
        type: 'card',
        image: 'https://images.unsplash.com/photo-1559598467-f8b76081e19b?q=80&w=600&auto=format&fit=crop',
        title: '期間限定：人気の北海道スイーツ販売中',
        tag: '期間限定',
        tagClass: 'tag-limited',
        text: '人気のバターサンドから、限定のメロンゼリーまで。北海道ならではの絶品スイーツを多数取り揃えております。ご自宅用やお土産にぜひご利用ください。'
    },
    {
        type: 'card',
        image: 'https://images.unsplash.com/photo-1599598425947-33004a434914?q=80&w=600&auto=format&fit=crop',
        title: 'イベント：うまい棒つかみ取り（数量限定）',
        tag: 'イベント',
        tagClass: 'tag-event',
        text: 'お子様に大人気のうまい棒つかみ取りイベント！たくさん掴めた方には特別賞品も。数量限定のためお早めに！'
    },
    {
        type: 'card',
        image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=600&auto=format&fit=crop',
        title: '本日のおすすめ：産地直送の新鮮な一品',
        tag: 'おすすめ',
        tagClass: 'tag-recommend',
        text: '毎日入荷する産地直送の新鮮野菜やフルーツ。本日は北海道富良野産のメロンが特別入荷しております。'
    },
    {
        type: 'divider',
        icon: 'fa-solid fa-compact-disc',
        text: 'ミュージック'
    },
    {
        type: 'card',
        image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=600&auto=format&fit=crop',
        title: '最新ランキング：今週のヒットチャート',
        tag: 'ランキング',
        tagClass: 'tag-ranking',
        text: '今週のCD・レコード売上ランキングをチェック！店頭では試聴コーナーもご用意しております。'
    },
    {
        type: 'ranking',
        items: [
            { rank: 1, title: 'Butterfly', artist: '木村カエラ' },
            { rank: 2, title: 'さよならエレジー', artist: '菅田将暉' },
            { rank: 3, title: 'Lemon', artist: '米津玄師' },
            { rank: 4, title: 'Pretender', artist: 'Official髭男dism' },
            { rank: 5, title: 'マリーゴールド', artist: 'あいみょん' }
        ]
    },
    {
        type: 'card',
        image: 'https://images.unsplash.com/photo-1458560871784-56d23406c091?q=80&w=600&auto=format&fit=crop',
        title: 'イベントレポート：過去の特典会・トークイベントの様子',
        tag: 'イベント',
        tagClass: 'tag-event',
        text: '先月開催されたサイン会・トークイベントの様子をレポート。来月のイベントスケジュールもお見逃しなく！'
    },
    {
        type: 'card',
        image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop',
        title: '予約受付中：注目の新譜リリース情報',
        tag: 'NEW',
        tagClass: 'tag-new',
        text: '来月リリースの注目アルバム・シングルの予約受付中！初回限定盤はなくなり次第終了。店頭またはオンラインでお申し込みいただけます。'
    }
];

// --- Store Tab Content ---
const STORE_DATA = [
    {
        name: 'コーチャンフォー 若葉台店',
        info: [
            { label: '営業時間', value: '9:00 ～ 21:00' },
            { label: '住所', value: '〒206-0824 東京都稲城市若葉台2丁目9-2' },
            { label: '電話番号', value: '042-350-2800' },
            { label: '駐車場', value: '大型無料駐車場完備 (600台)' },
            { label: '取扱', value: '書籍 / 文具 / CD・DVD / マルシェ' }
        ]
    },
    {
        name: 'コーチャンフォー 新川通り店',
        info: [
            { label: '営業時間', value: '9:00 ～ 22:00' },
            { label: '住所', value: '〒001-0924 北海道札幌市北区新川4条18丁目' },
            { label: '電話番号', value: '011-769-2000' },
            { label: '駐車場', value: '大型無料駐車場完備 (800台)' },
            { label: '取扱', value: '書籍 / 文具 / CD・DVD / マルシェ / カフェ' }
        ]
    },
    {
        name: 'コーチャンフォー ミュンヘン大橋店',
        info: [
            { label: '営業時間', value: '9:00 ～ 22:00' },
            { label: '住所', value: '〒062-0053 北海道札幌市豊平区月寒東3条11丁目' },
            { label: '電話番号', value: '011-855-2000' },
            { label: '駐車場', value: '大型無料駐車場完備 (500台)' },
            { label: '取扱', value: '書籍 / 文具 / CD・DVD / マルシェ' }
        ]
    },
    {
        name: 'コーチャンフォー 釧路店',
        info: [
            { label: '営業時間', value: '9:00 ～ 21:00' },
            { label: '住所', value: '〒084-0909 北海道釧路市昭和中央4丁目18-1' },
            { label: '電話番号', value: '0154-53-2000' },
            { label: '駐車場', value: '大型無料駐車場完備 (400台)' },
            { label: '取扱', value: '書籍 / 文具 / CD・DVD / マルシェ' }
        ]
    },
    {
        name: 'コーチャンフォー 旭川店',
        info: [
            { label: '営業時間', value: '9:00 ～ 22:00' },
            { label: '住所', value: '〒070-0033 北海道旭川市3条通8丁目' },
            { label: '電話番号', value: '0166-76-2000' },
            { label: '駐車場', value: '大型無料駐車場完備 (450台)' },
            { label: '取扱', value: '書籍 / 文具 / CD・DVD / マルシェ / カフェ' }
        ]
    },
    {
        name: 'コーチャンフォー 美しが丘店',
        info: [
            { label: '営業時間', value: '9:00 ～ 22:00' },
            { label: '住所', value: '〒004-0816 北海道札幌市清田区美しが丘2条6丁目' },
            { label: '電話番号', value: '011-889-2000' },
            { label: '駐車場', value: '大型無料駐車場完備 (500台)' },
            { label: '取扱', value: '書籍 / 文具 / CD・DVD / マルシェ' }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const appHeader = document.querySelector('.app-header');
    const screenRegistration = document.getElementById('registration-screen');
    const screenHome = document.getElementById('home-screen');
    const screenCard = document.getElementById('card-screen');
    const screenMarche = document.getElementById('marche-screen');
    const screenStore = document.getElementById('store-screen');
    const screenSubpage = document.getElementById('subpage-screen');
    const bottomNav = document.getElementById('bottom-nav');
    
    // Scan
    const btnStartScan = document.getElementById('btn-start-scan');
    const btnStopScan = document.getElementById('btn-stop-scan');
    const readerContainer = document.getElementById('reader-container');
    
    // Form
    const manualForm = document.getElementById('manual-form');
    const inputMemberCode = document.getElementById('member-code');
    const inputPinCode = document.getElementById('pin-code');

    // Home Tile Grid
    const homeTileGrid = document.getElementById('home-tile-grid');

    // Card Screen
    const cardBarcodeSvg = document.getElementById('card-barcode');
    const cardMemberCode = document.getElementById('card-member-code');

    // Home Barcode
    const homeBarcodeSvg = document.getElementById('home-barcode');
    const homeMemberCode = document.getElementById('home-member-code');

    // Subpage
    const subpageTitle = document.getElementById('subpage-title');
    const subpageContent = document.getElementById('subpage-content');
    const btnCloseSubpage = document.getElementById('btn-close-subpage');

    // Iframe Modal
    const screenIframe = document.getElementById('iframe-screen');
    const iframeTitle = document.getElementById('iframe-title');
    const iframeBrowser = document.getElementById('inapp-browser');
    const btnCloseIframe = document.getElementById('btn-close-iframe');
    const iframeExtLink = document.getElementById('iframe-external-link');

    // Nav items
    const navItems = document.querySelectorAll('.nav-item');

    // State
    const STORAGE_KEY = 'coachandfour_member_data';
    let html5QrCode = null;
    let wakeLock = null;
    let currentMemberCode = null;

    // Tab screens mapping
    const tabScreens = {
        'registration-screen': screenRegistration,
        'home-screen': screenHome,
        'card-screen': screenCard,
        'marche-screen': screenMarche,
        'store-screen': screenStore
    };

    // --- Initialize ---
    checkExistingData();
    populateHomeMenu();
    setupMenuListeners();
    setupIframeListeners();
    setupSliderListeners();
    setupBottomNav();

    // --- Functions ---

    function checkExistingData() {
        const data = localStorage.getItem(STORAGE_KEY);
        if (data) {
            try {
                const parsed = JSON.parse(data);
                if (parsed.memberCode && parsed.memberCode.length === 16) {
                    showHomeScreen(parsed.memberCode);
                } else {
                    showScreen(screenRegistration);
                }
            } catch (e) {
                showScreen(screenRegistration);
            }
        } else {
            showScreen(screenRegistration);
        }
    }

    function showScreen(screenEl) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        if (screenEl) {
            screenEl.classList.add('active');
        }
    }

    /* === Bottom Navigation === */
    function setupBottomNav() {
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                const tabId = item.getAttribute('data-tab');
                switchTab(tabId);
            });
        });
    }

    function switchTab(tabId) {
        // Close subpage if open
        screenSubpage.classList.remove('active');

        // Deactivate ALL screens (including registration)
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));

        // Activate target
        const target = tabScreens[tabId];
        if (target) {
            target.classList.add('active');
        }

        // Update nav active state
        navItems.forEach(n => {
            n.classList.toggle('active', n.getAttribute('data-tab') === tabId);
        });

        // Populate dynamic content on first switch
        if (tabId === 'marche-screen') {
            populateMarcheContent();
        } else if (tabId === 'store-screen') {
            populateStoreContent();
        } else if (tabId === 'card-screen') {
            renderCardScreen();
        }

        // Request wake lock when on card screen
        if (tabId === 'card-screen') {
            requestWakeLock();
        }
    }

    /* === Input Formatting === */
    inputMemberCode.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        let formattedValue = '';
        for (let i = 0; i < value.length; i += 4) {
            if (i > 0) formattedValue += ' ';
            formattedValue += value.substring(i, i + 4);
        }
        e.target.value = formattedValue;
    });

    /* === Camera Scanning === */
    btnStartScan.addEventListener('click', async () => {
        readerContainer.style.display = 'block';
        btnStartScan.style.display = 'none';
        
        if (!html5QrCode) {
            html5QrCode = new Html5Qrcode("reader");
        }
        
        const config = { fps: 10, qrbox: { width: 250, height: 100 } };
        
        try {
            await html5QrCode.start({ facingMode: "environment" }, config, (decodedText) => {
                const digits = decodedText.replace(/\D/g, '');
                if (digits.length >= 16) {
                    let raw16 = digits.substring(0, 16);
                    let formatted = '';
                    for (let i = 0; i < 16; i += 4) {
                        if (i > 0) formatted += ' ';
                        formatted += raw16.substring(i, i + 4);
                    }
                    inputMemberCode.value = formatted;
                    stopScanning();
                    alert("会員番号を読み取りました。必要に応じてPINを入力し、「デジタル会員証を作成」を押してください。");
                }
            });
        } catch (err) {
            console.error("Camera access failed", err);
            alert("カメラの起動に失敗しました。番号を手入力してください。");
            stopScanning();
        }
    });

    btnStopScan.addEventListener('click', stopScanning);

    async function stopScanning() {
        if (html5QrCode && html5QrCode.isScanning) {
            await html5QrCode.stop();
        }
        readerContainer.style.display = 'none';
        btnStartScan.style.display = 'flex';
    }

    /* === Manual Form === */
    manualForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const memberCode = inputMemberCode.value.replace(/\s+/g, '');
        const pinCode = inputPinCode.value.trim();

        if (memberCode.length !== 16) {
            alert("会員コードは16桁で入力してください。");
            return;
        }

        const payload = { memberCode, pinCode };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
        
        showHomeScreen(memberCode);
    });

    /* === Home Menu Rendering === */
    function populateHomeMenu() {
        if (!homeTileGrid) return;
        homeTileGrid.innerHTML = '';
        
        HOME_MENU_TILES.forEach(tile => {
            const tileEl = document.createElement('div');
            tileEl.className = 'home-tile btn-press';
            tileEl.style.borderTop = `4px solid ${tile.color}`;
            
            tileEl.innerHTML = `
                <div class="tile-icon" style="color: ${tile.color};"><i class="${tile.icon}"></i></div>
                <div class="tile-en" style="color: ${tile.color};">${tile.en}</div>
                <div class="tile-ja">${tile.ja}</div>
            `;
            
            tileEl.addEventListener('click', () => {
                if (tile.type === 'iframe') {
                    openIframe(tile.target, tile.en);
                } else if (tile.type === 'subpage') {
                    openSubpage(tile.target);
                } else if (tile.type === 'tab') {
                    // Because bottom nav still exists, we can trick it by clicking the corresponding nav item if it exists
                    // Or call switchTab directly! Let's find the nav item to update its state.
                    const navBtn = document.querySelector(`.nav-item[data-tab="${tile.target}"]`);
                    if (navBtn) {
                        navBtn.click();
                    } else {
                        switchTab(tile.target);
                    }
                } else if (tile.type === 'link') {
                    window.open(tile.target, '_blank');
                }
            });
            
            homeTileGrid.appendChild(tileEl);
        });
    }

    /* === Iframe Modal === */
    function openIframe(url, title) {
        iframeTitle.textContent = title;
        iframeBrowser.src = url;
        if (iframeExtLink) iframeExtLink.href = url;
        
        screenIframe.classList.add('active');
        appHeader.style.display = 'none';
        screenIframe.style.paddingTop = 'env(safe-area-inset-top, 0px)';
    }

    function setupIframeListeners() {
        if(btnCloseIframe) {
            btnCloseIframe.addEventListener('click', () => {
                screenIframe.classList.remove('active');
                appHeader.style.display = 'block';
                iframeBrowser.src = ''; // reset to stop loading/audio
            });
        }
    }

    /* === Home Screen === */
    function showHomeScreen(memberCode) {
        currentMemberCode = memberCode;

        // Show bottom nav & hide registration
        bottomNav.style.display = 'flex';
        
        // Switch to home tab
        switchTab('home-screen');
        
        if (homeMemberCode && homeBarcodeSvg) {
            homeMemberCode.textContent = formatMemberCode(memberCode);
            generateBarcode(homeBarcodeSvg, memberCode);
        }
        
        requestWakeLock();
    }

    function formatMemberCode(code) {
        let formatted = '';
        for (let i = 0; i < code.length; i += 4) {
            if (i > 0) formatted += ' ';
            formatted += code.substring(i, i + 4);
        }
        return formatted;
    }

    function generateBarcode(svgEl, code) {
        try {
            JsBarcode(svgEl, code, {
                format: "CODE128",
                lineColor: "#000",
                displayValue: false,
                margin: 0,
                background: "#FFFFFF",
                width: 2.2   // Slightly wider barWidth for better scanner readability
            });
            svgEl.setAttribute("width", "100%");
        } catch (e) {
            console.error("Barcode generation failed", e);
        }
    }

    /* === Card Screen === */
    function renderCardScreen() {
        if (!currentMemberCode) return;
        
        cardMemberCode.textContent = formatMemberCode(currentMemberCode);
        generateBarcode(cardBarcodeSvg, currentMemberCode);
    }

    /* === Marche Tab Content === */
    let marchePopulated = false;
    function populateMarcheContent() {
        if (marchePopulated) return;
        marchePopulated = true;

        const container = document.getElementById('marche-content');
        container.innerHTML = '';

        MARCHE_CONTENT.forEach(item => {
            container.insertAdjacentHTML('beforeend', renderContentItem(item));
        });
    }

    /* === Store Tab Content === */
    let storePopulated = false;
    function populateStoreContent() {
        if (storePopulated) return;
        storePopulated = true;

        const container = document.getElementById('store-content');
        container.innerHTML = '';

        STORE_DATA.forEach(store => {
            let infoList = store.info.map(info => `
                <li>
                    <span class="dl-label">${info.label}</span>
                    <span class="dl-value">${info.value}</span>
                </li>
            `).join('');

            const cardHtml = `
                <div class="store-card">
                    <div class="store-card-header">
                        <i class="fa-solid fa-store"></i>
                        <h3>${store.name}</h3>
                    </div>
                    <div class="store-card-body">
                        <ul class="data-list">
                            ${infoList}
                        </ul>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', cardHtml);
        });

        // Add map placeholder
        const mapHtml = `
            <div class="map-placeholder" style="border-radius: 20px; overflow: hidden; margin-top: 20px; margin-bottom: 30px;">
                <i class="fa-solid fa-map-location-dot"></i>
                <span>マップ表示エリア</span>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', mapHtml);
    }

    /* === Helpers === */
    function renderContentItem(item) {
        if (item.type === 'card') {
            return `
                <div class="content-item">
                    <img src="${item.image}" alt="${item.title}" class="content-item-img">
                    <div class="content-item-body">
                        <span class="content-tag ${item.tagClass}">${item.tag}</span>
                        <h3 class="content-item-title">${item.title}</h3>
                        <p class="content-item-text">${item.text}</p>
                    </div>
                </div>
            `;
        } else if (item.type === 'divider') {
            return `
                <div class="section-divider">
                    <div class="section-divider-icon"><i class="${item.icon}"></i></div>
                    <div class="section-divider-text">${item.text}</div>
                </div>
            `;
        } else if (item.type === 'ranking') {
            let listHtml = item.items.map(rank => `
                <div class="music-ranking-item">
                    <div class="rank-number">${rank.rank}</div>
                    <div class="rank-info">
                        <div class="rank-title">${rank.title}</div>
                        <div class="rank-artist">${rank.artist}</div>
                    </div>
                </div>
            `).join('');
            
            return `
                <div class="content-item" style="padding: 10px 20px;">
                    ${listHtml}
                </div>
            `;
        }
        return '';
    }

    /* === Menu Actions & Subpage === */
    function setupMenuListeners() {
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                const target = item.getAttribute('data-target');
                if (SUBPAGE_DATA[target]) {
                    openSubpage(target);
                }
            });
        });

        btnCloseSubpage.addEventListener('click', () => {
            screenSubpage.classList.remove('active');
            // Re-show header if it was hidden
            appHeader.style.display = 'block';
        });
    }

    function openSubpage(targetId) {
        const data = SUBPAGE_DATA[targetId];
        subpageTitle.textContent = data.title;
        subpageContent.innerHTML = '';
        
        data.items.forEach(item => {
            if (item.type === 'text') {
                subpageContent.insertAdjacentHTML('beforeend', `<p style="line-height: 1.6; color: var(--color-text-dark);">${item.text}</p>`);
            } else if (item.type === 'card') {
                subpageContent.insertAdjacentHTML('beforeend', renderContentItem(item));
            }
        });

        screenSubpage.classList.add('active');
        // Hide header temporarily to give subpage full focus
        appHeader.style.display = 'none';
        screenSubpage.style.paddingTop = 'env(safe-area-inset-top, 0px)';
    }

    /* === Banner Slider === */
    function setupSliderListeners() {
        const wrapper = document.querySelector('.banner-wrapper');
        const dots = document.querySelectorAll('.slider-dots .dot');
        
        if (!wrapper || !dots.length) return;

        wrapper.addEventListener('scroll', () => {
            const scrollLeft = wrapper.scrollLeft;
            const itemWidth = wrapper.clientWidth;
            const activeIndex = Math.round(scrollLeft / itemWidth);
            
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === activeIndex);
            });
        });

        // Auto slide
        setInterval(() => {
            if (document.visibilityState === 'visible' && tabScreens['home-screen'].classList.contains('active')) {
                let activeIndex = Array.from(dots).findIndex(d => d.classList.contains('active'));
                let nextIndex = (activeIndex + 1) % dots.length;
                let itemWidth = wrapper.clientWidth;
                wrapper.scrollTo({
                    left: nextIndex * itemWidth,
                    behavior: 'smooth'
                });
            }
        }, 5000);
    }

    /* === Wake Lock === */
    async function requestWakeLock() {
        if ('wakeLock' in navigator) {
            try {
                wakeLock = await navigator.wakeLock.request('screen');
                wakeLock.addEventListener('release', () => {
                    console.log('Wake Lock was released');
                });
                console.log('Wake Lock is active');
            } catch (err) {
                console.error(`${err.name}, ${err.message}`);
            }
        }
    }

    document.addEventListener('visibilitychange', async () => {
        if (wakeLock !== null && document.visibilityState === 'visible' && tabScreens['card-screen'].classList.contains('active')) {
            requestWakeLock();
        }
    });

});
