import { PhotoItem } from '../types';

export const photosData: PhotoItem[] = [
  {
    id: 'photo-suit',
    src: '/photos/portrait-suit.jpg',
    alt: 'Vishwaraj Algude — Professional Formal Portrait',
    tag: 'FORMAL',
    caption: 'Academic & Professional Focus · B.Tech Computer Science & Engineering (Class of 2026)',
    focalPoint: 'center',
    orientation: 'portrait',
    isHero: true,
  },
  {
    id: 'photo-fitness',
    src: '/photos/portrait-fitness.jpg',
    alt: 'Vishwaraj Algude — Physical Fitness & Athletic Discipline',
    tag: 'GYM',
    caption: 'Discipline, Consistency & Progression · The Real-World Foundation for FitVerse & GymPulse',
    focalPoint: 'center',
    orientation: 'portrait',
    isHero: false,
  },
  {
    id: 'photo-outdoor',
    src: '/photos/portrait-outdoor.jpg',
    alt: 'Vishwaraj Algude — Outdoor Balance & Companionship with Dog',
    tag: 'COMPANIONSHIP',
    caption: 'Balance & Companionship · Nature, Open Skies & Loyal Companions',
    focalPoint: 'center',
    orientation: 'portrait',
    isHero: false,
  },
];
