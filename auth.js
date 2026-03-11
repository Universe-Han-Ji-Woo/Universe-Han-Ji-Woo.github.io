/* auth.js - 로그인 및 상태 유지 독립 파일 */

// 1. 로그인 정보 저장 (로그인 성공 시 호출)
function saveLogin(nickname) {
    // 세션과 로컬 양쪽에 저장하여 브라우저 환경에 구애받지 않게 함
    localStorage.setItem('userNick', nickname);
    sessionStorage.setItem('userNick', nickname);
}

// 2. 현재 로그인된 사용자 가져오기
function getLoginUser() {
    return localStorage.getItem('userNick') || sessionStorage.getItem('userNick');
}

// 3. 페이지 이동 시 로그인 상태 유지하며 이동 (강제 이동 절대 없음)
function navigateTo(url) {
    const user = getLoginUser();
    // 로그인 상태라면 URL에 꼬리표를 붙여서 확실히 전달 (선택 사항이지만 안전함)
    const finalUrl = user ? `${url}?auth=${encodeURIComponent(user)}` : url;
    location.href = finalUrl;
}

// 4. 로그아웃 (필요할 때만 호출)
function doLogout() {
    localStorage.removeItem('userNick');
    sessionStorage.removeItem('userNick');
    location.href = 'index.html';
}
