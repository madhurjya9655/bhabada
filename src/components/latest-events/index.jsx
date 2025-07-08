import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import classes from "./latest-events.module.css";

// Photo Gallery Data
const galleryData = [
  {
    id: 1,
    image: "/src/assets/images/1 (1).jpg",
    title: "Healthcare Partnership Excellence",
    category: "Medical Collaboration",
    description: "Strategic healthcare partnerships fostering excellence in medical services and patient care"
  },
  {
    id: 2,
    image: "/src/assets/images/1 (10).jpg", 
    title: "Health City Hospital Launch",
    category: "Hospital Inauguration",
    description: "Grand opening ceremony of Health City Hospital with distinguished medical professionals and dignitaries"
  },
  {
    id: 3,
    image: "/src/assets/images/1 (11).jpg",
    title: "Cancer Care Excellence",
    category: "Oncology Leadership",
    description: "Institute of Cancer Care showcasing advanced oncology facilities and expert medical team"
  },
  {
    id: 4,
    image: "/src/assets/images/1 (12).jpg",
    title: "Medical Leadership Recognition",
    category: "Professional Achievement",
    description: "Recognition ceremony honoring distinguished medical professionals and their contributions to healthcare"
  },
  {
    id: 5,
    image: "/src/assets/images/1 (13).jpg",
    title: "Healthcare Facility Inauguration",
    category: "Medical Infrastructure",
    description: "Ribbon cutting ceremony for new healthcare facility expansion with medical leaders and officials"
  },
  {
    id: 6,
    image: "/src/assets/images/1 (14).jpg",
    title: "Medical Conference & Leadership",
    category: "Healthcare Innovation",
    description: "Medical conference featuring healthcare innovations and leadership discussions at Health City Hospital"
  }
];

const GalleryCard = ({ photo, isActive, onClick }) => (
  <div 
    className={`${classes["gallery-card"]} ${isActive ? classes["card-active"] : ""}`}
    onClick={onClick}
  >
    <div className={classes["image-container"]}>
      <img 
        src={photo.image} 
        alt={photo.title}
        className={classes["gallery-image"]}
      />
      <div className={classes["image-overlay"]}>
        <div className={classes["overlay-content"]}>
          <span className={classes["category-badge"]}>{photo.category}</span>
          <h3 className={classes["photo-title"]}>{photo.title}</h3>
          <p className={classes["photo-description"]}>{photo.description}</p>
        </div>
      </div>
    </div>
  </div>
);

const PhotoGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'slider'
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(galleryData.length / itemsPerSlide);

  const handleNavigation = (direction) => {
    if (direction === 'prev') {
      setCurrentSlide(prev => prev === 0 ? totalSlides - 1 : prev - 1);
    } else {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }
  };

  const getCurrentPhotos = () => {
    if (viewMode === 'grid') return galleryData;
    const start = currentSlide * itemsPerSlide;
    return galleryData.slice(start, start + itemsPerSlide);
  };

  const openLightbox = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className={classes["gallery-section"]}>
      <div className={`${classes["gallery-container"]} container`}>
        {/* Header */}
        <div className={classes["header"]}>
          <div className={classes["content"]}>
            <div className={classes["badge"]}>Professional Gallery</div>
            <h2 className={classes["heading"]}>Medical Excellence in Focus</h2>
            <div className={classes["divider"]}></div>
            <p className={classes["description"]}>
              A visual journey through decades of medical excellence, professional achievements, 
              and commitment to advancing cardiac surgery in India.
            </p>
          </div>

          <div className={classes["controls"]}>
            <div className={classes["view-controls"]}>
              <button 
                onClick={() => setViewMode('grid')}
                className={`${classes["view-btn"]} ${viewMode === 'grid' ? classes["active"] : ""}`}
              >
                <span className={classes["control-icon"]}>⊞</span>
                Grid
              </button>
              <button 
                onClick={() => setViewMode('slider')}
                className={`${classes["view-btn"]} ${viewMode === 'slider' ? classes["active"] : ""}`}
              >
                <span className={classes["control-icon"]}>▶</span>
                Slider
              </button>
            </div>
            
            {viewMode === 'slider' && (
              <div className={classes["navigation"]}>
                <button 
                  onClick={() => handleNavigation('prev')} 
                  className={classes["nav-btn"]}
                  aria-label="Previous photos"
                >
                  <GoArrowLeft />
                </button>
                <button 
                  onClick={() => handleNavigation('next')} 
                  className={classes["nav-btn"]}
                  aria-label="Next photos"
                >
                  <GoArrowRight />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Gallery Grid/Slider */}
        <div className={`${classes["gallery-wrapper"]} ${classes[`view-${viewMode}`]}`}>
          <div className={classes["gallery-grid"]}>
            {getCurrentPhotos().map((photo, index) => (
              <GalleryCard 
                key={photo.id} 
                photo={photo}
                isActive={selectedPhoto?.id === photo.id}
                onClick={() => openLightbox(photo)}
              />
            ))}
          </div>
        </div>

        {/* Navigation Dots for Slider */}
        {viewMode === 'slider' && (
          <div className={classes["dots"]}>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`${classes["dot"]} ${currentSlide === index ? classes["dot-active"] : ""}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Photo Counter */}
        <div className={classes["photo-counter"]}>
          <span className={classes["counter-text"]}>
            {viewMode === 'grid' 
              ? `${galleryData.length} Professional Photos`
              : `${currentSlide + 1} of ${totalSlides} | ${galleryData.length} Total Photos`
            }
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className={classes["lightbox"]} onClick={closeLightbox}>
          <div className={classes["lightbox-content"]} onClick={(e) => e.stopPropagation()}>
            <button className={classes["close-btn"]} onClick={closeLightbox}>
              ✕
            </button>
            <img 
              src={selectedPhoto.image} 
              alt={selectedPhoto.title}
              className={classes["lightbox-image"]}
            />
            <div className={classes["lightbox-info"]}>
              <span className={classes["lightbox-category"]}>{selectedPhoto.category}</span>
              <h3 className={classes["lightbox-title"]}>{selectedPhoto.title}</h3>
              <p className={classes["lightbox-description"]}>{selectedPhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;