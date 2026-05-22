// ─────────────────────────────────────────────────────────────────────────────
// CUE CRAFT 3D  –  Phase 5: Cross-Platform Premium Simulator
// Three.js r128 loaded globally via CDN (THREE + THREE.OrbitControls)
// ─────────────────────────────────────────────────────────────────────────────

/* ═══════════════════════════════════════════════════════════════════════════════
   i18n DICTIONARY  –  6 Languages
   ═══════════════════════════════════════════════════════════════════════════════*/
const i18n = {
  en: {
    subtitle:'Next-Gen Web Billiards Simulator',
    player1:'PLAYER 1',player2:'PLAYER 2',solids:'Solids',stripes:'Stripes',
    matchStatus:'MATCH STATUS',cueControl:'CUE CONTROL',strikePower:'STRIKE POWER',
    aiPrediction:'AI PREDICTION PATH',freeTrial:'FREE TRIAL',
    strikeBtn:'STRIKE BALL (SPACE)',resetBtn:'RESET CUE BALL',
    spinControl:'CUE BALL SPIN',spinCenter:'CENTER',spinBackspin:'BACKSPIN',
    spinTopspin:'TOPSPIN',spinLeft:'LEFT SPIN',spinRight:'RIGHT SPIN',
    modePocket:'POCKET BALL',mode3Cushion:'3-CUSHION',
    globalRivals:'GLOBAL RIVALS',challengeBtn:'CHALLENGE',btnPractice:'FREE PRACTICE',
    practiceMode:'FREE PRACTICE',practiceModeSub:'Solo practice mode enabled',
    selectCountry:'SELECT YOUR COUNTRY',
    helpItem1:'<span>Drag</span> Rotate',helpItem2:'<span>Right-Click</span> Pan',
    helpItem3:'<span>Wheel</span> Zoom',helpItem4:'<span>Space</span> Strike',
    helpNew1:'🖱️ Drag: Rotate 3D View',helpNew2:'🖱️ Right-click drag: Pan View',
    helpNew3:'⚙️ Wheel scroll: Zoom In/Out',helpNew4:'⌨️ Spacebar: Strike',
    guideTitle:'HOW TO PLAY',
    guideStep1:'🖱️  Drag the screen to aim your angle',
    guideStep2:'💪  Adjust strike power with the slider',
    guideStep3:'⚡  Press STRIKE or Spacebar to shoot!',
    guideStep4:'✨  Toggle AI Path for trajectory hints',
    guideBtn:"LET'S PLAY!",
    commercial:'EXTRA CHANCE',chanceExpired:'CHANCE EXPIRED!',
    scratchedDesc:'You scratched the cue ball. Use a chance to continue!',
    watchAd:'🎬 GET EXTRA CHANCE',giveUp:'GIVE UP & RESTART',
    sponsored:'BONUS',adSlot:'Billiards Arena Event',adDesc:'Special events coming soon',
    revengeTitle:'DEFEATED!',revengeDesc:'Lost the match! Watch an ad for a revenge shot – balls stay in place!',
    revengeAd:'🎬 REVENGE SHOT (WATCH AD)',revengeSkip:'ACCEPT DEFEAT',
    readyToAim:'READY TO AIM',statusDescDefault:'Drag to aim. Scroll to zoom.',
    shotInProgress:'SHOT IN PROGRESS',shotInProgressDesc:'Physics computing...',
    cueBallReady:'CUE BALL READY',cueBallReadyDesc:'Adjust angle and strike!',
    cueBallScratched:'CUE BALL SCRATCHED!',cueBallScratchDesc:'Cue ball pocketed.',
    matchRestarted:'MATCH RESTARTED',matchRestartedDesc:"Board reset. Player 1's turn.",
    playerTurn:"PLAYER {n}'S TURN",playerTurnDesc:'Adjust angle and strike.',
    aiTurn:'AI IS THINKING...',aiTurnDesc:'Rival is calculating the shot...',
    toastRevived:'REVIVED!',toastRevivedSub:'Premium Chance Activated!',
    toastAiOn:'AI PATH ON',toastAiOnSub:'Spherecasting active!',
    toastFantastic3:'FANTASTIC SHOT!',toastFantastic3Sub:'{n}-Cushion Bank!',
    toastFantastic2:'FANTASTIC!',toastFantastic2Sub:'2-Cushion Bank!',
    toastGreat1:'GREAT SHOT!',toastGreat1Sub:'Cushion Bank!',
    toastPocketed:'GREAT JOB!',toastPocketedSub:'Ball {n} pocketed!',
    toast3cScore:'SCORE!',toast3cScoreSub:'3-Cushion point!',
    toast3cMiss:'MISS',toast3cMissSub:'Not enough cushions or balls.',
    challengeStarting:'MATCH START!',challengeStartingSub:'vs {name}',
    revengeGranted:'REVENGE!',revengeGrantedSub:'One more chance!',
    chalkBtn:'APPLY CHALK (C)',toastMiscue:'MISCUE!',toastMiscueSub:'You forgot to chalk your cue!',
    controlsGuide:'CONTROLS',
  },
  ko: {
    subtitle:'차세대 웹 당구 시뮬레이터',
    player1:'플레이어 1',player2:'플레이어 2',solids:'솔리드(단색)',stripes:'스트라이프(줄무늬)',
    matchStatus:'경기 상태',cueControl:'큐 조작',strikePower:'타격 세기',
    aiPrediction:'AI 예측 경로',freeTrial:'무료 체험',
    strikeBtn:'타격하기 (스페이스)',resetBtn:'수구 리셋',
    spinControl:'수구 회전 조절',spinCenter:'중심',spinBackspin:'끌어치기',
    spinTopspin:'밀어치기',spinLeft:'좌회전',spinRight:'우회전',
    modePocket:'포켓볼',mode3Cushion:'쓰리쿠션',
    globalRivals:'글로벌 라이벌',challengeBtn:'도전',btnPractice:'혼자 연습하기',
    practiceMode:'연습 모드',practiceModeSub:'자유 연습 모드로 전환되었습니다',
    selectCountry:'국가 선택',
    helpItem1:'<span>드래그</span> 회전',helpItem2:'<span>우클릭</span> 이동',
    helpItem3:'<span>휠</span> 줌',helpItem4:'<span>스페이스</span> 타격',
    helpNew1:'🖱️ 마우스 드래그 : 3D 시점 회전',helpNew2:'🖱️ 마우스 우클릭 드래그 : 화면 평행 이동',
    helpNew3:'⚙️ 마우스 휠 스크롤 : 화면 확대/축소 (줌 인/아웃)',helpNew4:'⌨️ 스페이스바 : 큐대 타격하기',
    guideTitle:'게임 방법',
    guideStep1:'🖱️ 화면을 드래그해 조준 각도를 맞추세요',
    guideStep2:'💪 슬라이더로 타격 세기를 조절하세요',
    guideStep3:'⚡ 타격 버튼 또는 스페이스바를 누르세요!',
    guideStep4:'✨ AI 경로를 켜면 궤적이 보여요',
    guideBtn:'게임 시작!',
    commercial:'추가 기회',chanceExpired:'기회 소멸!',
    scratchedDesc:'수구가 포켓에 빠졌습니다!',
    watchAd:'🎬 추가 기회 얻기',giveUp:'포기하고 재시작',
    sponsored:'보너스',adSlot:'당구 아레나 이벤트',adDesc:'특별 이벤트 예정',
    revengeTitle:'패배!',revengeDesc:'경기에 졌습니다! 광고를 보고 공 위치 유지 복수전!',
    revengeAd:'🎬 복수전 (광고 시청)',revengeSkip:'패배 수용',
    readyToAim:'조준 준비',statusDescDefault:'드래그로 각도 조절. 스크롤로 줌.',
    shotInProgress:'샷 진행 중',shotInProgressDesc:'물리 연산 중...',
    cueBallReady:'수구 준비 완료',cueBallReadyDesc:'각도를 조절하고 타격!',
    cueBallScratched:'수구 스크래치!',cueBallScratchDesc:'수구가 포켓에 빠졌습니다.',
    matchRestarted:'경기 재시작',matchRestartedDesc:'보드 리셋. 플레이어 1 차례.',
    playerTurn:'플레이어 {n} 차례',playerTurnDesc:'각도 조절 후 타격.',
    aiTurn:'AI 사고 중...',aiTurnDesc:'라이벌이 샷을 계산 중...',
    toastRevived:'부활!',toastRevivedSub:'프리미엄 찬스 발동!',
    toastAiOn:'AI 예측 활성화',toastAiOnSub:'실시간 물리 투영 시작!',
    toastFantastic3:'환상적인 샷!',toastFantastic3Sub:'{n}쿠션 뱅크!',
    toastFantastic2:'멋진 샷입니다!',toastFantastic2Sub:'2쿠션 뱅크!',
    toastGreat1:'훌륭한 샷!',toastGreat1Sub:'쿠션 뱅크!',
    toastPocketed:'잘하셨어요!',toastPocketedSub:'{n}번 공 포켓!',
    toast3cScore:'득점!',toast3cScoreSub:'쓰리쿠션 포인트!',
    toast3cMiss:'미스',toast3cMissSub:'쿠션 또는 적구 부족.',
    challengeStarting:'경기 시작!',challengeStartingSub:'vs {name}',
    revengeGranted:'복수전!',revengeGrantedSub:'한 번 더 기회!',
    chalkBtn:'초크 칠하기 (C)',toastMiscue:'삑사리!',toastMiscueSub:'초크를 안 칠해서 큐가 미끄러졌습니다!',
    controlsGuide:'조작 가이드',
  },
  ja: {
    subtitle:'次世代ウェブビリヤードシミュレーター',
    player1:'プレイヤー1',player2:'プレイヤー2',solids:'ソリッド',stripes:'ストライプ',
    matchStatus:'試合状況',cueControl:'キュー操作',strikePower:'ショットパワー',
    aiPrediction:'AI予測パス',freeTrial:'無料体験',
    strikeBtn:'ショット (スペース)',resetBtn:'手球リセット',
    spinControl:'手球スピン',spinCenter:'センター',spinBackspin:'引き球',
    spinTopspin:'押し球',spinLeft:'左回転',spinRight:'右回転',
    modePocket:'ポケットボール',mode3Cushion:'スリークッション',
    globalRivals:'グローバルライバル',challengeBtn:'挑戦',btnPractice:'フリー練習',
    practiceMode:'練習モード',practiceModeSub:'ソロ練習モードに変更されました',
    selectCountry:'国を選択',
    helpItem1:'<span>ドラッグ</span> 回転',helpItem2:'<span>右クリック</span> パン',
    helpItem3:'<span>ホイール</span> ズーム',helpItem4:'<span>スペース</span> ショット',
    guideTitle:'遊び方',
    guideStep1:'🖱️ 画面をドラッグして角度を調整',
    guideStep2:'💪 スライダーでパワーを調整',
    guideStep3:'⚡ ショットボタンかスペースキーで打つ！',
    guideStep4:'✨ AIパスで軌道を表示',
    guideBtn:'プレイ開始！',
    commercial:'追加チャンス',chanceExpired:'チャンス終了！',
    scratchedDesc:'手球がポケットに落ちました！',
    watchAd:'🎬 追加チャンスを獲得',giveUp:'諦めてリスタート',
    sponsored:'ボーナス',adSlot:'アリーナイベント',adDesc:'特別イベント予定',
    revengeTitle:'敗北！',revengeDesc:'負けました！広告を見てリベンジショット！',
    revengeAd:'🎬 リベンジ（広告視聴）',revengeSkip:'敗北を受け入れる',
    readyToAim:'照準準備',statusDescDefault:'ドラッグで角度調整。スクロールでズーム。',
    shotInProgress:'ショット中',shotInProgressDesc:'物理演算中...',
    cueBallReady:'手球準備完了',cueBallReadyDesc:'角度を調整してショット！',
    cueBallScratched:'スクラッチ！',cueBallScratchDesc:'手球がポケットに落ちました。',
    matchRestarted:'試合リスタート',matchRestartedDesc:'ボードリセット。プレイヤー1の番。',
    playerTurn:'プレイヤー{n}の番',playerTurnDesc:'角度を調整してショット。',
    aiTurn:'AI思考中...',aiTurnDesc:'ライバルがショットを計算中...',
    toastRevived:'復活！',toastRevivedSub:'プレミアムチャンス発動！',
    toastAiOn:'AI予測ON',toastAiOnSub:'リアルタイム物理投影開始！',
    toastFantastic3:'素晴らしいショット！',toastFantastic3Sub:'{n}クッションバンク！',
    toastFantastic2:'ナイスショット！',toastFantastic2Sub:'2クッションバンク！',
    toastGreat1:'グッドショット！',toastGreat1Sub:'クッションバンク！',
    toastPocketed:'ナイス！',toastPocketedSub:'{n}番ボールポケット！',
    toast3cScore:'得点！',toast3cScoreSub:'スリークッションポイント！',
    toast3cMiss:'ミス',toast3cMissSub:'クッションまたは的球不足。',
    challengeStarting:'試合開始！',challengeStartingSub:'vs {name}',
    revengeGranted:'リベンジ！',revengeGrantedSub:'もう一度チャンス！',
    chalkBtn:'チョークを塗る (C)',toastMiscue:'ミス！',toastMiscueSub:'チョークを塗り忘れました！',
    controlsGuide:'操作ガイド',
  },
  zh: {
    subtitle:'次世代网页台球模拟器',
    player1:'玩家1',player2:'玩家2',solids:'全色球',stripes:'花色球',
    matchStatus:'比赛状态',cueControl:'球杆控制',strikePower:'击球力度',
    aiPrediction:'AI预测路线',freeTrial:'免费试用',
    strikeBtn:'击球 (空格)',resetBtn:'重置母球',
    spinControl:'母球旋转',spinCenter:'中心',spinBackspin:'缩杆',
    spinTopspin:'推杆',spinLeft:'左旋',spinRight:'右旋',
    modePocket:'落袋台球',mode3Cushion:'三库',
    globalRivals:'全球对手',challengeBtn:'挑战',btnPractice:'单人练习',
    practiceMode:'练习模式',practiceModeSub:'已切换至单人练习模式',
    selectCountry:'选择您的国家',
    helpItem1:'<span>拖拽</span> 旋转',helpItem2:'<span>右键</span> 平移',
    helpItem3:'<span>滚轮</span> 缩放',helpItem4:'<span>空格</span> 击球',
    guideTitle:'游戏方法',
    guideStep1:'🖱️ 拖拽屏幕调整角度',
    guideStep2:'💪 用滑块调整力度',
    guideStep3:'⚡ 按击球按钮或空格键发球！',
    guideStep4:'✨ 开启AI路径查看轨迹',
    guideBtn:'开始游戏！',
    commercial:'额外机会',chanceExpired:'机会结束！',
    scratchedDesc:'母球进袋了！',
    watchAd:'🎬 获取额外机会',giveUp:'放弃并重新开始',
    sponsored:'奖励',adSlot:'台球竞技场活动',adDesc:'特别活动敬请期待',
    revengeTitle:'失败！',revengeDesc:'比赛失败！看广告获得复仇一击！',
    revengeAd:'🎬 复仇击球（看广告）',revengeSkip:'接受失败',
    readyToAim:'准备瞄准',statusDescDefault:'拖拽调整角度。滚轮缩放。',
    shotInProgress:'击球中',shotInProgressDesc:'物理运算中...',
    cueBallReady:'母球就位',cueBallReadyDesc:'调整角度并击球！',
    cueBallScratched:'母球犯规！',cueBallScratchDesc:'母球进袋了。',
    matchRestarted:'比赛重启',matchRestartedDesc:'重置完成。玩家1回合。',
    playerTurn:'玩家{n}回合',playerTurnDesc:'调整角度后击球。',
    aiTurn:'AI思考中...',aiTurnDesc:'对手正在计算...',
    toastRevived:'复活！',toastRevivedSub:'高级机会激活！',
    toastAiOn:'AI预测开启',toastAiOnSub:'实时物理投射开始！',
    toastFantastic3:'精彩绝伦！',toastFantastic3Sub:'{n}库超级翻袋！',
    toastFantastic2:'精彩一击！',toastFantastic2Sub:'2库翻袋！',
    toastGreat1:'好球！',toastGreat1Sub:'库边球！',
    toastPocketed:'漂亮！',toastPocketedSub:'{n}号球进袋！',
    toast3cScore:'得分！',toast3cScoreSub:'三库得分！',
    toast3cMiss:'未中',toast3cMissSub:'库数或目标球不足。',
    challengeStarting:'比赛开始！',challengeStartingSub:'vs {name}',
    revengeGranted:'复仇！',revengeGrantedSub:'再来一次机会！',
    chalkBtn:'涂抹巧克 (C)',toastMiscue:'滑杆！',toastMiscueSub:'你忘记涂抹巧克了！',
    controlsGuide:'操作指南',
  },
  es: {
    subtitle:'Simulador de Billar Web de Nueva Generación',
    player1:'JUGADOR 1',player2:'JUGADOR 2',solids:'Lisas',stripes:'Rayadas',
    matchStatus:'ESTADO DEL JUEGO',cueControl:'CONTROL DEL TACO',strikePower:'POTENCIA',
    aiPrediction:'RUTA IA',freeTrial:'GRATIS',
    strikeBtn:'GOLPEAR (ESPACIO)',resetBtn:'RESETEAR BOLA',
    spinControl:'EFECTO DE BOLA',spinCenter:'CENTRO',spinBackspin:'RETROCESO',
    spinTopspin:'AVANCE',spinLeft:'IZQUIERDA',spinRight:'DERECHA',
    modePocket:'POOL',mode3Cushion:'3 BANDAS',
    globalRivals:'RIVALES GLOBALES',challengeBtn:'DESAFIAR',btnPractice:'PRACTICA LIBRE',
    practiceMode:'PRACTICA LIBRE',practiceModeSub:'Modo de practica activado',
    selectCountry:'SELECCIONA TU PAÍS',
    helpItem1:'<span>Arrastrar</span> Rotar',helpItem2:'<span>Click Der.</span> Mover',
    helpItem3:'<span>Rueda</span> Zoom',helpItem4:'<span>Espacio</span> Golpear',
    guideTitle:'CÓMO JUGAR',
    guideStep1:'🖱️ Arrastra para apuntar',
    guideStep2:'💪 Ajusta la potencia con el deslizador',
    guideStep3:'⚡ ¡Pulsa GOLPEAR o Espacio para tirar!',
    guideStep4:'✨ Activa IA para ver la trayectoria',
    guideBtn:'¡A JUGAR!',
    commercial:'OPORTUNIDAD EXTRA',chanceExpired:'¡OPORTUNIDAD ACABADA!',
    scratchedDesc:'¡La bola blanca cayó en la tronera!',
    watchAd:'🎬 OBTENER OPORTUNIDAD',giveUp:'RENDIRSE Y REINICIAR',
    sponsored:'BONUS',adSlot:'Evento de Billar',adDesc:'Eventos especiales pronto',
    revengeTitle:'¡DERROTA!',revengeDesc:'¡Perdiste! ¡Mira un anuncio para la revancha!',
    revengeAd:'🎬 REVANCHA (VER ANUNCIO)',revengeSkip:'ACEPTAR DERROTA',
    readyToAim:'LISTO PARA APUNTAR',statusDescDefault:'Arrastra para apuntar. Rueda para zoom.',
    shotInProgress:'TIRO EN CURSO',shotInProgressDesc:'Calculando física...',
    cueBallReady:'BOLA LISTA',cueBallReadyDesc:'¡Ajusta el ángulo y tira!',
    cueBallScratched:'¡SCRATCH!',cueBallScratchDesc:'Bola blanca en tronera.',
    matchRestarted:'JUEGO REINICIADO',matchRestartedDesc:'Mesa reseteada. Turno del Jugador 1.',
    playerTurn:'TURNO DE JUGADOR {n}',playerTurnDesc:'Ajusta y golpea.',
    aiTurn:'IA PENSANDO...',aiTurnDesc:'El rival calcula el tiro...',
    toastRevived:'¡REVIVIDO!',toastRevivedSub:'¡Oportunidad Premium!',
    toastAiOn:'IA ACTIVA',toastAiOnSub:'¡Proyección en tiempo real!',
    toastFantastic3:'¡TIRO INCREÍBLE!',toastFantastic3Sub:'¡{n} bandas!',
    toastFantastic2:'¡FANTÁSTICO!',toastFantastic2Sub:'¡2 bandas!',
    toastGreat1:'¡BUEN TIRO!',toastGreat1Sub:'¡Banda!',
    toastPocketed:'¡MUY BIEN!',toastPocketedSub:'¡Bola {n} en tronera!',
    toast3cScore:'¡PUNTO!',toast3cScoreSub:'¡Punto de 3 bandas!',
    toast3cMiss:'FALLO',toast3cMissSub:'Bandas o bolas insuficientes.',
    challengeStarting:'¡PARTIDO!',challengeStartingSub:'vs {name}',
    revengeGranted:'¡REVANCHA!',revengeGrantedSub:'¡Una oportunidad más!',
    chalkBtn:'PONER TIZA (C)',toastMiscue:'¡PIFIA!',toastMiscueSub:'¡Olvidaste poner tiza!',
    controlsGuide:'CONTROLES',
  },
  hi: {
    subtitle:'अगली पीढ़ी का वेब बिलियर्ड्स सिम्युलेटर',
    player1:'खिलाड़ी 1',player2:'खिलाड़ी 2',solids:'सॉलिड',stripes:'स्ट्राइप',
    matchStatus:'मैच स्थिति',cueControl:'क्यू नियंत्रण',strikePower:'शॉट पावर',
    aiPrediction:'AI पथ',freeTrial:'मुफ़्त',
    strikeBtn:'शॉट (स्पेस)',resetBtn:'क्यू बॉल रीसेट',
    spinControl:'क्यू बॉल स्पिन',spinCenter:'केंद्र',spinBackspin:'बैकस्पिन',
    spinTopspin:'टॉपस्पिन',spinLeft:'बायाँ स्पिन',spinRight:'दायाँ स्पिन',
    modePocket:'पॉकेट बॉल',mode3Cushion:'3-कुशन',
    globalRivals:'वैश्विक प्रतिद्वंद्वी',challengeBtn:'चुनौती',btnPractice:'स्वतंत्र अभ्यास',
    practiceMode:'अभ्यास मोड',practiceModeSub:'एकल अभ्यास मोड सक्षम',
    selectCountry:'अपना देश चुनें',
    helpItem1:'<span>खींचें</span> घुमाएँ',helpItem2:'<span>राइट-क्लिक</span> पैन',
    helpItem3:'<span>व्हील</span> ज़ूम',helpItem4:'<span>स्पेस</span> शॉट',
    guideTitle:'कैसे खेलें',
    guideStep1:'🖱️ स्क्रीन खींचकर निशाना लगाएँ',
    guideStep2:'💪 स्लाइडर से पावर सेट करें',
    guideStep3:'⚡ शॉट बटन या स्पेसबार दबाएँ!',
    guideStep4:'✨ AI पथ से ट्रैजेक्टरी देखें',
    guideBtn:'खेलना शुरू करें!',
    commercial:'अतिरिक्त मौका',chanceExpired:'अवसर समाप्त!',
    scratchedDesc:'क्यू बॉल पॉकेट में गिर गई!',
    watchAd:'🎬 अतिरिक्त मौका प्राप्त करें',giveUp:'हार मानें',
    sponsored:'बोनस',adSlot:'बिलियर्ड्स इवेंट',adDesc:'विशेष इवेंट जल्द ही',
    revengeTitle:'हार!',revengeDesc:'मैच हार गए! विज्ञापन देखकर रिवेंज शॉट लें!',
    revengeAd:'🎬 रिवेंज (विज्ञापन देखें)',revengeSkip:'हार स्वीकारें',
    readyToAim:'निशाना तैयार',statusDescDefault:'खींचकर निशाना लगाएँ। स्क्रॉल से ज़ूम।',
    shotInProgress:'शॉट जारी',shotInProgressDesc:'फिज़िक्स गणना...',
    cueBallReady:'क्यू बॉल तैयार',cueBallReadyDesc:'कोण सेट करें और मारें!',
    cueBallScratched:'स्क्रैच!',cueBallScratchDesc:'क्यू बॉल पॉकेट में।',
    matchRestarted:'मैच रीस्टार्ट',matchRestartedDesc:'बोर्ड रीसेट। खिलाड़ी 1 की बारी।',
    playerTurn:'खिलाड़ी {n} की बारी',playerTurnDesc:'कोण सेट करें और मारें।',
    aiTurn:'AI सोच रहा है...',aiTurnDesc:'प्रतिद्वंद्वी शॉट गणना कर रहा है...',
    toastRevived:'पुनर्जीवित!',toastRevivedSub:'प्रीमियम चांस!',
    toastAiOn:'AI पथ चालू',toastAiOnSub:'रियल-टाइम फिज़िक्स!',
    toastFantastic3:'शानदार शॉट!',toastFantastic3Sub:'{n}-कुशन बैंक!',
    toastFantastic2:'बहुत बढ़िया!',toastFantastic2Sub:'2-कुशन बैंक!',
    toastGreat1:'अच्छा शॉट!',toastGreat1Sub:'कुशन बैंक!',
    toastPocketed:'बढ़िया!',toastPocketedSub:'बॉल {n} पॉकेट!',
    toast3cScore:'स्कोर!',toast3cScoreSub:'3-कुशन पॉइंट!',
    toast3cMiss:'मिस',toast3cMissSub:'कुशन या बॉल अपर्याप्त।',
    challengeStarting:'मैच शुरू!',challengeStartingSub:'vs {name}',
    revengeGranted:'रिवेंज!',revengeGrantedSub:'एक और मौका!',
    chalkBtn:'चॉक लगाएँ (C)',toastMiscue:'मिस्क्यू!',toastMiscueSub:'आप चॉक लगाना भूल गए!',
    controlsGuide:'नियंत्रण',
  },
};

const LANG_ORDER = ['en','ko','ja','zh','es','hi'];
const LANG_LABELS = {en:'ENG',ko:'KOR',ja:'JPN',zh:'CHN',es:'ESP',hi:'HIN'};
const langDetect = (navigator.language||'en').slice(0,2).toLowerCase();
let currentLang = {ko:'ko',ja:'ja',zh:'zh',es:'es',hi:'hi'}[langDetect]||'en';

/* ═══════════════════════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════════════════════*/
const BALL_RADIUS=0.32, BALL_DIAMETER=BALL_RADIUS*2;
const TABLE_WIDTH=14.2, TABLE_LENGTH=28.4;
// Physics: base damping per 16.67ms frame; dt-normalized in animate()
let FRICTION=0.990;
const STOP_SPEED=0.002;

let cueMass = 530; // 520 - 540g
let tipHardness = 'H'; // 'H', 'M', 'S'
const TARGET_DT=16.67; // ms – 60fps reference
const POCKET_RADIUS=0.65;
const POCKETS=[
  {x:-TABLE_WIDTH/2,z:-TABLE_LENGTH/2},{x:TABLE_WIDTH/2,z:-TABLE_LENGTH/2},
  {x:-TABLE_WIDTH/2,z:0},{x:TABLE_WIDTH/2,z:0},
  {x:-TABLE_WIDTH/2,z:TABLE_LENGTH/2},{x:TABLE_WIDTH/2,z:TABLE_LENGTH/2}
];
const BALL_COLORS=['#f8f9fa','#facc15','#2563eb','#dc2626','#7c3aed','#ea580c','#16a34a','#7f1d1d','#111827','#facc15','#2563eb','#dc2626','#7c3aed','#ea580c','#16a34a','#7f1d1d'];

const COUNTRY_FLAGS={KR:'kr',JP:'jp',CN:'cn',US:'us',ES:'es',IN:'in'};
const RIVALS=[
  {name:'Yuki_Tokyo',code:'jp',country:'JPN',rank:'PRO',rating:1850,pRange:[35,65],acc:0.70},
  {name:'LiWei_Shanghai',code:'cn',country:'CHN',rank:'MASTER',rating:2100,pRange:[40,75],acc:0.80},
  {name:'John_NYC',code:'us',country:'USA',rank:'ELITE',rating:1920,pRange:[30,60],acc:0.68},
  {name:'Carlos_Madrid',code:'es',country:'ESP',rank:'PRO',rating:1780,pRange:[35,55],acc:0.62},
  {name:'Arjun_Mumbai',code:'in',country:'IND',rank:'RISING',rating:1650,pRange:[28,52],acc:0.55},
  {name:'MinJun_Seoul',code:'kr',country:'KOR',rank:'LEGEND',rating:2300,pRange:[45,85],acc:0.92},
];

/* ═══════════════════════════════════════════════════════════════════════════════
   GAME STATE
   ═══════════════════════════════════════════════════════════════════════════════*/
let currentPlayer=1, scores={p1:0,p2:0}, currentTurnStatus='AIMING', isCueBallPocketed=false;
let gameMode='pocket'; // 'pocket'|'threecushion'
let playerCountry='KR';
let aiMode=false, aiRival=null;
let spinOffset={x:0,y:0}; // -1..1
let shotData={cushionHits:0,ballsHit:new Set()};
let shotsSinceChalk=0;

const CUE_DESIGNS = [
  { id:'classic', name:'Classic Maple', shaft:['#e4c698','#f3ddb3','#d4b278'], joint:['#888','#fff','#ccc','#fff','#555'], wrap:['#4a2e15','#704214','#3e2110'], butt:['#bbb','#e0e0e0','#999'] },
  { id:'carbon', name:'Carbon Black', shaft:['#333','#555','#222'], joint:['#0ea5e9','#38bdf8','#0284c7','#38bdf8','#0ea5e9'], wrap:['#111','#222','#050505'], butt:['#1e293b','#334155','#0f172a'] },
  { id:'sapphire', name:'Royal Sapphire', shaft:['#d1d5db','#f3f4f6','#9ca3af'], joint:['#fbbf24','#fde68a','#d97706','#fde68a','#fbbf24'], wrap:['#1e3a8a','#2563eb','#172554'], butt:['#f8fafc','#ffffff','#cbd5e1'] },
  { id:'crimson', name:'Ruby Crimson', shaft:['#e4c698','#f3ddb3','#d4b278'], joint:['#facc15','#fef08a','#ca8a04','#fef08a','#facc15'], wrap:['#7f1d1d','#b91c1c','#450a0a'], butt:['#111827','#1f2937','#030712'] }
];
let currentCueIndex = 0;

/* ═══════════════════════════════════════════════════════════════════════════════
   THREE.JS VARIABLES
   ═══════════════════════════════════════════════════════════════════════════════*/
let scene,camera,renderer,controls;
let balls=[],tableFelt,aimingLine,cueStick;
let audioCtx=null,activeParticles=[],predictionLines=[];
let pocketMeshes=[],crosshairGrid=null;
let lampMaterials=[];

/* ═══════════════════════════════════════════════════════════════════════════════
   DOM REFERENCES
   ═══════════════════════════════════════════════════════════════════════════════*/
const $=id=>document.getElementById(id);
const elP1Score=$('p1-score'),elP2Score=$('p2-score');
const elP1Card=$('player-1-card'),elP2Card=$('player-2-card');
const elP1Flag=$('p1-flag'),elP2Flag=$('p2-flag');
const elP1Name=$('p1-name'),elP2Name=$('p2-name');
const elStatus=$('game-status'),elStatusDesc=$('status-desc');
const elPowerSlider=$('power-slider'),elPowerValue=$('power-value');
const btnStrike=$('btn-strike'),btnReset=$('btn-reset');
const togglePrediction=$('toggle-prediction');
const elReviveModal=$('revive-modal'),btnWatchAd=$('btn-watch-ad'),btnSkipAd=$('btn-skip-ad');
const elRevengeModal=$('revenge-modal'),btnRevengeAd=$('btn-revenge-ad'),btnRevengeSkip=$('btn-revenge-skip');
const elGuideModal=$('guide-modal'),btnGuideStart=$('btn-guide-start');
const btnLang=$('btn-lang'),btnMode=$('btn-mode');
const spinCircle=$('spin-circle'),spinDot=$('spin-dot'),spinLabel=$('spin-label');
const rivalList=$('rival-list');

/* ═══════════════════════════════════════════════════════════════════════════════
   i18n ENGINE
   ═══════════════════════════════════════════════════════════════════════════════*/
function T(key,vars){let s=i18n[currentLang][key]||i18n.en[key]||key;if(vars)Object.keys(vars).forEach(k=>{s=s.replace('{'+k+'}',vars[k]);});return s;}

function applyLanguage(lang){
  currentLang=lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;const v=T(k);if(v)el.textContent=v;});
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{const k=el.dataset.i18nHtml;const v=T(k);if(v)el.innerHTML=v;});
  $('lang-label').textContent=LANG_LABELS[lang]||'ENG';
  updateSpinLabel();
  if(currentTurnStatus==='AIMING'&&!isCueBallPocketed) triggerAlert(T('readyToAim'),T('statusDescDefault'));
  renderRivalList();
}

/* ═══════════════════════════════════════════════════════════════════════════════
   AUDIO (Web Audio API synthesis)
   ═══════════════════════════════════════════════════════════════════════════════*/
function playSound(type,intensity){
  const vol=Math.min(Math.max(intensity||1,0.1),1);
  try{
    if(!audioCtx)audioCtx=new(window.AudioContext||window.webkitAudioContext)();
    if(audioCtx.state==='suspended')audioCtx.resume();
    const n=audioCtx.currentTime;
    if(type==='ball'){
      // Phenolic Resin Aramith "TAK!" – crisp, high-fidelity impact
      const o=audioCtx.createOscillator(),g=audioCtx.createGain();
      o.connect(g);g.connect(audioCtx.destination);
      o.type='square';
      const freq=1200+vol*800; // Phenolic resin is higher pitched and sharper
      o.frequency.setValueAtTime(freq*1.5,n);o.frequency.exponentialRampToValueAtTime(freq*0.4,n+.04);
      g.gain.setValueAtTime(vol*.8,n);g.gain.exponentialRampToValueAtTime(.001,n+.04);
      o.start(n);o.stop(n+.04);
    } else if(type==='cushion'){
      const o=audioCtx.createOscillator(),g=audioCtx.createGain();
      o.connect(g);g.connect(audioCtx.destination);
      o.type='sine';o.frequency.setValueAtTime(180+vol*120,n);o.frequency.exponentialRampToValueAtTime(55,n+.14);
      g.gain.setValueAtTime(vol*.68,n);g.gain.exponentialRampToValueAtTime(.001,n+.14);
      o.start(n);o.stop(n+.14);
    } else if(type==='pocket'){
      const o=audioCtx.createOscillator(),g=audioCtx.createGain();
      o.connect(g);g.connect(audioCtx.destination);
      o.type='sine';o.frequency.setValueAtTime(225,n);o.frequency.exponentialRampToValueAtTime(48,n+.28);
      g.gain.setValueAtTime(vol*.62,n);g.gain.exponentialRampToValueAtTime(.001,n+.28);
      o.start(n);o.stop(n+.28);
    } else if(type==='miscue'){
      // Dull "tok" thud – low frequency noise burst
      const buf=audioCtx.createBuffer(1,audioCtx.sampleRate*.18,audioCtx.sampleRate);
      const d=buf.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=(Math.random()*2-1)*(1-i/d.length);
      const src=audioCtx.createBufferSource();src.buffer=buf;
      const lp=audioCtx.createBiquadFilter();lp.type='lowpass';lp.frequency.value=280;
      const g=audioCtx.createGain();g.gain.setValueAtTime(vol*.5,n);
      src.connect(lp);lp.connect(g);g.connect(audioCtx.destination);src.start(n);
    } else if(type==='chalk'){
      // Realistic chalk scrape (사각사각)
      const buf=audioCtx.createBuffer(1,audioCtx.sampleRate*.35,audioCtx.sampleRate);
      const d=buf.getChannelData(0);
      for(let i=0;i<d.length;i++){
        // Generate harsh abrasive friction
        let noise = Math.random()*2-1;
        let envelope = Math.max(0, Math.sin(i/d.length * Math.PI * 4)); // two quick strokes
        d[i] = noise * envelope * (1-i/d.length) * 0.9;
      }
      const src=audioCtx.createBufferSource();src.buffer=buf;
      const bp=audioCtx.createBiquadFilter();bp.type='highpass';bp.frequency.value=4000;
      const g=audioCtx.createGain();g.gain.setValueAtTime(.8,n);
      src.connect(bp);bp.connect(g);g.connect(audioCtx.destination);src.start(n);
    }
  }catch(e){}
}

/* ═══════════════════════════════════════════════════════════════════════════════
   BALL TEXTURES (Canvas 2D procedural)
   ═══════════════════════════════════════════════════════════════════════════════*/
function createBallTexture(num,hex){
  const c=document.createElement('canvas');c.width=c.height=256;const x=c.getContext('2d');
  if(gameMode==='threecushion' && (num===0 || num===1)){
    const baseColor = num===0 ? '#fff' : '#facc15';
    const g=x.createRadialGradient(88,80,8,128,128,128);g.addColorStop(0,baseColor);g.addColorStop(.6,num===0?'#f0f0f0':'#eab308');g.addColorStop(1,num===0?'#d8d8d8':'#ca8a04');
    x.fillStyle=g;x.fillRect(0,0,256,256);
    // Draw 6 Aramith red dots
    x.fillStyle='#dc2626';
    const dotPos = [{x:128,y:30},{x:128,y:226},{x:30,y:128},{x:226,y:128},{x:60,y:60},{x:196,y:196}];
    dotPos.forEach(p=>{x.beginPath();x.arc(p.x,p.y,10,0,Math.PI*2);x.fill();});
  }
  else if(num===0){
    const g=x.createRadialGradient(88,80,8,128,128,128);g.addColorStop(0,'#fff');g.addColorStop(.6,'#f0f0f0');g.addColorStop(1,'#d8d8d8');
    x.fillStyle=g;x.fillRect(0,0,256,256);
    // Draw 6 Aramith red dots to make rotation visible
    x.fillStyle='#dc2626';
    const dotPos = [{x:128,y:30},{x:128,y:226},{x:30,y:128},{x:226,y:128},{x:60,y:60},{x:196,y:196}];
    dotPos.forEach(p=>{x.beginPath();x.arc(p.x,p.y,10,0,Math.PI*2);x.fill();});
  }
  else{const isS=num>8;x.fillStyle=isS?'#fff':hex;x.fillRect(0,0,256,256);if(isS){x.fillStyle=hex;x.fillRect(0,54,256,148);}
    x.beginPath();x.arc(128,128,52,0,Math.PI*2);x.fillStyle='#fff';x.fill();x.lineWidth=3;x.strokeStyle='rgba(0,0,0,.15)';x.stroke();
    x.fillStyle='#111827';x.font='bold 62px Arial';x.textAlign='center';x.textBaseline='middle';x.fillText(String(num),128,131);}
  const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.ClampToEdgeWrapping;return t;
}

/* ═══════════════════════════════════════════════════════════════════════════════
   THREE.JS INIT
   ═══════════════════════════════════════════════════════════════════════════════*/
function init(){
  const container=$('canvas-container');
  scene=new THREE.Scene();scene.background=null;scene.fog=new THREE.FogExp2('#05070a',0.014);
  camera=new THREE.PerspectiveCamera(45,innerWidth/innerHeight,0.1,200);camera.position.set(0,18,26);
  renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});renderer.setClearColor(0x000000,0);renderer.setSize(innerWidth,innerHeight);renderer.setPixelRatio(Math.min(devicePixelRatio,2));
  renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;container.appendChild(renderer.domElement);
  controls=new THREE.OrbitControls(camera,renderer.domElement);
  controls.enableDamping=true;controls.dampingFactor=0.05;controls.maxPolarAngle=Math.PI/2.05;controls.minDistance=6;controls.maxDistance=48;controls.target.set(0,0,0);
  createLighting();createTable();spawnBalls();createCueAndGuide();initPredictionLines();createCrosshairGrid();
  setupUIListeners();applyLanguage(currentLang);renderRivalList();
  window.addEventListener('resize',onResize);
  animate();
  setTimeout(()=>elGuideModal.classList.remove('hidden'),250);
}

/* ═══════════════════════════════════════════════════════════════════════════════
   LIGHTING (raised ceiling, wide angle, max penumbra)
   ═══════════════════════════════════════════════════════════════════════════════*/
function createLighting(){
  // Ambient: lowered to 0.42 for premium billiard club atmosphere (not over-exposed)
  scene.add(new THREE.AmbientLight('#ddeeff',0.42));
  // Key directional (warm, from upper-right) – main shadow caster
  const dir=new THREE.DirectionalLight('#fff8ee',0.75);
  dir.position.set(6,24,10);dir.castShadow=true;
  dir.shadow.mapSize.set(2048,2048);
  dir.shadow.camera.near=2;dir.shadow.camera.far=60;
  dir.shadow.camera.left=-18;dir.shadow.camera.right=18;
  dir.shadow.camera.top=26;dir.shadow.camera.bottom=-26;
  dir.shadow.bias=-0.0002;dir.shadow.normalBias=0.02;
  scene.add(dir);
  // Cool fill from opposite side
  const fill=new THREE.DirectionalLight('#b0c8e8',0.35);fill.position.set(-10,18,-12);scene.add(fill);
  // Front fill – eliminates front shadow on table
  const front=new THREE.DirectionalLight('#ffffff',0.28);front.position.set(0,14,-20);scene.add(front);
  // Back fill
  const back=new THREE.DirectionalLight('#ffffff',0.22);back.position.set(0,14,20);scene.add(back);
  // Premium Luxury Lamp Housing
  const matBlack = new THREE.MeshStandardMaterial({color: 0x18181b, roughness: 0.8, metalness: 0.3, transparent: true, opacity: 1, side: THREE.DoubleSide});
  const matGold = new THREE.MeshStandardMaterial({color: 0xd4af37, roughness: 0.2, metalness: 0.9, transparent: true, opacity: 1, side: THREE.BackSide});
  const matGlow = new THREE.MeshBasicMaterial({color: 0xfffcf0, transparent: true, opacity: 1});
  lampMaterials.push(matBlack, matGold, matGlow);

  // Crossbar (along Z axis)
  const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 16, 16), matBlack);
  bar.rotation.x = Math.PI/2;
  bar.position.set(0, 34.8, 0);
  scene.add(bar);

  // Ceiling Wires/Chains (hanging from ceiling to crossbar)
  const wireGeom = new THREE.CylinderGeometry(0.02, 0.02, 16, 8);
  const wire1 = new THREE.Mesh(wireGeom, matBlack); wire1.position.set(0, 42.8, -6); scene.add(wire1);
  const wire2 = new THREE.Mesh(wireGeom, matBlack); wire2.position.set(0, 42.8, 6); scene.add(wire2);

  // 3 ceiling spotlights aligned with the center
  [{x:0,z:-6},{x:0,z:0},{x:0,z:6}].forEach(p=>{
    // Lamp Shade (Truncated Cone) - Scaled down to not block view
    const shade = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 1.0, 1.0, 32, 1, true), matBlack);
    shade.position.set(p.x, 34.2, p.z);
    scene.add(shade);
    
    // Inner Gold Lining
    const innerShade = new THREE.Mesh(new THREE.CylinderGeometry(0.23, 0.98, 0.98, 32, 1, true), matGold);
    innerShade.position.set(p.x, 34.2, p.z);
    scene.add(innerShade);

    // Glowing Bulb
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.16, 16, 16), matGlow);
    bulb.position.set(p.x, 34.0, p.z);
    scene.add(bulb);

    const s=new THREE.SpotLight('#fff5e0',1.4);
    s.position.set(p.x,34.5,p.z);
    s.angle=Math.PI/2.5;
    s.penumbra=0.4;
    s.decay=1.5;
    s.distance=60;
    s.castShadow=false;
    scene.add(s);

    const target = new THREE.Object3D();
    target.position.set(p.x, 0, p.z);
    scene.add(target);
    s.target = target;
  });
}

/* ═══════════════════════════════════════════════════════════════════════════════
   TABLE (with toggleable pockets)
   ═══════════════════════════════════════════════════════════════════════════════*/
function createTable(){
  // Deep forest green – professional billiard standard, matte velvet texture
  // Deep forest green – matte velvet texture to avoid overexposure
  const feltMat=new THREE.MeshStandardMaterial({color:'#083e1c',roughness:1.0,metalness:0.0,envMapIntensity:0.0});
  tableFelt=new THREE.Mesh(new THREE.BoxGeometry(TABLE_WIDTH,0.2,TABLE_LENGTH),feltMat);
  tableFelt.position.y=-0.1;tableFelt.receiveShadow=true;scene.add(tableFelt);
  const rT=0.8,rH=0.45,yR=rH/2-0.1;
  const wM=new THREE.MeshStandardMaterial({color:'#2b1b10',roughness:0.22,metalness:0.1});
  const rxG=new THREE.BoxGeometry(TABLE_WIDTH+rT*2,rH,rT);
  const rTop=new THREE.Mesh(rxG,wM);rTop.position.set(0,yR,-TABLE_LENGTH/2-rT/2);rTop.castShadow=rTop.receiveShadow=true;scene.add(rTop);
  const rBot=rTop.clone();rBot.position.z=TABLE_LENGTH/2+rT/2;scene.add(rBot);
  const rzG=new THREE.BoxGeometry(rT,rH,TABLE_LENGTH);
  const rL=new THREE.Mesh(rzG,wM);rL.position.set(-TABLE_WIDTH/2-rT/2,yR,0);rL.castShadow=rL.receiveShadow=true;scene.add(rL);
  const rR=rL.clone();rR.position.x=TABLE_WIDTH/2+rT/2;scene.add(rR);
  const cM=new THREE.MeshStandardMaterial({color:'#d4af37',roughness:0.08,metalness:0.94});
  const jG=new THREE.BoxGeometry(rT*1.28,rH*1.06,rT*1.28);
  [{x:-TABLE_WIDTH/2-rT/2,z:-TABLE_LENGTH/2-rT/2},{x:TABLE_WIDTH/2+rT/2,z:-TABLE_LENGTH/2-rT/2},{x:-TABLE_WIDTH/2-rT/2,z:TABLE_LENGTH/2+rT/2},{x:TABLE_WIDTH/2+rT/2,z:TABLE_LENGTH/2+rT/2}]
  .forEach(p=>{const j=new THREE.Mesh(jG,cM);j.position.set(p.x,yR-0.02,p.z);scene.add(j);});
  // Pockets (can hide for 3-cushion)
  pocketMeshes=[];
  const pM=new THREE.MeshBasicMaterial({color:'#040506'});
  const pG=new THREE.CylinderGeometry(POCKET_RADIUS,POCKET_RADIUS,0.24,32);
  POCKETS.forEach(p=>{const m=new THREE.Mesh(pG,pM);m.position.set(p.x,0.01,p.z);scene.add(m);pocketMeshes.push(m);});
}

/* ═══════════════════════════════════════════════════════════════════════════════
   CROSSHAIR GRID (semi-transparent 3D grid on table)
   ═══════════════════════════════════════════════════════════════════════════════*/
function createCrosshairGrid(){
  const size=Math.max(TABLE_WIDTH,TABLE_LENGTH)+2;
  crosshairGrid=new THREE.GridHelper(size,36,0x3a5a48,0x3a5a48);
  crosshairGrid.position.y=0.022;
  crosshairGrid.material.opacity=0.02;  // ultra-subtle, only guidance during aiming
  crosshairGrid.material.transparent=true;
  scene.add(crosshairGrid);
}

/* ═══════════════════════════════════════════════════════════════════════════════
   SPAWN BALLS (mode-aware)
   ═══════════════════════════════════════════════════════════════════════════════*/
function spawnBalls(){
  balls.forEach(b=>scene.remove(b.mesh));balls=[];
  const sG=new THREE.SphereGeometry(BALL_RADIUS,32,32);
  if(gameMode==='pocket'){
    // Cue ball
    const cm=new THREE.Mesh(sG,new THREE.MeshStandardMaterial({map:createBallTexture(0,BALL_COLORS[0]),roughness:0.1,metalness:0.12}));
    cm.position.set(0,BALL_RADIUS,-TABLE_LENGTH/4);cm.castShadow=cm.receiveShadow=true;scene.add(cm);
    balls.push({number:0,mesh:cm,vel:new THREE.Vector3(),active:true,mass:1,cushionBounces:0,backspin:0,sidespin:0});
    const layout=[1,9,2,10,8,3,11,4,12,5,6,13,14,15,7];let idx=0;
    for(let r=0;r<5;r++){const z=TABLE_LENGTH/4+r*BALL_DIAMETER*0.866;for(let c=0;c<=r;c++){
      const n=layout[idx++];const m=new THREE.Mesh(sG,new THREE.MeshStandardMaterial({map:createBallTexture(n,BALL_COLORS[n]),roughness:0.1,metalness:0.08}));
      m.position.set((c-r/2)*BALL_DIAMETER+(Math.random()-.5)*.005,BALL_RADIUS,z+(Math.random()-.5)*.005);m.castShadow=m.receiveShadow=true;scene.add(m);
      balls.push({number:n,mesh:m,vel:new THREE.Vector3(),active:true,mass:1,cushionBounces:0,backspin:0,sidespin:0});
    }}
  } else {
    // 3-Cushion: 3 balls (white cue, yellow 1, red 3)
    const spawn=(num,color,px,pz)=>{
      const m=new THREE.Mesh(sG,new THREE.MeshStandardMaterial({map:createBallTexture(num,color),roughness:0.1,metalness:0.1}));
      m.position.set(px,BALL_RADIUS,pz);m.castShadow=m.receiveShadow=true;scene.add(m);
      balls.push({number:num,mesh:m,vel:new THREE.Vector3(),active:true,mass:1,cushionBounces:0,backspin:0,sidespin:0});
    };
    spawn(0,'#f8f9fa',-TABLE_WIDTH/4,-TABLE_LENGTH/4);
    spawn(1,'#facc15',TABLE_WIDTH/4,-TABLE_LENGTH/4);
    spawn(3,'#dc2626',0,TABLE_LENGTH/4);
  }
  isCueBallPocketed=false;
  shotData={cushionHits:0,ballsHit:new Set()};
}

/* ═══════════════════════════════════════════════════════════════════════════════
   CUE STICK & GUIDE
   ═══════════════════════════════════════════════════════════════════════════════*/
function createCueTexture(index=0) {
  const d=CUE_DESIGNS[index];
  const c=document.createElement('canvas');c.width=1024;c.height=256;const x=c.getContext('2d');
  x.fillStyle='#111';x.fillRect(0,0,1024,256);
  const shaftG=x.createLinearGradient(0,0,0,256);
  shaftG.addColorStop(0,d.shaft[0]);shaftG.addColorStop(0.5,d.shaft[1]);shaftG.addColorStop(1,d.shaft[2]);
  x.fillStyle=shaftG;x.fillRect(0,0,500,256);
  const jointG=x.createLinearGradient(0,0,0,256);
  jointG.addColorStop(0,d.joint[0]);jointG.addColorStop(0.2,d.joint[1]);jointG.addColorStop(0.5,d.joint[2]);jointG.addColorStop(0.8,d.joint[3]);jointG.addColorStop(1,d.joint[4]);
  x.fillStyle=jointG;x.fillRect(480,0,20,256);
  const wrapG=x.createLinearGradient(0,0,0,256);
  wrapG.addColorStop(0,d.wrap[0]);wrapG.addColorStop(0.5,d.wrap[1]);wrapG.addColorStop(1,d.wrap[2]);
  x.fillStyle=wrapG;x.fillRect(500,0,300,256);
  for(let i=0;i<5000;i++){
    x.fillStyle=Math.random()>0.5?'rgba(0,0,0,0.15)':'rgba(255,255,255,0.05)';
    x.fillRect(500+Math.random()*300,Math.random()*256,2,2);
  }
  const buttG=x.createLinearGradient(0,0,0,256);
  buttG.addColorStop(0,d.butt[0]);buttG.addColorStop(0.5,d.butt[1]);buttG.addColorStop(1,d.butt[2]);
  x.fillStyle=buttG;x.fillRect(800,0,224,256);
  x.strokeStyle='#333';x.lineWidth=4;
  for(let i=0;i<5;i++){x.beginPath();x.moveTo(820+i*40,0);x.lineTo(840+i*40,128);x.lineTo(820+i*40,256);x.stroke();}
  x.fillStyle='#d4af37';x.beginPath();x.moveTo(920,100);x.lineTo(950,100);x.lineTo(935,140);x.fill();
  const t=new THREE.CanvasTexture(c);
  t.wrapS=t.wrapT=THREE.ClampToEdgeWrapping;
  t.rotation=Math.PI/2;
  t.center.set(0.5,0.5);
  return t;
}

function createCueAndGuide(){
  aimingLine=new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(),new THREE.Vector3(0,0,10)]),new THREE.LineDashedMaterial({color:0xe2b744,dashSize:0.3,gapSize:0.2}));
  aimingLine.computeLineDistances();scene.add(aimingLine);
  
  const cueGeom = new THREE.CylinderGeometry(0.04,0.08,12,32);
  cueGeom.rotateX(-Math.PI/2);
  cueStick=new THREE.Mesh(cueGeom,new THREE.MeshStandardMaterial({map:createCueTexture(),roughness:0.25,metalness:0.3}));
  cueStick.castShadow=true;scene.add(cueStick);
}

/* ═══════════════════════════════════════════════════════════════════════════════
   AI PREDICTION LINES
   ═══════════════════════════════════════════════════════════════════════════════*/
function initPredictionLines(){
  [new THREE.LineDashedMaterial({color:'#f0f2f5',dashSize:.22,gapSize:.14}),
   new THREE.LineDashedMaterial({color:'#facc15',dashSize:.16,gapSize:.10}),
   new THREE.LineDashedMaterial({color:'#ef4444',dashSize:.16,gapSize:.10})]
  .forEach(m=>{const l=new THREE.Line(new THREE.BufferGeometry(),m);l.visible=false;scene.add(l);predictionLines.push(l);});
}

function updatePredictionPaths(){
  const cb=balls[0];
  if(!cb||!cb.active||currentTurnStatus!=='AIMING'||!togglePrediction.checked){predictionLines.forEach(l=>l.visible=false);if(aimingLine)aimingLine.visible=true;return;}
  aimingLine.visible=false;
  const ad=new THREE.Vector3();camera.getWorldDirection(ad);ad.y=0;ad.normalize();
  const st=cb.mesh.position.clone();let nearest=null,nd=Infinity,hp=null;
  balls.forEach(t=>{if(t.number===0||!t.active)return;const tt=t.mesh.position.clone().sub(st);const pr=tt.dot(ad);if(pr<=0)return;
    const ps=tt.lengthSq()-pr*pr;if(ps<BALL_DIAMETER*BALL_DIAMETER){const d=pr-Math.sqrt(BALL_DIAMETER*BALL_DIAMETER-ps);if(d>0&&d<nd){nd=d;nearest=t;hp=st.clone().add(ad.clone().multiplyScalar(d));}}});
  if(nearest&&hp){
    predictionLines.forEach(l=>l.visible=true);
    predictionLines[0].geometry.setFromPoints([st,hp]);predictionLines[0].computeLineDistances();
    const nm=nearest.mesh.position.clone().sub(hp).normalize();
    predictionLines[1].geometry.setFromPoints([nearest.mesh.position.clone(),nearest.mesh.position.clone().add(nm.clone().multiplyScalar(4.5))]);predictionLines[1].computeLineDistances();
    const tg=new THREE.Vector3(-nm.z,0,nm.x);if(ad.dot(tg)<0)tg.negate();
    predictionLines[2].geometry.setFromPoints([hp,hp.clone().add(tg.multiplyScalar(3.2))]);predictionLines[2].computeLineDistances();
  } else {
    predictionLines[0].visible=true;predictionLines[1].visible=predictionLines[2].visible=false;
    let hd=22;const mnX=-TABLE_WIDTH/2+BALL_RADIUS,mxX=TABLE_WIDTH/2-BALL_RADIUS,mnZ=-TABLE_LENGTH/2+BALL_RADIUS,mxZ=TABLE_LENGTH/2-BALL_RADIUS;
    if(ad.x>0){const d=(mxX-st.x)/ad.x;if(d<hd)hd=d;}if(ad.x<0){const d=(mnX-st.x)/ad.x;if(d<hd)hd=d;}
    if(ad.z>0){const d=(mxZ-st.z)/ad.z;if(d<hd)hd=d;}if(ad.z<0){const d=(mnZ-st.z)/ad.z;if(d<hd)hd=d;}
    predictionLines[0].geometry.setFromPoints([st,st.clone().add(ad.clone().multiplyScalar(hd))]);predictionLines[0].computeLineDistances();
  }
}

/* ═══════════════════════════════════════════════════════════════════════════════
   PARTICLES
   ═══════════════════════════════════════════════════════════════════════════════*/
function spawnParticles(x,z){
  const g=new THREE.BoxGeometry(.08,.08,.08),mt=new THREE.MeshStandardMaterial({color:'#facc15',emissive:'#ffd700',emissiveIntensity:2.2,roughness:.08,metalness:.96});
  for(let i=0;i<32;i++){const m=new THREE.Mesh(g,mt.clone());m.position.set(x,BALL_RADIUS,z);const a=Math.random()*Math.PI*2;scene.add(m);
    activeParticles.push({mesh:m,velocity:new THREE.Vector3(Math.cos(a)*(.03+Math.random()*.13),.06+Math.random()*.14,Math.sin(a)*(.03+Math.random()*.13)),age:0,maxAge:48+Math.floor(Math.random()*36)});}
}
function spawnConfetti(){
  const geom=new THREE.PlaneGeometry(0.18,0.18);
  const colors=['#facc15','#2563eb','#ef4444','#22c55e','#a855f7','#f97316','#ffffff','#ff00ff'];
  for(let i=0;i<200;i++){
    const mat=new THREE.MeshBasicMaterial({color:colors[Math.floor(Math.random()*colors.length)],side:THREE.DoubleSide});
    const m=new THREE.Mesh(geom,mat);
    m.position.set((Math.random()-0.5)*2, 12, (Math.random()-0.5)*2); // explode from near center top
    m.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);
    scene.add(m);
    const vx=(Math.random()-0.5)*0.3;const vy=Math.random()*0.2;const vz=(Math.random()-0.5)*0.3;
    activeParticles.push({mesh:m,isConfetti:true,velocity:new THREE.Vector3(vx,vy,vz),rotSpeed:new THREE.Vector3(Math.random()*0.3,Math.random()*0.3,Math.random()*0.3),age:0,maxAge:350});
  }
}
function playApplause(){
  if(!audioCtx)return;
  const bs=audioCtx.createBufferSource();const ln=audioCtx.sampleRate*2.5;const bf=audioCtx.createBuffer(1,ln,audioCtx.sampleRate);
  const dt=bf.getChannelData(0);for(let i=0;i<ln;i++)dt[i]=Math.random()*2-1;bs.buffer=bf;
  const bp=audioCtx.createBiquadFilter();bp.type='bandpass';bp.frequency.value=800;bp.Q.value=0.5;
  const g=audioCtx.createGain();g.gain.setValueAtTime(0,audioCtx.currentTime);g.gain.linearRampToValueAtTime(0.4,audioCtx.currentTime+0.2);g.gain.exponentialRampToValueAtTime(0.01,audioCtx.currentTime+2.5);
  bs.connect(bp);bp.connect(g);g.connect(audioCtx.destination);bs.start();
}
function playFanfare(){
  if(!audioCtx)return;
  const n=audioCtx.currentTime;
  [523.25, 659.25, 783.99, 1046.50].forEach((freq,i)=>{
    const o=audioCtx.createOscillator(),g=audioCtx.createGain();
    o.connect(g);g.connect(audioCtx.destination);
    o.type='triangle';o.frequency.setValueAtTime(freq,n+(i*0.1));
    g.gain.setValueAtTime(0,n+(i*0.1));
    g.gain.linearRampToValueAtTime(0.3,n+(i*0.1)+0.05);
    g.gain.exponentialRampToValueAtTime(0.01,n+1.5);
    o.start(n+(i*0.1));o.stop(n+1.5);
  });
}
function updateParticles(){
  for(let i=activeParticles.length-1;i>=0;i--){const p=activeParticles[i];p.age++;p.mesh.position.add(p.velocity);
    if(p.isConfetti){
      p.mesh.rotation.x+=p.rotSpeed.x;p.mesh.rotation.y+=p.rotSpeed.y;p.mesh.rotation.z+=p.rotSpeed.z;
      p.velocity.y-=0.003;p.velocity.x*=0.98;p.velocity.z*=0.98;
      p.velocity.x+=Math.sin(p.age*0.1)*0.005;p.velocity.z+=Math.cos(p.age*0.1)*0.005;
    }else{
      p.velocity.y-=.0056;p.velocity.multiplyScalar(.96);
      const r=1-p.age/p.maxAge;p.mesh.scale.setScalar(Math.max(r,0));p.mesh.material.emissiveIntensity=r*2.2;
    }
    if(p.age>=p.maxAge||p.mesh.position.y<0){scene.remove(p.mesh);p.mesh.geometry.dispose();p.mesh.material.dispose();activeParticles.splice(i,1);}
  }
}

/* ═══════════════════════════════════════════════════════════════════════════════
   TOAST
   ═══════════════════════════════════════════════════════════════════════════════*/
function triggerToast(title,sub){
  const el=$('shot-announcement');$('announcement-title').textContent=title;$('announcement-subtitle').textContent=sub;
  el.classList.remove('hidden');el.style.animation='none';el.offsetHeight;el.style.animation='';setTimeout(()=>el.classList.add('hidden'),2200);
}
function triggerAlert(t,d){elStatus.textContent=t;elStatusDesc.textContent=d;}

/* ═══════════════════════════════════════════════════════════════════════════════
   SPIN UI (mouse + touch drag on circle)
   ═══════════════════════════════════════════════════════════════════════════════*/
function setupSpinUI(){
  let dragging=false;
  function updateSpin(cx,cy){
    const rect=spinCircle.getBoundingClientRect();
    const rx=(cx-rect.left-rect.width/2)/(rect.width/2);
    const ry=(cy-rect.top-rect.height/2)/(rect.height/2);
    spinOffset.x=Math.max(-1,Math.min(1,rx));spinOffset.y=Math.max(-1,Math.min(1,ry));
    const len=Math.sqrt(spinOffset.x*spinOffset.x+spinOffset.y*spinOffset.y);
    if(len>1){spinOffset.x/=len;spinOffset.y/=len;}
    spinDot.style.left=((spinOffset.x+1)/2*100)+'%';spinDot.style.top=((spinOffset.y+1)/2*100)+'%';
    updateSpinLabel();
    updateChalkWarning();
  }
  spinCircle.addEventListener('mousedown',e=>{dragging=true;updateSpin(e.clientX,e.clientY);e.preventDefault();});
  window.addEventListener('mousemove',e=>{if(dragging)updateSpin(e.clientX,e.clientY);});
  window.addEventListener('mouseup',()=>{dragging=false;});
  spinCircle.addEventListener('touchstart',e=>{dragging=true;updateSpin(e.touches[0].clientX,e.touches[0].clientY);e.preventDefault();},{passive:false});
  window.addEventListener('touchmove',e=>{if(dragging&&e.target===spinCircle)updateSpin(e.touches[0].clientX,e.touches[0].clientY);},{passive:false});
  window.addEventListener('touchend',()=>{dragging=false;});
  // Double-click/tap to reset to center
  spinCircle.addEventListener('dblclick',()=>{spinOffset.x=0;spinOffset.y=0;spinDot.style.left='50%';spinDot.style.top='50%';updateSpinLabel();updateChalkWarning();});
}

// Chalk edge-zone: if spinRadius > 0.62, warn player to chalk
function updateChalkWarning(){
  const spinRadius=Math.sqrt(spinOffset.x*spinOffset.x+spinOffset.y*spinOffset.y);
  const btnChalk=$('btn-chalk');
  if(!btnChalk)return;
  if(spinRadius>0.62&&shotsSinceChalk>0){
    btnChalk.classList.add('chalk-warn');
  } else {
    btnChalk.classList.remove('chalk-warn');
  }
}

function updateSpinLabel(){
  const t=i18n[currentLang]||i18n.en;
  const ax=Math.abs(spinOffset.x),ay=Math.abs(spinOffset.y);
  if(ax<0.15&&ay<0.15){spinLabel.textContent=t.spinCenter;return;}
  // Screen Y: negative = dot moved UP = TOPSPIN (forward roll)
  // Screen Y: positive = dot moved DOWN = BACKSPIN (draw)
  if(spinOffset.y<-0.15&&ay>ax) spinLabel.textContent=t.spinTopspin;
  else if(spinOffset.y>0.15&&ay>ax) spinLabel.textContent=t.spinBackspin;
  else if(spinOffset.x<-0.15) spinLabel.textContent=t.spinLeft;
  else spinLabel.textContent=t.spinRight;
}

/* ═══════════════════════════════════════════════════════════════════════════════
   CUE POSITION (real-time camera-relative)
   ═══════════════════════════════════════════════════════════════════════════════*/
function updateCuePosition(){
  const cb=balls[0];
  if(!cb||!cb.active){if(cueStick)cueStick.visible=false;if(aimingLine)aimingLine.visible=false;return;}
  if(currentTurnStatus==='AIMING'&&!(aiMode&&currentPlayer===2)){
    cueStick.visible=true;
    const ad=new THREE.Vector3();camera.getWorldDirection(ad);ad.y=0;ad.normalize();
    aimingLine.geometry.setFromPoints([cb.mesh.position.clone(),cb.mesh.position.clone().add(ad.clone().multiplyScalar(9.5))]);
    aimingLine.computeLineDistances();
    const pw=parseFloat(elPowerSlider.value);const pb=1+(pw/100)*1.65;
    const sp=cb.mesh.position.clone().sub(ad.clone().multiplyScalar(pb+6.2));sp.y=BALL_RADIUS+0.38;
    cueStick.position.copy(sp);cueStick.lookAt(cb.mesh.position);
  }else{cueStick.visible=false;aimingLine.visible=false;}
}

/* ═══════════════════════════════════════════════════════════════════════════════
   PHYSICS: BALL COLLISIONS
   ═══════════════════════════════════════════════════════════════════════════════*/
function handleBallCollisions(){
  for(let i=0;i<balls.length;i++){const b1=balls[i];if(!b1.active)continue;
    for(let j=i+1;j<balls.length;j++){const b2=balls[j];if(!b2.active)continue;
      const dx=b2.mesh.position.x-b1.mesh.position.x,dz=b2.mesh.position.z-b1.mesh.position.z;
      const dist=Math.sqrt(dx*dx+dz*dz);
      if(dist<BALL_DIAMETER&&dist>0){
        const ov=BALL_DIAMETER-dist,nx=dx/dist,nz=dz/dist;
        b1.mesh.position.x-=nx*ov*.5;b1.mesh.position.z-=nz*ov*.5;b2.mesh.position.x+=nx*ov*.5;b2.mesh.position.z+=nz*ov*.5;
        const vn=(b1.vel.x-b2.vel.x)*nx+(b1.vel.z-b2.vel.z)*nz;
        if(vn>0){const imp=2*vn/(b1.mass+b2.mass);b1.vel.x-=imp*b2.mass*nx;b1.vel.z-=imp*b2.mass*nz;b2.vel.x+=imp*b1.mass*nx;b2.vel.z+=imp*b1.mass*nz;
          playSound('ball',Math.min(vn*1.9,1));
          // Track for 3-cushion scoring
          if(b1.number===0)shotData.ballsHit.add(b2.number);
          if(b2.number===0)shotData.ballsHit.add(b1.number);
        }
      }
    }
  }
}

/* ═══════════════════════════════════════════════════════════════════════════════
   PHYSICS: CUSHION BOUNCES
   ═══════════════════════════════════════════════════════════════════════════════*/
function handleCushionBounces(){
  const mnX=-TABLE_WIDTH/2+BALL_RADIUS,mxX=TABLE_WIDTH/2-BALL_RADIUS,mnZ=-TABLE_LENGTH/2+BALL_RADIUS,mxZ=TABLE_LENGTH/2-BALL_RADIUS;
  balls.forEach(b=>{if(!b.active)return;const sp=b.vel.length();let bounced=false;
    if(b.mesh.position.x<mnX){b.mesh.position.x=mnX;b.vel.x*=-0.85;bounced=true;}
    else if(b.mesh.position.x>mxX){b.mesh.position.x=mxX;b.vel.x*=-0.85;bounced=true;}
    if(b.mesh.position.z<mnZ){b.mesh.position.z=mnZ;b.vel.z*=-0.85;bounced=true;}
    else if(b.mesh.position.z>mxZ){b.mesh.position.z=mxZ;b.vel.z*=-0.85;bounced=true;}
    if(bounced&&sp>0.05){b.cushionBounces++;playSound('cushion',Math.min(sp*2,1));
      if(b.number===0)shotData.cushionHits++;
    }
  });
}

/* ═══════════════════════════════════════════════════════════════════════════════
   POCKETS + 3-CUSHION SCORING
   ═══════════════════════════════════════════════════════════════════════════════*/
function checkPockets(){
  if(gameMode==='threecushion')return; // No pockets in 3-cushion
  balls.forEach(b=>{if(!b.active)return;POCKETS.forEach(p=>{
    if(Math.sqrt((b.mesh.position.x-p.x)**2+(b.mesh.position.z-p.z)**2)<POCKET_RADIUS)pocketBall(b,p);});});
}

function pocketBall(ball,pocket){
  ball.active=false;ball.vel.set(0,0,0);playSound('pocket',1);spawnParticles(pocket.x,pocket.z);
  let f=0;(function drop(){if(f<18){ball.mesh.position.y-=.085;ball.mesh.scale.multiplyScalar(.9);f++;requestAnimationFrame(drop);}else scene.remove(ball.mesh);})();
  if(ball.number===0){isCueBallPocketed=true;triggerAlert(T('cueBallScratched'),T('cueBallScratchDesc'));setTimeout(()=>elReviveModal.classList.remove('hidden'),900);}
  else{
    if(currentPlayer===1){scores.p1++;elP1Score.textContent=scores.p1;}else{scores.p2++;elP2Score.textContent=scores.p2;}
    const bc=ball.cushionBounces;
    if(bc>=3)triggerToast(T('toastFantastic3'),T('toastFantastic3Sub',{n:bc}));
    else if(bc===2)triggerToast(T('toastFantastic2'),T('toastFantastic2Sub'));
    else if(bc===1)triggerToast(T('toastGreat1'),T('toastGreat1Sub'));
    else triggerToast(T('toastPocketed'),T('toastPocketedSub',{n:ball.number}));
    
    // Check Win
    if(scores.p1>=8 || scores.p2>=8){
      const winnerName = scores.p1>=8 ? elP1Name.textContent : elP2Name.textContent;
      if(scores.p1>=8&&!elP1Name.textContent.includes('👑')) elP1Name.textContent = '👑 ' + elP1Name.textContent;
      if(scores.p2>=8&&!elP2Name.textContent.includes('👑')) elP2Name.textContent = '👑 ' + elP2Name.textContent;
      triggerToast('WINNER!', `${winnerName} takes the crown!`);
      spawnConfetti();playFanfare();playApplause();
    } else {
      spawnConfetti();playFanfare();playApplause();
    }
  }
}

function check3CushionScore(){
  if(gameMode!=='threecushion')return;
  // Both target balls hit AND 3+ cushion bounces by cue ball
  const targetBalls=balls.filter(b=>b.number!==0).map(b=>b.number);
  const allHit=targetBalls.every(n=>shotData.ballsHit.has(n));
  if(shotData.cushionHits>=3&&allHit){
    if(currentPlayer===1){scores.p1++;elP1Score.textContent=scores.p1;}else{scores.p2++;elP2Score.textContent=scores.p2;}
    triggerToast(T('toast3cScore'),T('toast3cScoreSub'));spawnParticles(balls[0].mesh.position.x,balls[0].mesh.position.z);
    
    // Check Win
    if(scores.p1>=5 || scores.p2>=5){
      const winnerName = scores.p1>=5 ? elP1Name.textContent : elP2Name.textContent;
      if(scores.p1>=5&&!elP1Name.textContent.includes('👑')) elP1Name.textContent = '👑 ' + elP1Name.textContent;
      if(scores.p2>=5&&!elP2Name.textContent.includes('👑')) elP2Name.textContent = '👑 ' + elP2Name.textContent;
      triggerToast('WINNER!', `${winnerName} takes the crown!`);
      spawnConfetti();playFanfare();playApplause();
    } else {
      spawnConfetti();playFanfare();playApplause();
    }
  } else {
    triggerToast(T('toast3cMiss'),T('toast3cMissSub'));
  }
}

/* ═══════════════════════════════════════════════════════════════════════════════
   MODALS
   ═══════════════════════════════════════════════════════════════════════════════*/
function startAdSim(){
  const preview=document.querySelector('.ad-stream-preview'),cd=$('ad-countdown'),bar=$('ad-progress');
  btnWatchAd.style.display='none';btnSkipAd.style.display='none';preview.classList.add('active');
  let s=3;bar.style.width='0%';cd.textContent='SIMULATING AD (3s)...';
  const t=setInterval(()=>{s--;bar.style.width=((3-s)*33.34)+'%';cd.textContent=`SIMULATING AD (${s}s)...`;
    if(s<=0){clearInterval(t);elReviveModal.classList.add('hidden');reviveCueBall();btnWatchAd.style.display='block';btnSkipAd.style.display='block';preview.classList.remove('active');}},1000);
}
function reviveCueBall(){resetCueBall();spawnParticles(0,-TABLE_LENGTH/4);triggerToast(T('toastRevived'),T('toastRevivedSub'));playSound('ball',1);}
function skipRevive(){elReviveModal.classList.add('hidden');scores={p1:0,p2:0};elP1Score.textContent='0';elP2Score.textContent='0';spawnBalls();currentTurnStatus='AIMING';triggerAlert(T('matchRestarted'),T('matchRestartedDesc'));}

// Revenge modal (AI defeat)
function showRevengeModal(){elRevengeModal.classList.remove('hidden');}
function revengeAdWatch(){
  elRevengeModal.classList.add('hidden');
  // Keep ball positions, just switch turn back to player
  currentPlayer=1;currentTurnStatus='AIMING';
  elP1Card.classList.add('active');elP2Card.classList.remove('active');
  triggerToast(T('revengeGranted'),T('revengeGrantedSub'));playSound('ball',1);spawnParticles(0,0);
}
function revengeSkip(){elRevengeModal.classList.add('hidden');aiMode=false;aiRival=null;scores={p1:0,p2:0};elP1Score.textContent='0';elP2Score.textContent='0';
  elP2Name.textContent=T('player2');elP2Flag.textContent='🌍';spawnBalls();currentTurnStatus='AIMING';triggerAlert(T('matchRestarted'),T('matchRestartedDesc'));}

/* ═══════════════════════════════════════════════════════════════════════════════
   STRIKE / RESET (with backspin + sidespin)
   ═══════════════════════════════════════════════════════════════════════════════*/
function strikeCueBall(){
  if(currentTurnStatus!=='AIMING'||isCueBallPocketed)return;
  const cb=balls[0];if(!cb||!cb.active)return;
  shotsSinceChalk++;
  balls.forEach(b=>{b.cushionBounces=0;});
  shotData={cushionHits:0,ballsHit:new Set()};
  let power=parseFloat(elPowerSlider.value);
  const ad=new THREE.Vector3();camera.getWorldDirection(ad);ad.y=0;ad.normalize();
  
  // Edge-zone detection: if spin dot is far from centre (spinRadius > 0.62)
  // and chalk hasn't been freshly applied – 40% chance of miscue
  const spinRadius=Math.sqrt(spinOffset.x*spinOffset.x+spinOffset.y*spinOffset.y);
  const isEdgeShot=(spinRadius>0.62);
  const hasMiscue=isEdgeShot&&shotsSinceChalk>1&&Math.random()<0.40;

  if(hasMiscue){
    // Miscue: dull thud, power halved, random angle, zero spin
    triggerToast(T('toastMiscue'),T('toastMiscueSub'));
    playSound('miscue',Math.min(power/100,1));
    power*=0.45;
    const deviationAngle=(Math.random()-0.5)*0.55;
    ad.applyAxisAngle(new THREE.Vector3(0,1,0),deviationAngle);
    cb.backspin=0;cb.sidespin=0;cb.vel.y=0;
  } else {
    // Clean shot: full spin transfer
    // Cue Mass scaling
    const massScale = cueMass / 530;
    const actualPower = power * massScale;
    
    // Squat and Deflection angle modification based on English (spinOffset.x) and Tip Hardness
    let deflectionFactor = tipHardness === 'H' ? 0.07 : (tipHardness === 'S' ? 0.03 : 0.05);
    const deflectionAngle = -(spinOffset.x) * deflectionFactor * (actualPower / 100);
    ad.applyAxisAngle(new THREE.Vector3(0,1,0), deflectionAngle);

    // spinOffset.y: screen UP = negative = TOPSPIN (ball rolls forward after contact)
    // spinOffset.y: screen DOWN = positive = BACKSPIN (ball draws back)
    cb.backspin = -spinOffset.y * actualPower * 0.00060;  // negative y UP = positive backspin force (topspin)
    cb.sidespin =  spinOffset.x * actualPower * 0.00038;
    // Jump shot: max power + strong backspin (screen Y positive = dot DOWN)
    if(actualPower>94 && spinOffset.y>0.65){
      cb.vel.y=actualPower*0.0022;
    }
  }

  const massScaleForVel = hasMiscue ? 1 : cueMass / 530;
  const actualPowerForVel = hasMiscue ? power : power * massScaleForVel;
  cb.vel.x=ad.x*actualPowerForVel*0.0072;
  cb.vel.z=ad.z*actualPowerForVel*0.0072;
  updateChalkWarning();
  playSound('ball', hasMiscue ? 0 : Math.min(power/80, 1));
  currentTurnStatus='MOVING';
  triggerAlert(T('shotInProgress'),T('shotInProgressDesc'));
}

function aiStrikeCueBall(rival){
  const cb=balls[0];if(!cb||!cb.active)return;
  balls.forEach(b=>{b.cushionBounces=0;});
  shotData={cushionHits:0,ballsHit:new Set()};
  // Find nearest active target ball
  let nearest=null,nd=Infinity;
  balls.forEach(b=>{if(b.number===0||!b.active)return;const d=cb.mesh.position.distanceTo(b.mesh.position);if(d<nd){nd=d;nearest=b;}});
  if(!nearest)return;
  const dir=nearest.mesh.position.clone().sub(cb.mesh.position);dir.y=0;dir.normalize();
  // Add inaccuracy
  const noise=(1-rival.acc)*0.35;dir.x+=(Math.random()-.5)*noise;dir.z+=(Math.random()-.5)*noise;dir.normalize();
  const [minP,maxP]=rival.pRange;const pw=minP+Math.random()*(maxP-minP);
  cb.vel.copy(dir.multiplyScalar(pw*0.0072));
  cb.backspin=0;cb.sidespin=0;
  playSound('ball',0.82);currentTurnStatus='MOVING';triggerAlert(T('shotInProgress'),T('shotInProgressDesc'));
}

function resetCueBall(){
  const cb=balls[0];if(!cb)return;
  if(cb.active){cb.mesh.position.set(0,BALL_RADIUS,-TABLE_LENGTH/4);cb.vel.set(0,0,0);}
  else{scene.remove(cb.mesh);
    const m=new THREE.Mesh(new THREE.SphereGeometry(BALL_RADIUS,32,32),new THREE.MeshStandardMaterial({map:createBallTexture(0,BALL_COLORS[0]),roughness:0.1,metalness:0.1}));
    m.position.set(0,BALL_RADIUS,-TABLE_LENGTH/4);m.castShadow=m.receiveShadow=true;scene.add(m);cb.mesh=m;cb.active=true;cb.vel.set(0,0,0);cb.mesh.scale.set(1,1,1);}
  cb.backspin=0;cb.sidespin=0;isCueBallPocketed=false;currentTurnStatus='AIMING';triggerAlert(T('cueBallReady'),T('cueBallReadyDesc'));
}

/* ═══════════════════════════════════════════════════════════════════════════════
   MODE SWITCHING
   ═══════════════════════════════════════════════════════════════════════════════*/
function switchMode(){
  gameMode=gameMode==='pocket'?'threecushion':'pocket';
  $('mode-icon').textContent=gameMode==='pocket'?'🎱':'🟥';
  $('mode-label').textContent=T(gameMode==='pocket'?'modePocket':'mode3Cushion');
  // Toggle pockets
  pocketMeshes.forEach(m=>m.visible=gameMode==='pocket');
  // Reset game
  scores={p1:0,p2:0};elP1Score.textContent='0';elP2Score.textContent='0';
  currentPlayer=1;currentTurnStatus='AIMING';
  elP1Card.classList.add('active');elP2Card.classList.remove('active');
  spawnBalls();triggerAlert(T('readyToAim'),T('statusDescDefault'));
}

/* ═══════════════════════════════════════════════════════════════════════════════
   RIVAL LIST + AI CHALLENGE
   ═══════════════════════════════════════════════════════════════════════════════*/
function renderRivalList(){
  rivalList.innerHTML='';
  RIVALS.forEach(r=>{
    const card=document.createElement('div');card.className='rival-card';
    card.innerHTML=`<span class="rival-flag fi fi-${r.code}"></span><div class="rival-info"><span class="rival-name">${r.name}</span><span class="rival-rank">${r.rank} · ${r.rating}</span></div><button class="btn-challenge"><span class="fi fi-${r.code}"></span> ${T('challengeBtn')}</button>`;
    card.querySelector('.btn-challenge').addEventListener('click',()=>startChallenge(r));
    rivalList.appendChild(card);
  });
}

function startChallenge(rival){
  aiMode=true;aiRival=rival;
  elP2Flag.innerHTML=`<span class="fi fi-${rival.code}"></span>`;elP2Name.textContent=rival.name;
  scores={p1:0,p2:0};elP1Score.textContent='0';elP2Score.textContent='0';
  currentPlayer=1;currentTurnStatus='AIMING';
  elP1Card.classList.add('active');elP2Card.classList.remove('active');
  spawnBalls();
  triggerToast(T('challengeStarting'),T('challengeStartingSub',{name:rival.name}));
  triggerAlert(T('readyToAim'),T('statusDescDefault'));
}

const btnPractice=$('btn-practice');
if(btnPractice){
  btnPractice.addEventListener('click',()=>{
    if(!aiMode)return;
    aiMode=false;aiRival=null;
    elP2Flag.innerHTML=`<span class="fi fi-un"></span>`;
    elP2Name.textContent=T('player2');
    scores={p1:0,p2:0};elP1Score.textContent='0';elP2Score.textContent='0';
    currentPlayer=1;currentTurnStatus='AIMING';
    elP1Card.classList.add('active');elP2Card.classList.remove('active');
    spawnBalls();
    triggerToast(T('practiceMode'),T('practiceModeSub'));
    triggerAlert(T('readyToAim'),T('statusDescDefault'));
  });
}

function tryAITurn(){
  if(!aiMode||currentPlayer!==2||currentTurnStatus!=='AIMING')return;
  triggerAlert(T('aiTurn'),T('aiTurnDesc'));
  cueStick.visible=false;aimingLine.visible=false;
  setTimeout(()=>{if(currentTurnStatus==='AIMING'&&currentPlayer===2)aiStrikeCueBall(aiRival);},1800);
}

/* ═══════════════════════════════════════════════════════════════════════════════
   MODAL LANG SELECTION
   ═══════════════════════════════════════════════════════════════════════════════*/
function setupModalLangSelect(){
  document.querySelectorAll('#modal-lang-select .lang-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      applyLanguage(btn.dataset.lang);
      document.querySelectorAll('#modal-lang-select .lang-btn').forEach(b=>b.style.background='rgba(255,255,255,0.1)');
      btn.style.background='rgba(255,255,255,0.4)';
    });
  });
}
setupModalLangSelect();

/* ═══════════════════════════════════════════════════════════════════════════════
   MOBILE DRAWER
   ═══════════════════════════════════════════════════════════════════════════════*/
function setupMobileDrawer(){
  const dashboard=$('game-dashboard');const handle=$('drawer-handle');
  let startY=0,drawerDragging=false;  // renamed to avoid conflict with spin UI dragging
  handle.addEventListener('touchstart',e=>{startY=e.touches[0].clientY;drawerDragging=true;e.preventDefault();},{passive:false});
  window.addEventListener('touchmove',e=>{
    if(!drawerDragging)return;const dy=startY-e.touches[0].clientY;
    if(dy>30)dashboard.classList.add('expanded');
    if(dy<-30)dashboard.classList.remove('expanded');
  },{passive:true});
  window.addEventListener('touchend',()=>{drawerDragging=false;});
  handle.addEventListener('click',()=>dashboard.classList.toggle('expanded'));
}

/* ═══════════════════════════════════════════════════════════════════════════════
   ANIMATE LOOP  –  delta-time independent physics
   ═══════════════════════════════════════════════════════════════════════════════*/
let lastTime=0;
function animate(now=0){
  requestAnimationFrame(animate);
  // Delta-time: clamp to 50ms max so physics don't explode on tab-switch lag
  const dt=Math.min(now-lastTime,50);lastTime=now;
  // dt-normalized damping: F^(dt/target) — same deceleration regardless of frame rate
  const dtFactor=dt/TARGET_DT;
  const frictionDt=Math.pow(FRICTION,dtFactor);
  const spinDecayDt=Math.pow(0.988,dtFactor);

  controls.update();updateParticles();
  if(crosshairGrid)crosshairGrid.visible=(currentTurnStatus==='AIMING');

  let allStopped=true;
  balls.forEach(b=>{
    if(!b.active)return;
    const horizSq=b.vel.x*b.vel.x+b.vel.z*b.vel.z;
    const airborne=b.mesh.position.y>BALL_RADIUS+0.001;

    if(horizSq>0.000004||airborne){
      // Gravity for jump shots
      if(airborne){b.vel.y-=0.010*dtFactor;}
      b.mesh.position.x+=b.vel.x*dtFactor;
      b.mesh.position.y+=b.vel.y*dtFactor;
      b.mesh.position.z+=b.vel.z*dtFactor;

      // Landing bounce
      if(b.mesh.position.y<BALL_RADIUS){
        b.mesh.position.y=BALL_RADIUS;
        b.vel.y*=-0.42;
        if(Math.abs(b.vel.y)<0.018)b.vel.y=0;
      }

      // Rolling rotation
      const sp=Math.sqrt(horizSq);
      if(sp>0.0001){
        b.mesh.rotateOnWorldAxis(
          new THREE.Vector3(-b.vel.z,0,b.vel.x).normalize(),
          sp*dtFactor/BALL_RADIUS
        );
      }

      // Exponential damping (dt-normalized)
      b.vel.x*=frictionDt;
      b.vel.z*=frictionDt;

      // Backspin: opposes horizontal velocity (draw / follow)
      if(Math.abs(b.backspin)>0.000004&&sp>0){
        const ux=b.vel.x/sp,uz=b.vel.z/sp;
        b.vel.x-=ux*b.backspin*dtFactor;
        b.vel.z-=uz*b.backspin*dtFactor;
        b.backspin*=spinDecayDt;
        if(Math.abs(b.backspin)<0.000004)b.backspin=0;
      }
      // Sidespin: lateral curve
      if(Math.abs(b.sidespin)>0.000004&&sp>0){
        const ux=b.vel.x/sp,uz=b.vel.z/sp;
        b.vel.x+=(-uz)*b.sidespin*dtFactor;
        b.vel.z+=(ux)*b.sidespin*dtFactor;
        b.sidespin*=spinDecayDt;
        if(Math.abs(b.sidespin)<0.000004)b.sidespin=0;
      }

      // Settle: stop when effectively stationary
      const finalSp=Math.sqrt(b.vel.x*b.vel.x+b.vel.z*b.vel.z);
      if(finalSp<STOP_SPEED&&!airborne){
        b.vel.set(0,0,0);b.backspin=0;b.sidespin=0;
      } else {
        allStopped=false;
      }
    }
  });

  if(currentTurnStatus==='MOVING'){
    handleBallCollisions();handleCushionBounces();checkPockets();
    if(allStopped){
      if(gameMode==='threecushion')check3CushionScore();
      currentTurnStatus='AIMING';
      currentPlayer=currentPlayer===1?2:1;
      elP1Card.classList.toggle('active',currentPlayer===1);
      elP2Card.classList.toggle('active',currentPlayer===2);
      triggerAlert(T('playerTurn',{n:currentPlayer}),T('playerTurnDesc'));
      if(aiMode){
        const aiScore=scores.p2,playerScore=scores.p1;
        if(aiScore>=5&&aiScore>playerScore){showRevengeModal();return;}
      }
      if(aiMode&&currentPlayer===2)setTimeout(tryAITurn,400);
    }
  }

  updateCuePosition();updatePredictionPaths();renderer.render(scene,camera);
}

/* ═══════════════════════════════════════════════════════════════════════════════
   UI LISTENERS
   ═══════════════════════════════════════════════════════════════════════════════*/
function setupUIListeners(){
  const btnChalk=$('btn-chalk');
  if(btnChalk) btnChalk.addEventListener('click',()=>{
    shotsSinceChalk=0;
    playSound('chalk',1);  // satisfying chalk scrape sound
    if(btnChalk)btnChalk.classList.remove('chalk-warn');
  });
  elPowerSlider.addEventListener('input',e=>{elPowerValue.textContent=e.target.value+'%';});
  btnStrike.addEventListener('click',strikeCueBall);
  btnReset.addEventListener('click',resetCueBall);
  togglePrediction.addEventListener('change',()=>{if(togglePrediction.checked)triggerToast(T('toastAiOn'),T('toastAiOnSub'));});
  btnWatchAd.addEventListener('click',startAdSim);
  btnSkipAd.addEventListener('click',skipRevive);
  btnRevengeAd.addEventListener('click',revengeAdWatch);
  btnRevengeSkip.addEventListener('click',revengeSkip);
  btnGuideStart.addEventListener('click',()=>{
    elGuideModal.classList.add('hidden');
    if(!audioCtx)try{audioCtx=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}
  });
  btnLang.addEventListener('click',()=>{
    const idx=(LANG_ORDER.indexOf(currentLang)+1)%LANG_ORDER.length;
    applyLanguage(LANG_ORDER[idx]);
  });
  btnMode.addEventListener('click',switchMode);
  window.addEventListener('keydown',e=>{
    if(e.code==='Space'){e.preventDefault();strikeCueBall();}
    if(e.code==='KeyC'){e.preventDefault();if($('btn-chalk')){shotsSinceChalk=0;playSound('chalk',1);$('btn-chalk').classList.remove('chalk-warn');}}
  });

  const elCueMassSlider=$('cue-mass-slider'),elCueMassValue=$('cue-mass-value');
  if(elCueMassSlider) {
    elCueMassSlider.addEventListener('input',(e)=>{
      cueMass=parseInt(e.target.value);
      if(elCueMassValue)elCueMassValue.textContent=cueMass+'g';
    });
  }
  const tipBtns=document.querySelectorAll('.btn-tip');
  if(tipBtns) {
    tipBtns.forEach(btn=>btn.addEventListener('click',(e)=>{
      tipBtns.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      tipHardness=btn.dataset.val;
    }));
  }
  const elHumiditySlider=$('humidity-slider'),elHumidityValue=$('humidity-value');
  if(elHumiditySlider) {
    elHumiditySlider.addEventListener('input',(e)=>{
      const val=parseInt(e.target.value);
      if(elHumidityValue)elHumidityValue.textContent=val+'%';
      FRICTION = 1 - (val/7000);
    });
    FRICTION = 1 - (parseInt(elHumiditySlider.value)/7000);
  }

  const btnHelp = $('btn-help');
  const btnHelpClose = $('btn-help-close');
  const helpModal = $('help-modal');
  if(btnHelp && helpModal) {
    btnHelp.addEventListener('click', () => {
      helpModal.classList.remove('hidden');
    });
  }
  if(btnHelpClose && helpModal) {
    btnHelpClose.addEventListener('click', () => {
      helpModal.classList.add('hidden');
    });
  }

  // Mobile Web Audio API strict auto-play policy fix
  const unlockAudio = () => {
    if(!audioCtx)try{audioCtx=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}
    if(audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    window.removeEventListener('touchstart', unlockAudio);
    window.removeEventListener('click', unlockAudio);
  };
  window.addEventListener('touchstart', unlockAudio, {once: true});
  window.addEventListener('click', unlockAudio, {once: true});

  const cueBtns = document.querySelectorAll('.cue-item');
  if(cueBtns) {
    cueBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget;
        cueBtns.forEach(b => b.classList.remove('active'));
        target.classList.add('active');
        const index = parseInt(target.dataset.index);
        currentCueIndex = index;
        if(cueStick) {
          const oldMap = cueStick.material.map;
          cueStick.material.map = createCueTexture(currentCueIndex);
          cueStick.material.needsUpdate = true;
          if(oldMap) oldMap.dispose();
          triggerToast("EQUIPPED", CUE_DESIGNS[index].name);
        }
      });
    });
  }

  setupSpinUI();setupMobileDrawer();
}

function onResize(){camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);}

/* ═══════════════════════════════════════════════════════════════════════════════
   BOOT
   ═══════════════════════════════════════════════════════════════════════════════*/
init();
