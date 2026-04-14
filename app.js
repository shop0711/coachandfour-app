// app.js — Coach & Four Ver.2.0

// --- Home Menu Tiles ---
const HOME_MENU_TILES = [
    { type: 'iframe', target: 'https://www.shoten.co.jp/rel/searchbook/', color: '#88C9D4', icon: 'fa-solid fa-book',             en: 'BOOKS',           ja: '在庫検索・お取り置き' },
    { type: 'iframe', target: 'https://www.shoten.co.jp/rel/searchcd/',   color: '#E5A574', icon: 'fa-solid fa-compact-disc',     en: 'CD&DVD/BD',       ja: '在庫検索・予約・ご注文' },
    { type: 'iframe', target: 'https://www.coachandfour.ne.jp/original/', color: '#97C98C', icon: 'fa-solid fa-gift',             en: 'BONUS ITEM',      ja: '特典付商品情報' },
    { type: 'iframe', target: 'https://www.coachandfour.ne.jp/books/books_ranking/', color: '#88C9D4', icon: 'fa-solid fa-crown', en: 'BOOKS RANKING',   ja: '書籍ランキング' },
    { type: 'iframe', target: 'https://www.coachandfour.ne.jp/music/album_ranking/', color: '#E5A574', icon: 'fa-solid fa-crown', en: 'CD&DVD RANKING',  ja: 'CD・DVDランキング' },
    { type: 'iframe', target: 'https://www.coachandfour-shop.com/',       color: '#9E8675', icon: 'fa-solid fa-cart-shopping',    en: 'WEB SHOP',        ja: 'オンラインショップ' },
    { type: 'iframe', target: 'https://www.coachandfour.ne.jp/event/',    color: '#E58A97', icon: 'fa-solid fa-calendar-check',   en: 'EVENT INFO',      ja: 'サイン会・インストアライブ' },
    { type: 'iframe', target: 'https://www.coachandfour.ne.jp/recruit/',  color: '#999999', icon: 'fa-solid fa-user-group',       en: 'RECRUIT',         ja: '採用情報（各都市）' },
    { type: 'tab',    target: 'store-screen',                             color: '#9E8675', icon: 'fa-solid fa-map-location-dot', en: 'STORE INFO',      ja: '店舗一覧' }
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
    const screenSearch = document.getElementById('search-screen');
    const screenStore = document.getElementById('store-screen');
    const screenLatest = document.getElementById('latest-screen');
    const screenMypage = document.getElementById('mypage-screen');
    const screenSubpage = document.getElementById('subpage-screen');
    const bottomNav = document.getElementById('bottom-nav');
    
    // Scan (Registration)
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

    // ISBN Search
    const btnIsbnScan = document.getElementById('btn-isbn-scan');
    const btnIsbnStop = document.getElementById('btn-isbn-stop');
    const isbnReaderContainer = document.getElementById('isbn-reader-container');
    const isbnInput = document.getElementById('isbn-input');
    const btnIsbnSearch = document.getElementById('btn-isbn-search');
    const isbnResultArea = document.getElementById('isbn-result-area');
    const isbnResultIframe = document.getElementById('isbn-result-iframe');
    const btnIsbnCloseResult = document.getElementById('btn-isbn-close-result');

    // Mypage
    const darkmodeToggle = document.getElementById('darkmode-toggle');
    const btnResetMember = document.getElementById('btn-reset-member');
    const mypageMemberCode = document.getElementById('mypage-member-code');

    // Nav items
    const navItems = document.querySelectorAll('.nav-item');

    // State
    const STORAGE_KEY = 'coachandfour_member_data';
    const THEME_KEY = 'coachandfour_theme';
    let html5QrCode = null;
    let isbnScanner = null;
    let wakeLock = null;
    let currentMemberCode = null;

    // Tab screens mapping
    const tabScreens = {
        'registration-screen': screenRegistration,
        'home-screen': screenHome,
        'card-screen': screenCard,
        'search-screen': screenSearch,
        'latest-screen': screenLatest,
        'store-screen': screenStore,
        'mypage-screen': screenMypage
    };

    // --- Initialize ---
    initTheme();
    checkExistingData();
    populateHomeMenu();
    setupMenuListeners();
    setupIframeListeners();
    setupSliderListeners();
    setupBottomNav();
    setupIsbnSearch();
    setupMypageListeners();
    setupLatestScreen();

    // --- Functions ---

    /* === LATEST (SNS) Screen === */
    function loadTwitterWidget() {
        const container = document.getElementById('x-widget-container');
        if (!container) return;
        
        // 既存のコンテンツ（初期HTMLのaタグや古いiframe）をクリア
        container.innerHTML = '';
        container.style.display = 'block';

        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        
        // X公式のSPA向けメソッド `createTimeline` を使用
        // ※ `.load()` はPromiseを返さないため、`.then()` で確実な制御ができるこちらを採用
        if (window.twttr && window.twttr.widgets) {
            window.twttr.widgets.createTimeline(
                {
                    sourceType: 'profile',
                    screenName: 'cf_wakabadai'
                },
                container,
                {
                    height: 500,
                    chrome: 'noheader nofooter noborders transparent',
                    theme: isDark ? 'dark' : 'light'
                }
            ).then(() => {
                // レンダリング完了後にスケルトンを非表示にする
                const skeleton = document.querySelector('.x-timeline-placeholder');
                if (skeleton) {
                    skeleton.style.display = 'none';
                }
                container.style.animation = 'fadeIn 0.5s ease forwards';
            }).catch((error) => {
                console.error("X タイムラインの読み込みに失敗しました:", error);
            });
        } else {
            // スクリプトのロードが間に合っていない場合のリトライ
            setTimeout(loadTwitterWidget, 300);
        }
    }

    /* === LATEST (SNS) Screen === */
    function setupLatestScreen() {
        const btnX = document.getElementById('btn-sns-x');
        const btnInsta = document.getElementById('btn-sns-insta');
        const contentX = document.getElementById('sns-x');
        const contentInsta = document.getElementById('sns-insta');
        const slider = document.getElementById('sns-segment-slider');
        const latestContent = document.getElementById('latest-content');

        if (!btnX || !btnInsta) return;

        function switchSnsTab(target) {
            if (target === 'sns-x') {
                btnX.classList.add('active');
                btnInsta.classList.remove('active');
                contentX.classList.add('active');
                contentInsta.classList.remove('active');
                if(slider) slider.style.transform = 'translateX(0)';
            } else {
                btnX.classList.remove('active');
                btnInsta.classList.add('active');
                contentX.classList.remove('active');
                contentInsta.classList.add('active');
                if(slider) slider.style.transform = 'translateX(100%)';
            }
        }

        btnX.addEventListener('click', () => switchSnsTab('sns-x'));
        btnInsta.addEventListener('click', () => switchSnsTab('sns-insta'));

        // Swipe support
        if (latestContent) {
            let startX = 0;
            let currentX = 0;
            latestContent.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
            }, { passive: true });
            
            latestContent.addEventListener('touchend', (e) => {
                currentX = e.changedTouches[0].clientX;
                const diff = startX - currentX;
                // Swipe Left (Show Insta)
                if (diff > 50) {
                    switchSnsTab('sns-insta');
                }
                // Swipe Right (Show X)
                else if (diff < -50) {
                    switchSnsTab('sns-x');
                }
            }, { passive: true });
        }
        
        // Init Twitter Widget
        loadTwitterWidget();
    }

    /* === Theme (Dark Mode) === */
    function initTheme() {
        const savedTheme = localStorage.getItem(THEME_KEY);
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            if (darkmodeToggle) darkmodeToggle.checked = true;
        }
    }

    function toggleTheme() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem(THEME_KEY, 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem(THEME_KEY, 'dark');
        }
        // Update Twitter Widget theme
        loadTwitterWidget();
    }

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
        if (tabId === 'store-screen') {
            populateStoreContent();
        } else if (tabId === 'card-screen') {
            renderCardScreen();
        } else if (tabId === 'mypage-screen') {
            updateMypageInfo();
        } else if (tabId === 'latest-screen') {
            loadTwitterWidget();
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

    /* === Camera Scanning (Registration) === */
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

    /**
     * Generate barcode with special encoding:
     * Encode data = "D" + 16-digit member code + "B"
     * Display text = digits only (handled by custom CSS text, displayValue: false)
     */
    function generateBarcode(svgEl, code) {
        try {
            // Encode with D prefix and B suffix per store system specification
            const encodedData = "D" + code + "B";
            
            JsBarcode(svgEl, encodedData, {
                format: "CODE128",
                lineColor: "#000",
                displayValue: false,
                margin: 0,
                background: "#FFFFFF",
                width: 2.2
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

    /* === ISBN Search (本を探す) === */
    function setupIsbnSearch() {
        // Scan button
        if (btnIsbnScan) {
            btnIsbnScan.addEventListener('click', startIsbnScan);
        }
        
        // Stop scan
        if (btnIsbnStop) {
            btnIsbnStop.addEventListener('click', stopIsbnScan);
        }
        
        // Manual search
        if (btnIsbnSearch) {
            btnIsbnSearch.addEventListener('click', () => {
                const isbn = isbnInput.value.replace(/\D/g, '');
                if (isbn.length === 13 || isbn.length === 10) {
                    showIsbnResult(isbn);
                } else {
                    alert("ISBNは10桁または13桁で入力してください。");
                }
            });
        }
        
        // Enter key on ISBN input
        if (isbnInput) {
            isbnInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    btnIsbnSearch.click();
                }
            });
        }
        
        // Close result
        if (btnIsbnCloseResult) {
            btnIsbnCloseResult.addEventListener('click', () => {
                isbnResultArea.style.display = 'none';
                isbnResultIframe.src = '';
            });
        }
    }

    async function startIsbnScan() {
        isbnReaderContainer.style.display = 'block';
        btnIsbnScan.style.display = 'none';
        
        if (!isbnScanner) {
            isbnScanner = new Html5Qrcode("isbn-reader");
        }
        
        const config = { fps: 10, qrbox: { width: 250, height: 100 } };
        
        try {
            await isbnScanner.start({ facingMode: "environment" }, config, (decodedText) => {
                // Extract digits from scanned barcode
                const digits = decodedText.replace(/\D/g, '');
                // ISBN-13 starts with 978 or 979
                if (digits.length === 13 && (digits.startsWith('978') || digits.startsWith('979'))) {
                    stopIsbnScan();
                    isbnInput.value = digits;
                    showIsbnResult(digits);
                } else if (digits.length === 10) {
                    // ISBN-10
                    stopIsbnScan();
                    isbnInput.value = digits;
                    showIsbnResult(digits);
                }
            });
        } catch (err) {
            console.error("ISBN Camera access failed", err);
            alert("カメラの起動に失敗しました。ISBNを手動入力してください。");
            stopIsbnScan();
        }
    }

    async function stopIsbnScan() {
        if (isbnScanner && isbnScanner.isScanning) {
            await isbnScanner.stop();
        }
        isbnReaderContainer.style.display = 'none';
        if (btnIsbnScan) btnIsbnScan.style.display = 'flex';
    }

    function showIsbnResult(isbn) {
        const url = `https://www.shoten.co.jp/rel/searchbook/stock.asp?isbn=${isbn}&st=7&map=Y`;
        isbnResultIframe.src = url;
        isbnResultArea.style.display = 'block';
        
        // Scroll to result
        isbnResultArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    /* === Mypage Listeners === */
    function setupMypageListeners() {
        // Dark mode toggle - checkbox change event
        if (darkmodeToggle) {
            darkmodeToggle.addEventListener('change', () => {
                toggleTheme();
            });
        }

        // Also make the entire dark mode row clickable (excluding the toggle itself)
        const darkmodeItem = document.getElementById('mypage-darkmode-item');
        if (darkmodeItem) {
            darkmodeItem.addEventListener('click', (e) => {
                // Only trigger if the click wasn't directly on the toggle input or its label
                if (e.target !== darkmodeToggle && !e.target.classList.contains('toggle-slider')) {
                    darkmodeToggle.checked = !darkmodeToggle.checked;
                    toggleTheme();
                }
            });
        }

        // Reset member data
        if (btnResetMember) {
            btnResetMember.addEventListener('click', () => {
                if (confirm("会員情報をリセットしますか？\n登録済みの会員番号が削除されます。")) {
                    localStorage.removeItem(STORAGE_KEY);
                    currentMemberCode = null;
                    bottomNav.style.display = 'none';
                    showScreen(screenRegistration);
                    // Clear form inputs
                    inputMemberCode.value = '';
                    inputPinCode.value = '';
                }
            });
        }
    }

    function updateMypageInfo() {
        if (currentMemberCode && mypageMemberCode) {
            mypageMemberCode.textContent = formatMemberCode(currentMemberCode);
        }
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
