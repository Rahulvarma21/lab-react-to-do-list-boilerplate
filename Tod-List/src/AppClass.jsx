import { Component } from "react";

class AppClass extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      storeArray: [],
    };
  }

render() {
    const handleReadInput = (e) => {
    console.log(e.target.value);

    let settingObject = {
        inputValue: e.target.value,
    };
    this.setState(settingObject);
};
    const handleAddTodo = () => {
        let previousArrayEle = this.state.storeArray;
        let newInputSentence = this.state.inputValue;
        let newArray = [...previousArrayEle, newInputSentence];
        
        let settingObject = {
        storeArray: newArray,
      };
      this.setState(settingObject);
    };
    console.log(this.state.storeArray);
    const updateFN = (index) => {
      let newUpdatedSentence = prompt("Enter a new Value..");

      this.state.storeArray[index] = newUpdatedSentence;

      let updatedArray = this.state.storeArray;

      this.setState({ storeArray: updatedArray });
    };

    const deleteFN = (id) => {
      let callbackFNFIlter = (element, index) => {
        return id != index;
      };

      let newfilteredArray = this.state.storeArray.filter(callbackFNFIlter);

      let settingArray = {
        storeArray: newfilteredArray,
      };

      this.setState(settingArray);
    };

    return (
      <div>
        <input className="inputField"
          type="text"
          placeholder="Enter the Todo..."
          onChange={handleReadInput}
        />
        <button className="btns" onClick={handleAddTodo}>Add Todo</button>

        {this.state.storeArray.map(function (element, index) {
          return (
            <div key={index}>
              <h1>{element}</h1>
              <button
                onClick={() => {
                  updateFN(index);
                }}
              >
                Update
              </button>
              <button
                onClick={() => {
                  deleteFN(index);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AppClass;
