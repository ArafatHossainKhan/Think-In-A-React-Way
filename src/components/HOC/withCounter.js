import React from "react";

const withCounter = (OriginalComponent) => {
    class NewComponent extends React.Component{
        state = {
            count: 0,
        }
    
        setCount = () => {
            this.setState((prev) =>  ({count: prev.count + 1}))
        }
        render() {
            const {count} = this.state;
            return <OriginalComponent count={count} setCount={this.setCount}/>
        }

    }
    return  NewComponent
}

export default withCounter