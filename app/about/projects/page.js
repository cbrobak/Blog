export default async function Projects() {
  const res = await fetch("http://localhost:3001/repos");
  const repos = await res.json();
  console.log("repos: ", repos);
  return (
    <>
      <div className="p-20">
        <h1 className="mb-8 text-xl">My Projects: </h1>
        <ul className="space-y-5">
          {repos.map((repo, index) => (
            <li key={index} className="border rounded-md border-gray-500 p-5">
              <div className="">{repo.title}</div>
              <div key={index} className="">
                {repo.description}
              </div>
              <div key={index} className="">
                ⭐️ {repo.stargazers_count}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
