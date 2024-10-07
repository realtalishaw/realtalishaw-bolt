import React from 'react'
import { ExternalLink, Code, Palette, Crown } from 'lucide-react'
import { Button } from '../components/ui/button'

interface Project {
  title: string
  description: string
  date: string
  icon: React.ReactNode
  color: string
  imageUrl?: string
  link?: string
}

const projects: Project[] = [
  {
    title: "Shopl",
    description: "Shopl was founded June 2022, and participated in the Techstars Build in Tulsa inaugural cohort in August 2022. Shopl let online shoppers shop on multiple websites and checkout in a single cart with a single click. Shopl was compatible with over 500k retail websites, grew to a diverse distributed team of 10 before shutting down in February 2023.",
    date: "June 2022 - February 2023",
    icon: <Code />,
    color: "bg-blue-500",
    // imageUrl: "path_to_shopl_image.jpg",
    // link: "https://shopl.com"
  },
  {
    title: "Fetxh",
    description: "Fetxh was a visual search engine for formal wear dresses. After about a year of learning to code, I created and deployed a fully functional visual search engine. This included collecting the data, cleaning and preparing it, and training a visual search algorithm based off of Spotify's open source recommendation engine ANNOY.",
    date: "2021 - 2022",
    icon: <Palette />,
    color: "bg-pink-500",
    // imageUrl: "path_to_fetxh_image.jpg",
    // link: "https://fetxh.com"
  },
  {
    title: "Find a coFounder Online",
    description: "Co-founder matching website that was built entirely by chatGPT. I didn't write a single line of code for this website. The website is built on a Digital Ocean Droplet with a NodeJS and Express backend and a React/Tailwind frontend. There is complete functioning authentication system and database.",
    date: "2023",
    icon: <Code />,
    color: "bg-green-500",
    // imageUrl: "path_to_cofounder_image.jpg",
    // link: "https://findacofounder.online"
  },
  {
    title: "Crown Con",
    description: "Crown Con took place May 2020, during the height of the pandemic. It was the first and only international pageantry conference and it featured over 40 speakers and over 1,000 attendees from all over the world. This event went from concept to live in less than a month, and we embraced new technology to execute the event.",
    date: "May 2020",
    icon: <Crown />,
    color: "bg-purple-500",
    // imageUrl: "path_to_crowncon_image.jpg",
    // link: "https://crowncon.com"
  }
]

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className={`${project.color} p-6 flex items-center justify-between`}>
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        <div className="text-white">{project.icon}</div>
      </div>
      <div className="p-6">
        <p className="text-sm text-muted-foreground mb-4">{project.date}</p>
        {project.imageUrl && (
          <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
        )}
        <p className="mb-4">{project.description}</p>
        {project.link && (
          <Button variant="outline" asChild className="w-full">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Visit Project <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}

const ProjectsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-2">Projects</h1>
      <p className="text-xl text-muted-foreground mb-8">Explore my journey through tech and entrepreneurship</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage