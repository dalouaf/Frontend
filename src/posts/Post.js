import React, { Component } from "react";
import XX1 from '../api/XX1.json';
import XX2 from '../api/XX2.json';
import XX3 from '../api/XX3.json';

class PostList extends Component {
  constructor(props) {
    super(props);

    switch (this.props.code) {
      case "XX1": {
        this.state = {
          PostData: XX1
        };
        break
      }
      case "XX2": {
        this.state = {
          PostData: XX2
        };
        break
      }
      case "XX3": {
        this.state = {
          PostData: XX3
        };
        break
      }
    }
  }

  componentWillReceiveProps(newProps) {
    switch (newProps.code) {
      case "XX1": {
        this.setState({ PostData: XX1 });
        break
      }
      case "XX2": {
        this.setState({ PostData: XX2 });
        break
      }
      case "XX3": {
        this.setState({ PostData: XX3 });
        break
      }
    }
  }

  render() {
    return (
      <div>
        <table className="responsive-table">
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Label</th>
              <th scope="col">Result</th>
            </tr>
          </thead>
          <tbody>
            {this.state.PostData.map((postDetail, index) => {
              return (
                <tr key={index}>
                  <td scope="row">{postDetail.type}</td>
                  <td scope="row">{postDetail.label}</td>
                  <td scope="row">
                    {Object.keys(postDetail.result).map((res, key) => {
                      return <p>{res + " : " + postDetail.result[res]}</p>;
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default PostList;