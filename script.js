const progress = document.getElementById('reading-progress');

function updateProgress() {
  const doc = document.documentElement;
  const scrollTop = doc.scrollTop || document.body.scrollTop;
  const height = doc.scrollHeight - doc.clientHeight;
  const pct = height > 0 ? (scrollTop / height) * 100 : 0;
  progress.style.width = `${Math.min(100, Math.max(0, pct))}%`;
}

window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();

const links = [...document.querySelectorAll('.toc a')];
const sections = links
  .map(link => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const observer = new IntersectionObserver(entries => {
  const visible = entries
    .filter(entry => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  links.forEach(link => {
    const active = link.getAttribute('href') === `#${visible.target.id}`;
    link.toggleAttribute('aria-current', active);
    link.style.fontWeight = active ? '700' : '500';
  });
}, { rootMargin: '-20% 0px -65% 0px', threshold: [0, .2, .6] });

sections.forEach(section => observer.observe(section));
