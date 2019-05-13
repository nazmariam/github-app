import React from "react";
import Statistics from "./Statistics";
import "./styles.css";

let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;

function fetchAccount(repoName) {
  let url = `https://api.github.com/users/${repoName}`;
  return fetch(url).then(r => r.json());
}

function fetchRepos(repoName) {
  let url = `https://api.github.com/users/${repoName}/repos?sort=updated&direction=desc`;

  return fetch(url).then(r => r.json());
}

export default class App extends React.Component {
  state = {
    repoName: "",
    repos: [],
    error: null,
    info: []
  };
  renderList(props) {
    return (
      <ul>
        {props.map(item => (
          <li key={item.id}>
            {item.name}{" "}
            <strong>({item.language || "mixed"})</strong>{" "}
            {item.size} KB
          </li>
        ))}
      </ul>
    );
  }

  getAllInfo(query) {
    return Promise.all
    ([fetchRepos(query),
      fetchAccount(query)]).then((response)=>{
      this.setState({repos:response[0], info:response[1]})
    }).catch(error => this.setState({ error }));
  }


  showInfo() {
    let { info } = this.state;
    return (
      <div>
        {info.name ? <img src={info.avatar_url} alt={info.login} /> : ""}
        <span>{info.name}</span>
      </div>
    );
  }

  render() {
    const { repoName, repos, error } = this.state;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Statistics
          repos={repos}
          width={WIDTH}
          height={HEIGHT}
          repoName={repoName}
        />
        <div className={"info"} style={{ position: "absolute" }}>
          <form
            style={{
              padding: "16px 40px"
            }}
            onSubmit={e => {
              e.preventDefault();
              this.getAllInfo(repoName)
            }}
          >
            <input
              value={repoName}
              placeholder={"Enter github name"}
              onChange={e => this.setState({ repoName: e.target.value })}
            />
            <button>Submit</button>
          </form>
          {error && <pre style={{ color: "red" }}>{error.message}</pre>}
          {(repos.length)?this.renderList(repos):''}
        </div>
        <div className={"infoAcc"}>{this.showInfo()}</div>
      </div>
    );
  }
};
