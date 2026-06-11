function setDeep(obj, pathParts, value) {
  let current = obj;

  pathParts.forEach((part, index) => {
    const isLast = index === pathParts.length - 1;

    if (isLast) {
      current[part] = value;
    } else {
      if (!current[part]) current[part] = {};
      current = current[part];
    }
  });
}

function buildNestedImages(importedModules) {
  const root = {};

  Object.entries(importedModules).forEach(([path, module]) => {
    // "./gallery/summer/img1.jpg" -> ["gallery","summer","img1.jpg"]
    const parts = path
      .replace("./", "")
      .split("/");

    const fileName = parts.pop(); // img1.jpg

    //rimuovi estensione
    const nameWithoutExt = fileName.replace(/\.[^/.]+$/, "");

    setDeep(root, [...parts, nameWithoutExt], module);
  });

  return root;
}

// importa tutto ricorsivamente
const modules = import.meta.glob(
  "./**/*.{png,jpg,jpeg,svg,webp}",
  {
    eager: true,
    import: "default",
  }
);

const img = buildNestedImages(modules);

export default img;