import React, {Component, MouseEvent, SFC} from "react";

//Stateless component
type Props = {
    onClick(e: MouseEvent<HTMLElement>): void
    color: string
}

const Button: SFC<Props> = ({ onClick: handleClick, children }) => (
    <button onClick={handleClick}>{children}></button>
)


//Stateful component
const initialState = { clicksCount: 0 };

type State = Readonly<typeof initialState>;

class ButtonCounter extends Component<object, State>{
    readonly state: State = initialState;

    render(){
        const { clicksCount } = this.state;
        return (
            <>
                <Button onClick={this.handleIncrement}>Increment</Button>
                <Button onClick={this.handleDecrement}>Decrement</Button>
                You've clicked me {clicksCount} times!
            </>
        )
    }

    private handleIncrement = () => this.setState(incrementClicksCount);
    private handleDecrement = () => this.setState(decrementClicksCount);

}
const incrementClicksCount = (prevState: State) => ({ clicksCount: prevState.clicksCount + 1 });
const decrementClicksCount = (prevState: State) => ({ clicksCount: prevState.clicksCount - 1 });

