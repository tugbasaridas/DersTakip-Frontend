import StudyItem from "./StudyItem";

function StudyList({ studies, onDelete, onToggle, onUpdate }) {
  if (studies.length === 0) {
    return (
      <div className="text-white text-center mt-6 opacity-80">
        Henüz ders eklenmedi 📭
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {studies.map((item) => (
        <StudyItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          onToggle={onToggle}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}

export default StudyList;
