class Profile {
  async getProfile(username) {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const res2 = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await res.json();
    const data2 = await res2.json();
    return {
      user: data,
      repo: data2,
    };
  }
}
