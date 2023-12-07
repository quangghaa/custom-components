export interface UserItem {
    id: number;
    email: string;
    gender: string;
    name: {
      first: string;
      last: string;
      title: string;
    };
    nat: string;
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
  }