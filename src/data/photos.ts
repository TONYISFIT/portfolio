import { PhotoItem } from '../types';

export const photosData: PhotoItem[] = [
  {
    id: 'photo-suit',
    src: '/photos/portrait-suit.jpg',
    alt: 'Vishwaraj Algude — Professional Formal Portrait',
    tag: 'CORPORATE',
    caption: 'Formal & Professional · B.Tech Computer Science & Engineering (Class of 2026)',
    focalPoint: 'center',
    orientation: 'portrait',
    isHero: true,
  },
  {
    id: 'photo-fitness',
    src: '/photos/portrait-fitness.jpg',
    alt: 'Vishwaraj Algude — Physical Fitness & Athletic Discipline',
    tag: 'FITNESS',
    caption: 'Gym, Workout & Health · Discipline and consistency off the screen',
    focalPoint: 'center',
    orientation: 'portrait',
    isHero: false,
  },
  {
    id: 'photo-outdoor',
    src: '/photos/portrait-outdoor.jpg',
    alt: 'Vishwaraj Algude — Outdoor Balance & Companionship with Dog',
    tag: 'CREATOR',
    caption: 'Photography, Content Creation & Videography · Capturing moments and stories',
    focalPoint: 'center',
    orientation: 'portrait',
    isHero: false,
  },
];
