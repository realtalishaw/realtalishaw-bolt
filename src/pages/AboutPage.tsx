import React from 'react'
import { Button } from '../components/ui/button'
import { Instagram, Linkedin, Twitter } from 'lucide-react'

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About Talisha</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <img 
            src="https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/456519874_8534774303202096_3442040248915603135_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YprmGAkoR1cQ7kNvgGK3rBm&_nc_ht=scontent-atl3-1.xx&_nc_gid=Aa2jae6uKwesLb3-Up2lS_w&oh=00_AYCUlZJB0LdyD4XzVxzr8RSdvNHc9xmPYrWoKN7nhAsJxw&oe=6709CFDD" 
            alt="Talisha White" 
            className="w-full h-auto rounded-lg shadow-lg mb-6"
          />
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon" asChild>
              <a href="https://instagram.com/realtalishaw" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://linkedin.com/in/realtalishaw" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://twitter.com/realtalishaw" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
        
        <div className="space-y-6">
          <p className="text-lg">
            I'm Talisha, a visionary startup founder, innovative fashion designer, and creative powerhouse based in the vibrant city of Atlanta, Georgia. My journey spans over a decade in the pageantry world, where I've cultivated a deep passion for design, aesthetics, and empowering others while fearlessly embracing new challenges.
          </p>
          
          <p className="text-lg">
            In my formative years, I graced runways for prestigious bridal shows and represented Fortune 500 giants like Coca-Cola, Chevrolet, and Anheuser-Busch as a promotional model. Driven by an unwavering love for fashion, I took a bold leap and launched my own line, culminating in a showcase at New York Fashion Week through IMG's First Stage program.
          </p>
          
          <div className="grid grid-cols-2 gap-4 my-6">
            <img 
              src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/414131176_7404397736239764_6442701883987686918_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LFTbZjB-ScAQ7kNvgFoUIPN&_nc_ht=scontent-atl3-2.xx&_nc_gid=AK5jtGcER05gQx537YhJ-Ha&oh=00_AYCh6T8nCXyLiar5LsFT7bHktHtHrCDcHDHE8YIwKK03Hw&oe=6709C336" 
              alt="Talisha White Fashion" 
              className="w-full h-auto rounded-lg shadow-md"
            />
            <img 
              src="https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/290898141_5600617363284486_7419999092689473425_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4sLy7VZKLQoQ7kNvgGdvPBF&_nc_ht=scontent-atl3-1.xx&_nc_gid=AWQxWAccdsdw8AEQe-snIKk&oh=00_AYAvh1bdxWRBjG1N5-lxGkm-IAuPszHTfAHn0ljwXYtFQA&oe=6709D178" 
              alt="Talisha White Runway" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          
          <p className="text-lg">
            My fashion career catapulted me into the spotlight, with features in renowned publications such as Elle, People Magazine, and Paper Mag. I've had the privilege of sharing my story through interviews with CNN, reaching audiences worldwide.
          </p>
          
          <p className="text-lg">
            In a bold pivot, I bid farewell to the fashion world in 2020 to immerse myself in the tech industry. Through sheer determination and self-taught software engineering skills, I achieved a remarkable feat within just one year – building my first machine learning web app, a cutting-edge formalwear visual search engine.
          </p>
          
          <p className="text-lg font-semibold italic">
            "My journey has been a tapestry of triumphs and setbacks, but most importantly, it's been rich with lessons and personal growth. I stand as living proof that the seemingly impossible is within reach, and I'm only just beginning to scratch the surface of my potential."
          </p>
          
          <p className="text-xl font-bold text-center mt-8">
            "Here's to the crazy ones...THINK DIFFERENT." -Steve
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage