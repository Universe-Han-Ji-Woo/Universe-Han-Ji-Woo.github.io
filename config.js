/* 🌌 UNIVERSE CENTRAL CONFIGURATION */

// 1. 파이어베이스 설정 (모든 페이지 공용)
const firebaseConfig = {
    apiKey: "AIzaSyCD0OaaN1E5uT950X5hkzCBdqT87JQRXrg",
    authDomain: "jiwoo-fanpage.firebaseapp.com",
    databaseURL: "https://jiwoo-fanpage-default-rtdb.firebaseio.com",
    projectId: "jiwoo-fanpage",
    storageBucket: "jiwoo-fanpage.firebasestorage.app",
    messagingSenderId: "928634858988",
    appId: "1:928634858988:web:34ae1adf6bab3ad654e4c9"
};

// 2. 페이지 경로 설정
const UNIVERSE_PATHS = {
    INDEX: "index.html",
    MENU: "menu.html",
    GUESTBOOK: "guestbook.html",
    BOARD: "board.html",
    GALLERY: "gallery.html"
};

// 3. 공통 데이터 관리 및 이동 함수
const Universe = {
    // URL에서 유저 정보를 안전하게 가져오는 함수
    getUser: () => {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('user') || "Unknown";
    },

    // 유저 정보를 주머니에 넣어서 이동하는 함수
    navigateTo: (pageName) => {
        const user = Universe.getUser();
        const path = UNIVERSE_PATHS[pageName.toUpperCase()];
        if (path) {
            location.href = `${path}?user=${encodeURIComponent(user)}`;
        } else {
            console.error("존재하지 않는 페이지입니다.");
        }
    }
};
