export type CharactersType = {
  attributionText: string;
  data: {
    results: [
      {
        id: number;
        name: string;
        description: string;
        thumbnail: {
          extension: string;
          path: string;
        };
        urls: [
          {
            type: "detail";
            url: string;
          },
          {
            type: "wiki";
            url: string;
          },
          {
            type: "comiclink";
            url: string;
          }
        ];
      }
    ];
  };
};