export const createStudy = (lesson, description, duration) => {
  return {
    id: Date.now(),
    lesson,
    description,
    duration: Number(duration),
    completed: false,
    createdAt: new Date().toLocaleString("tr-TR"),
    completedAt: null
  };
};
