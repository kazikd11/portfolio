const icons = import.meta.glob('../assets/svg/*.svg', { eager: true, import: 'default' });

const formattedIcons = Object.keys(icons).reduce((acc, path) => {
  const name = path.split('/').pop().replace('.svg', '');
  acc[name] = icons[path].default;
  return acc;
}, {});

export default formattedIcons;
