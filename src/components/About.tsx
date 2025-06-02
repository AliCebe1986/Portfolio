
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Globe, Laptop, Server } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Laptop,
      title: 'Web Development',
      description: 'Creating responsive, modern websites using the latest technologies and best practices.',
    },
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Building interactive user interfaces with React and other modern frontend frameworks.',
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Developing robust and scalable server-side applications and APIs.',
    },
    {
      icon: Globe,
      title: 'UI/UX Design',
      description: 'Designing intuitive and visually appealing user interfaces and experiences.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <motion.p
            className="inline-block px-3 py-1 mb-4 text-xs font-medium uppercase tracking-widest text-primary bg-primary/10 rounded-full"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Who I Am & What I Do
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm a passionate full-stack developer with expertise in creating modern digital experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold">My Journey</h3>
            <p className="text-muted-foreground">
              I'm a recent graduate from George Brown College with an Advanced Diploma in Computer Programming
              and Analysis (May 2025). My passion for technology and continuous learning drives me to stay
              current with modern development practices and emerging technologies.
            </p>
            <p className="text-muted-foreground">
              I specialize in full-stack development using technologies like C#, ASP.NET Core, JavaScript,
              React, and React Native. Currently, I'm exploring AI integration in mobile applications,
              working on projects that combine traditional development with cutting-edge AI APIs like
              ChatGPT and OpenAI for innovative user experiences.
            </p>
            <p className="text-muted-foreground">
              My goal is to create digital solutions that are not only technically robust but also
              user-friendly and accessible. I'm constantly expanding my skill set and eager to apply
              my knowledge to real-world challenges in software development.
            </p>
          </motion.div>

          <motion.div
            className="relative h-[400px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-400/20 rounded-lg glass"></div>
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="w-full max-w-md space-y-4">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-1">Ali Cebe</h3>
                  <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="bg-background/50 rounded-lg p-3 glass">
                    <div className="text-3xl font-bold text-primary">5+</div>
                    <div className="text-xs text-muted-foreground mt-1">Projects Completed</div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-3 glass">
                    <div className="text-3xl font-bold text-primary">10+</div>
                    <div className="text-xs text-muted-foreground mt-1">Technologies</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-24" ref={ref}>
          <motion.h3
            className="text-2xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Services I Offer
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="bg-background rounded-lg p-6 hover-lift glass"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-medium mb-2">{service.title}</h4>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
