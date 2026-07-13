// ============================================================
//  26 VCC 스케줄표 — 연동 설정
//
//  scriptUrl : Apps Script "웹 앱 URL" (https://script.google.com/macros/s/…/exec)
//              → 구글시트-연동-가이드.md 4단계에서 복사한 주소를 붙여넣으세요.
//              비워두면 구글 시트 연동 없이 로컬 모드(schedule-data.js + 엑셀 업로드)로 동작합니다.
//
//  sheetUrl  : 구글 시트 편집 화면 주소 (선택) — 입력하면 페이지에
//              [📝 구글 시트에서 수정] 버튼이 생깁니다.
//
//  pollSeconds : 자동 동기화 주기(초). 기본 30초.
// ============================================================

const CONFIG = {
  scriptUrl: "https://script.google.com/macros/s/AKfycbw5oMqF2Z30J5bnrSllQ-uEmBnJ7T7gRM6rvGeMdly6jWs0rL0xmBeNStsza50whQEphg/exec",
  sheetUrl: "https://docs.google.com/spreadsheets/d/1rm7ydz7Sr2fWc_4eaHPgX_9jiWqO3crvgsjlmkFUDyQ/edit?gid=2030655855#gid=2030655855",
  pollSeconds: 30
};
