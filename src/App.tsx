import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Button } from './components/ui/button'
import { Github, Linkedin, Mail, Phone, Briefcase, GraduationCap, Code, Shield, Terminal, Award, User } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-slate-800 shadow-sm border-b border-gray-200 dark:border-slate-700"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold gradient-text">EGHOSA PRINCEWILL GUOBADIA</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#education" className="text-gray-600 hover:text-blue-600 transition-colors">Education</a>
              <a href="#certifications" className="text-gray-600 hover:text-blue-600 transition-colors">Certifications</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </motion.header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Digital Forensic/Cybersecurity Analyst
            <span className="block text-blue-600 dark:text-blue-400">Cyber Crime Investigator</span>
            <span className="block text-purple-600 dark:text-purple-400">Risk & Compliance Expert</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            10+ years of experience in digital forensics, incident response, and enterprise security investigations with expertise in eDiscovery lifecycle and regulatory compliance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-2" onClick={() => window.open('mailto:princewilleghosa2017@gmail.com', '_blank')}>
              <Mail className="w-5 h-5" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="gap-2" onClick={() => window.open('https://github.com/Princewilleghosa2017', '_blank')}>
              <Github className="w-5 h-5" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="gap-2" onClick={() => window.open('https://www.linkedin.com/in/princewillguobadia', '_blank')}>
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl font-bold text-gray-900 dark:text-white">
                <User className="w-8 h-8 text-blue-600" />
                About Me
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Professional Summary</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Accomplished Cyber Crime Investigator and Program Manager with 10+ years of experience managing eDiscovery lifecycle, 
                    digital transformation, and cloud security initiatives. Proven expertise in financial services and public sector environments.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Areas of Expertise</h3>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <div>• Digital Forensics & Incident Response</div>
                    <div>• Information Security Management</div>
                    <div>• Project Management & Risk Assessment</div>
                    <div>• IT Regulatory Compliance Standards</div>
                    <div>• Computer Forensics & eDiscovery</div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Professional Background</h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <div>• Canadian Citizen</div>
                  <div>• Top Secret Security Clearance (RCMP)</div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Awards & Recognition</h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-600" />
                    <span>Stanbic IBTC Bank - Most Customer-Centric Staff (2012)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-600" />
                    <span>Scotiabank Gold-digger Award for Service Excellence (2019) - Nominated</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl font-bold text-gray-900 dark:text-white">
                <Briefcase className="w-8 h-8 text-blue-600" />
                Professional Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Professional Development & Cybersecurity Training</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2025 - Present</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Global Government Forum / ThinkCloudly Workshops & Webinars - Advanced training in enterprise application support and incident response</li>
                  <li>ThinkCloudly Workshops & Webinars - System configuration, log analysis, and performance diagnostics</li>
                  <li>Magnet Summit / SANS Webinars - Practical experience with X-Ways, Cellebrite, AXIOM, Wireshark, Splunk</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Digital Forensic Specialist</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">RCMP, Fredericton, New Brunswick • 2023-03 - 2024-11</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Conducted forensic acquisition and imaging of digital media using industry-standard methodologies ensuring strict chain of custody</li>
                  <li>Analyzed forensic artifacts including file systems, registry data, user activity, email communications, and system logs</li>
                  <li>Collaborated with investigators, legal teams, and external partners to provide expert forensic analysis and technical guidance</li>
                  <li>Produced detailed forensic reports and evidentiary documentation used in legal proceedings</li>
                  <li>Assisted in execution of search warrants involving digital devices with proper seizure and preservation</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Consultant- HR LMS System Compliance Analyst</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Royal Bank of Canada, Mississauga, Canada • 2022-02 - 2023-03</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Conducted risk analysis during HR compliance audits, identifying violations and introducing stronger safeguards</li>
                  <li>Led migration of HR records from on-premise systems to secure cloud storage with 100% accuracy rate</li>
                  <li>Collaborated with cross-functional HR and legal teams to track and report key compliance metrics</li>
                  <li>Optimized employee onboarding and training processes, reducing learning gaps by 40%</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Human Resources Information System Analyst</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Canada Border Services Agency, Niagara, Canada • 2021-07 - 2021-11</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Evaluated SAP audit trails and provided adequacy advice</li>
                  <li>Documented current processes and procedures for CBSA HR Recruited team</li>
                  <li>Created visually impactful dashboards in Excel and Tableau for data reporting</li>
                  <li>Extracted, interpreted, and analyzed data to identify key metrics and business insights</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Digital Channels Analyst</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Stanbic IBTC Bank, Lagos, Nigeria • 2009-08 - 2017-07</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Investigated security incidents, unauthorized system access, and data breaches</li>
                  <li>Conducted forensic analysis of audit logs, system activity, and enterprise infrastructure</li>
                  <li>Strengthened enterprise security posture by identifying vulnerabilities and implementing improved controls</li>
                  <li>Supported enterprise digital transformation initiatives ensuring secure migration to Finacle</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl font-bold text-gray-900 dark:text-white">
                <Terminal className="w-8 h-8 text-blue-600" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    Incident Response & Security
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Incident Investigations', 'Security Analysis', 'Threat Assessment'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <Code className="w-5 h-5 text-green-600" />
                    Forensic Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Cellebrite', 'EnCase', 'Magnet AXIOM', 'FTK Imager'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-purple-600" />
                    Forensic Techniques
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Forensic Imaging', 'Evidence Acquisition', 'Artifact Analysis', 'Chain of Custody'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <Shield className="w-5 h-5 text-orange-600" />
                    Operating Systems
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Windows', 'Linux', 'macOS'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <Code className="w-5 h-5 text-red-600" />
                    Specialized Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['eDiscovery', 'Malware Analysis', 'Network Forensics', 'Security Event Analysis'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-indigo-600" />
                    Management Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Project Management', 'Risk Assessment', 'Stakeholder Management', 'IT Audit'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl font-bold text-gray-900 dark:text-white">
                <GraduationCap className="w-8 h-8 text-blue-600" />
                Education & Training
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">B.Tech.: Electrical Electronics Technology</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">University of South Africa - Pretoria, South Africa • 2016</span>
                </div>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Cybersecurity Program Completion Certificate</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">St. Francis Xavier University (St. FX) • 2024</span>
                </div>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Database Administrator Course</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Nova Scotia Community College (NSCC), Halifax • 2019</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          id="certifications"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl font-bold text-gray-900 dark:text-white">
                <Award className="w-8 h-8 text-blue-600" />
                Professional Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Cellebrite Certified Operator (CCO) - 2023',
                  'Cellebrite Certified Physical Analyst (CCPA) - 2023',
                  'AX200 Magnet AXIOM Examination certificate - 2024',
                  'Certified Computer Forensic Examiner - Canadian Police College - 2023',
                  'Certified Mobile Devices Acquisition & Analyst (MDAA) - Canadian Police College - 2023',
                  'Internet Evidence Analysis Course (IEAC) - Canadian Police College - 2024',
                  'CC-Certified in CyberSecurity (ISC2) - 2024',
                  'CompTIA Network+ - 2024',
                  'Certified Information Systems Auditor (CISA) - 2018',
                  'Certified Data Privacy Solutions Engineer (CDPSE) - 2018',
                  'ITIL Foundation - 2010',
                  'CompTIA A+ - 2023'
                ].map((cert, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Award className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl font-bold text-gray-900 dark:text-white">
                <Mail className="w-8 h-8 text-blue-600" />
                Let's Connect!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <a href="mailto:princewilleghosa2017@gmail.com" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                      <Mail className="w-5 h-5" />
                      <span>princewilleghosa2017@gmail.com</span>
                    </a>
                    <a href="https://www.linkedin.com/in/princewillguobadia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn Profile</span>
                    </a>
                    <a href="https://github.com/Princewilleghosa2017" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                      <Github className="w-5 h-5" />
                      <span>GitHub Profile</span>
                    </a>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      <strong>Address:</strong>Kleinberg, Vaughan, ON, Canada
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Get In Touch</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    I'm always interested in discussing cybersecurity opportunities, digital forensics projects, 
                    and collaborative initiatives. Feel free to reach out if you'd like to connect!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="gap-2" onClick={() => window.open('mailto:princewilleghosa2017@gmail.com', '_blank')}>
                      <Mail className="w-5 h-5" />
                      Send Email
                    </Button>
                    <Button variant="outline" size="lg" className="gap-2" onClick={() => window.open('https://www.linkedin.com/in/princewillguobadia', '_blank')}>
                      <Linkedin className="w-5 h-5" />
                      Connect on LinkedIn
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 dark:text-gray-300">
            <p>&copy; 2024 EGHOSA PRINCEWILL GUOBADIA. Built with React, TypeScript & Tailwind CSS.</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="https://github.com/Princewilleghosa2017" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/princewillguobadia" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}

export default App
