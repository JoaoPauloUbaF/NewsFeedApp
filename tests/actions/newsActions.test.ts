import {
  fetchNewsStart,
  fetchNewsSuccess,
  fetchNewsError,
} from "../../store/actions/newsActions";

describe("newsActions", () => {
  it("should create an action to start fetching news", () => {
    const expectedAction = {
      type: "news/fetchStart",
    };
    expect(fetchNewsStart()).toEqual(expectedAction);
  });

  it("should create an action for successful news fetch", () => {
    const mockNewsData = [
      {
        title: "Sample News Title",
        url: "https://example.com/news/sample-news-title",
        publishedAt: "2023-08-22T12:00:00Z",
        source: {
          name: "Example News Source",
        },
        content: "Sample news content",
      },
    ];
    const expectedAction = {
      type: "news/fetchSuccess",
      payload: mockNewsData,
    };
    expect(fetchNewsSuccess(mockNewsData)).toEqual(expectedAction);
  });

  it("should create an action for failed news fetch", () => {
    const error = "Failed to fetch news";
    const expectedAction = {
      type: "news/fetchError",
      payload: error,
    };
    expect(fetchNewsError(error)).toEqual(expectedAction);
  });
});
