import newsReducer from "../../store/reducers/newsReducer";
import {
  fetchNewsStart,
  fetchNewsSuccess,
  fetchNewsError,
} from "../../store/actions/newsActions";

describe("newsReducer", () => {
  const initialState = {
    articles: [],
    loading: false,
    error: null,
  };

  it("should return the initial state", () => {
    expect(newsReducer(undefined, {} as any)).toEqual(initialState);
  });

  it("should handle fetchNewsStart", () => {
    expect(newsReducer(initialState, fetchNewsStart())).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("should handle fetchNewsSuccess", () => {
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
    expect(newsReducer(initialState, fetchNewsSuccess(mockNewsData))).toEqual({
      ...initialState,
      articles: mockNewsData,
    });
  });

  it("should handle fetchNewsError", () => {
    const error = "Failed to fetch news";
    expect(newsReducer(initialState, fetchNewsError(error))).toEqual({
      ...initialState,
      error,
    });
  });
});
