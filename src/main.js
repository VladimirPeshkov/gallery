import './main.scss';
import GalleryList from './modules/galleryList';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.gif';
import audio1 from './audio/1.mp3';
import audio2 from './audio/2.mp3';
import audio3 from './audio/3.mp3';
import video1 from './videos/1.mp4';
import video2 from './videos/2.mp4';



let galleryData = [
    {
        title: 'Image #1',
        type: 'image',
        resource: image1
    },
    {
        title: 'Image #2',
        type: 'image',
        resource: image2
    },
    {
        title: 'Image #3',
        type: 'image',
        resource: image3
    },
    {
        title: 'Image #4',
        type: 'image',
        resource: image4
    },
    {
        title: 'Audio #1',
        type: 'audio',
        resource: audio1
    },
    {
        title: 'Audio #2',
        type: 'audio',
        resource: audio2
    },
    {
        title: 'Audio #3',
        type: 'audio',
        resource: audio3
    },
    {
        title: 'Video #1',
        type: 'video',
        resource: video1
    },
    {
        title: 'Video #2',
        type: 'video',
        resource: video2
    },
]

new GalleryList(galleryData);

