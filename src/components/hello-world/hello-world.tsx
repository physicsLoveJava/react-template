import React from 'react';
import './hello-world.css';

type Props = {
}

type State = {
    txt?: string
}

export default class HelloWorld extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            txt: 'hello world'
        };
    }
    update(e:any) {
        this.setState({txt: e.target.value})
    }
    render() {
        let style = {color: 'red'};
        let update = this.update.bind(this);
        return (
            <div>
                <h2 style={style}>{this.state.txt}</h2>
                <input type="text" onChange={update}/>
            </div>
        )
    }
}