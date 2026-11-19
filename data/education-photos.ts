export type EducationPhoto = { src: string; alt: string };

const photos = (folder: string, descriptions: string[]): EducationPhoto[] =>
  descriptions.map((alt, index) => ({
    src: `/education/${folder}/${String(index + 1).padStart(2, "0")}.webp`,
    alt,
  }));

export const educationPhotos = [
  photos("youcode", [
    "A large group gathered for a YouCode event",
    "YouCode students working at laptops in a classroom",
    "Students seated in a circle during a YouCode session",
    "Participants attending a presentation in a YouCode classroom",
    "An audience watching a presentation at a YouCode event",
    "Harit working on a laptop during a YouCode session",
  ]),
  photos("cultur-ed", [
    "Participants working together around a table of colorful materials",
    "Participants drawing and writing during a classroom workshop",
    "A group collaborating around a table during a creative workshop",
    "Participants working together at tables in a covered outdoor space",
    "Visitors talking together at an art exhibition",
    "A participant speaking to a group during a workshop",
    "A participant working at an outdoor table beside a small model",
    "A group working together outdoors with camera equipment",
    "A participant wearing headphones and working at a computer",
    "Participants assembling a model together at a table",
    "A group discussing ideas around a table",
    "A large group posing together in an auditorium",
    "Visitors viewing artwork in an exhibition space",
    "Participants seated and working in a colorful classroom",
    "Speakers on stage in an auditorium",
    "Participants gathered outdoors beside an exhibition display",
  ]),
];
