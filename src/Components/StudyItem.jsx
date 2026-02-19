import { useState } from "react";

function StudyItem({ item, onDelete, onToggle, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [lesson, setLesson] = useState(item.lesson);
  const [description, setDescription] = useState(item.description);
  const [duration, setDuration] = useState(item.duration);

  const handleSave = () => {
    onUpdate(item.id, { lesson, description, duration });
    setIsEditing(false);
  };

  return (
    <div className="bg-white/20 backdrop-blur-lg p-5 rounded-2xl shadow-lg text-white">
      {isEditing ? (
        <div className="space-y-2">
          <input
            value={lesson}
            onChange={(e) => setLesson(e.target.value)}
            className="w-full p-2 rounded text-black"
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 rounded text-black"
          />
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full p-2 rounded text-black"
          />

          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded"
          >
            Kaydet
          </button>
        </div>
      ) : (
        <div className="flex justify-between items-start">
          <div>
            <h3
              className={`text-xl font-semibold ${
                item.completed ? "line-through opacity-60" : ""
              }`}
            >
              {item.lesson}
            </h3>

            <p className="text-sm opacity-80">{item.description}</p>

            <p className="text-sm mt-2">
              ⏳ Süre: {item.duration} saat
            </p>

            <p className="text-xs mt-1 opacity-70">
              📅 Eklendi: {item.createdAt}
            </p>

            {item.completed && (
              <p className="text-xs mt-1 text-green-300">
               ✅ Tamamlandı: {new Date(item.completedAt).toLocaleString("tr-TR")}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => onToggle(item.id)}
              className="bg-green-500 hover:bg-green-600 transition px-3 py-1 rounded text-sm"
            >
              {item.completed ? "Geri Al" : "Tamamla"}
            </button>

{!item.completed && (
  <button
    onClick={() => setIsEditing(true)}
    className="bg-yellow-500 hover:bg-yellow-600 transition px-3 py-1 rounded text-sm"
  >
    Düzenle
  </button>
)}



            <button
              onClick={() => onDelete(item.id)}
              className="bg-red-500 hover:bg-red-600 transition px-3 py-1 rounded text-sm"
            >
              Sil
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudyItem;
