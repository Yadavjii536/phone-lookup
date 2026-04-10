export default function App() {
  return (
    <div className="min-h-screen bg-black text-white p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.12),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_40%)]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1 rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur-xl text-cyan-300 text-sm mb-4">
            💀 Premium Number Lookup
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-wider mb-4 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            PHONE LOOKUP
          </h1>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Fast • Secure • Modern number information search with futuristic dark UI.
          </p>
        </div>

        <div className="rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Enter 10 digit number..."
              className="flex-1 bg-black/40 border border-cyan-400/20 rounded-2xl px-5 py-4 outline-none text-lg text-white"
            />

            <button className="px-8 py-4 rounded-2xl font-bold bg-cyan-400/10 border border-cyan-400/40 text-cyan-300 shadow-lg hover:bg-cyan-400/20 transition-all duration-300">
              ⚡ Lookup
            </button>
          </div>

          <div className="rounded-2xl bg-black/30 p-5 border border-cyan-400/10">
            <pre className="text-cyan-200 whitespace-pre-wrap text-sm">{`{
  "Name": "Rahul Kumar",
  "FatherName": "Ramesh Kumar",
  "Circle": "UP East / Jio",
  "Developer": "Alok Yadav"
}`}</pre>
          </div>

          <div className="mt-5 flex items-center justify-between rounded-2xl border border-cyan-400/10 bg-black/30 px-5 py-4">
            <p className="text-cyan-300 font-semibold">👨‍💻 DEVELOPER:- ALOK YADAV</p>
            <p className="text-green-300 font-semibold">💳 CREDIT: 4 / 5</p>
          </div>
        </div>
      </div>
    </div>
  )
}