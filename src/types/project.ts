export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  coverImage: string;
  technologies: string[];
  verticalScreenshots?: string[];
  horizontalScreenshots?: string[];
  githubURL?: string;
  projectURL?: string;
  category: 'mobile' | 'web' | 'other';
}
