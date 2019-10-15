export const fetchFeeds = () => {
  const data = {
    id: 1,
    jsonrpc: "2.0",
    method: "call",
    params: ["database_api", "get_discussions_by_created", [{ tag: "kr", limit: 20 }]],
  }
  return fetch("https://api.steemit.com", {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => res.result)
}
// 팔로잉 친구 가져오기
export const fetchFollowing = () => {
  const data = {
    id: 2,
    jsonrpc: "2.0",
    method: "call",
    params: ["follow_api", "get_following", ["anpigon", "", "blog", 10]],
  }
  return fetch("https://api.steemit.com", {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => res.result.map(({ following }) => following))
}
