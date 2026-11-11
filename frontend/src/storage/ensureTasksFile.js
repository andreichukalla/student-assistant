// Початковий вміст нового файлу: демонстраційне завдання у форматі JSON з відступами
const demoData = [
  {
    id: 1,
    title: "Демонстраційне завдання",
    completed: false,
    dueDate: "2026-12-31",
    priority: "medium",
  },
];

const INITIAL_CONTENT = JSON.stringify(demoData, null, 2) + "\n";

// Повертає модулі Node, якщо код працює у вікні NW.js.
// У звичайному браузері (npm run dev) повертає null.
export function getNode() {
  if (typeof window !== "undefined" && window.require) {
    return {
      fs: window.require("fs"),
      path: window.require("path"),
    };
  }
  return null;
}

// NW.js запускається з теки frontend/dist, тому до
// data/tasks.json піднімаємось на два рівні вгору.
export function getDataPath(node) {
  const cwd = window.process.cwd();
  return node.path.resolve(cwd, "..", "..", "data", "tasks.json");
}

// Гарантує, що файл data/tasks.json існує.
// Повертає об'єкт: { status, path, size }
export async function ensureTasksFile() {
  const node = getNode();
  if (!node) return { status: "unavailable" };

  const filePath = getDataPath(node);
  const dir = node.path.dirname(filePath);

  // 1. Теку data створюємо, якщо її немає (recursive не
  // повертає помилки, коли тека вже існує).
  await node.fs.promises.mkdir(dir, { recursive: true });

  try {
    // 2. Прапорець "wx": створити файл, але не записувати,
    // якщо він уже є.
    await node.fs.promises.writeFile(filePath, INITIAL_CONTENT, {
      encoding: "utf-8",
      flag: "wx",
    });
    return { status: "created", path: filePath };
  } catch (err) {
    if (err.code !== "EEXIST") throw err;

    // 3. Файл уже був - залишаємо його без змін, але
    // перевіряємо, що це справді файл, а не тека.
    const info = await node.fs.promises.stat(filePath);
    if (!info.isFile()) {
      throw new Error("tasks.json не є файлом: " + filePath);
    }
    return { status: "exists", path: filePath, size: info.size };
  }
}
