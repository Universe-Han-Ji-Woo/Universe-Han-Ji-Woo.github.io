/* 🌌 UNIVERSE CONFIGURATION */
const UNIVERSE_PATHS = {
    INDEX: "index.html",
    MENU: "menu.html",
    GUESTBOOK: "guestbook.html"
};

// 공통 이동 함수
const UniverseNav = {
    goToIndex: () => location.href = UNIVERSE_PATHS.INDEX,
    goToMenu: () => location.href = UNIVERSE_PATHS.MENU,
    goToGuestbook: () => location.href = UNIVERSE_PATHS.GUESTBOOK,
    
    // 로그인용 (기록 삭제 이동)
    replaceToMenu: (user) => {
        const target = `${UNIVERSE_PATHS.MENU}?user=${encodeURIComponent(user)}`;
        location.replace(target);
    }
};
