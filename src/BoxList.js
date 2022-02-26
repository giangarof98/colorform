import React, {Component} from 'react';
import NewForm from './NewBox.js';
import Box from './Box.js'

class BoxList extends Component{
    constructor(props){
        super(props);
        this.state = {boxes: []}
        this.create = this.create.bind(this)
    }
    remove(id){
        this.setState({
            boxes:this.state.boxes.filter(box => box.id !== id)
        })
    }
    create(newBox){
        this.setState({
            boxes: [...this.state.boxes, newBox]
        })
    }

  render(){
      const boxes = this.state.boxes.map(box => (
          <Box
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            color={box.color}
            remove={() => this.remove(box.id)}/>
      ))
    return (
        <div>
            <h1>Color Maker</h1>
            <NewForm createBox={this.create}/>
            {boxes}
        </div>
    );
  }
}

export default BoxList;
