
// 註冊 Service Worker (PWA 核心)
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('./sw.js')
                    .then(registration => {
                        console.log('PWA ServiceWorker 註冊成功！', registration.scope);
                    })
                    .catch(err => {
                        console.log('PWA ServiceWorker 註冊失敗：', err);
                    });
            });
        }
// 牌庫資料 
const deck = [
    // ================= 大阿爾克那 (Major Arcana) =================
    { id: 0, name: "0. 愚者 (The Fool)", image: "images/fool.jpg" },
    { id: 1, name: "I. 魔術師 (The Magus)", image: "images/magus.jpg" },
    { id: 2, name: "II. 女祭司 (The Priestess)", image: "images/priestess.jpg" },
    { id: 3, name: "III. 皇后 (The Empress)", image: "images/empress.jpg" },
    { id: 4, name: "IV. 皇帝 (The Emperor)", image: "images/emperor.jpg" },
    { id: 5, name: "V. 教皇 (The Hierophant)", image: "images/hierophant.jpg" },
    { id: 6, name: "VI. 戀人 (The Lovers)", image: "images/lovers.jpg" },
    { id: 7, name: "VII. 戰車 (The Chariot)", image: "images/chariot.jpg" },
    { id: 8, name: "VIII. 調整 (Adjustment)", image: "images/adjustment.jpg" },
    { id: 9, name: "IX. 隱者 (The Hermit)", image: "images/hermit.jpg" },
    { id: 10, name: "X. 命運 (Fortune)", image: "images/fortune.jpg" },
    { id: 11, name: "XI. 慾望 (Lust)", image: "images/lust.jpg" },
    { id: 12, name: "XII. 倒吊人 (The Hanged Man)", image: "images/hanged_man.jpg" },
    { id: 13, name: "XIII. 死神 (Death)", image: "images/death.jpg" },
    { id: 14, name: "XIV. 藝術 (Art)", image: "images/art.jpg" },
    { id: 15, name: "XV. 惡魔 (The Devil)", image: "images/devil.jpg" },
    { id: 16, name: "XVI. 塔 (The Tower)", image: "images/tower.jpg" },
    { id: 17, name: "XVII. 星星 (The Star)", image: "images/star.jpg" },
    { id: 18, name: "XVIII. 月亮 (The Moon)", image: "images/moon.jpg" },
    { id: 19, name: "XIX. 太陽 (The Sun)", image: "images/sun.jpg" },
    { id: 20, name: "XX. 新紀元 (The Aeon)", image: "images/aeon.jpg" },
    { id: 21, name: "XXI. 宇宙 (The Universe)", image: "images/universe.jpg" },

    // ================= 小阿爾克那 - 權杖 (Wands / 火) =================
    { id: 22, name: "權杖騎士 (Knight of Wands)", image: "images/wands_knight.jpg" },
    { id: 23, name: "權杖王后 (Queen of Wands)", image: "images/wands_queen.jpg" },
    { id: 24, name: "權杖王子 (Prince of Wands)", image: "images/wands_prince.jpg" },
    { id: 25, name: "權杖公主 (Princess of Wands)", image: "images/wands_princess.jpg" },
    { id: 26, name: "權杖一 (Ace of Wands)", image: "images/wands_1.jpg" },
    { id: 27, name: "權杖二 (2 of Wands)", image: "images/wands_2.jpg" },
    { id: 28, name: "權杖三 (3 of Wands)", image: "images/wands_3.jpg" },
    { id: 29, name: "權杖四 (4 of Wands)", image: "images/wands_4.jpg" },
    { id: 30, name: "權杖五 (5 of Wands)", image: "images/wands_5.jpg" },
    { id: 31, name: "權杖六 (6 of Wands)", image: "images/wands_6.jpg" },
    { id: 32, name: "權杖七 (7 of Wands)", image: "images/wands_7.jpg" },
    { id: 33, name: "權杖八 (8 of Wands)", image: "images/wands_8.jpg" },
    { id: 34, name: "權杖九 (9 of Wands)", image: "images/wands_9.jpg" },
    { id: 35, name: "權杖十 (10 of Wands)", image: "images/wands_10.jpg" },

    // ================= 小阿爾克那 - 聖杯 (Cups / 水) =================
    { id: 36, name: "聖杯騎士 (Knight of Cups)", image: "images/cups_knight.jpg" },
    { id: 37, name: "聖杯王后 (Queen of Cups)", image: "images/cups_queen.jpg" },
    { id: 38, name: "聖杯王子 (Prince of Cups)", image: "images/cups_prince.jpg" },
    { id: 39, name: "聖杯公主 (Princess of Cups)", image: "images/c.jpg" },
    { id: 40, name: "聖杯一 (Ace of Cups)", image: "images/cups_1.jpg" },
    { id: 41, name: "聖杯二 (2 of Cups)", image: "images/cups_2.jpg" },
    { id: 42, name: "聖杯三 (3 of Cups)", image: "images/cups_3.jpg" },
    { id: 43, name: "聖杯四 (4 of Cups)", image: "images/cups_4.jpg" },
    { id: 44, name: "聖杯五 (5 of Cups)", image: "images/cups_5.jpg" },
    { id: 45, name: "聖杯六 (6 of Cups)", image: "images/cups_6.jpg" },
    { id: 46, name: "聖杯七 (7 of Cups)", image: "images/cups_7.jpg" },
    { id: 47, name: "聖杯八 (8 of Cups)", image: "images/cups_8.jpg" },
    { id: 48, name: "聖杯九 (9 of Cups)", image: "images/cups_9.jpg" },
    { id: 49, name: "聖杯十 (10 of Cups)", image: "images/cups_10.jpg" },

    // ================= 小阿爾克那 - 寶劍 (Swords / 風) =================
    { id: 50, name: "寶劍騎士 (Knight of Swords)", image: "images/swords_knight.jpg" },
    { id: 51, name: "寶劍王后 (Queen of Swords)", image: "images/swords_queen.jpg" },
    { id: 52, name: "寶劍王子 (Prince of Swords)", image: "images/swords_prince.jpg" },
    { id: 53, name: "寶劍公主 (Princess of Swords)", image: "images/swords_princess.jpg" },
    { id: 54, name: "寶劍一 (Ace of Swords)", image: "images/swords_1.jpg" },
    { id: 55, name: "寶劍二 (2 of Swords)", image: "images/swords_2.jpg" },
    { id: 56, name: "寶劍三 (3 of Swords)", image: "images/swords_3.jpg" },
    { id: 57, name: "寶劍四 (4 of Swords)", image: "images/swords_4.jpg" },
    { id: 58, name: "寶劍五 (5 of Swords)", image: "images/swords_5.jpg" },
    { id: 59, name: "寶劍六 (6 of Swords)", image: "images/swords_6.jpg" },
    { id: 60, name: "寶劍七 (7 of Swords)", image: "images/swords_7.jpg" },
    { id: 61, name: "寶劍八 (8 of Swords)", image: "images/swords_8.jpg" },
    { id: 62, name: "寶劍九 (9 of Swords)", image: "images/swords_9.jpg" },
    { id: 63, name: "寶劍十 (10 of Swords)", image: "images/swords_10.jpg" },

    // ================= 小阿爾克那 - 圓盤 (Disks / 土) =================
    { id: 64, name: "圓盤騎士 (Knight of Disks)", image: "images/disks_knight.jpg" },
    { id: 65, name: "圓盤王后 (Queen of Disks)", image: "images/disks_queen.jpg" },
    { id: 66, name: "圓盤王子 (Prince of Disks)", image: "images/disks_prince.jpg" },
    { id: 67, name: "圓盤公主 (Princess of Disks)", image: "images/disks_princess.jpg" },
    { id: 68, name: "圓盤一 (Ace of Disks)", image: "images/disks_1.jpg" },
    { id: 69, name: "圓盤二 (2 of Disks)", image: "images/disks_2.jpg" },
    { id: 70, name: "圓盤三 (3 of Disks)", image: "images/disks_3.jpg" },
    { id: 71, name: "圓盤四 (4 of Disks)", image: "images/disks_4.jpg" },
    { id: 72, name: "圓盤五 (5 of Disks)", image: "images/disks_5.jpg" },
    { id: 73, name: "圓盤六 (6 of Disks)", image: "images/disks_6.jpg" },
    { id: 74, name: "圓盤七 (7 of Disks)", image: "images/disks_7.jpg" },
    { id: 75, name: "圓盤八 (8 of Disks)", image: "images/disks_8.jpg" },
    { id: 76, name: "圓盤九 (9 of Disks)", image: "images/disks_9.jpg" },
    { id: 77, name: "圓盤十 (10 of Disks)", image: "images/disks_10.jpg" }
];



// 分頁切換功能
function switchTab(tabId, btnElement) {
    // 隱藏所有分頁，移除所有按鈕的 active 狀態
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    // 顯示選擇的分頁，並讓按鈕亮起
    document.getElementById(tabId).classList.add('active');
    btnElement.classList.add('active');
}

// 1+3+1 牌陣抽牌邏輯 (不含正逆位)
function drawSpread() {
    if (deck.length < 5) return alert("牌庫不足 5 張！");

    for (let i = 0; i < 5; i++) {
        document.getElementById(`card-${i}`).classList.remove('flipped');
        document.getElementById(`name-${i}`).innerText = "";
    }

    setTimeout(() => {
        let shuffled = [...deck];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        const drawn = shuffled.slice(0, 5);

        drawn.forEach((card, i) => {
            setTimeout(() => {
                // 1+3+1 確保不套用逆位 class
                document.getElementById(`img-${i}`).classList.remove('is-reversed');
                document.getElementById(`img-${i}`).src = card.image;
                document.getElementById(`name-${i}`).innerText = card.name;
                document.getElementById(`card-${i}`).classList.add('flipped');
            }, i * 200);
        });
    }, 600);
}

// Yes or No 抽牌邏輯 (包含正逆位)
function drawYesNo() {
    const cardInner = document.getElementById('yn-card');
    const cardImg = document.getElementById('yn-img');
    const cardName = document.getElementById('yn-name');

    // 蓋牌
    cardInner.classList.remove('flipped');
    cardName.innerText = "";

    setTimeout(() => {
        // 隨機抽牌與隨機決定正逆位 (50%機率)
        const randomIndex = Math.floor(Math.random() * deck.length);
        const card = deck[randomIndex];
        const isReversed = Math.random() >= 0.5; // 大於等於0.5為逆位

        // 設定圖片
        cardImg.src = card.image;
        
        // 處理正逆位顯示
        if (isReversed) {
            cardImg.classList.add('is-reversed'); // 加上 CSS 讓圖片轉 180 度
            cardName.innerText = card.name + " (逆位)";
            cardName.style.color = "#e74c3c"; // 逆位用紅色字體提示
        } else {
            cardImg.classList.remove('is-reversed');
            cardName.innerText = card.name + " (正位)";
            cardName.style.color = "#f1c40f"; // 正位用黃色字體
        }

        // 翻牌
        cardInner.classList.add('flipped');
    }, 600);
}


// 清空問題輸入框的功能
function clearQuestion(inputId) {
    document.getElementById(inputId).value = '';
}

// ================= 新增：洗牌功能 =================

// 洗牌：1+3+1 牌陣
function shuffleSpread() {
    for (let i = 0; i < 5; i++) {
        const cardInner = document.getElementById(`card-${i}`);
        const cardName = document.getElementById(`name-${i}`);
        
        // 移除翻轉 class，讓牌蓋回背面
        cardInner.classList.remove('flipped');
        
        // 延遲 400 毫秒（等翻回背面的動畫跑完）後再清空文字，視覺上會比較自然
        setTimeout(() => {
            cardName.innerText = "";
        }, 400);
    }
}

// ================= 新增：洗牌功能 =================

// 洗牌：1+3+1 牌陣
function shuffleSpread() {
    for (let i = 0; i < 5; i++) {
        const cardInner = document.getElementById(`card-${i}`);
        const cardName = document.getElementById(`name-${i}`);
        
        // 移除翻轉 class，讓牌蓋回背面
        cardInner.classList.remove('flipped');
        
        // 延遲 400 毫秒（等翻回背面的動畫跑完）後再清空文字，視覺上會比較自然
        setTimeout(() => {
            cardName.innerText = "";
        }, 400);
    }
}

// 洗牌：Yes or No 單張牌
function shuffleYesNo() {
    const cardInner = document.getElementById('yn-card');
    const cardName = document.getElementById('yn-name');

    cardInner.classList.remove('flipped');
    
    setTimeout(() => {
        cardName.innerText = "";
    }, 400);
}