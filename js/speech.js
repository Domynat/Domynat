// Spracheingabe über die Web Speech API (Chrome/Android, teils iOS Safari).
// Liefert Live-Transkript (interim) und finalen Text zurück.

export function speechSupported() {
  return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
}

export function createRecognizer({ lang = 'de-DE', onStart, onInterim, onFinal, onError, onEnd } = {}) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return null;

  const rec = new SR();
  rec.lang = lang;
  rec.interimResults = true;
  rec.continuous = false;
  rec.maxAlternatives = 1;

  let finalText = '';

  rec.onstart = () => { finalText = ''; onStart?.(); };
  rec.onresult = (e) => {
    let interim = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const r = e.results[i];
      if (r.isFinal) finalText += r[0].transcript;
      else interim += r[0].transcript;
    }
    onInterim?.((finalText + interim).trim());
  };
  rec.onerror = (e) => onError?.(e.error);
  rec.onend = () => {
    const text = finalText.trim();
    if (text) onFinal?.(text);
    onEnd?.(text);
  };

  return {
    start() { try { rec.start(); } catch { /* bereits gestartet */ } },
    stop() { try { rec.stop(); } catch {} },
    abort() { try { rec.abort(); } catch {} },
  };
}
