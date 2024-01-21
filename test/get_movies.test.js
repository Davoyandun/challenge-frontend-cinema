import { get_movies } from "../javascript/get-movies.js";
import { OPTIONS, API_URL } from "../javascript/constants.js";
import "jest";

const mockResult = ["movie1", "movie2"];
global.fetch = jest.fn(() =>
  Promise.resolve({
    text: () => Promise.resolve(JSON.stringify({ results: mockResult })),
  })
);

describe("get_movies", () => {
  it("Should get the  movies correctly", async () => {
    const movies = await get_movies();

    expect(global.fetch).toHaveBeenCalledWith(API_URL, OPTIONS);
    expect(movies).toEqual(mockResult);
  });

  it("Should handle errors correctly", async () => {
    global.fetch.mockImplementationOnce(() => Promise.reject("Network error"));

    await expect(get_movies()).rejects.toEqual("Network error");

    expect(global.fetch).toHaveBeenCalledWith(API_URL, OPTIONS);
  });
});
