import React, { Component} from 'react';
import '../../styles/UserAccount.css';
import  { str } from '../../firebase/storage' ;
import {storage} from '../../firebase/firebase';
import '../../styles/UserAccount.css';
import userImg from '../../images/userImg.jpg';


let arr= [];
let names = []
let val1 = str.bucket;
let val2 = str.authWrapper.requestMap_.id_;
let vall,i;let count=1;
for (i = 1 ; i <= 15; i++) {
	vall = 'https://firebasestorage.googleapis.com/v0/b/'+ val1 + '/o/songs%2F'+ i + '.mp3?alt=media&uuid=' + val2 ;
	arr.push(vall) 
	names.push(i.toString())
}
class Songs extends Component {
	render () {
		return (
			<div class = "landing_page_style">
			{arr.map((link) =>
				<div class="internal_container">
					<div class='img_Container'>
					<img src={userImg} alt="user image" class="usrImg" /> 
					</div>
					<div class="song_name">
					song : {count}
					{count+=1}
					</div>
					<div class="audio_container">
					<audio ref="audio_tag" src={link} controls/>
					</div>
				</div>
					)}
			<br / >
			</div>
			);
	}
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if (names.find(this.state.value)){
    	console.log('found')
    }
    else {
    	console.log('not found')
    };
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search Here:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" class="btn btn-primary mb-2" value="Submit" />
      </form>
    );
  }
}


const LandingPage = () =>
    <div>
    	<SearchBar />
        <h1>List of Songs Below</h1>
        <Songs / > 
    </div>


console.log(names)

export {
	names,
}

export default LandingPage;
