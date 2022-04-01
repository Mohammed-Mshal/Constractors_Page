let butMenu = document.querySelector(`header .container .nav .link .menu`);

butMenu.addEventListener(`click`, function (el) {
  if (el.currentTarget.classList.contains(`open`)) {
    el.currentTarget.classList.remove(`open`);
    el.currentTarget.classList.add(`close`);
    document.querySelector(`header .container .nav .link ul`).style.top = `0`;
    document.querySelector(
      `header .container .presentation button`
    ).style.zIndex = `-1`;
  } else {
    el.currentTarget.classList.remove(`close`);
    el.currentTarget.classList.add(`open`);
    document.querySelector(
      `header .container .nav .link ul`
    ).style.top = `-80%`;
    document.querySelector(
      `header .container .presentation button`
    ).style.zIndex = `1`;
  }
});
// close Menu When Click Anywhere Outside Menu
document.addEventListener(`click`, (el) => {
  if (
    el.target.classList.contains(`list`) ||
    el.target.classList.contains(`menu`)
  )
    return;
  else {
    butMenu.classList.remove(`close`);
    butMenu.classList.add(`open`);
    document.querySelector(
      `header .container .nav .link ul`
    ).style.top = `-80%`;
    document.querySelector(
      `header .container .presentation button`
    ).style.zIndex = `1`;
  }
});

let service = document.querySelectorAll(
  `.services .container .services-section .service div`
);

service.forEach((el) => {
  el.addEventListener(`click`, function (ele) {
    service.forEach((el) => {
      el.classList.remove(`active`);
    });
    document
      .querySelectorAll(`.services .container .services-section .details > div`)
      .forEach((el) => {
        el.classList.remove(`open`);
      });
    ele.currentTarget.classList.add(`active`);
    document
      .querySelector(`.${ele.currentTarget.dataset.service}`)
      .classList.add(`open`);
  });
});

document
  .querySelectorAll(`.projects .contains .category ul li`)
  .forEach((el) => {
    el.addEventListener(`click`, () => {
      document
        .querySelectorAll(`.projects .contains .category ul li`)
        .forEach((ele) => {
          ele.style.backgroundColor = `transparent`;
          ele.classList.remove(`active`);
        });
      el.classList.add(`active`);
      document
        .querySelectorAll(`.projects .contains .contain > div`)
        .forEach((ele) => {
          ele.classList.remove(`show`);
        });

      el.style.backgroundColor = `var(--orange-red)`;
      document
        .querySelector(`.projects .contains .contain .${el.dataset.cat}`)
        .classList.add(`show`);
    });
  });

let infoContainer = document.querySelectorAll(
  `main .testimonials .info .info-container div`
);
let photo = document.querySelectorAll(`
    main .testimonials .photo img
    `);
let indexItemShow = 0;
let maxValue = infoContainer.length - 1;

function changeInfo(ind) {
  infoContainer.forEach((e) => {
    e.classList.remove(`active`);
  });
  photo.forEach((e) => {
    e.classList.remove(`active`);
  });
  infoContainer[ind].classList.add(`active`);
  photo[ind].classList.add(`active`);
}
changeInfo(indexItemShow);
document
  .querySelector(`main .testimonials .info .step span.left`)
  .addEventListener(`click`, () => {
    if (indexItemShow - 1 < 0) indexItemShow = maxValue;
    else indexItemShow--;
    changeInfo(indexItemShow);
  });
document
  .querySelector(`main .testimonials .info .step span.right`)
  .addEventListener(`click`, () => {
    if (indexItemShow + 1 > maxValue) indexItemShow = 0;
    else indexItemShow++;
    changeInfo(indexItemShow);
  });
