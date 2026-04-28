export default function Team() {
  const team = [
    {
      name: "Veer",
      role: "The Builder",
      description: "Turning ambitious concepts into clean, functional code. Veer is the technical engine that brings our student-led hacker dreams to reality."
    },
    {
      name: "Chinmay",
      role: "The Strategist",
      description: "Connecting the dots between a wild idea and a shipped product. Chinmay maps out our master plans and keeps the lab focused on the end goal."
    },
    {
      name: "Arpit",
      role: "The Idea Generator",
      description: "The creative spark of the group. Arpit is always brainstorming the next big thing, finding unique problems for our student team to solve."
    }
  ];

  return (
    <section className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-4">Meet the Lab</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl font-light">
            Just three school kids combining our unique skills to build awesome things. We are the creative force behind the lab.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-2xl font-semibold text-black mb-1">{member.name}</h3>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-4">{member.role}</p>
              <p className="text-gray-600 font-light leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}