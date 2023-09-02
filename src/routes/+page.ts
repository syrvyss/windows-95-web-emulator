import { error } from "@sveltejs/kit";
import { Octokit } from "@octokit/core";

export const load = async () => {
  const octokit = new Octokit();

  let fetched = await octokit
    .request("GET /repos/syrvyss/windows-95-web-emulator/commits", {
      owner: "OWNER",
      repo: "REPO",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    })
    .then((e) => e.data)
    .catch(() => "Oops, my code sucks!");

  let commits = "";

  fetched.forEach((e: any) => {
    let author = e.commit.author.name;
    let date = e.commit.author.date;
    let message = e.commit.message.split("\n")[0];

    commits += `author: ${author}\ndate: ${date}\nmessage: ${message}\n\n`;
  });

  return { commitHistory: commits };
};
