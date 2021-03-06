const easeInOutQuad = (t, b, c, d) => {
  t /= d / 2;
  if (t < 1) return ((c / 2) * t * t) + b;
  t -= 1;
  return ((-c / 2) * ((t * (t - 2)) - 1)) + b;
};

/**
 * Scrolls user to the element.
 *
 * Based on https://gist.github.com/andjosh/6764939#gistcomment-2553779
 */
const scrollTo = (element, to = 0, duration = 500, callback = () => {}) => {
  const start = element.scrollTop;
  const change = to - start;
  const increment = 20;
  let currentTime = 0;

  const animateScroll = (() => {
    currentTime += increment;

    element.scrollTop = easeInOutQuad(currentTime, start, change, duration);

    if (currentTime < duration && element.scrollTop !== to) {
      setTimeout(animateScroll, increment);
    }
    else {
      callback();
    }
  });

  animateScroll();
};

/**
 * Scroll user to the element.
 */
export const scrollToElement = (
  elementId, scrollableAreaId = null,
  desiredElementPosition = 0, callback = () => {},
) => {
  setTimeout(() => {
    // Get scrollable element.
    const element = document.getElementById(elementId);
    if (!element) {
      return;
    }
    const elementRect = element.getBoundingClientRect();

    // Get scrollable area.
    let scrollableArea = null;
    if (scrollableAreaId !== null) {
      scrollableArea = document.getElementById(scrollableAreaId);
    }
    else {
      scrollableArea = document.scrollingElement || document.documentElement;
    }
    if (!scrollableArea) {
      return;
    }
    const to = (scrollableArea.scrollTop + elementRect.top) - desiredElementPosition;

    scrollTo(scrollableArea, to);
    callback(element);
  }, 50);
};
