import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="section-padding bg-background">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <motion.p
            className="inline-block px-3 py-1 mb-4 text-xs font-medium uppercase tracking-widest text-primary bg-primary/10 rounded-full"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Resume
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Professional Experience & Education
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            View my qualifications, experience, and educational background
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Contact & Skills */}
          <div className="space-y-8">
            <motion.div
              className="bg-background rounded-lg p-6 shadow-md glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gradient inline-block">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 text-primary" />
                  <span className="text-sm">6 Joseph Salsberg Ln, Toronto ON</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-0.5 text-primary" />
                  <span className="text-sm">(289) 980-8027</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-0.5 text-primary" />
                  <span className="text-sm">alicebe86@gmail.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <Linkedin className="w-5 h-5 mt-0.5 text-primary" />
                  <a href="https://www.linkedin.com/in/ali-cebe" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">
                    linkedin.com/in/ali-cebe
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 text-primary">🌐</div>
                  <a href="https://alicebe1986.github.io/Portfolio/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">
                    alicebe1986.github.io/Portfolio/
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-background rounded-lg p-6 shadow-md glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gradient inline-block">Key Skills</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium mb-2">Languages/Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {['C#', 'ASP.NET Core', 'JavaScript (ES6+)', 'React', 'React Native', 'HTML5', 'CSS3', 'Python', 'Java'].map((skill, i) => (
                      <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Databases & APIs</h4>
                  <div className="flex flex-wrap gap-2">
                    {['MS SQL Server', 'SQL', 'RESTful Services', 'JSON', 'Entity Framework'].map((skill, i) => (
                      <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Tools/Platforms</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Visual Studio', 'Git', 'Docker', 'Azure', 'SCCM', 'Intune', 'Active Directory'].map((skill, i) => (
                      <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Methodologies & Other</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Agile (Scrum)', 'OOP', 'SDLC', 'No-Code/Low-Code', 'MS Office 365'].map((skill, i) => (
                      <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-background rounded-lg p-6 shadow-md glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gradient inline-block">Certifications</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <span className="text-sm">Microsoft Azure Fundamentals</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <span className="text-sm">Microsoft Foundational C#</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Middle and right columns - Experience, Education, etc. */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              className="bg-background rounded-lg p-6 shadow-md glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gradient inline-block">Summary of Qualifications</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <span className="text-sm">Possesses hands-on experience in full-stack application development using HTML, CSS, C#, .NET, JavaScript, and React.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <span className="text-sm">Experienced in coding in Visual Studio IDE/Code and working with Git for version control.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <span className="text-sm">Familiar with no-code/low-code environments, including application builders and workflow customization tools.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <span className="text-sm">Has strong understanding of object-oriented programming (OOP) and database integration with SQL and RESTful APIs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <span className="text-sm">Adept at translating business ideas and requirements into technical solutions, collaborating with team members and stakeholders to identify and reach desired outcomes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <span className="text-sm">Eager to learn and proactively stays up-to-date with new technologies.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-background rounded-lg p-6 shadow-md glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gradient inline-block">Education</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-base font-medium">George Brown College</h4>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">May 2025</span>
                  </div>
                  <p className="text-sm font-medium">Advanced Diploma in Computer Programming and Analysis</p>
                  <p className="text-xs text-muted-foreground mt-1">Toronto, ON</p>
                </div>
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-base font-medium">Anadolu University</h4>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">June 2010</span>
                  </div>
                  <p className="text-sm font-medium">Bachelor's Degree in Computer Education and Instructional Technologies</p>
                  <p className="text-xs text-muted-foreground mt-1">Eskisehir, Turkey</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-background rounded-lg p-6 shadow-md glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gradient inline-block">Work Experience</h3>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-base font-medium">Freelance Mobile App Developer (AI Integration)</h4>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Apr 2025 - Present</span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Empower Equine</p>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                      <span className="text-sm">Translated business owner's vision for AI integration into actionable recommendations, including AI-powered chatbot and photo posture analysis.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                      <span className="text-sm">Developed cross-platform features in a React Native app, integrating real-time chat using ChatGPT API to enable an AI-powered equine coach experience.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                      <span className="text-sm">Built a pose analysis feature using OpenAI API to assess rider posture from images and generate personalized feedback.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                      <span className="text-sm">Implemented frontend and backend logic using JavaScript and RESTful APIs to support AI chat and image-based feedback features.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-base font-medium">IT Intern</h4>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">May 2023 - Dec 2023</span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Environics Analytics – Toronto, ON</p>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                      <span className="text-sm">Supported internal users across hybrid environments, performing desktop, network, and software troubleshooting using GoToAssist & MS Teams.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                      <span className="text-sm">Used no/low-code platforms (e.g. Microsoft Power App, Jira Automation) to develop automated notices for managers to manage workflows and for the IT team's ticket management.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                      <span className="text-sm">Contributed to internal SharePoint and CRM documentation and participated in QA testing feedback loops.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                      <span className="text-sm">Managed application access and user roles via Active Directory; deployed software and updates through SCCM.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                      <span className="text-sm">Developed PowerShell scripts for automating repetitive workstation setup tasks and peripheral installations.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                      <span className="text-sm">Followed Agile (scrum) methodologies and used Azure DevOps Server to track workflows.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-base font-medium">IT Teacher</h4>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">2011 - 2017</span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Ministry of National Education – Turkey</p>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                      <span className="text-sm">Taught middle and high school students computer science fundamentals, including Microsoft Office, programming logic, and algorithms.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                      <span className="text-sm">Delivered hands-on training in web development (HTML, CSS, JavaScript, PHP) and programming (C#, Visual Basic), tailored to students in computer technician programs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                      <span className="text-sm">Instructed students in computer hardware repair and desktop assembly, fostering practical skills alongside analytical thinking.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-background rounded-lg p-6 shadow-md glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gradient inline-block">Volunteer Experience</h3>
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-base font-medium">Free Geek Toronto</h4>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Nov 2024 - Mar 2025</span>
                </div>
                <p className="text-sm font-medium text-muted-foreground mb-2">Toronto, ON</p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                    <span className="text-sm">Diagnosed and repaired donated computers and peripherals to restore functionality.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                    <span className="text-sm">Installed operating systems (Windows/Linux) and performed hardware/software maintenance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                    <span className="text-sm">Assisted in hardware troubleshooting and provided solutions for technical issues.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="bg-background rounded-lg p-6 shadow-md glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gradient inline-block">Relevant Coursework</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  'Web Development Fundamentals',
                  'Mobile Application Development',
                  'Advanced Web Programming',
                  'Data Structures & Algorithms',
                  'Object-Oriented Programming',
                  'DevOps Practices',
                  'Applied Data Science',
                  'Agile Software Development',
                  'Capstone Project: Full Stack Development using ASP.NET Core'
                ].map((course, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                    <span className="text-sm">{course}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="/Portfolio/doc/Ali Cebe_Resume.pdf"
            download="Ali_Cebe_Resume.pdf"
            className="inline-flex items-center gap-2 h-11 rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 hover-lift"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
