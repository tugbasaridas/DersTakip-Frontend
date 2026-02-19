import { useState } from "react";

function StudyForm({ onAdd }) {
  const [lesson, setLesson] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!lesson || !duration) return;

    onAdd(lesson, description, duration);

    setLesson("");
    setDescription("");
    setDuration("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-xl mb-6"
    >
      <h2 className="text-2xl font-semibold text-white mb-4">
        📖 Yeni Ders Ekle
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Ders adı"
          value={lesson}
          onChange={(e) => setLesson(e.target.value)}
          className="p-3 rounded-lg outline-none"
        />

        <input
          type="text"
          placeholder="Açıklama"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-3 rounded-lg outline-none"
        />

        <input
          type="number"
          placeholder="Süre (saat)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="p-3 rounded-lg outline-none"
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-indigo-600 hover:bg-indigo-700 transition text-white px-6 py-2 rounded-lg"
      >
        ➕ Ekle
      </button>
    </form>
  );
}

export default StudyForm;
