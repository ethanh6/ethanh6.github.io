export interface ExperienceEntry {
  Description: string;
  Name: string;
  DateSlug: string;
  Slug: string;
  Order: number;
}

export const EXPERIENCES = {
  SoftwareEngineer: {
    Name: 'Software Engineer',
    DateSlug: 'May 2022 - Now',
    Description: 'Self-employed software engineer',
    Order: 2,
  },
  CornellUniversity: {
    Name: 'Cornell University',
    DateSlug: 'Aug 2021 - May 2022',
    Description: 'Master of Engineering in Computer Science',
    Order: 1,
  },
  UCSD: {
    Name: 'University of California, San Diego',
    DateSlug: 'Aug 2019 - May 2021',
    Description: 'Bachelor of Science in Computer Science',
    Order: 0,
  },
};
