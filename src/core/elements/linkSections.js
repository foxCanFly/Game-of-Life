export default function linkSections(sections) {
  const count = sections[0].originalCells.length;
  const edgeSize = Math.sqrt(count);

  for (const section of sections) {
    let edgeCells = null;

    switch (section.name) {
      case 'front':
        edgeCells = {
          top: bottomEdge(choose('top')),
          right: leftEdge(choose('right')),
          bottom: topEdge(choose('bottom')),
          left: rightEdge(choose('left'))
        };
        break;
      case 'top':
        edgeCells = {
          top: bottomEdge(choose('back')),
          right: topEdge(choose('right')).reverse(),
          bottom: topEdge(choose('front')),
          left: topEdge(choose('left'))
        };
        break;
      case 'right':
        edgeCells = {
          top: rightEdge(choose('top')).reverse(),
          right: rightEdge(choose('back')).reverse(),
          bottom: rightEdge(choose('bottom')),
          left: rightEdge(choose('front'))
        };
        break;
      case 'bottom':
        edgeCells = {
          top: bottomEdge(choose('front')),
          right: bottomEdge(choose('right')),
          bottom: bottomEdge(choose('back')),
          left: bottomEdge(choose('left')).reverse()
        };
        break;
      case 'left':
        edgeCells = {
          top: leftEdge(choose('top')),
          right: leftEdge(choose('front')),
          bottom: leftEdge(choose('bottom')),
          left: leftEdge(choose('back'))
        };
        break;
      case 'back':
        edgeCells = {
          top: bottomEdge(choose('bottom')),
          right: rightEdge(choose('right')).reverse(),
          bottom: topEdge(choose('top')),
          left: leftEdge(choose('left')).reverse()
        };
        break;
      default: break;
    }

    section.populate(edgeCells);
  }

  function choose(name) {
    return sections.filter(section => section.name === name)[0];
  }

  function topEdge(section) {
    return section.originalCells.reduce((edgeCells, cell, index) => {
      if (index >= 0 && index < edgeSize) {
        edgeCells.push(cell);
      }

      return edgeCells;
    }, []);
  }

  function rightEdge(section) {
    return section.originalCells.reduce((edgeCells, cell, index) => {
      if ((index + 1) % edgeSize === 0) {
        edgeCells.push(cell);
      }

      return edgeCells;
    }, []);
  }

  function bottomEdge(section) {
    return section.originalCells.reduce((edgeCells, cell, index) => {
      if (index > count - edgeSize - 1) {
        edgeCells.push(cell);
      }

      return edgeCells;
    }, []);
  }

  function leftEdge(section) {
    return section.originalCells.reduce((edgeCells, cell, index) => {
      if (index % edgeSize === 0) {
        edgeCells.push(cell);
      }

      return edgeCells;
    }, []);
  }
}
