export interface Topic {
  id: string;
  title: string;
  entries: Entry[];
}

export interface Entry {
  id: string;
  description: string;
  image: string;
  tags: string[];
}
