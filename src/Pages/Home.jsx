import StudyForm from "../Components/StudyForm";
import StudyList from "../Components/StudyList";
import { createStudy } from "../Interfaces/Study";

function Home({ studies, setStudies }) {

  const handleAdd = (lesson, description, duration) => {
    const newStudy = createStudy(lesson, description, duration);
    setStudies(prev => [newStudy, ...prev]);
  };

  const handleDelete = (id) => {
    setStudies(prev => prev.filter(item => item.id !== id));
  };

  const handleToggle = (id) => {
    setStudies(prev => {
      const updated = prev.map(item =>
        item.id === id
          ? {
              ...item,
              completed: !item.completed,
              completedAt: !item.completed ? new Date().toISOString() : null
            }
          : item
      );
      return [...updated];
    });
  };

  const handleUpdate = (id, updatedData) => {
    setStudies(prev =>
      prev.map(item => (item.id === id ? { ...item, ...updatedData } : item))
    );
  };

  const sortedStudies = [...studies].sort((a, b) => {
    if (a.completed === b.completed) return 0;
    return a.completed ? 1 : -1;
  });

 
  return (
    <div className="max-w-6xl mx-auto p-6"> {}
      <StudyForm onAdd={handleAdd} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* SOL TARAF */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white border-b border-white/20 pb-2">
            🚀 Devam Edenler
          </h2>
          <StudyList
            studies={sortedStudies.filter(item => !item.completed)} 
            onDelete={handleDelete}
            onToggle={handleToggle}
            onUpdate={handleUpdate}
          />
        </div>

        {/* SAĞ TARAF*/}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-green-300 border-b border-green-300/20 pb-2">
            ✅ Tamamlananlar
          </h2>
          <StudyList
            studies={sortedStudies.filter(item => item.completed)} 
            onDelete={handleDelete}
            onToggle={handleToggle}
            onUpdate={handleUpdate}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;