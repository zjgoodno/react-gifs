import React, { Component } from 'react';

import SearchBar from './search_bar.jsx'
import Gif from './gif.jsx'
import GifList from './gif_list.jsx'
import giphy from 'giphy-api' 

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gifs: [],
            selectedGifId: "Zk9mW5OmXTz9e"
        }
    }

    search = (query) => {
        giphy('1Y3WAcsdFb7rFwWn0IzXyuvaubdZDTq5').search({
            q: query,
            rating: 'g',
            limit: 10
        }, (err, res) => {
            this.setState({
                gifs: res.data
            })
        });

    }



    render() {
        const gifs = [
            { id: "Zk9mW5OmXTz9e" },
            { id: "xT5LMHxhOfscxPfIfm"}
        ]
        return (
            <div>
                <div className="left-scene">
                    <SearchBar search= {this.search} />
                    <div className="selected-gif">
                        <Gif id = {this.state.selectedGifId}/>
                    </div>
                </div>
                <div className="right-scene">
                    <GifList gifs = {this.state.gifs} className="gif-list"/>
                </div>
            </div>
        )
    }
}

export default App;