document.getElementById('acceptBtn').addEventListener('click', () => {
  // Hide button
  document.getElementById('acceptBtn').style.display = 'none';

  // Show certificate
  document.getElementById('certificateArea').style.display = 'block';

  // Confetti animation
  const duration = 5 * 1000;
  const end = Date.now() + duration;

  const interval = setInterval(() => {
    if (Date.now() > end) {
      clearInterval(interval);
    }

    confetti({
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      particleCount: 100,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2
      }
    });
  }, 250);
});
