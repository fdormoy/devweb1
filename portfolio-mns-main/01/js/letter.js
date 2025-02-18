// const { assign } = Object;
// const lets = 'franck'.split``;

// function letter() {
//   let c = Math.random() * 155;
//   const el = assign(
//     document.createElement('div'),
//     {
//       innerHTML: lets[~~(Math.random() * lets.length)],
//       style: `
//         position: absolute;
//         font-family: Helvetica;
//         color: rgb(${c}, ${c}, ${c});
//       `
//     }
//   );

//   // Ajoute l'élément au body
//   document.body.append(el);

//   // Initialise les propriétés personnalisées
//   el.x = innerWidth / 2;
//   el.y = innerHeight / 2;
//   el.s = Math.random() * 10 + 0.3;
//   el.vy = Math.random() * 3 + 0.1;
//   el.r = Math.random() * 360;
//   el.ri = Math.random() * 10 - 5;
//   el.vx = 0;

//   if (Math.abs(el.ri) < 1) el.ri = 1;

//   const o = {
//     el,
//     run() {
//       el.r += el.ri;
//       assign(el.style, {
//         rotate: el.r + 'deg',
//         scale: el.s,
//         translate: `${el.x}px ${el.y}px`,
//       });

//       for (let i = 0; i < NUM; i++) {
//         const l = letters[i];
//         if (l !== o) {
//           let dx = el.x - l.el.x;
//           let dy = el.y - l.el.y;
//           const d = Math.sqrt(dx ** 2 + dy ** 2);

//           if (d < 100 * el.s / 4) {
//             let ang = Math.atan2(dy, dx);
//             el.vx += 0.02 * Math.cos(ang);
//             el.vy += 0.02 * Math.sin(ang);
//             l.el.vx += 0.02 * Math.cos(-ang);
//             l.el.vy += 0.02 * Math.sin(-ang);
//           }
//         }
//       }

//       el.vx *= 0.98;
//       el.vy *= 0.98;
//       el.y += el.vy;
//       el.x += el.vx;

//       if (el.x > innerWidth + 200) {
//         el.x = -100;
//       }
//       if (el.y < -200) {
//         el.y = innerHeight + 100;
//       }
//       if (el.y > innerHeight + 100) {
//         el.y = -100;
//       }
//     },
//   };
//   return o;
// }

// // Nombre d'éléments
// const NUM = 100;

// // Tableau pour stocker les lettres
// let letters = [];

// // Attendre que le DOM soit prêt
// document.addEventListener('DOMContentLoaded', () => {
//   for (let i = 0; i < NUM; i++) {
//     letters[i] = letter();
//   }

//   // Boucle principale
//   function loop() {
//     for (let i = 0; i < NUM; i++) {
//       letters[i].run();
//     }
//     requestAnimationFrame(loop);
//   }
//   loop();
// });










const { assign } = Object;
const lets = '!@#%?&*()>'.split``;

function letter() {
  let c = Math.random() * 155;
  const el = assign(
    document.createElement('div'),
    {
      innerHTML: lets[~~(Math.random() * lets.length)],
      style: `
        position: absolute;
        font-family: Helvetica;
        color: rgb(${c}, ${c}, ${c});
        cursor: pointer;
      `
    }
  );

  // Ajoute l'élément au body
  document.body.append(el);

  // Initialise les propriétés personnalisées
  el.x = innerWidth / 2;
  el.y = innerHeight / 2;
  el.s = Math.random() * 10 + 0.3;
  el.vy = Math.random() * 3 + 0.1;
  el.r = Math.random() * 360;
  el.ri = Math.random() * 10 - 5;
  el.vx = 0;

  if (Math.abs(el.ri) < 1) el.ri = 1;

  // Ajoute un écouteur pour le survol de la souris
  el.addEventListener('mouseover', () => {
    el.vx += Math.random() * 4 - 2; // Augmente la vitesse aléatoire sur X
    el.vy += Math.random() * 4 - 2; // Augmente la vitesse aléatoire sur Y
    el.s += Math.random() * 0.2 - 0.1; // Change légèrement la taille
    el.ri = Math.random() * 10 - 5; // Change la rotation
  });

  const o = {
    el,
    run() {
      el.r += el.ri;
      assign(el.style, {
        rotate: el.r + 'deg',
        scale: el.s,
        translate: `${el.x}px ${el.y}px`,
      });

      for (let i = 0; i < NUM; i++) {
        const l = letters[i];
        if (l !== o) {
          let dx = el.x - l.el.x;
          let dy = el.y - l.el.y;
          const d = Math.sqrt(dx ** 2 + dy ** 2);

          if (d < 100 * el.s / 4) {
            let ang = Math.atan2(dy, dx);
            el.vx += 0.02 * Math.cos(ang);
            el.vy += 0.02 * Math.sin(ang);
            l.el.vx += 0.02 * Math.cos(-ang);
            l.el.vy += 0.02 * Math.sin(-ang);
          }
        }
      }

      el.vx *= 0.98;
      el.vy *= 0.98;
      el.y += el.vy;
      el.x += el.vx;

      if (el.x > innerWidth + 200) {
        el.x = -100;
      }
      if (el.y < -200) {
        el.y = innerHeight + 100;
      }
      if (el.y > innerHeight + 100) {
        el.y = -100;
      }
    },
  };
  return o;
}

// Nombre d'éléments
const NUM = 100;

// Tableau pour stocker les lettres
let letters = [];

// Attendre que le DOM soit prêt
document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < NUM; i++) {
    letters[i] = letter();
  }

  // Boucle principale
  function loop() {
    for (let i = 0; i < NUM; i++) {
      letters[i].run();
    }
    requestAnimationFrame(loop);
  }
  loop();
});
