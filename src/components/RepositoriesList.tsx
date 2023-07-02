import { useActions } from "../hooks/useActions";
import { useState } from "react";
import { useTypedSelector } from "../hooks/useTypeSelector";
const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
    setTerm("");
  };
  return (
    <div>
      <form onSubmit={onSubmit} style={{ marginBottom: "1rem" }}>
        <input
          value={term}
          onChange={(event) => setTerm(event.target.value)}
          placeholder="Search for package..."
        />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      <table>
        <thead>
          <tr>
            <th>Package Title</th>
            <th>Package Description</th>
            <th>Package URL</th>
          </tr>
        </thead>
        {!error &&
          !loading &&
          data.map(
            (
              obj: {
                packageName: string;
                npmlink: string;
                description: string;
              },
              index
            ) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>{obj.packageName}</td>
                    <td>{obj.description}</td>
                    <td>
                      <a
                        href={obj.npmlink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {obj.npmlink}{" "}
                      </a>
                    </td>
                  </tr>
                </tbody>
              );
            }
          )}
      </table>
    </div>
  );
};

export default RepositoriesList;
