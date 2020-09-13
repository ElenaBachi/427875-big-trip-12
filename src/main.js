import {createSiteMenuTemplate} from "./view/site-menu";
import {createFilterTemplate} from "./view/filter";
import {createSortTemplate} from "./view/sort";
import {createPointEditTemplate} from "./view/point-edit";
import {createPointTemplate} from "./view/point";
import {createPointListTemplate} from "./view/point-list";
import {createPointListByDayTemplate} from "./view/points-by-day";
import {createPointsByDayContainerTemplate} from "./view/points-by-day-container";
import {createTripInfoTemplate} from "./view/trip-info";

const POINT_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const pageHeader = document.querySelector(`.page-header`);
const pageInfoBlock = pageHeader.querySelector(`.trip-main`);
const pageMenuBlock = pageInfoBlock.querySelector(`.trip-main__trip-controls`);

render(pageInfoBlock, createTripInfoTemplate(), `afterbegin`);
render(pageMenuBlock, createSiteMenuTemplate(), `afterbegin`);
render(pageMenuBlock, createFilterTemplate(), `beforeend`);

const pageMain = document.querySelector(`.page-main`);
const eventsBoard = pageMain.querySelector(`.trip-events`);

render(eventsBoard, createSortTemplate(), `beforeend`);
render(eventsBoard, createPointsByDayContainerTemplate(), `beforeend`);

const pointListContainer = eventsBoard.querySelector(`.trip-days`);

render(pointListContainer, createPointListByDayTemplate(), `beforeend`);

const pointsByDayContainer = pointListContainer.querySelector(`.trip-days__item`);

render(pointsByDayContainer, createPointListTemplate(), `beforeend`);

const pointList = pointsByDayContainer.querySelector(`.trip-events__list`);

render(pointList, createPointEditTemplate(), `afterbegin`);

for (let i = 0; i < POINT_COUNT; i++) {
  render(pointList, createPointTemplate(), `beforeend`);
}


