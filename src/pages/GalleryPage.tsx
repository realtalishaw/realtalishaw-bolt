import React, { useState } from 'react'
import Masonry from 'react-masonry-css'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../components/ui/dialog"
import { Button } from "../components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Photo {
  id: string
  url: string
  alt: string
}

const photos: Photo[] = [
  { id: '1', url: 'https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/456519874_8534774303202096_3442040248915603135_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YprmGAkoR1cQ7kNvgGK3rBm&_nc_ht=scontent-atl3-1.xx&_nc_gid=Aa2jae6uKwesLb3-Up2lS_w&oh=00_AYCUlZJB0LdyD4XzVxzr8RSdvNHc9xmPYrWoKN7nhAsJxw&oe=6709CFDD', alt: 'Talisha White photo 1' },
  { id: '2', url: 'https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/414131176_7404397736239764_6442701883987686918_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LFTbZjB-ScAQ7kNvgFoUIPN&_nc_ht=scontent-atl3-2.xx&_nc_gid=AK5jtGcER05gQx537YhJ-Ha&oh=00_AYCh6T8nCXyLiar5LsFT7bHktHtHrCDcHDHE8YIwKK03Hw&oe=6709C336', alt: 'Talisha White photo 2' },
  { id: '3', url: 'https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/290898141_5600617363284486_7419999092689473425_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4sLy7VZKLQoQ7kNvgGdvPBF&_nc_ht=scontent-atl3-1.xx&_nc_gid=AWQxWAccdsdw8AEQe-snIKk&oh=00_AYAvh1bdxWRBjG1N5-lxGkm-IAuPszHTfAHn0ljwXYtFQA&oe=6709D178', alt: 'Talisha White photo 3' },
  { id: '4', url: 'https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/275178342_5272181339461425_8948718459482346875_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wxzumfQCKPQQ7kNvgED-23a&_nc_ht=scontent-atl3-1.xx&_nc_gid=A6peSopA-x0-j-jYQF-OLy7&oh=00_AYAjSw9Zmzu50wYPAE2VeHz8icFgjMOYxn1JA1FDhWxbYg&oe=6709D3FD', alt: 'Talisha White photo 4' },
  { id: '5', url: 'https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/274222878_5227586080587618_1101813444633026052_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=QL9sa3ZCbsIQ7kNvgHyIdoC&_nc_ht=scontent-atl3-2.xx&_nc_gid=Ajqq8aM9Z0mR57GbMupWks0&oh=00_AYAvYGsw1jzVRVw5kUUCOhzvUX0CGFRGlk7bYT_Niu-6AQ&oe=6709D60D', alt: 'Talisha White photo 5' },
  { id: '6', url: 'https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/190140520_4368092409870327_659586081126572846_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_ohc=1cuGaANhdD4Q7kNvgFsPFnQ&_nc_ht=scontent-atl3-2.xx&_nc_gid=AkgYj1VK7IqmD5Tgdc9vUX5&oh=00_AYBtXpxZcVdGUToYrNCqt0zOFB1PLW8HD881Z_wb5LQitA&oe=672B6D16', alt: 'Talisha White photo 6' },
  { id: '7', url: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-9/122132763_3737720812907493_3466830285366476304_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=zDs7W2SYKtoQ7kNvgEkiQWh&_nc_ht=scontent-atl3-1.xx&_nc_gid=At80z09JI8RvBHMGjIkAXDp&oh=00_AYB3efMoLjc24ltfIHq0_62ySlzWEGYfOaqsW7SpAI_G_w&oe=672B5FB5', alt: 'Talisha White photo 7' },
  { id: '8', url: 'https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/115821847_3457751080904469_4166096724350481932_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=MJ3lMBG5NGgQ7kNvgHjaRC2&_nc_ht=scontent-atl3-2.xx&_nc_gid=AEw8tt1xTHyl5UxP3EnEPIQ&oh=00_AYDG0MQJTJjX4lh9FbFugAEdfgpL2JVzlPHhR0Jz9dtOjQ&oe=672B7AF6', alt: 'Talisha White photo 8' },
]

const GalleryPage: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handlePhotoClick = (photo: Photo, index: number) => {
    setSelectedPhoto(photo)
    setSelectedIndex(index)
  }

  const handlePrevPhoto = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedPhoto(photos[selectedIndex - 1])
      setSelectedIndex(selectedIndex - 1)
    }
  }

  const handleNextPhoto = () => {
    if (selectedIndex !== null && selectedIndex < photos.length - 1) {
      setSelectedPhoto(photos[selectedIndex + 1])
      setSelectedIndex(selectedIndex + 1)
    }
  }

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Gallery</h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto"
        columnClassName="bg-clip-padding px-2"
      >
        {photos.map((photo, index) => (
          <div key={photo.id} className="mb-4">
            <img
              src={photo.url}
              alt={photo.alt}
              className="w-full h-auto rounded-lg cursor-pointer transition-opacity duration-300 hover:opacity-80"
              onClick={() => handlePhotoClick(photo, index)}
              loading="lazy"
            />
          </div>
        ))}
      </Masonry>
      
      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedPhoto?.alt}</DialogTitle>
          </DialogHeader>
          <div className="relative">
            <img
              src={selectedPhoto?.url}
              alt={selectedPhoto?.alt}
              className="w-full h-auto rounded-lg"
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 left-4 transform -translate-y-1/2"
              onClick={handlePrevPhoto}
              disabled={selectedIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 right-4 transform -translate-y-1/2"
              onClick={handleNextPhoto}
              disabled={selectedIndex === photos.length - 1}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default GalleryPage