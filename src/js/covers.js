const covers = [
  { id: 1, alt: 'Cover 1' },
  { id: 2, alt: 'Cover 2' },
  { id: 3, alt: 'Cover 3' },
  { id: 4, alt: 'Cover 4' },
  { id: 5, alt: 'Cover 5' },
  { id: 6, alt: 'Cover 6' },
  { id: 7, alt: 'Cover 7' },
  { id: 8, alt: 'Cover 8' },
  { id: 9, alt: 'Cover 9' },
  { id: 10, alt: 'Cover 10' },
];

const image = covers
  .map(
    ({ id, alt }) =>
      `<li class="covers-item">
       <a href="https://goit.global/ua/" target="_blank">
        <picture class="covers-img">
          <source
            media="(min-width:320px)"
            srcset="./images/covers/${id}.webp 1x, ./images/covers/${id}_2x.webp 2x"
            type="image/webp"
          />
          <img
            class="covers-img"
            src="./images/covers/${id}.webp"
            alt="${alt}"
            loading="lazy"
          />
        </picture>
      </a>
    </li>`
  )
  .join('');

const items = document.querySelectorAll('.covers-wrapper');

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

items.forEach(item => {
  item.innerHTML = image;
  const marqueeItems = Array.from(item.children);
  const shuffledItems = shuffleArray(marqueeItems);
  shuffledItems.forEach(items => {
    item.appendChild(items);
  });
});
