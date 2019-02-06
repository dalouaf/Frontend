import React, { Component } from 'react';
import PostData from '../api/list.json';
import Post from "./Post"
import '../App.css';
class PostList extends Component {
  constructor(props){
    super(props)
    this.state = {
      post: false,
      code: null
    };

    this.fetchDetails = this.fetchDetails.bind(this)
  }

  fetchDetails(post) {
    this.setState({
      post: true,
      code: post
    });
  }

  render() {
    return (
      <div>
        <table className="responsive-table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Code</th>
            </tr>
          </thead>
          <tbody>
            {PostData.map((postDetail, index) => {
              return (
                <tr
                  key={index}
                  onClick={() => {this.fetchDetails(postDetail.code)}}
                >
                  <td scope="row">{postDetail.name}</td>
                  <td scope="row">{postDetail.code}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {
          this.state.post &&
          <Post code={this.state.code}/>
        }
      </div>
    );
  }
}
export default PostList;