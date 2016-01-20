import React, { Component } from 'react';
import CommentBox from './components/CommentBox';

const data = [
	{ id: 1, author: "Mike Tyson", text: "This is one comment" },
	{ id: 2, author: "Jennifer Lawrence", text: "This is *another* comment" }
];

class App extends Component {
	render() {
		return (
			<CommentBox data={data}/>
		);
	}
}

export default App;
