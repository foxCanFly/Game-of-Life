import Section from './section';


export default function initSections(innerOptions) {
  const { edgeSize, $root } = innerOptions;

  return ['front', 'back', 'right', 'left', 'top', 'bottom'].map(initializeEmptySection);

  function initializeEmptySection(name) {
    const className = `cube-space cube-space--${name}`;
    const nodeSelector = `.cube-space--${name}`;
    const sectionOptions = {
      name,
      edgeSize,
      nodeSelector
    };

    $root.append(`<div class="${className}" />`);

    return new Section(sectionOptions);
  }
}
