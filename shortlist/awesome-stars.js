const awesomeStars = require("./awesome-stars.json");

console.log(
  Object.values(awesomeStars.data)
    .sort(({ stargazerCount: a }, { stargazerCount: b }) => b - a)
    .filter((val, i, arr) => {
      if (i === 0) return true;
      return val.nameWithOwner !== arr[i - 1].nameWithOwner
    })
    .map(
      ({ nameWithOwner, stargazerCount }) =>
        `${stargazerCount.toString().padStart(6, " ")} | ${nameWithOwner}`
    )
    .join("\n")
);
