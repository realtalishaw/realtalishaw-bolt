import React from 'react'
import { ExternalLink } from 'lucide-react'

interface MediaItem {
  title: string
  url: string
  type: 'youtube' | 'image' | 'link'
  imageUrl?: string
}

const mediaItems: MediaItem[] = [
  {
    title: "Designer Talisha White helps model with Down syndrome make her fashion week dream to walk the runway",
    url: "https://www.youtube.com/watch?v=mddj8VFF7TI",
    type: "youtube"
  },
  {
    title: "Elle Spain NYFW AW18",
    url: "https://www.elle.com/es/moda/pasarelas-otono-invierno-2017-2018/g794885/talisha-white-nueva-york-794885/",
    type: "image",
    imageUrl: "https://hips.hearstapps.com/hmg-prod/images/talisha-white-gettyimages-920763524-1518485183.jpg"
  },
  {
    title: "Children's Book: The Incredibly Super Awesome Adventures of Auburn",
    url: "https://www.amazon.com/Incredibly-Adventures-Super-Awesome-Auburn/dp/1517584949",
    type: "image",
    imageUrl: "https://m.media-amazon.com/images/I/51jG7nYAVbL._SY445_SX342_.jpg"
  },
  {
    title: "Build in Tulsa Techstars Accelerator Announces Inaugural 2022 Class",
    url: "https://www.techstars.com/newsroom/build-in-tulsa-techstars-accelerator-announces-inaugural-2022-class",
    type: "link"
  },
  {
    title: "Getty Images",
    url: "https://www.gettyimages.com/photos/talisha-white",
    type: "image",
    imageUrl: "https://media.gettyimages.com/id/920763524/photo/talisha-white-runway-february-2018-new-york-fashion-week.jpg?s=612x612&w=gi&k=20&c=Wd1_FfVX8bZHUWDtVDLKCXZGZDkBZGGZdGZZQQZXZQA="
  },
  {
    title: "U.S. Virgin Islands comeback in Miss Earth 2019 under Talisha White's delegation",
    url: "https://www.angelopedia.com/news/Miss-Earth-US-Virgin-Islands-2019-Winner-Talisha-White-Comeback/49511",
    type: "link"
  }
]

const MediaCard: React.FC<{ item: MediaItem }> = ({ item }) => {
  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden">
      {item.type === 'youtube' && (
        <div className="aspect-video">
          <iframe 
            width="100%" 
            height="100%" 
            src={`https://www.youtube.com/embed/${item.url.split('v=')[1]}`} 
            title={item.title}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      )}
      {item.type === 'image' && item.imageUrl && (
        <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
        <a 
          href={item.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:underline inline-flex items-center"
        >
          View Article <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  )
}

const PressMediaPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Press & Media</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mediaItems.map((item, index) => (
          <MediaCard key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

export default PressMediaPage