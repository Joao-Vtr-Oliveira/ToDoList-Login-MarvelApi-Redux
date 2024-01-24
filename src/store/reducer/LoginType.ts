export type LoginType = {
  login: {
    loading: boolean;
    data: {
      sessionToken: string | null;
      user: {name: string}
    } | null;
    error: string | null;
  };
};

export type LoginDataType = {
  sessionToken: string | null;
  user: {name: string}
} | null;