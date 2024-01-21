import get_movie from "../javascript/get_movie.js";
import { OPTIONS, API_MOVIE_ID_URL } from "../javascript/constants.js";
import "jest";
import expect from "expect";

const mockResult = ["movie1", "movie2"];
global.fetch = jest.fn(() =>
  Promise.resolve({
    text: () => Promise.resolve(JSON.stringify({ results: mockResult })),
  })
);
const testId = "123";
const expectedUrl = `${API_MOVIE_ID_URL}${testId}?info=base_info`;

describe("get_movie", () => {
  it("Should get the  movies correctly", async () => {
    const movies = await get_movie(testId);

    expect(global.fetch).toHaveBeenCalledWith(expectedUrl, OPTIONS);
    expect(movies).toEqual(mockResult);
  });

  it("Should handle errors correctly", async () => {
    global.fetch.mockImplementationOnce(() => Promise.reject("Network error"));

    await expect(get_movie(testId)).rejects.toEqual("Network error");

    expect(global.fetch).toHaveBeenCalledWith(expectedUrl, OPTIONS);
  });
});
