export const enum Locations {
  HOME = '/',
}

export function toHashPath(input: string): string {
  return '#' + input;
}

export enum ExternalLinks {
  GitHubAvatarSmall = 'https://avatars0.githubusercontent.com/u/32933108?s=60&v=4',
  GitHubAvatarLarge = 'https://avatars0.githubusercontent.com/u/32933108?v=4',
  GitHub = 'https://www.github.com/theMPatel',
  LinkedIn = 'https://www.linkedin.com/in/thempatel',
  Email = 'mailto:contact@thempatel.com',
}
