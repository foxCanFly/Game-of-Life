import $ from 'jquery';


export default function loadUi(innerOptions) {
  const $root = innerOptions.$root;
  const $window = $(window);

  const position = {
    xRotation: 30,
    yRotation: -20
  };

  const deltaPosition = {};

  function rotate(delta = {}) {
    position.xRotation += delta.xRotation || 0;
    position.yRotation += delta.yRotation || 0;

    deltaPosition.xRotation = 0;
    deltaPosition.yRotation = 0;

    $root.css('transform', `perspective(1500px)
      rotateX(${position.xRotation}deg) rotateY(${position.yRotation}deg)`);
  }

  function animate() {
    if (deltaPosition.xRotation || deltaPosition.yRotation) {
      rotate(deltaPosition);
    }

    requestAnimationFrame(animate);
  }

  function addEventListeners() {
    const mouse = mouseHandlers($root);

    $window.on('keydown', event => {
      const change = keyDownHandler(event);
      Object.assign(deltaPosition, change);
    });

    $root.on('mousedown', mouse.down);
    $root.on('mouseup', mouse.up);
  }

  rotate();
  animate();
  addEventListeners();

  function keyDownHandler(event) {
    if (event.keyCode === 37) {
      return { xRotation: 0, yRotation: -30 };
    } else if (event.keyCode === 38) {
      return { xRotation: 30, yRotation: 0 };
    } else if (event.keyCode === 39) {
      return { xRotation: 0, yRotation: 30 };
    } else if (event.keyCode === 40) {
      return { xRotation: -30, yRotation: 0 };
    }

    return { xRotation: 0, yRotation: 0 };
  }

  function mouseHandlers($root) {
    function handleMark(event) {
      const target = event.target;

      if (target.tagName === 'SPAN') {
        target.getCell.toggle();
      }
    }

    return {
      down(event) {
        handleMark(event);

        $root.on('mouseover', handleMark);
      },
      up() {
        $root.off('mouseover', handleMark);
      }
    };
  }
}
