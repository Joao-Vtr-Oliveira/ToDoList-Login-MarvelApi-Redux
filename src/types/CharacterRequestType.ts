export type CharacterRequestType = {
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
        comics: {
          items: [
            {
              resourceURI: string;
              name: string;
            }
          ];
        };
        series: {
          items: [
            {
              resourceURI: string;
              name: string;
            }
          ];
        };
        stories: {
          items: [
            {
              resourceURI: string;
              name: string;
            }
          ];
        };
        events: {
          items: [
            {
              resourceURI: string;
              name: string;
            }
          ];
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
