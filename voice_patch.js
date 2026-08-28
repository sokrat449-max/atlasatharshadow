const btnMic = document.createElement('button');
btnMic.innerHTML = '🎤 تحدث مع أوميجا';
btnMic.className = 'voice-btn';
btnMic.onclick = () => {
  const rec = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  rec.lang = document.documentElement.lang === 'ar'? 'ar-EG' : 'en-US';
  rec.start();
  btnMic.innerHTML = '🎤 أوميجا بيسمعك...';
  rec.onresult = e => {
    document.querySelector('textarea').value = e.results[0][0].transcript;
    btnMic.innerHTML = '🎤 تحدث مع أوميجا';
    speechSynthesis.speak(new SpeechSynthesisUtterance('تم استلام رسالتك، جاري الفحص'));
  };
};
document.querySelector('.scanner-actions')?.appendChild(btnMic);
