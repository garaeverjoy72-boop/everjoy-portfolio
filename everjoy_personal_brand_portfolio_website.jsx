export default function EverjoyPortfolio() {
  return (
    <div className="min-h-screen bg-[#F5F1EB] text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="px-6 md:px-20 py-16 bg-gradient-to-br from-[#DDE5D3] to-[#F5F1EB]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-widest text-sm text-gray-600 mb-4">
              Tech • Business • Content Creator
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              
              Hello, I'm <span className="text-[#4D6A57]">Everjoy Gara</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              I help businesses and individuals grow through technology, operations, digital solutions, content creation, and smart business strategy. From IT and data analytics to branding and creative storytelling, I'm building a modern career powered by skills, resilience, creativity, and innovation.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#4D6A57] hover:bg-[#3f5848] text-white px-6 py-3 rounded-2xl shadow-lg transition">
                Download CV
              </button>

              <button className="border border-[#4D6A57] text-[#4D6A57] px-6 py-3 rounded-2xl hover:bg-[#4D6A57] hover:text-white transition">
                Contact Me
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-[2rem] bg-[#DDE5D3] shadow-2xl flex items-center justify-center text-center p-8">
              <div>
                <h2 className="text-2xl font-bold text-[#4D6A57] mb-4">
                  Building My Future Publicly
                </h2>
                <p className="text-gray-700">
                  Tech Professional • Entrepreneur • Creator • Problem Solver
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 md:px-20 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-[#4D6A57]">
            About Me
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            I'm an IT & Management graduate with experience in operations,
            business intelligence, cybersecurity, customer service, logistics,
            and digital business development. I’ve managed teams, supported
            business operations, worked in delivery logistics, and built projects
            focused on data analytics, infrastructure monitoring, and web solutions.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Beyond technology, I'm passionate about entrepreneurship, lifestyle growth, content creation, and helping people level up their lives through practical skills, creativity, and real-world experiences.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 md:px-20 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#4D6A57] mb-12">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Technology & IT',
                items: ['Python', 'SQL', 'Cybersecurity', 'Network Monitoring', 'HTML/CSS'],
              },
              {
                title: 'Business & Operations',
                items: ['Operations Management', 'Logistics', 'Team Leadership', 'Customer Service', 'Reporting', 'CRM'],
              },
              {
                title: 'Creative & Branding',
                items: ['Content Creation', 'Social Media', 'Branding', 'Website Design', 'Storytelling', 'Marketing'],
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-[#F5F1EB] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition"
              >
                <h3 className="text-2xl font-semibold mb-6 text-[#4D6A57]">
                  {category.title}
                </h3>

                <ul className="space-y-3 text-gray-700">
                  {category.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 md:px-20 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#4D6A57] mb-12">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'SecureIntel Threat Analytics System',
                description:
                  'Advanced threat detection and analytics project focused on cybersecurity monitoring and business protection.',
              },
              {
                title: 'Hybrid IT Infrastructure & Monitoring',
                description:
                  'Infrastructure monitoring project using Azure, Grafana, Zabbix, and PowerShell for enterprise visibility.',
              },
              {
                title: 'Khobha Clothing  Brand',
                description:
                  'Personal eCommerce and branding project focused on beauty, body care, and digital marketing.',
              
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition"
              >
                <h3 className="text-2xl font-semibold text-[#4D6A57] mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 md:px-20 py-20 bg-[#DDE5D3]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#4D6A57] mb-12">
            Services I Offer
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              'System Analyst',
              'Website Creation',
              'Social Media Branding',
              'Business Intelligence Analyst',
              'IT Support',
              'Data Analytics',
              'Content Strategy',
              'Operations Assistance',
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition"
              >
                <p className="font-semibold text-gray-800">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Creator Section */}
      <section className="px-6 md:px-20 py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#4D6A57] mb-6">
            Building My Journey Online
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            I create relatable content around career growth, lifestyle, travel, motivation, technology, self-improvement, fashion, and entrepreneurship. My goal is to inspire people to keep building their future, even when life feels uncertain.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.tiktok.com/@ms____joy?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-2xl shadow-lg inline-block"
            >
              TikTok
            </a>

            

            <a
              href="https://www.linkedin.com/in/everjoy-gara-463782184/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYK%2BzTih3TaKPCisN6KUhZA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0A66C2] text-white px-6 py-3 rounded-2xl shadow-lg inline-block"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 md:px-20 py-20">
        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-2xl p-10 text-center">
          <h2 className="text-4xl font-bold text-[#4D6A57] mb-6">
            Let’s Work Together
          </h2>

          <p className="text-gray-700 text-lg mb-8">
            Open to remote opportunities, collaborations, freelance projects,
            partnerships, and creative business ideas.
          </p>

          <div className="space-y-3 text-lg text-gray-800">
            <p>Email: garaeverjoy72@gmail.com</p>
            <p>Location: Cape Town, South Africa</p>
          </div>
        </div>
      </section>
    </div>
  )
}
