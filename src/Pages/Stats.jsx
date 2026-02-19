import { useEffect, useState } from "react";

function Stats({ studies }) {
  const [stats, setStats] = useState({
    totalHours: 0,
    completedCount: 0,
    todayHours: 0,
    weeklyHours: 0,
  });

  useEffect(() => {
    let total = 0;
    let count = 0;
    let today = 0;
    let weekly = 0;

    const now = new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const startOfWeek = new Date(startOfToday);
    const dayOfWeek = startOfWeek.getDay(); 
    const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; 
    startOfWeek.setDate(startOfWeek.getDate() + diffToMonday);

    studies.forEach((item) => {
      if (item.completed && item.completedAt) {
        const itemDate = new Date(item.completedAt);
        const duration = Number(item.duration) || 0;

        total += duration;
        count++;

        if (itemDate >= startOfToday) today += duration;
        if (itemDate >= startOfWeek) weekly += duration;
      }
    });

    setStats({
      totalHours: total,
      completedCount: count,
      todayHours: today,
      weeklyHours: weekly,
    });

  }, [studies]); 

  return (
    <div className="max-w-4xl mx-auto p-6 text-white space-y-6">
      <div className="flex justify-between items-end border-b border-white/10 pb-4">
        <h2 className="text-3xl font-bold italic tracking-tighter">📊 Çalışma İstatistikleri</h2>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl">
          <h3 className="text-sm font-semibold text-indigo-300 uppercase tracking-widest">Toplam Süre</h3>
          <p className="text-5xl font-black mt-3">{stats.totalHours} <span className="text-xl font-light opacity-60">saat</span></p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl">
          <h3 className="text-sm font-semibold text-green-300 uppercase tracking-widest">Tamamlanan Ders</h3>
          <p className="text-5xl font-black mt-3">{stats.completedCount} <span className="text-xl font-light opacity-60">adet</span></p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl">
          <h3 className="text-sm font-semibold text-pink-300 uppercase tracking-widest">Bugünkü Çalışma</h3>
          <p className="text-5xl font-black mt-3">{stats.todayHours} <span className="text-xl font-light opacity-60">saat</span></p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl">
          <h3 className="text-sm font-semibold text-yellow-300 uppercase tracking-widest">Haftalık Çalışma</h3>
          <p className="text-5xl font-black mt-3">{stats.weeklyHours} <span className="text-xl font-light opacity-60">saat</span></p>
        </div>
      </div>
    </div>
  );
}

export default Stats;