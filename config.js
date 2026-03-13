/* 🌌 UNIVERSE CENTRAL CONFIGURATION - INTEGRATED VERSION */

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

// 2. 페이지 경로 설정 (기존 설정 유지)
const UNIVERSE_PATHS = {
    INDEX: "index.html",
    MENU: "menu.html",
    GUESTBOOK: "guestbook.html",
    BOARD: "board.html",
    GALLERY: "gallery.html",
    WRITE: "write.html",
    EDIT: "edit.html",
    VIEW: "view.html"
};

// 3. 공통 데이터 관리 및 이동 함수
const Universe = {
    // URL에서 유저 정보를 안전하게 가져오는 함수
    getUser: () => {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('user') || "VISITOR"; // 기본값을 VISITOR로 유지
    },

    /**
     * 페이지 이동 통합 함수
     * @param {string} pageName - UNIVERSE_PATHS의 키 값 (예: 'menu', 'board')
     * @param {string} userName - (선택사항) 새로 지정할 유저 이름 (로그인 시 사용)
     */
    navigateTo: function(pageName, userName) {
        // 1. 전달받은 userName이 있으면 그것을 쓰고, 없으면 현재 URL의 유저 정보를 가져옴
        const user = userName || this.getUser();
        
        // 2. 경로 검색 (대문자 처리)
        const path = UNIVERSE_PATHS[pageName.toUpperCase()];
        
        if (path) {
            // 3. 유저 정보를 포함하여 안전하게 이동
            location.href = `${path}?user=${encodeURIComponent(user)}`;
        } else {
            // 만약 PATH에 등록되지 않은 파일명(예: 'board')이 들어올 경우를 대비한 예외 처리
            console.warn("경로 설정에 없는 페이지입니다. 파일명으로 직접 이동을 시도합니다.");
            location.href = `${pageName}.html?user=${encodeURIComponent(user)}`;
        }
    }
};

// 4. 레거시 코드 호환성 유지 (기존에 UniverseNav를 썼을 경우를 대비)
const UniverseNav = {
    replaceToMenu: (userName) => {
        Universe.navigateTo('MENU', userName);
    }
};
